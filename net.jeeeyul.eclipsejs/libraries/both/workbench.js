var __WORKBENCH__ = org.eclipse.ui.PlatformUI.getWorkbench();

function Workbench() {

}

/**
 * must be called in UI Thread.
 * 
 * @returns {org.eclipse.swt.widgets.Shell}
 */
Workbench.prototype.getActiveShell = function() {
	var window = __WORKBENCH__.getActiveWorkbenchWindow();
	if (window == null) {
		window = __WORKBENCH__.getWorkbenchWindows()[0];
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
Workbench.prototype.getActiveWorkbenchWindow = function() {
	var window = __WORKBENCH__.getActiveWorkbenchWindow();
	if (window == null) {
		window = __WORKBENCH__.getWorkbenchWindows()[0];
	}
	if (window) {
		return new WorkbenchWindow(window);
	} else {
		return null;
	}
};

/**
 * @returns {WorkbenchPage}
 */
Workbench.prototype.getActivePage = function() {
	var window = __WORKBENCH__.getActiveWorkbenchWindow();
	if (window == null) {
		window = __WORKBENCH__.getWorkbenchWindows()[0];
	}
	if (window) {
		return new WorkbenchPage(window.getActivePage());
	} else {
		return null;
	}
};

var workbench = new Workbench();

function WorkbenchWindow(handle) {
	this.handle = handle;
	return this;
}

WorkbenchWindow.prototype.getSelectionService = function() {
	return new SelectionService(this.handle.getService(org.eclipse.ui.ISelectionService));
};

function WorkbenchPage(handle) {
	this.handle = handle;
};

/**
 * @param {String}
 *            viewId
 */
WorkbenchPage.prototype.showView = function(viewId) {
	this.handle.showView(viewId);
};

WorkbenchPage.prototype.showEJSView = function(viewId) {
	this.handle.showView("net.jeeeyul.eclipsejs.common.view", viewId, 1);
};