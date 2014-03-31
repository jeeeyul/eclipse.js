package net.jeeeyul.eclipsejs.ui

import net.jeeeyul.eclipsejs.EclipseJSCore
import org.eclipse.jface.action.Action

class ExecuteScriptAction extends Action {
	QueryView view
	ExecuteScriptJob job

	new(QueryView view) {
		this.view = view;
		this.imageDescriptor = SharedImages.getImageDescriptor(SharedImages.ECLIPSE_JS)
		this.text = "Execute"
		job = new ExecuteScriptJob(view)
	}

	override run() {
		EclipseJSCore.^default.getEJSProject [
			job.schedule()
		]
	}
	
}
