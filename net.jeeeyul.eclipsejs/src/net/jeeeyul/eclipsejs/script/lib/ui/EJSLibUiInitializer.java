package net.jeeeyul.eclipsejs.script.lib.ui;

import net.jeeeyul.eclipsejs.ui.SharedImages;

import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.resource.ImageDescriptor;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.internal.ui.IJsGlobalScopeContainerInitializerExtension;

@SuppressWarnings("restriction")
public class EJSLibUiInitializer implements
		IJsGlobalScopeContainerInitializerExtension {

	public EJSLibUiInitializer() {
	}

	public ImageDescriptor getImage(IPath containerPath, String element,
			IJavaScriptProject project) {

		if (containerPath == null) {
			return null;
		}

		return SharedImages.getImageDescriptor(SharedImages.ECLIPSE_JS);
	}

}
