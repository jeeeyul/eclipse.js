package net.jeeeyul.eclipsejs.script

import net.jeeeyul.eclipsejs.ui.console.EJSConsole
import org.mozilla.javascript.RhinoException
import org.mozilla.javascript.ScriptStackElement

class ScriptErrorPresenter {
	public static val ScriptErrorPresenter INSTANCE = new ScriptErrorPresenter
	
	def void showError(RhinoException e) {
		var error = '''
			«e.message»
				«FOR each : e.scriptStack»
					at «each.safeFunctionName» («each.fileName»:«each.lineNumber»)
				«ENDFOR»
		'''
		EJSConsole.singleton.errorStream.println(error)
	}

	def private safeFunctionName(ScriptStackElement e) {
		if (e.functionName != null) {
			return e.functionName;
		} else {
			return "anonymous"
		}
	}
}
