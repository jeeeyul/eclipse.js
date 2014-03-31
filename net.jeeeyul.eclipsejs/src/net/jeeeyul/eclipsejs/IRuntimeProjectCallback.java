package net.jeeeyul.eclipsejs;

import org.eclipse.core.resources.IProject;

public interface IRuntimeProjectCallback {
	public void projectPrepared(IProject project);
}
