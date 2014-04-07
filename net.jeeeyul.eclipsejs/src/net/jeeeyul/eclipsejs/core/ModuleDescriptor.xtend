package net.jeeeyul.eclipsejs.core

import net.jeeeyul.eclipsejs.EclipseJSCore
import org.eclipse.core.resources.IContainer
import org.eclipse.core.resources.IFile
import org.eclipse.core.resources.ResourcesPlugin
import org.eclipse.core.runtime.IPath
import org.eclipse.core.runtime.Path

class ModuleDescriptor {
	IFile fModuleFile
	ModuleMetaData fMetaData

	new(IFile file) {
		if (file == null || !file.exists) {
			throw new IllegalArgumentException
		}
		this.fModuleFile = file
	}

	def IFile getModuleFile() {
		return fModuleFile
	}

	def String getQualifiedName() {
		if (moduleFile.name.equals("index.js")) {
			return moduleFile.parent.fullPath.toPortableString
		} else {
			return moduleFile.fullPath.removeFileExtension.toPortableString
		}
	}

	def ModuleMetaData getMetaData() {
		if (fMetaData == null) {
			fMetaData = new ModuleMetaData(this)
		}

		return fMetaData
	}

	def String getModuleName() {
		if (moduleFile.name.equals("index.js")) {
			return moduleFile.parent.name
		} else {
			return moduleFile.fullPath.removeFileExtension.lastSegment
		}
	}

	def String getHumanReadableName() {
		metaData.get("name") as String
	}

	def IPath getModuleDirPath() {
		return moduleFile.parent.fullPath
	}

	def IFile getResource(String relPath) {
		return moduleDir.getFile(new Path(relPath))
	}

	def IFile getMetaFile() {
		if (moduleFile.name.equals("index.js")) {
			return moduleFile.parent.getFile(new Path("index.json"));
		} else {
			var path = moduleFile.fullPath.removeFileExtension.addFileExtension("json")
			return ResourcesPlugin.workspace.root.getFile(path)
		}
	}

	def IContainer getModuleDir() {
		var path = moduleDirPath
		var IContainer result;
		if (path.segmentCount == 1) {
			result = ResourcesPlugin.workspace.root.getProject(path.lastSegment);
		} else if (path.segmentCount > 1) {
			result = ResourcesPlugin.workspace.root.getFolder(moduleDirPath)
		} else {
			throw new IllegalStateException()
		}
		return result
	}

	static def resolve(String workingDir, String moduleName) {
		return resolve(new Path(workingDir), moduleName);
	}

	static def resolve(IPath workingDir, String moduleName) {
		var fullPath = workingDir;

		/*
		 * Relative Module 
		 */
		if (moduleName.startsWith(".")) {
			fullPath = fullPath.append(moduleName);
		}
		/*
		 * Absolute Path Module
		 */
		else if (moduleName.startsWith("/")) {
			fullPath = new Path(moduleName);
		}
		/*
		 * Global Module
		 */
		else {
			fullPath = new Path(EclipseJSCore.PROJECT_NAME + "/modules").append(moduleName);
		}

		if (!isFile(fullPath)) {
			if (isFile(fullPath.addFileExtension("js"))) {
				fullPath = fullPath.addFileExtension("js");
			} else if (isDirectory(fullPath)) {
				fullPath = fullPath.append("index.js");
			} else {
				throw new IllegalArgumentException
			}
		}

		var file = ResourcesPlugin.workspace.root.getFile(fullPath)
		return new ModuleDescriptor(file)
	}

	private static def boolean isFile(IPath path) {
		var file = ResourcesPlugin.getWorkspace().getRoot().getFile(path);
		return file.exists();
	}

	private static def boolean isDirectory(IPath path) {
		var file = ResourcesPlugin.getWorkspace().getRoot().getFolder(path);
		return file.exists();
	}
}
