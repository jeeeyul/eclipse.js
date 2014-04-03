package net.jeeeyul.eclipsejs.script.context;

import java.util.concurrent.CancellationException;

import org.eclipse.core.runtime.IProgressMonitor;
import org.mozilla.javascript.Context;

public class EJSContext extends Context {

	private IProgressMonitor monitor;

	public void setMonitor(IProgressMonitor monitor) {
		this.monitor = monitor;
		setInstructionObserverThreshold(100);
	}

	public EJSContext(EJSContextFactory factory) {
		super(factory);
	}

	@Override
	protected void observeInstructionCount(int instructionCount) {
		if (monitor != null && monitor.isCanceled()) {
			throw new CancellationException();
		}
	}
}
