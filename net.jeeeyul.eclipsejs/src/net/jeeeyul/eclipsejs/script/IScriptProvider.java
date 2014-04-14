package net.jeeeyul.eclipsejs.script;

import org.eclipse.core.runtime.IPath;

/**
 * Executable script provider.
 * 
 * @author Jeeeyul
 * @see ExecuteScriptJob
 *
 */
public interface IScriptProvider {
	/**
	 * 
	 * @return script text content.
	 */
	public String getScript();

	/**
	 * 
	 * @return the path of script.
	 */
	public IPath getFullPath();
}
