/**
 * Display a alert dialog.
 * 
 * @param title
 * @param msg
 */
function alert(title, msg) {
}

/**
 * Displays a confirmation dialog.
 * 
 * @param title
 * @param msg
 * @returns {Boolean}
 */
function confirm(title, msg) {
}

function IProgressMonitor() {

}

/**
 * @param name
 *            {String} Task Name.
 * @param amount
 *            Task amount.
 */
IProgressMonitor.prototype.beginTask = function(name, amount) {

};

/**
 * @param amount
 *            {Number} Amount.
 */
IProgressMonitor.prototype.worked = function(amount) {

};

IProgressMonitor.prototype.done = function() {
};

var monitor = new IProgressMonitor();

function Console() {
}

/**
 * @param msg
 *            {String} msg
 */
Console.prototype.log = function(msg) {

};

var console = new Console();
function Workspace() {
	this._workspace = org.eclipse.core.resources.ResourcesPlugin.getWorkspace();
}

Workspace.prototype.find = function(pattern) {
	return [ new File() ];
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