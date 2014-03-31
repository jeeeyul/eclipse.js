package net.jeeeyul.eclipsejs.ui

import java.util.concurrent.CancellationException
import net.jeeeyul.eclipsejs.api.EJSConsole
import net.jeeeyul.eclipsejs.core.EJSContextFactory
import net.jeeeyul.eclipsejs.core.ScopeFactory
import org.eclipse.core.resources.WorkspaceJob
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Status
import org.mozilla.javascript.Context
import org.mozilla.javascript.RhinoException
import org.mozilla.javascript.ScriptStackElement
import org.mozilla.javascript.ScriptableObject
import net.jeeeyul.eclipsejs.core.EJSContext

class ExecuteScriptJob extends WorkspaceJob {
	IScriptProvider scriptProvider

	new(IScriptProvider scriptProvider) {
		super("Executing Script")
		this.scriptProvider = scriptProvider
		user = true
		system = false
	}

	override runInWorkspace(IProgressMonitor monitor) throws CoreException {
		var factory = new EJSContextFactory()
		var ctx = factory.enterContext as EJSContext
		ctx.setMonitor(monitor)
		try {
			var scope = ScopeFactory.instance.create(scriptProvider.fullPath)
			ScriptableObject.putProperty(scope, "monitor", Context.javaToJS(monitor, scope))
			ctx.evaluateString(scope, scriptProvider.getScript(), scriptProvider.scriptFileName, 1, null)
		} catch (RhinoException e) {
			var error = '''
				«e.message»
					«FOR each : e.scriptStack»
						at «each.safeFunctionName» («each.fileName»:«each.lineNumber»)
					«ENDFOR»
			'''
			EJSConsole.singleton.errorStream.println(error)
		} catch (CancellationException ce) {
			EJSConsole.singleton.errorStream.println("Execution was canceled.")
		} finally {
			Context.exit()
		}

		return Status.OK_STATUS
	}

	def private safeFunctionName(ScriptStackElement e) {
		if (e.functionName != null) {
			return e.functionName;
		} else {
			return "anonymous"
		}
	}

}
