package net.jeeeyul.eclipsejs.core

import net.jeeeyul.eclipsejs.util.FileUtil
import org.eclipse.core.resources.IFile
import org.mozilla.javascript.Context
import org.mozilla.javascript.ScriptableObject

class ModuleWrapper {
	def before(Context context, ScriptableObject scope) {
		var before = '''
			var module = {
				exports : {}
			};
			var exports = {};
		'''
		context.evaluateString(scope, before, '''net.jeeeyul.eclipsejs.core.ModuleWrapper#before''', 1, null);
	}

	def evaluate(Context context, ScriptableObject scope, IFile file) {
		var moduleScript = FileUtil.getInstance().getTextContent(file.getContents(), file.getCharset());
		var script = '''
			«moduleScript»
		'''
		return context.evaluateString(scope, script, file.fullPath.toPortableString, 1, null);
	}

	def after(Context context, ScriptableObject scope) {
		var after = '''
			module.exports = _.extend(exports, module.exports);
			
			(function(module){
				var eachKey;
				for(eachKey in module.exports){
					module[eachKey] = module.exports[eachKey];
				}
				delete module.exports;
				return module;
			})(module);
		'''

		return context.evaluateString(scope, after, "net.jeeeyul.eclipsejs.core.ModuleWrapper#after", 1, null);
	}
}
