package net.jeeeyul.eclipsejs.core

import net.jeeeyul.eclipsejs.EclipseJSCore
import org.eclipse.core.resources.IContainer
import org.eclipse.core.resources.IFile
import org.eclipse.core.resources.ResourcesPlugin
import org.eclipse.core.runtime.IPath
import org.eclipse.core.runtime.Path

/**
 * This class provides light-weight informations for module that can be required.
 *
 * @since 0.1
 */
class ModuleDescriptor {
	IFile fModuleFile
	ModuleMetaData fMetaData

	/**
	 * Creates a Module Descriptor Object.
	 * 
	 * @param file module script file.
	 */
	new(IFile file) {
		if (file == null || !file.exists) {
			throw new IllegalArgumentException
		}
		this.fModuleFile = file
	}

	/**
	 * @return module script file.
	 */
	def IFile getModuleFile() {
		return fModuleFile
	}

	/**
	 * @return qualified name of module.
	 */
	def String getQualifiedName() {
		if (moduleFile.name.equals("index.js")) {
			return moduleFile.parent.fullPath.toPortableString
		} else {
			return moduleFile.fullPath.removeFileExtension.toPortableString
		}
	}

	/**
	 * Gets a meta data of module. Meta data is stored as <code>${moduleName}.json</code> or <code>index.json</code> what if the module is structured as a folder.
	 * @return The meta data of module.
	 */
	def ModuleMetaData getMetaData() {
		if (fMetaData == null) {
			fMetaData = new ModuleMetaData(this)
		}

		return fMetaData
	}

	/**
	 * @return name of module. It's not human readable name.
	 */
	def String getModuleName() {
		if (moduleFile.name.equals("index.js")) {
			return moduleFile.parent.name
		} else {
			return moduleFile.fullPath.removeFileExtension.lastSegment
		}
	}

	/**
	 * @returns Human readable name of module. It returns <code>name</code> value of meta data.
	 * What if there is no meta data json file, It will returns module name.
	 */
	def String getHumanReadableName() {
		metaData.get("name") as String
	}

	/**
	 * @return path for container of module.
	 */
	def IPath getModuleDirPath() {
		return moduleFile.parent.fullPath
	}

	/**
	 * @param relPath relative resource path for module 
	 * @return resource file for given path.
	 */
	def IFile getResource(String relPath) {
		return moduleDir.getFile(new Path(relPath))
	}

	/**
	 * @return meta data file for module. client should check existence.
	 */
	def IFile getMetaFile() {
		if (moduleFile.name.equals("index.js")) {
			return moduleFile.parent.getFile(new Path("index.json"));
		} else {
			var path = moduleFile.fullPath.removeFileExtension.addFileExtension("json")
			return ResourcesPlugin.workspace.root.getFile(path)
		}
	}

	/**
	 * @return A container that contains module script file.
	 */
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

	/**
	 * Creates an Module Descriptor.
	 */
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
