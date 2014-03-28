var module = {
	exports : {}
};
var exports = module.exports;

(function(module, exports) {
/* $script */
	
	for(key in exports){
		module[key] = exports[key];
	}
	delete module.exports;
	return module;
})();