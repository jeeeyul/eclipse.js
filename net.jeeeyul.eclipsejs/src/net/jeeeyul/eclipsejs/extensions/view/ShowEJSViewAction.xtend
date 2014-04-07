package net.jeeeyul.eclipsejs.extensions.view

import net.jeeeyul.eclipsejs.EclipseJSCore
import org.eclipse.jface.action.Action
import org.eclipse.ui.IWorkbenchPage
import org.eclipse.ui.PlatformUI
import org.eclipse.jface.resource.ImageDescriptor
import org.eclipse.swt.graphics.ImageData

class ShowEJSViewAction extends Action {
	String viewId
	new(String viewId){
		var module = EclipseJSCore.^default.getExtension("views", viewId)
		this.viewId = viewId
		this.text = module.getMetaData("name") as String
		val iconPath = module.getMetaData("icon") as String
		if(iconPath != null){
			var iconFile = module.getResourceFile(iconPath)
			var data = new ImageData(iconFile.contents)
			this.imageDescriptor = ImageDescriptor.createFromImageData(data)
		}
	}
	
	override run() {
		PlatformUI.workbench.activeWorkbenchWindow.activePage.showView(CommonView.ID, viewId, IWorkbenchPage.VIEW_VISIBLE)
	}
	
	
}