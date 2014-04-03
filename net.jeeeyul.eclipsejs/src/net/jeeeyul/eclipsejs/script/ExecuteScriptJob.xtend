package net.jeeeyul.eclipsejs.script

import java.util.Map
import java.util.concurrent.CancellationException
import net.jeeeyul.eclipsejs.api.EJSConsole
import net.jeeeyul.eclipsejs.core.ScopeFactory
import net.jeeeyul.eclipsejs.script.IScriptProvider
import net.jeeeyul.eclipsejs.script.context.EJSContext
import net.jeeeyul.eclipsejs.script.context.EJSContextFactory
import org.eclipse.core.resources.WorkspaceJob
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Status
import org.mozilla.javascript.Context

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
		ctx.setMonitor(monitor);
		
		val Map<String, Object> map = #{
			"monitor" -> monitor as Object
		} 
		
		try {
			var scope = ScopeFactory.instance.create(scriptProvider.fullPath, map)
			ctx.evaluateString(scope, scriptProvider.getScript(), scriptProvider.scriptFileName, 1, null)
		} catch (CancellationException ce) {
			EJSConsole.singleton.errorStream.println("Execution was canceled.")
		} finally {
			Context.exit()
		}

		return Status.OK_STATUS
	}
}
