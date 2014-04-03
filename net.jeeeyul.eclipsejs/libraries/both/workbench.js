/**
 * @constructor
 */
ejs.Workbench = function(handle) {
	this.handle = handle;
}

/**
 * must be called in UI Thread.
 * 
 * @returns {org.eclipse.swt.widgets.Shell}
 */
ejs.Workbench.prototype.getActiveShell = function() {
	var window = this.handle.getActiveWorkbenchWindow();
	if (window == null) {
		window = this.handle.getWorkbenchWindows()[0];
	}
	if (window) {
		return window.getShell();
	} else {
		return null;
	}
};

/**
 * @returns {WorkbenchWindow}
 */
ejs.Workbench.prototype.getActiveWorkbenchWindow = function() {
	var window = this.handle.getActiveWorkbenchWindow();
	if (window == null) {
		window = this.handle.getWorkbenchWindows()[0];
	}
	if (window) {
		return new ejs.WorkbenchWindow(window);
	} else {
		return null;
	}
};

/**
 * @returns {WorkbenchPage}
 */
ejs.Workbench.prototype.getActivePage = function() {
	var window = this.handle.getActiveWorkbenchWindow();
	if (window == null) {
		window = this.handle.getWorkbenchWindows()[0];
	}
	if (window) {
		return new ejs.WorkbenchPage(window.getActivePage());
	} else {
		return null;
	}
};

var workbench = new ejs.Workbench(org.eclipse.ui.PlatformUI.getWorkbench());

/**
 * @constructor
 */
ejs.WorkbenchWindow = function(handle) {
	this.handle = handle;
	return this;
}

ejs.WorkbenchWindow.prototype.getSelectionService = function() {
	return new ejs.SelectionService(this.handle.getService(org.eclipse.ui.ISelectionService));
};

/**
 * @constructor
 */
ejs.WorkbenchPage = function(handle) {
	this.handle = handle;
};

/**
 * @param {String}
 *            viewId
 */
ejs.WorkbenchPage.prototype.showView = function(viewId) {
	this.handle.showView(viewId);
};

ejs.WorkbenchPage.prototype.showEJSView = function(viewId) {
	this.handle.showView("net.jeeeyul.eclipsejs.common.view", viewId, 1);
};