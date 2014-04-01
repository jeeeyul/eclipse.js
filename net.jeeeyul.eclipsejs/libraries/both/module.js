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

require.unload = function(path) {
	__REQUIRE__.unload(path);
};

require.unloadAll = function() {
	__REQUIRE__.unloadAll();
};