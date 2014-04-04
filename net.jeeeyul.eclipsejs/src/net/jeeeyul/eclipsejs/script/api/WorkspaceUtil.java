package net.jeeeyul.eclipsejs.script.api;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceVisitor;
import org.eclipse.core.runtime.CoreException;

public class WorkspaceUtil {

	public WorkspaceUtil() {
	}

	public static void accept(IResource resource, IResourceVisitor visitor, int depth,
			int memberFlags) throws CoreException {
		resource.accept(visitor, depth, memberFlags);
	}

}
