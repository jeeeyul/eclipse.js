package net.jeeeyul.eclipsejs.extensions.builder.ui

import net.jeeeyul.eclipsejs.extensions.builder.EJSNature
import net.jeeeyul.eclipsejs.ui.SharedImages
import org.eclipse.core.resources.IProject
import org.eclipse.jface.action.Action

class AddEJSNatureAction extends Action {
	IProject project

	new(IProject project) {
		this.project = project;
		setImageDescriptor(SharedImages.getImageDescriptor(SharedImages.ECLIPSE_JS));
		setText("Add Eclipse.JS Nature");
	}

	override run() {
		new AddNatureJob(project, EJSNature.ID).schedule()
	}

}
