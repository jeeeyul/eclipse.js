package net.jeeeyul.eclipsejs;

import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.osgi.framework.BundleContext;

/**
 * The activator class controls the plug-in life cycle
 */
public class EclipseJSCore extends AbstractUIPlugin {
	public static final String PROJECT_NAME = ".eclipse.js";

	// The plug-in ID
	public static final String PLUGIN_ID = "net.jeeeyul.eclipsejs"; //$NON-NLS-1$

	// The shared instance
	private static EclipseJSCore plugin;

	/**
	 * Returns the shared instance
	 *
	 * @return the shared instance
	 */
	public static EclipseJSCore getDefault() {
		return plugin;
	}

	private EnsureHiddenProject ensureHiddenProject = new EnsureHiddenProject();

	/**
	 * The constructor
	 */
	public EclipseJSCore() {
	}

	public void getWSQueryProject(IWSQProjectCallback callback) {
		ensureHiddenProject.addCallback(callback);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.ui.plugin.AbstractUIPlugin#start(org.osgi.framework.BundleContext
	 * )
	 */
	public void start(BundleContext context) throws Exception {
		super.start(context);
		plugin = this;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.eclipse.ui.plugin.AbstractUIPlugin#stop(org.osgi.framework.BundleContext
	 * )
	 */
	public void stop(BundleContext context) throws Exception {
		plugin = null;
		super.stop(context);
	}

}
