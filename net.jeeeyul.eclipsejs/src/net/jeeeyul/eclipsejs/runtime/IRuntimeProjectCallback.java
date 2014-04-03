package net.jeeeyul.eclipsejs.runtime;

import org.eclipse.core.resources.IProject;

public interface IRuntimeProjectCallback {
	public void projectPrepared(IProject project);
}
