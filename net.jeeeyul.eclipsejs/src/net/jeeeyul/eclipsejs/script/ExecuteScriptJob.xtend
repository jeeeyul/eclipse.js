package net.jeeeyul.eclipsejs.script

import java.util.Map
import java.util.concurrent.CancellationException
import net.jeeeyul.eclipsejs.ui.console.EJSConsole
import net.jeeeyul.eclipsejs.core.EJSContext
import net.jeeeyul.eclipsejs.core.EJSContextFactory
import org.eclipse.core.resources.WorkspaceJob
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Status
import org.mozilla.javascript.Context
import net.jeeeyul.eclipsejs.core.EJSScopeFactory

/**
 * An workspace job that runs scripts from script provider.
 */
class ExecuteScriptJob extends WorkspaceJob {
	IScriptProvider scriptProvider

	/**
	 * Creates an Execute Script Job.
	 * 
	 * @param scriptProvider
	 * 		script provider to execute.
	 */
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
			var scope = EJSScopeFactory.getInstance.create(scriptProvider.fullPath.removeLastSegments(1), map)
			ctx.evaluateString(scope, scriptProvider.getScript(), scriptProvider.fullPath.toPortableString, 1, null)
		} catch (CancellationException ce) {
			EJSConsole.singleton.errorStream.println("Execution was canceled.")
		} finally {
			Context.exit()
		}

		return Status.OK_STATUS
	}
}
