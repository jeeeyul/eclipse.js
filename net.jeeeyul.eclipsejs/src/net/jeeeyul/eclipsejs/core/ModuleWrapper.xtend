package net.jeeeyul.eclipsejs.core

import org.mozilla.javascript.Context
import org.mozilla.javascript.ScriptableObject

class ModuleWrapper {
	def before(Context context, ScriptableObject scope){
		var before = '''
			var module = {};
			var exports = {};
		'''
		context.evaluateString(scope, before, '''net.jeeeyul.eclipsejs.core.ModuleWrapper#before''', 1, null);
	}
	
	def after(Context context, ScriptableObject scope){
		var after = '''
			(function(){
				var eachKey;
				for(eachKey in exports){
					module[eachKey] = exports[eachKey];
				}
				return module;
			})();
		'''
		
		return context.evaluateString(scope, after, "net.jeeeyul.eclipsejs.core.ModuleWrapper#after", 1, null);
	}
}