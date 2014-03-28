package net.jeeeyul.eclipsejs.core;

import net.jeeeyul.eclipsejs.EclipseJSCore;

import org.eclipse.core.runtime.IPath;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IJsGlobalScopeContainer;
import org.eclipse.wst.jsdt.core.JsGlobalScopeContainerInitializer;
import org.eclipse.wst.jsdt.core.compiler.libraries.LibraryLocation;
import org.eclipse.wst.jsdt.core.compiler.libraries.SystemLibraryLocation;

public class EJSLibraryInitializer extends JsGlobalScopeContainerInitializer
		implements IJsGlobalScopeContainer {

	public static final String LIB_ID = "net.jeeeyul.eclipsejs.lib";
	public static final String LIB_NAME = "Eclipse.JS Libraries";
	public static final String LIB_MAIN_FILENAME = "wsq.js";
	public static final String LIB_UNDERSCORE_FILENAME = "underscore.js";

	public EJSLibraryInitializer() {
	}

	@Override
	public LibraryLocation getLibraryLocation() {
		return WQLibraryLocation.getInstance();
	}

	static class WQLibraryLocation extends SystemLibraryLocation {

		private static LibraryLocation fInstance;

		public static LibraryLocation getInstance() {
			if (fInstance == null) {
				fInstance = new WQLibraryLocation();
			}
			return fInstance;
		}

		public char[][] getLibraryFileNames() {
			return new char[][] { LIB_UNDERSCORE_FILENAME.toCharArray(),
					LIB_MAIN_FILENAME.toCharArray() };
		}

		@Override
		protected String getPluginId() {
			return EclipseJSCore.PLUGIN_ID;
		}
	}

	@Override
	public String getDescription() {
		return LIB_NAME;
	}

	@Override
	public boolean canUpdateJsGlobalScopeContainer(IPath containerPath,
			IJavaScriptProject project) {
		return true;
	}
}
