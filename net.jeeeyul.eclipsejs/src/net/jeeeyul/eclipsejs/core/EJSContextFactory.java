package net.jeeeyul.eclipsejs.core;

import org.eclipse.core.runtime.IProgressMonitor;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;

public class EJSContextFactory extends ContextFactory {
	private IProgressMonitor monitor;

	public EJSContextFactory(IProgressMonitor monitor) {
		this.monitor = monitor;
	}

	@Override
	protected Context makeContext() {
		return new EJSContext(this, monitor);
	}
}
