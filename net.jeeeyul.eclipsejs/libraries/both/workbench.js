/**
 * @constructor
 */
ejs.ServiceLocator = function(handle) {
	this.handle = handle;
};

ejs.ServiceLocator.prototype.getNativeServiceHandle = function(serviceType) {
	return this.handle.getService(serviceType);
};

/**
 * @constructor
 * @base ejs.ServiceLocator
 */
ejs.Workbench = function(handle) {
	ejs.ServiceLocator.apply(this, arguments);
	this.constructor = ejs.Workbench;
	return this;
};

ejs.Workbench.prototype = Object.create(ejs.ServiceLocator.prototype);

/**
 * must be called in UI Thread.
 * 
 * @returns {org.eclipse.swt.widgets.Shell}
 */
ejs.Workbench.prototype.getActiveShell = function() {
	var window = this.getActiveWorkbenchWindow();
	if (window) {
		return window.getShell();
	} else {
		return null;
	}
};

/**
 * @returns {ejs.WorkbenchWindow}
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
 * @returns {ejs.WorkbenchPage}
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
 * @base ejs.ServiceLocator
 */
ejs.WorkbenchWindow = function(handle) {
	ejs.ServiceLocator.apply(this, arguments);
	this.constructor = ejs.Workbench;
	return this;
};

ejs.WorkbenchWindow.prototype = Object.create(ejs.ServiceLocator.prototype);

ejs.WorkbenchWindow.prototype.getSelectionService = function() {
	return new ejs.SelectionService(this.handle.getService(org.eclipse.ui.ISelectionService));
};

/**
 * @returns {org.eclipse.swt.widgets.Shell}
 */
ejs.WorkbenchWindow.prototype.getShell = function() {
	return this.handle.getShell();
};

/**
 * @constructor
 * @base ejs.ServiceLocator
 */
ejs.WorkbenchPage = function(handle) {
	ejs.ServiceLocator.apply(this, arguments);
	this.constructor = ejs.Workbench;
	return this;
};

ejs.WorkbenchPage.prototype = Object.create(ejs.ServiceLocator.prototype);

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