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

/**
 * @param handle
 * @returns {ejs.WorkbenchSite}
 */
ejs.internal.wrapWorkbenchSite = function(handle) {
	if (handle instanceof org.eclipse.ui.IViewSite) {
		return new ejs.ViewSite(handle);
	}

	throw new Error("unsupported workbench model");
};

/**
 * 
 * @param handle
 * @returns {ejs.WorkbenchPart}
 */
ejs.internal.wrapWorkbenchPart = function(handle) {
	if (handle instanceof net.jeeeyul.eclipsejs.extensions.view.CommonView) {
		return new ejs.EJSViewPart(handle);
	}

	else if (handle instanceof org.eclipse.ui.IViewPart) {
		return new ejs.ViewPart(handle);
	}

	else if (handle instanceof org.eclipse.ui.IWorkbenchPart) {
		return new ejs.WorkbenchPart(handle);
	}

	throw new Error("unsupported workbench part");
};

/**
 * @type String
 */
ejs.pluginId = String(net.jeeeyul.eclipsejs.EclipseJSCore.PLUGIN_ID);
