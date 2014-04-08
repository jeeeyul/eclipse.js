package net.jeeeyul.eclipsejs.extensions.builder

import net.jeeeyul.eclipsejs.EclipseJSCore
import net.jeeeyul.eclipsejs.extensions.EJSExtension
import org.eclipse.core.resources.IProject
import org.eclipse.core.resources.IResourceDelta
import org.eclipse.core.runtime.IProgressMonitor

class ContributedBuilder {
	EJSExtension module

	new(String builderId) {
		module = EclipseJSCore.^default.getExtension("builders", builderId, builderId)
	}

	def incremetalBuild(IResourceDelta delta, IProgressMonitor monitor) {
		module.callInstanceFunction("build", delta, monitor)
	}
	
	def fullBuild(IProject project, IProgressMonitor monitor){
		module.callInstanceFunction("fullBuild", project, monitor)
	}
	
	def clean(IProject project, IProgressMonitor monitor){
		module.callInstanceFunction("clean", project, monitor)
	}
	

}
