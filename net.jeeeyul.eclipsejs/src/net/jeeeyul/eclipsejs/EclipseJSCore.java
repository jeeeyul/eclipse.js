package net.jeeeyul.eclipsejs;

import net.jeeeyul.eclipsejs.core.Require;
import net.jeeeyul.eclipsejs.extensions.EJSExtension;
import net.jeeeyul.eclipsejs.runtime.EnsureRuntimeProject;
import net.jeeeyul.eclipsejs.runtime.IRuntimeProjectCallback;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.osgi.framework.BundleContext;

/**
 * The activator class controls the plug-in life cycle
 */
public class EclipseJSCore extends AbstractUIPlugin implements
		IResourceChangeListener {
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

	private IProject runtimeProject;

	private EnsureRuntimeProject ensureRuntimeProject;;

	/**
	 * The constructor
	 */
	public EclipseJSCore() {
	}

	private EnsureRuntimeProject getEnsureRuntimeProject() {
		if (ensureRuntimeProject == null) {
			ensureRuntimeProject = new EnsureRuntimeProject();
			ensureRuntimeProject.addCallback(new IRuntimeProjectCallback() {
				@Override
				public void projectPrepared(IProject project) {
					runtimeProject = project;
				}
			});
		}
		return ensureRuntimeProject;
	}

	public IProject getPreparedRuntimeProject() {
		return runtimeProject;
	}

	public void getRuntimeProject(IRuntimeProjectCallback callback) {
		getEnsureRuntimeProject().addCallback(callback);
	}

	public boolean isRuntimeProjectPrepared() {
		return runtimeProject != null && runtimeProject.exists()
				&& runtimeProject.isOpen();
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
		getRuntimeProject(new IRuntimeProjectCallback() {
			@Override
			public void projectPrepared(IProject project) {
			}
		});

		ResourcesPlugin.getWorkspace().addResourceChangeListener(this);
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
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(this);
		super.stop(context);
	}

	@Override
	public void resourceChanged(IResourceChangeEvent event) {
		IResourceDelta delta = event.getDelta();
		if (delta == null) {
			return;
		}
		IResourceDelta member = delta.findMember(new Path("/" + PROJECT_NAME));
		if (member != null) {
			Require.unloadModulesForAllThread();
		}
	}

	public EJSExtension getExtension(String point, String id, Object... args) {
		return new EJSExtension(point, id, args);
	}

}
