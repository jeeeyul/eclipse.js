package net.jeeeyul.eclipsejs.core;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import net.jeeeyul.eclipsejs.script.api.IO;
import net.jeeeyul.eclipsejs.script.context.EJSContextFactory;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;

public class Require {
	private static Map<Thread, Map<IFile, Object>> moduleMap = new HashMap<Thread, Map<IFile, Object>>();
	private IPath workingDir;
	private Context context;
	private ModuleWrapper moduleWrapper = new ModuleWrapper();

	public Require(IPath workingDir) {
		this.workingDir = workingDir;
		this.context = EJSContextFactory.getSharedContext();
	}

	public Object require(String modulePath) throws IOException, CoreException {
		ModuleDescriptor descriptor = ModuleDescriptor.resolve(
				workingDir, modulePath);

		Map<IFile, Object> map = getModuleMap();
		Object cached = map.get(descriptor.getModuleFile());
		if (cached == null) {
			ScriptableObject scope = ScopeFactory.getInstance().create(
					descriptor.getModuleDirPath());
			moduleWrapper.before(context, scope);

			IFile file = descriptor.getModuleFile();
			String moduleScript = IO.getInstance().readInputStream(
					file.getContents(), file.getCharset());
			context.evaluateString(scope, moduleScript, file.getFullPath()
					.toPortableString(), 1, null);

			cached = moduleWrapper.after(context, scope);
			map.put(descriptor.getModuleFile(), cached);
		}
		return cached;
	}

	/**
	 * @return module maps for current {@link Thread}.
	 */
	private Map<IFile, Object> getModuleMap() {
		Map<IFile, Object> map = moduleMap.get(Thread.currentThread());
		if (map == null) {
			map = new HashMap<IFile, Object>();
			moduleMap.put(Thread.currentThread(), map);

		}
		return map;
	}

	public static final void unloadModulesForAllThread() {
		moduleMap.clear();
		moduleMap = new HashMap<Thread, Map<IFile, Object>>();
	}

	public void unload(String modulePath, boolean allThread) {
		ModuleDescriptor location = ModuleDescriptor.resolve(
				workingDir, modulePath);

		if (allThread) {
			for (Map<IFile, Object> each : moduleMap.values()) {
				each.remove(location.getModuleFile());
			}
		} else {
			getModuleMap().remove(location.getModuleFile());
		}
	}

	public void unloadAll(boolean allThread) {
		if (allThread) {
			moduleMap.clear();
		} else {
			getModuleMap().clear();
		}
	}

	public String[] lookup() {
		ArrayList<String> result = new ArrayList<String>();
		try {
			IFolder folder = ResourcesPlugin.getWorkspace().getRoot()
					.getFolder(workingDir);
			IResource[] members = folder.members();
			for (IResource each : members) {
				if (each.getType() == IResource.FOLDER) {
					IFolder eachFolder = (IFolder) each;
					if (eachFolder.getFile("index.js").exists()) {
						result.add(each.getName());
					}
				} else if (each.getType() == IResource.FILE
						&& each.getFileExtension().equals("js")) {
					result.add(each.getFullPath().removeFileExtension()
							.lastSegment());
				}
			}
		} catch (CoreException e) {
			e.printStackTrace();
		}

		return result.toArray(new String[result.size()]);
	}
	
	public String getWorkingDir(){
		return workingDir.toPortableString();
	}
}
