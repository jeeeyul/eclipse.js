package net.jeeeyul.eclipsejs.extensions.builder

import org.eclipse.core.resources.IProjectNature
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.resources.IProject
import java.util.List
import org.eclipse.core.resources.ICommand
import org.eclipse.core.runtime.NullProgressMonitor

class EJSNature implements IProjectNature {
	public static val String ID = "net.jeeeyul.eclipsejs.nature"

	IProject project

	override configure() throws CoreException {
		var desc = project.description
		var List<ICommand> buildSpec = newArrayList(desc.buildSpec) as List<ICommand>
		buildSpec += desc.newCommand => [
			it.builderName = EJSBuilder.ID
			it.arguments = #{"A" -> "B"}
		]
		desc.buildSpec = buildSpec
		project.setDescription(desc, new NullProgressMonitor)
	}

	override deconfigure() throws CoreException {
		var desc = project.description
		var List<ICommand> buildSpec = newArrayList(desc.buildSpec)
		buildSpec = buildSpec.filter [
			return it.builderName != EJSBuilder.ID
		].toList
		
		desc.buildSpec = buildSpec
		project.setDescription(desc, new NullProgressMonitor)
	}

	override getProject() {
		this.project
	}

	override setProject(IProject project) {
		this.project = project
	}

}
