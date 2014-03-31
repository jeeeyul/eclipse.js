function require(module){
	return __REQUIRE__.require(module);
}

require.unload = function(path){
	__REQUIRE__.unload(path);
};

require.unloadAll = function(){
	__REQUIRE__.unloadAll();
};