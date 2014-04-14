package net.jeeeyul.eclipsejs.util;

import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.IResourceVisitor;
import org.eclipse.core.runtime.CoreException;

/**
 * 
 * @author Jeeeyul
 *
 */
public class WorkspaceUtil {
	/**
	 * providing visitor for eclipse.js script context.
	 * 
	 * @param resource
	 * @param visitor
	 * @param depth
	 * @param memberFlags
	 * @throws CoreException
	 */
	public static void accept(IResource resource, IResourceVisitor visitor, int depth, int memberFlags) throws CoreException {
		resource.accept(visitor, depth, memberFlags);
	}

}
