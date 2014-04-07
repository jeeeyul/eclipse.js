var ejs = {};
ejs.io = new net.jeeeyul.eclipsejs.script.api.IO();
/**
 * @constructor
 */
ejs.ModuleDescription = function(data) {
	if (data == undefined) {
		data = {};
	}
	this.data = data;
	return this;
};

ejs.ModuleDescription.prototype.extend = function(data) {
	_.extend(this.data, data);
};

/**
 * Inject a module with given module name. What if module is not loaded, it will
 * be loaded and returned. Otherwise it will return cached one for current
 * thread.
 * 
 * @param {String}
 *            moduleName module name. Relative module name should starts with
 *            "./". otherwhise, it will be treated as global module name.
 */
function require(moduleName) {
	return __REQUIRE__.require(moduleName);
}

function unrequire(moduleName, allThread) {
	if (allThread == undefined) {
		allThread = false;
	}

	__REQUIRE__.unload(moduleName, allThread);
}

function unrequireAll(allThread) {
	if (allThread == undefined) {
		allThread = false;
	}
	__REQUIRE__.unloadAll(allThread);
}

var __dirname = __REQUIRE__.getWorkingDir();
