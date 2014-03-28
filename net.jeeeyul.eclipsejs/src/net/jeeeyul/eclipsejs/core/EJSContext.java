package net.jeeeyul.eclipsejs.core;

import java.util.concurrent.CancellationException;

import org.eclipse.core.runtime.IProgressMonitor;
import org.mozilla.javascript.Context;

public class EJSContext extends Context {

	private IProgressMonitor monitor;

	public EJSContext(EJSContextFactory factory, IProgressMonitor monitor) {
		super(factory);
		this.monitor = monitor;
		setInstructionObserverThreshold(100);
	}

	@Override
	protected void observeInstructionCount(int instructionCount) {
		if (monitor.isCanceled()) {
			throw new CancellationException();
		}
	}
}
