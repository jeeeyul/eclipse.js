
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

