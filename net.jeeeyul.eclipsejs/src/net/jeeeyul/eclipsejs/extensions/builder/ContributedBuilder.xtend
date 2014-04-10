package net.jeeeyul.eclipsejs.extensions.builder

import net.jeeeyul.eclipsejs.EclipseJSCore
import net.jeeeyul.eclipsejs.extensions.EJSExtension
import org.eclipse.core.resources.IProject
import org.eclipse.core.resources.IResourceDelta
import org.eclipse.core.runtime.IProgressMonitor
import org.json.simple.JSONObject

class ContributedBuilder {
	EJSExtension fModule
	@Property JSONObject options

	new(String builderId) {
		fModule = EclipseJSCore.^default.getExtension("builders", builderId, builderId)
	}

	def incremetalBuild(IResourceDelta delta, IProgressMonitor monitor) {
		fModule.callInstanceFunction("build", delta, monitor, options)
	}
	
	def fullBuild(IProject project, IProgressMonitor monitor){
		fModule.callInstanceFunction("fullBuild", project, monitor, options)
	}
	
	def clean(IProject project, IProgressMonitor monitor){
		fModule.callInstanceFunction("clean", project, monitor, options)
	}
}