package net.jeeeyul.eclipsejs.extensions.view

import java.util.ArrayList
import net.jeeeyul.eclipsejs.EclipseJSCore
import net.jeeeyul.eclipsejs.core.Require
import org.eclipse.jface.action.IContributionItem
import org.eclipse.ui.actions.CompoundContributionItem
import org.eclipse.jface.action.ActionContributionItem

class ShowViewContribution extends CompoundContributionItem {
	override protected getContributionItems() {
		var result = new ArrayList<IContributionItem>
		val folder = EclipseJSCore.^default.preparedRuntimeProject.getFolder("extensions/views")

		for (eachModuleName : new Require(folder.fullPath).lookup) {
			result.add(new ActionContributionItem(new ShowEJSViewAction(eachModuleName)))
		}
		return result;
	}
}
