/**
 * @constructor
 */
ejs.ServiceLocator = function(handle) {
	this.handle = handle;
};

ejs.ServiceLocator.prototype.getNativeServiceHandle = function(serviceType) {
	return this.handle.getService(serviceType);
};

ejs.ServiceLocator.prototype.getSelectionService = function() {
	return new ejs.SelectionService(this.handle.getService(org.eclipse.ui.ISelectionService));
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
 * @returns {ejs.ViewPart}
 */
ejs.WorkbenchPage.prototype.showView = function(viewId) {
	var me = this;
	return runInUI(function() {
		var viewHandle = me.handle.showView(viewId);
		if (viewHandle) {
			return new ejs.ViewPart(viewHandle);
		} else {
			return null;
		}
	});

};
/**
 * @param viewId
 * @returns {ejs.EJSViewPart}
 */
ejs.WorkbenchPage.prototype.showEJSView = function(viewId) {
	var me = this;
	return runInUI(function(){
		var viewHandle = me.handle.showView("net.jeeeyul.eclipsejs.extensions.view.CommonView", viewId, 1);
		if (viewHandle) {
			return new ejs.EJSViewPart(viewHandle);
		} else {
			return null;
		}
	})
};

//
// Workbench Site
//
/**
 * @constructor
 * @base ejs.ServiceLocator
 */
ejs.WorkbenchSite = function(handle) {
	ejs.ServiceLocator.apply(this, arguments);
	this.handle = handle;
	this.constructor = ejs.WorkbenchSite;
};

ejs.WorkbenchSite.prototype = Object.create(ejs.ServiceLocator.prototype);

/**
 * Returns the page containing this workbench site.
 * 
 * @returns {ejs.WorkbenchPage} the page containing this workbench site.
 */
ejs.WorkbenchSite.prototype.getPage = function() {
	return new ejs.WorkbenchPage(this.handle.getPage());
};

/**
 * Returns the shell for this workbench site. Not intended to be called from
 * outside the UI thread. Clients should call IWorkbench.getDisplay() to gain
 * access to the display rather than calling getShell().getDisplay().
 * 
 * <p>
 * For compatibility, this method will not throw an exception if called from
 * outside the UI thread, but the returned Shell may be wrong.
 * </p>
 * 
 * @returns {org.eclipse.swt.widgets.Shell} the shell for this workbench site
 */
ejs.WorkbenchSite.prototype.getShell = function() {
	return this.handle.getShell();
};

/**
 * Returns the workbench window containing this workbench site.
 * 
 * @returns {ejs.WorkbenchWindow} the workbench window containing this workbench
 *          site
 */
ejs.WorkbenchSite.prototype.getWorkbenchWindow = function() {
	return new ejs.WorkbenchWindow(this.handle.getWorkbenchWindow());
};

//
// Workbench Part Site
//

/**
 * @constructor
 * @base ejs.WorkbenchSite
 */
ejs.WorkbenchPartSite = function(handle) {
	ejs.WorkbenchSite.apply(this, arguments);
	this.handle = handle;
	this.constructor = ejs.WorkbenchPartSite;
	return this;
};

ejs.WorkbenchPartSite.prototype = Object.create(ejs.WorkbenchSite.prototype);

/**
 * Returns the part registry extension id for this workbench site's part.
 * <p>
 * The name comes from the <code>id</code> attribute in the configuration
 * element.
 * </p>
 * 
 * @returns {String} the registry extension id
 */
ejs.WorkbenchPartSite.prototype.getId = function() {
	return String(this.handle.getId());
};

ejs.WorkbenchPartSite.prototype.getPluginId = function() {
	return String(this.handle.getPluginId());
};

ejs.WorkbenchPartSite.prototype.getRegisteredName = function() {
	return String(this.handle.getRegisteredName());
};

/**
 * 
 * @returns {ejs.WorkbenchPart}
 */
ejs.WorkbenchPartSite.prototype.getPart = function() {
	return ejs.internal.wrapWorkbenchPart(this.handle.getPart());
};

//
// ViewSite
//
/**
 * @constructor
 * @base ejs.WorkbenchPartSite
 */
ejs.ViewSite = function(handle) {
	ejs.WorkbenchPartSite.apply(this, arguments);
	this.handle = handle;
	this.constructor = ejs.ViewSite;
	return this;
};

ejs.ViewSite.prototype = Object.create(ejs.WorkbenchPartSite.prototype);

/**
 * Returns the action bars for this part site. Views have exclusive use of their
 * site's action bars.
 * 
 * @returns {org.eclipse.ui.IActionBars}
 */
ejs.ViewSite.prototype.getActionBars = function() {
	return this.handle.getActionBars();
};

/**
 * Returns the secondary id for this part site's part, or <code>null</code> if
 * it has none.
 * 
 * @returns {String} the secondary id for this part site's part or
 *          <code>null</code> if it has none
 */
ejs.ViewSite.prototype.getSecondaryId = function() {
	var id = this.handle.getSecondaryId();
	if (id == null) {
		return null;
	}
	return String(id);
};

//
// Part
//
ejs.WorkbenchPart = function(handle) {
	this.handle = handle;
};

/**
 * 
 * @returns {ejs.WorkbenchSite}
 */
ejs.WorkbenchPart.prototype.getSite = function() {
	return ejs.internal.wrapWorkbenchSite(this.handle.getSite());
};

/**
 * Returns the title of this workbench part. If this value changes the part must
 * fire a property listener event with <code>PROP_TITLE</code>.
 * <p>
 * The title is used to populate the title bar of this part's visual container.
 * </p>
 * 
 * @returns {String} the workbench part title (not <code>null</code>)
 */
ejs.WorkbenchPart.prototype.getTitle = function() {
	return String(this.handle.getTitle());
};

/**
 * Returns the title image of this workbench part. If this value changes the
 * part must fire a property listener event with <code>PROP_TITLE</code>.
 * <p>
 * The title image is usually used to populate the title bar of this part's
 * visual container. Since this image is managed by the part itself, callers
 * must <b>not</b> dispose the returned image.
 * </p>
 * 
 * @returns {org.eclipse.swt.graphics.Image} the title image
 */
ejs.WorkbenchPart.prototype.getTitleImage = function() {
	return this.handle.getTitleImage();
};

/**
 * Returns the title tool tip text of this workbench part. An empty string
 * result indicates no tool tip. If this value changes the part must fire a
 * property listener event with <code>PROP_TITLE</code>.
 * <p>
 * The tool tip text is used to populate the title bar of this part's visual
 * container.
 * </p>
 * 
 * @returns {String} the workbench part title tool tip (not <code>null</code>)
 */
ejs.WorkbenchPart.prototype.getTitleToolTip = function() {
	return String(this.handle.getTitleToolTip());
};

ejs.WorkbenchPart.prototype.setFocus = function() {
	this.handle.setFocus();
};

/**
 * @constructor
 * @base ejs.WorkbenchPart
 */
ejs.ViewPart = function() {
	ejs.WorkbenchPart.apply(this, arguments);
	this.constructor = ejs.ViewPart;
	return this;
};

ejs.ViewPart.prototype = Object.create(ejs.WorkbenchPart.prototype);

/**
 * @returns {ejs.ViewSite}
 */
ejs.ViewPart.prototype.getSite = function() {
	return ejs.WorkbenchPart.prototype.getSite.call(this);
};

ejs.EJSViewPart = function() {
	ejs.ViewPart.apply(this, arguments);
	this.constructor = ejs.EJSViewPart;
	return this;
}

ejs.EJSViewPart.prototype = Object.create(ejs.ViewPart.prototype);
/**
 * 
 * @param {Function}
 *            callback
 */
ejs.EJSViewPart.prototype.getModuleInstance = function(callback) {
	this.handle.getViewModuleInstance(callback);
};

//
// WPR
//
/**
 * @constructor
 */
ejs.WorkbenchPartReference = function(handle) {
	this.handle = handle;
	return this;
};

/**
 * 
 * @param {Boolean}
 *            restore
 * @returns {ejs.WorkbenchPart}
 */
ejs.WorkbenchPartReference.prototype.getPart = function(restore) {
	return ejs.internal.wrapWorkbenchPart(this.handle.getPart(restore));
};

/**
 * @constructor
 * @base ejs.WorkbenchPartReference
 */
ejs.ViewReference = function() {
	ejs.WorkbenchPartReference.apply(this, arguments);
	this.constructor = ejs.ViewReference
};

ejs.ViewReference.prototype = Object.create(ejs.WorkbenchPartReference.prototype);

/**
 * @returns {ejs.ViewPart}
 */
ejs.ViewReference.prototype.getPart = function() {
	return ejs.WorkbenchPartReference.prototype.getPart.call(this);
};