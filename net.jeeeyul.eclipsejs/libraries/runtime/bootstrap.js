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

ejs.internal.wrapWorkbenchModel = function(handle) {
	if (n instanceof org.eclipse.ui.IWorkbenchPage) {
		return new ejs.WorkbenchPage(handle);
	}

	else if (n instanceof org.eclipse.ui.IWorkbenchWindow) {
		return new ejs.WorkbenchWindow(handle);
	}

	throw new Error("unsupported workbench model");
};

/**
 * @type String
 */
ejs.pluginId = String(net.jeeeyul.eclipsejs.EclipseJSCore.PLUGIN_ID);
