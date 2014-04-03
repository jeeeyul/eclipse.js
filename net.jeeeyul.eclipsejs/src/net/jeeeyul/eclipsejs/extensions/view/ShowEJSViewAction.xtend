package net.jeeeyul.eclipsejs.extensions.view

import net.jeeeyul.eclipsejs.extensions.view.CommonView
import org.eclipse.jface.action.Action
import org.eclipse.ui.IWorkbenchPage
import org.eclipse.ui.PlatformUI

class ShowEJSViewAction extends Action {
	String viewId
	new(String viewId){
		this.viewId = viewId
		this.text = viewId
	}
	
	override run() {
		PlatformUI.workbench.activeWorkbenchWindow.activePage.showView(CommonView.ID, viewId, IWorkbenchPage.VIEW_VISIBLE)
	}
	
}