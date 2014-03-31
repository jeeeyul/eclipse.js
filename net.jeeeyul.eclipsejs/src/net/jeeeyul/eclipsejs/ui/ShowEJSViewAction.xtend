package net.jeeeyul.eclipsejs.ui

import org.eclipse.jface.action.Action
import org.eclipse.ui.PlatformUI
import org.eclipse.ui.IWorkbenchPage

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