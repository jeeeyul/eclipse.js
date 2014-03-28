function Workspace() {
	this._workspace = org.eclipse.core.resources.ResourcesPlugin.getWorkspace();
}

/**
 * @param {String}
 *            pattern
 * 
 * @returns {File[]}
 */
Workspace.prototype.find = function(pattern) {
	var result = [];

	var exp = pattern.replace(/\*\*/g, "«ANY_PATH»").replace(/\*/, "«ANY_SEGMENT»").replace(/\./, "«DOT»").replace("?", "«ANY_CHAR»");

	exp = exp.replace(/«ANY_PATH»/g, ".*").replace(/«ANY_SEGMENT»/g, "[^/]*").replace(/«DOT»/g, "\.").replace(/«ANY_CHAR»/g, ".")

	var regexp = new RegExp("^" + exp + "$");

	this._workspace.root.accept({
		visit : function(it) {
			var isFile = (it.type & org.eclipse.core.resources.IResource.FILE) != 0;
			if (isFile && regexp.test(it.fullPath.toString())) {
				result.push(new File(it));
			}
			return true;
		}
	});

	return result;
}

var workspace = new Workspace();

function File(_file) {
	if (typeof _file == "string") {
		this._file = workspace._workspace.root.getFile(_file);
	} else {
		this._file = _file;
	}
}

File.prototype.isFile = function() {
	return (this._file.type & org.eclipse.core.resources.IResource.FILE) != 0;
};

File.prototype.isDirectory = function() {
	return (this._file.type & org.eclipse.core.resources.IResource.FOLDER) != 0;
};

/**
 * @returns {String}
 */
File.prototype.getContents = function() {
	return IO.readInputStream(this._file.contents, this._file.charset);
};

/**
 * @param {String}
 *            newContents new contents to set.
 */
File.prototype.setContents = function(newContents) {
	IO.setContents(this._file, newContents);
};

/**
 * @returns {Boolean} whether file exists.
 */
File.prototype.exists = function() {
	return this._file.exists();
};

/**
 * @returns {String} filename.
 */
File.prototype.getName = function() {
	return this._file.getName();
}