/**
 * @constructor
 */
ejs.Workspace = function(handle) {
	this.handle = handle;
};

/**
 * @param {String}
 *            pattern
 * 
 * @returns {Array}
 */
ejs.Workspace.prototype.find = function(pattern) {
	var result = [];
	var exp = pattern.replace(/\*\*/g, "«ANY_PATH»").replace(/\*/, "«ANY_SEGMENT»").replace(/\./, "«DOT»").replace("?", "«ANY_CHAR»");
	exp = exp.replace(/«ANY_PATH»/g, ".*").replace(/«ANY_SEGMENT»/g, "[^/]*").replace(/«DOT»/g, "\.").replace(/«ANY_CHAR»/g, ".")
	var regexp = new RegExp("^" + exp + "$");

	this.handle.root.accept({
		visit : function(it) {
			var isFile = (it.type & org.eclipse.core.resources.IResource.FILE) != 0;
			if (isFile && regexp.test(it.fullPath.toString())) {
				result.push(new ejs.File(it));
			}
			return true;
		}
	});

	return result;
};

var workspace = new ejs.Workspace(org.eclipse.core.resources.ResourcesPlugin.getWorkspace());

/**
 * @constructor
 * @param {org.eclipse.core.runtime.IPath}
 *            fullPath
 */
ejs.Resource = function(fullPath) {
	if (typeof fullPath == "string") {
		fullPath = new org.eclipse.core.runtime.Path(fullPath);
	}
	this.fullPath = fullPath;
};

ejs.Resource.prototype.exists = function() {
	return this.handle.exists();
};

ejs.Resource.prototype.getName = function() {
	return String(this.handle.getName());
};

/**
 * @returns {ejs.Container}
 */
ejs.Resource.prototype.getParent = function() {
	return ejs.internal.wrapResource(this.handle.getParent());
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
ejs.Resource.prototype.getFullPath = function() {
	return this.fullPath;
};

ejs.Resource.prototype.toString = function() {
	return this.fullPath.toString();
};

/**
 * @constructor
 * @base ejs.Resource
 */
ejs.Container = function(fullPath) {
	ejs.Resource.call(this, fullPath);
	this.constructor = ejs.Container;
};
ejs.Container.prototype = Object.create(ejs.Resource.prototype);

ejs.Container.prototype.getFile = function(path) {
	return new ejs.File(this.fullPath.append(path));
};

ejs.Container.prototype.getFolder = function(path) {
	return new ejs.Folder(this.fullPath.append(path));
};

/**
 * @constructor
 * @base ejs.Container
 */
ejs.Folder = function(fullPath) {
	ejs.Container.call(this, fullPath);
	this.handle = workspace.handle.root.getFolder(this.fullPath);
	this.constructor = ejs.Folder;
};
ejs.Folder.prototype = Object.create(ejs.Container.prototype);

ejs.Folder.prototype.mkdirp = function() {
	ejs.io.mkdirp(this.handle);
};

/**
 * @constructor
 * @base ejs.Resource
 */
ejs.File = function(fullPath) {
	ejs.Resource.call(this, fullPath);
	this.handle = workspace.handle.root.getFile(fullPath);
	this.constructor = ejs.File;
};
ejs.File.prototype = Object.create(ejs.Resource.prototype);

ejs.File.prototype.getContents = function() {
	return String(ejs.io.readInputStream(this.handle.getContents(), this.handle.getCharset()));
};

ejs.File.prototype.setContents = function(contents) {
	if (this.exists()) {
		ejs.io.setContents(this.handle, contents);
	} else {
		ejs.io.create(this.handle.contents);
	}
};