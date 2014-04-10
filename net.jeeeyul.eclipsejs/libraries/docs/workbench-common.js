/**
 * @constructor
 */
org.eclipse.core.runtime.IProgressMonitor = function(){
	return this;
};


org.eclipse.core.runtime.IProgressMonitor.UNKNOWN = new Number();


/**
 * @param {java.lang.String} string
 * @param {Number} int
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.beginTask = function(string, int){
};

/**
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.done = function(){
};

/**
 * @param {Number} double
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.internalWorked = function(double){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.isCanceled = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.setCanceled = function(boolean){
};

/**
 * @param {java.lang.String} string
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.setTaskName = function(string){
};

/**
 * @param {java.lang.String} string
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.subTask = function(string){
};

/**
 * @param {Number} int
 */
org.eclipse.core.runtime.IProgressMonitor.prototype.worked = function(int){
};

/**
 * @constructor
 */
org.eclipse.core.runtime.IPath = function(){
	return this;
};


org.eclipse.core.runtime.IPath.SEPARATOR = new char();
org.eclipse.core.runtime.IPath.DEVICE_SEPARATOR = new char();


/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.toString = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.append = function(string){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.append = function(iPath){
};

/**
 * @returns {java.lang.Object}
 */
org.eclipse.core.runtime.IPath.prototype.clone = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isEmpty = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isAbsolute = function(){
};

/**
 * @returns {java.lang.String[]}
 */
org.eclipse.core.runtime.IPath.prototype.segments = function(){
};

/**
 * @param {Number} int
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.segment = function(int){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.getDevice = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.setDevice = function(string){
};

/**
 * @returns {Number}
 */
org.eclipse.core.runtime.IPath.prototype.segmentCount = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.addFileExtension = function(string){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.addTrailingSeparator = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.getFileExtension = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.hasTrailingSeparator = function(){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isPrefixOf = function(iPath){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isRoot = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isUNC = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isValidPath = function(string){
};

/**
 * @param {java.lang.String} string
 * @returns {Boolean}
 */
org.eclipse.core.runtime.IPath.prototype.isValidSegment = function(string){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.lastSegment = function(){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.makeAbsolute = function(){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.makeRelative = function(){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.makeRelativeTo = function(iPath){
};

/**
 * @param {Boolean} boolean
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.makeUNC = function(boolean){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {Number}
 */
org.eclipse.core.runtime.IPath.prototype.matchingFirstSegments = function(iPath){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.removeFileExtension = function(){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.removeFirstSegments = function(int){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.removeLastSegments = function(int){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.removeTrailingSeparator = function(){
};

/**
 * @returns {java.io.File}
 */
org.eclipse.core.runtime.IPath.prototype.toFile = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.toOSString = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.IPath.prototype.toPortableString = function(){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.IPath.prototype.uptoSegment = function(int){
};

/**
 * @constructor
 * @param {java.lang.String} string
 * @param {java.lang.String} string
 */
org.eclipse.core.runtime.Path = function(string, string){
	return this;
}


org.eclipse.core.runtime.Path.EMPTY = new org.eclipse.core.runtime.Path();
org.eclipse.core.runtime.Path.ROOT = new org.eclipse.core.runtime.Path();

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
*/
org.eclipse.core.runtime.Path.fromOSString = function(string){
}

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
*/
org.eclipse.core.runtime.Path.fromPortableString = function(string){
}

/**
 * @param {java.lang.Object} object
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.equals = function(object){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.toString = function(){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.append = function(iPath){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.append = function(string){
};

/**
 * @returns {Number}
 */
org.eclipse.core.runtime.Path.prototype.hashCode = function(){
};

/**
 * @returns {java.lang.Object}
 */
org.eclipse.core.runtime.Path.prototype.clone = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isEmpty = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isAbsolute = function(){
};

/**
 * @returns {java.lang.String[]}
 */
org.eclipse.core.runtime.Path.prototype.segments = function(){
};

/**
 * @param {Number} int
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.segment = function(int){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.getDevice = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.setDevice = function(string){
};

/**
 * @returns {Number}
 */
org.eclipse.core.runtime.Path.prototype.segmentCount = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.addFileExtension = function(string){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.addTrailingSeparator = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.getFileExtension = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.hasTrailingSeparator = function(){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isPrefixOf = function(iPath){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isRoot = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isUNC = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isValidPath = function(string){
};

/**
 * @param {java.lang.String} string
 * @returns {Boolean}
 */
org.eclipse.core.runtime.Path.prototype.isValidSegment = function(string){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.lastSegment = function(){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.makeAbsolute = function(){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.makeRelative = function(){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.makeRelativeTo = function(iPath){
};

/**
 * @param {Boolean} boolean
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.makeUNC = function(boolean){
};

/**
 * @param {org.eclipse.core.runtime.IPath} iPath
 * @returns {Number}
 */
org.eclipse.core.runtime.Path.prototype.matchingFirstSegments = function(iPath){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.removeFileExtension = function(){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.removeFirstSegments = function(int){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.removeLastSegments = function(int){
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.removeTrailingSeparator = function(){
};

/**
 * @returns {java.io.File}
 */
org.eclipse.core.runtime.Path.prototype.toFile = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.toOSString = function(){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.core.runtime.Path.prototype.toPortableString = function(){
};

/**
 * @param {Number} int
 * @returns {org.eclipse.core.runtime.IPath}
 */
org.eclipse.core.runtime.Path.prototype.uptoSegment = function(int){
};

/**
 */
org.eclipse.core.runtime.Path.prototype.wait = function(){
};

/**
 * @param {Number} long
 */
org.eclipse.core.runtime.Path.prototype.wait = function(long){
};

/**
 * @param {Number} long
 * @param {Number} int
 */
org.eclipse.core.runtime.Path.prototype.wait = function(long, int){
};

/**
 * @returns {java.lang.Class}
 */
org.eclipse.core.runtime.Path.prototype.getClass = function(){
};

/**
 */
org.eclipse.core.runtime.Path.prototype.notify = function(){
};

/**
 */
org.eclipse.core.runtime.Path.prototype.notifyAll = function(){
};

/**
 * @constructor
 */
org.eclipse.jface.action.IContributionManager = function(){
	return this;
};




/**
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IContributionManager.prototype.add = function(iContributionItem){
};

/**
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IContributionManager.prototype.add = function(iAction){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IContributionManager.prototype.isEmpty = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IContributionManager.prototype.find = function(string){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IContributionManager.prototype.remove = function(string){
};

/**
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IContributionManager.prototype.remove = function(iContributionItem){
};

/**
 */
org.eclipse.jface.action.IContributionManager.prototype.removeAll = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.jface.action.IContributionManager.prototype.update = function(boolean){
};

/**
 * @returns {org.eclipse.jface.action.IContributionItem[]}
 */
org.eclipse.jface.action.IContributionManager.prototype.getItems = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IContributionManager.prototype.insertBefore = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IContributionManager.prototype.insertBefore = function(string, iAction){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IContributionManager.prototype.appendToGroup = function(string, iAction){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IContributionManager.prototype.appendToGroup = function(string, iContributionItem){
};

/**
 * @returns {org.eclipse.jface.action.IContributionManagerOverrides}
 */
org.eclipse.jface.action.IContributionManager.prototype.getOverrides = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IContributionManager.prototype.insertAfter = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IContributionManager.prototype.insertAfter = function(string, iAction){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IContributionManager.prototype.isDirty = function(){
};

/**
 */
org.eclipse.jface.action.IContributionManager.prototype.markDirty = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IContributionManager.prototype.prependToGroup = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IContributionManager.prototype.prependToGroup = function(string, iAction){
};

/**
 * @constructor
 */
org.eclipse.jface.action.IMenuManager = function(){
	return this;
};




/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isEnabled = function(){
};

/**
 * @param {org.eclipse.jface.action.IMenuListener} iMenuListener
 */
org.eclipse.jface.action.IMenuManager.prototype.addMenuListener = function(iMenuListener){
};

/**
 * @param {org.eclipse.jface.action.IMenuListener} iMenuListener
 */
org.eclipse.jface.action.IMenuManager.prototype.removeMenuListener = function(iMenuListener){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IMenuManager}
 */
org.eclipse.jface.action.IMenuManager.prototype.findMenuUsingPath = function(string){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IMenuManager.prototype.findUsingPath = function(string){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.getRemoveAllWhenShown = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.jface.action.IMenuManager.prototype.setRemoveAllWhenShown = function(boolean){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.jface.action.IMenuManager.prototype.updateAll = function(boolean){
};

/**
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IMenuManager.prototype.add = function(iContributionItem){
};

/**
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IMenuManager.prototype.add = function(iAction){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isEmpty = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IMenuManager.prototype.find = function(string){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IMenuManager.prototype.remove = function(string){
};

/**
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IMenuManager.prototype.remove = function(iContributionItem){
};

/**
 */
org.eclipse.jface.action.IMenuManager.prototype.removeAll = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.jface.action.IMenuManager.prototype.update = function(boolean){
};

/**
 * @returns {org.eclipse.jface.action.IContributionItem[]}
 */
org.eclipse.jface.action.IMenuManager.prototype.getItems = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IMenuManager.prototype.insertBefore = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IMenuManager.prototype.insertBefore = function(string, iAction){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IMenuManager.prototype.appendToGroup = function(string, iAction){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IMenuManager.prototype.appendToGroup = function(string, iContributionItem){
};

/**
 * @returns {org.eclipse.jface.action.IContributionManagerOverrides}
 */
org.eclipse.jface.action.IMenuManager.prototype.getOverrides = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IMenuManager.prototype.insertAfter = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IMenuManager.prototype.insertAfter = function(string, iAction){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isDirty = function(){
};

/**
 */
org.eclipse.jface.action.IMenuManager.prototype.markDirty = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IMenuManager.prototype.prependToGroup = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IMenuManager.prototype.prependToGroup = function(string, iAction){
};

/**
 * @returns {java.lang.String}
 */
org.eclipse.jface.action.IMenuManager.prototype.getId = function(){
};

/**
 * @param {org.eclipse.swt.widgets.Composite} composite
 */
org.eclipse.jface.action.IMenuManager.prototype.fill = function(composite){
};

/**
 * @param {org.eclipse.swt.widgets.Menu} menu
 * @param {Number} int
 */
org.eclipse.jface.action.IMenuManager.prototype.fill = function(menu, int){
};

/**
 * @param {org.eclipse.swt.widgets.ToolBar} toolBar
 * @param {Number} int
 */
org.eclipse.jface.action.IMenuManager.prototype.fill = function(toolBar, int){
};

/**
 * @param {org.eclipse.swt.widgets.CoolBar} coolBar
 * @param {Number} int
 */
org.eclipse.jface.action.IMenuManager.prototype.fill = function(coolBar, int){
};

/**
 * @param {org.eclipse.jface.action.IContributionManager} iContributionManager
 */
org.eclipse.jface.action.IMenuManager.prototype.setParent = function(iContributionManager){
};

/**
 * @param {java.lang.String} string
 */
org.eclipse.jface.action.IMenuManager.prototype.update = function(string){
};

/**
 */
org.eclipse.jface.action.IMenuManager.prototype.update = function(){
};

/**
 */
org.eclipse.jface.action.IMenuManager.prototype.dispose = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isVisible = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.jface.action.IMenuManager.prototype.setVisible = function(boolean){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isDynamic = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isDirty = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isGroupMarker = function(){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IMenuManager.prototype.isSeparator = function(){
};

/**
 */
org.eclipse.jface.action.IMenuManager.prototype.saveWidgetState = function(){
};

/**
 * @constructor
 */
org.eclipse.jface.action.IToolBarManager = function(){
	return this;
};




/**
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IToolBarManager.prototype.add = function(iContributionItem){
};

/**
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IToolBarManager.prototype.add = function(iAction){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IToolBarManager.prototype.isEmpty = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IToolBarManager.prototype.find = function(string){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IToolBarManager.prototype.remove = function(string){
};

/**
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 * @returns {org.eclipse.jface.action.IContributionItem}
 */
org.eclipse.jface.action.IToolBarManager.prototype.remove = function(iContributionItem){
};

/**
 */
org.eclipse.jface.action.IToolBarManager.prototype.removeAll = function(){
};

/**
 * @param {Boolean} boolean
 */
org.eclipse.jface.action.IToolBarManager.prototype.update = function(boolean){
};

/**
 * @returns {org.eclipse.jface.action.IContributionItem[]}
 */
org.eclipse.jface.action.IToolBarManager.prototype.getItems = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IToolBarManager.prototype.insertBefore = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IToolBarManager.prototype.insertBefore = function(string, iAction){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IToolBarManager.prototype.appendToGroup = function(string, iAction){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IToolBarManager.prototype.appendToGroup = function(string, iContributionItem){
};

/**
 * @returns {org.eclipse.jface.action.IContributionManagerOverrides}
 */
org.eclipse.jface.action.IToolBarManager.prototype.getOverrides = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IToolBarManager.prototype.insertAfter = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IToolBarManager.prototype.insertAfter = function(string, iAction){
};

/**
 * @returns {Boolean}
 */
org.eclipse.jface.action.IToolBarManager.prototype.isDirty = function(){
};

/**
 */
org.eclipse.jface.action.IToolBarManager.prototype.markDirty = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IContributionItem} iContributionItem
 */
org.eclipse.jface.action.IToolBarManager.prototype.prependToGroup = function(string, iContributionItem){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.jface.action.IToolBarManager.prototype.prependToGroup = function(string, iAction){
};

/**
 * @constructor
 */
org.eclipse.ui.IActionBars = function(){
	return this;
};




/**
 */
org.eclipse.ui.IActionBars.prototype.clearGlobalActionHandlers = function(){
};

/**
 * @param {java.lang.String} string
 * @returns {org.eclipse.jface.action.IAction}
 */
org.eclipse.ui.IActionBars.prototype.getGlobalActionHandler = function(string){
};

/**
 * @returns {org.eclipse.jface.action.IMenuManager}
 */
org.eclipse.ui.IActionBars.prototype.getMenuManager = function(){
};

/**
 * @returns {org.eclipse.ui.services.IServiceLocator}
 */
org.eclipse.ui.IActionBars.prototype.getServiceLocator = function(){
};

/**
 * @returns {org.eclipse.jface.action.IStatusLineManager}
 */
org.eclipse.ui.IActionBars.prototype.getStatusLineManager = function(){
};

/**
 * @returns {org.eclipse.jface.action.IToolBarManager}
 */
org.eclipse.ui.IActionBars.prototype.getToolBarManager = function(){
};

/**
 * @param {java.lang.String} string
 * @param {org.eclipse.jface.action.IAction} iAction
 */
org.eclipse.ui.IActionBars.prototype.setGlobalActionHandler = function(string, iAction){
};

/**
 */
org.eclipse.ui.IActionBars.prototype.updateActionBars = function(){
};

