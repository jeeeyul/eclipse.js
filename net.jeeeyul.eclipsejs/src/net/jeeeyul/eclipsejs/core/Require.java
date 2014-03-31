package net.jeeeyul.eclipsejs.core;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.api.IO;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;

public class Require {
	private static Map<Thread, Map<String, Object>> moduleMap = new HashMap<Thread, Map<String, Object>>();
	private IPath path;
	private Context context;
	private ModuleWrapper moduleWrapper = new ModuleWrapper();

	public Require(IPath path, Context context) {
		this.path = path;
		this.context = context;
	}

	public Object require(String modulePath) throws IOException, CoreException {
		String qualifiedPath = resolveQualifiedName(modulePath);
		Map<String, Object> map = getModuleMap();
		Object cached = map.get(qualifiedPath);
		if (cached == null) {
			ScriptableObject scope = ScopeFactory.getInstance().create(
					new Path(qualifiedPath));
			moduleWrapper.before(context, scope);

			IFile file = ResourcesPlugin.getWorkspace().getRoot()
					.getFile(new Path(qualifiedPath));
			String moduleScript = IO.getInstance().readInputStream(
					file.getContents(), file.getCharset());
			context.evaluateString(scope, moduleScript, file.getFullPath()
					.toPortableString(), 1, null);

			cached = moduleWrapper.after(context, scope);
			map.put(qualifiedPath, cached);
		}
		return cached;
	}

	private Map<String, Object> getModuleMap() {
		Map<String, Object> map = moduleMap.get(Thread.currentThread());
		if (map == null) {
			map = new HashMap<String, Object>();
			moduleMap.put(Thread.currentThread(), map);

		}
		return map;
	}

	private String resolveQualifiedName(String modulePath) {
		IPath offset = getOffsetPath();

		if (modulePath.startsWith(".")) {
			offset = offset.append(modulePath);
		} else if (modulePath.startsWith("/")) {
			offset = new Path(modulePath);
		}

		else {
			offset = new Path(EclipseJSCore.PROJECT_NAME + "/modules")
					.append(modulePath);
		}

		if (!isFile(offset)) {
			if (isFile(offset.addFileExtension("js"))) {
				offset = offset.addFileExtension("js");
			} else if (isDirectory(offset)) {
				offset = offset.append("index.js");
			}
		}

		return offset.toPortableString();
	}

	public IPath getOffsetPath() {
		IPath offset = path;
		IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
		IFolder folder = root.getFolder(path);
		if (folder.exists() == false) {
			offset = path.removeLastSegments(1);
		}
		return offset;
	}

	private boolean isDirectory(IPath path) {
		IFolder folder = ResourcesPlugin.getWorkspace().getRoot()
				.getFolder(path);
		return folder.exists();
	}

	private boolean isFile(IPath path) {
		IFile file = ResourcesPlugin.getWorkspace().getRoot().getFile(path);
		return file.exists();
	}

	public static final void unloadModules() {
		moduleMap.clear();
		moduleMap = new HashMap<Thread, Map<String, Object>>();
	}
	
	public void unload(String modulePath){
		String qualifiedPath = resolveQualifiedName(modulePath);
		getModuleMap().remove(qualifiedPath);
	}
	
	public void unloadAll(){
		getModuleMap().clear();
	}

}
