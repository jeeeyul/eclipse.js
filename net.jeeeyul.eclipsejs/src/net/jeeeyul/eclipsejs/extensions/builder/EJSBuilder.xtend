package net.jeeeyul.eclipsejs.extensions.builder

import java.util.Map
import org.eclipse.core.resources.IncrementalProjectBuilder
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.SubProgressMonitor

class EJSBuilder extends IncrementalProjectBuilder {
	public static val String ID = "net.jeeeyul.eclipsejs.builder"

	override protected build(int kind, Map<String, String> args, IProgressMonitor monitor) throws CoreException {
		var builderIds = args.get("ejs-builders").split("(\\s|,)+")

		monitor.beginTask("E.JS Builder", builderIds.size * 100)

		for (each : builderIds) {
			try {
				var eachBuilder = new ContributedBuilder(each);
				eachBuilder.build(project.delta, new SubProgressMonitor(monitor, 100))
			} catch (Exception e) {
				e.printStackTrace()
			}
		}

		return #[]
	}

}
