package net.jeeeyul.eclipsejs.extensions.builder.ui

import java.util.List
import net.jeeeyul.eclipsejs.EclipseJSCore
import net.jeeeyul.eclipsejs.util.FileUtil
import org.eclipse.core.resources.IProject
import org.eclipse.core.resources.WorkspaceJob
import org.eclipse.core.runtime.CoreException
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.IStatus
import org.eclipse.core.runtime.Status

class AddNatureJob extends WorkspaceJob {
	String natureId
	IProject project

	new(IProject project, String nature) {
		super("Add Nature")
		this.project = project
		this.natureId = nature
		user = true
	}

	override runInWorkspace(IProgressMonitor monitor) throws CoreException {
		val desc = project.description
		var List<String> natures = newArrayList(desc.natureIds)
		if (natures.contains(natureId)) {
			return new Status(IStatus.ERROR, EclipseJSCore.PLUGIN_ID, "Eclipse.JS nature was already added.");
		}
		
		natures.add(natureId)
		desc.natureIds = natures
		project.setDescription(desc, monitor)
		
		var buildFile = project.getFile("ejs-build.json")
		if(!buildFile.exists){
			FileUtil.instance.createWithTextContent(buildFile, "{}");
		}
		
		return Status.OK_STATUS
	}

}
