package net.jeeeyul.eclipsejs.script.lib.ui;

import net.jeeeyul.eclipsejs.ui.SharedImages;

import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.internal.ui.IJsGlobalScopeContainerInitializerExtension;

/**
 * Provides eclipse.js jsdt library icon.
 * 
 * @author Jeeeyul
 *
 */
@SuppressWarnings("restriction")
public class EJSLibUiInitializer implements
		IJsGlobalScopeContainerInitializerExtension {

	public ImageDescriptor getImage(IPath containerPath, String element,
			IJavaScriptProject project) {

		if (containerPath == null) {
			return null;
		}

		return SharedImages.getImageDescriptor(SharedImages.ECLIPSE_JS);
	}

}
