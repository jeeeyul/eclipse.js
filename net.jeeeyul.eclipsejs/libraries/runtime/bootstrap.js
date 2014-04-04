ejs.internal = {};

/**
 * 
 * @param resource
 * @returns {ejs.Resource}
 */
ejs.internal.wrapResource = function(resource) {
	if (resource instanceof org.eclipse.core.resources.IFile) {
		return new ejs.File(resource.getFullPath());
	}

	else if (resource instanceof org.eclipse.core.resources.IFolder) {
		return new ejs.Folder(resource.getFullPath());
	}

	else if (resource instanceof org.eclipse.core.resources.IProject) {
		return new ejs.Project(resource.getFullPath());
	}
};