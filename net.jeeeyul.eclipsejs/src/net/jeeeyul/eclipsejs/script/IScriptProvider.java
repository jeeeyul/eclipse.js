package net.jeeeyul.eclipsejs.script;

import org.eclipse.core.runtime.IPath;

public interface IScriptProvider {
	public String getScript();

	public String getScriptFileName();
	
	public IPath getFullPath();
}