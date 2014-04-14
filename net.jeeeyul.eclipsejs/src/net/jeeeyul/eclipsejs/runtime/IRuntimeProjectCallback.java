package net.jeeeyul.eclipsejs.runtime;

import org.eclipse.core.resources.IProject;

/**
 * Callback instance for runtime project preparation.
 * 
 * @author Jeeeyul
 *
 */
public interface IRuntimeProjectCallback {
	/**
	 * Called when eclipse.js runtime project is prepared.
	 * 
	 * @param project
	 *            prepared runtime project.
	 */
	public void projectPrepared(IProject project);
}
