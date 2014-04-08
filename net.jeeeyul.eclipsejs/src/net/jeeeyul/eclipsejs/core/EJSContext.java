package net.jeeeyul.eclipsejs.core;

import java.util.concurrent.CancellationException;

import org.eclipse.core.runtime.IProgressMonitor;
import org.mozilla.javascript.Context;

/**
 * Execution Context for eclipse.js scripts. It is basically same as rhino's
 * default. However there is termination functionality by progress monitor was
 * added. see {@link #observeInstructionCount(int)}
 * 
 * @author Jeeeyul
 *
 */
public class EJSContext extends Context {

	private IProgressMonitor monitor;

	/**
	 * sets a {@link IProgressMonitor} that can terminate script by cancel.
	 * 
	 * @param monitor
	 */
	public void setMonitor(IProgressMonitor monitor) {
		this.monitor = monitor;
		setInstructionObserverThreshold(100);
	}

	protected EJSContext(EJSContextFactory factory) {
		super(factory);
		setErrorReporter(new EJSErrorReporter());
	}

	@Override
	protected void observeInstructionCount(int instructionCount) {
		if (monitor != null && monitor.isCanceled()) {
			throw new CancellationException();
		}
	}

}
