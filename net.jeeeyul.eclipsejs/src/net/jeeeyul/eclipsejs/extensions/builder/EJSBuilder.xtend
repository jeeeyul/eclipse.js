package net.jeeeyul.eclipsejs.extensions.builder

import java.util.ArrayList
import java.util.Map
import net.jeeeyul.eclipsejs.util.IO
import org.eclipse.core.resources.IncrementalProjectBuilder
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.SubProgressMonitor
import org.json.simple.JSONObject
import org.json.simple.parser.JSONParser
import java.util.List

class EJSBuilder extends IncrementalProjectBuilder {
	private JSONParser jsonParser = new JSONParser()
	public static val String ID = "net.jeeeyul.eclipsejs.builder"

	override protected build(int kind, Map<String, String> args, IProgressMonitor monitor) throws CoreException {
		switch (kind) {
			case FULL_BUILD:
				builders.fullBuild(monitor)
			case INCREMENTAL_BUILD:
				builders.incremetalBuild(monitor)
			case AUTO_BUILD:
				builders.incremetalBuild(monitor)
		}

		return #[]
	}
	
	def private JSONObject getBuilderSettings() {
		var file = project.getFile(".ejs.build.json")
		if (file == null) {
			return null
		}
		var jsonSource = IO.instance.readInputStream(file.contents, file.charset)
		var result = jsonParser.parse(jsonSource) as JSONObject

		return result
	}

	override protected clean(IProgressMonitor monitor) throws CoreException {
		builders.clean(monitor)
	}

	private def fullBuild(ContributedBuilder[] builders, IProgressMonitor monitor) {
		monitor.beginTask("E.JS Builder", builders.length * 100)

		for (each : builders) {
			var subMonitor = new SubProgressMonitor(monitor, 100)
			try {
				each.fullBuild(project, subMonitor)
			} catch (Exception e) {
				e.printStackTrace()
			} finally {
				subMonitor.done()
			}
		}
	}

	private def incremetalBuild(ContributedBuilder[] builders, IProgressMonitor monitor) {
		monitor.beginTask("E.JS Builder", builders.length * 100)

		for (each : builders) {
			var subMonitor = new SubProgressMonitor(monitor, 100)
			try {
				each.incremetalBuild(project.delta, subMonitor)
			} catch (Exception e) {
				e.printStackTrace()
			} finally {
				subMonitor.done()
			}
		}
	}

	private def clean(ContributedBuilder[] builders, IProgressMonitor monitor) {
		monitor.beginTask("E.JS Builder", builders.length * 100)

		for (each : builders) {
			var subMonitor = new SubProgressMonitor(monitor, 100)
			try {
				each.clean(project, subMonitor)
			} catch (Exception e) {
				e.printStackTrace()
			} finally {
				subMonitor.done()
			}
		}
	}

	private def ContributedBuilder[] getBuilders() {
		var settings = builderSettings
		if(settings == null){
			return #[]
		}
		
		val List<String> builderIds = newArrayList()

		settings.keySet.forEach [
			builderIds += it.toString
		]

		val builders = new ArrayList<ContributedBuilder>()

		builderIds.forEach [
			try {
				var eachBuilder = new ContributedBuilder(it)
				builders += eachBuilder
			} catch (Exception e) {
				e.printStackTrace();
			}
		]

		return builders
	}

}
