package net.jeeeyul.eclipsejs.extensions.builder.ui

import org.eclipse.ui.actions.CompoundContributionItem
import java.util.List
import org.eclipse.jface.action.IContributionItem
import java.util.ArrayList
import org.eclipse.ui.menus.IWorkbenchContribution
import org.eclipse.ui.services.IServiceLocator
import org.eclipse.ui.ISelectionService
import org.eclipse.jface.viewers.IStructuredSelection
import org.eclipse.core.runtime.Platform
import org.eclipse.core.resources.IResource
import org.eclipse.core.resources.IProject
import net.jeeeyul.eclipsejs.extensions.builder.EJSNature
import org.eclipse.jface.action.ActionContributionItem

class NatureContribution extends CompoundContributionItem implements IWorkbenchContribution {
	IServiceLocator serviceLocator

	override protected getContributionItems() {
		var List<IContributionItem> result = new ArrayList()

		if (project != null) {
			if (!project.description.natureIds.contains(EJSNature.ID)) {
				result += new ActionContributionItem(new AddEJSNatureAction(project))
			}
		}

		return result
	}

	override initialize(IServiceLocator serviceLocator) {
		this.serviceLocator = serviceLocator
	}

	def private getSelection() {
		var service = serviceLocator.getService(ISelectionService) as ISelectionService
		return service.selection
	}

	def private IProject getProject() {
		if (selection instanceof IStructuredSelection) {
			var structuredSelection = selection as IStructuredSelection
			var array = structuredSelection.toArray
			if (array.size == 1) {
				var resource = Platform.adapterManager.getAdapter(structuredSelection.firstElement, IResource) as IResource
				if (resource != null) {
					return resource.project
				}

			}
		}
		return null;
	}

}
