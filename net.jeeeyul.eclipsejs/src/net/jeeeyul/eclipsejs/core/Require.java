package net.jeeeyul.eclipsejs.core;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;

/**
 * provides <code>require()</code> functionality to eclipse.js scripts. This
 * object will be introduced through <code>libraries/both/bootstrap.js</code>
 * 
 * @author Jeeeyul
 * 
 * @since 0.1
 *
 */
public class Require {
	private static Map<Thread, Map<IFile, Object>> moduleMap = new HashMap<Thread, Map<IFile, Object>>();

	public static final void unloadModulesForAllThread() {
		moduleMap.clear();
		moduleMap = new HashMap<Thread, Map<IFile, Object>>();
	}

	private IPath workingDir;
	private Context context;

	private ModuleWrapper moduleWrapper = new ModuleWrapper();

	/**
	 * Creates {@link Require} Object.
	 * 
	 * @param workingDir
	 *            path to use as offset path.
	 */
	public Require(IPath workingDir) {
		this.workingDir = workingDir;
		this.context = EJSContextFactory.getSharedContext();
	}

	private Map<IFile, Object> getModuleMap() {
		Map<IFile, Object> map = moduleMap.get(Thread.currentThread());
		if (map == null) {
			map = new HashMap<IFile, Object>();
			moduleMap.put(Thread.currentThread(), map);

		}
		return map;
	}

	public String getWorkingDir() {
		return workingDir.toPortableString();
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

	/**
	 * Inject a module with given module name. What if module is not loaded (for
	 * current thread), it will be loaded and returned. Otherwise it will return
	 * cached one for current thread.
	 * 
	 * @param moduleNameExpression
	 *            The module name or relative path to inject. What if expression
	 *            is plain name, it will look up in <code>modules</code> folder
	 *            in runtime project. What if expression starts with
	 *            <code>./</code> it will be treated as relative path to current
	 *            working directory. What if expression indicates a folder,
	 *            <code>index.js</code> in the folder will be injected.
	 * @return injected object.
	 * @throws IOException
	 * @throws CoreException
	 */
	public Object require(String moduleNameExpression) throws IOException,
			CoreException {
		ModuleDescriptor descriptor = ModuleDescriptor.resolve(workingDir,
				moduleNameExpression);

		Map<IFile, Object> map = getModuleMap();
		Object cached = map.get(descriptor.getModuleFile());
		if (cached == null) {
			ScriptableObject scope = EJSScopeFactory.getInstance().create(
					descriptor.getModuleDirPath());
			moduleWrapper.before(context, scope);

			IFile file = descriptor.getModuleFile();
			moduleWrapper.evaluate(context, scope, file);

			cached = moduleWrapper.after(context, scope);
			map.put(descriptor.getModuleFile(), cached);
		}
		return cached;
	}

	public void unload(String modulePath, boolean allThread) {
		ModuleDescriptor location = ModuleDescriptor.resolve(workingDir,
				modulePath);

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
}
