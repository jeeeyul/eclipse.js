package net.jeeeyul.eclipsejs.ui.console;

import java.io.UnsupportedEncodingException;

import net.jeeeyul.eclipsejs.ui.SharedImages;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.console.ConsolePlugin;
import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsoleManager;
import org.eclipse.ui.console.IOConsole;
import org.eclipse.ui.console.IOConsoleOutputStream;

/**
 * console for eclipse.js scripts.
 * 
 * @author Jeeeyul
 *
 */
public class EJSConsole extends IOConsole {
	/**
	 * console type.
	 */
	public static final String TYPE = "eclipse.js"; //$NON-NLS-1$

	private static EJSConsole INSTANCE;

	/**
	 * 
	 * @return {@link EJSConsole} singleton instance.
	 */
	public static EJSConsole getSingleton() {
		if (INSTANCE == null) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					INSTANCE = new EJSConsole();
					IConsoleManager consoleManager = ConsolePlugin.getDefault().getConsoleManager();
					consoleManager.addConsoles(new IConsole[] { INSTANCE });
					INSTANCE.setActivateOnWrite(true);
				}
			});

		}
		return INSTANCE;
	}

	private ConsolePrintStream errorStream;
	private ConsolePrintStream normalStream;

	private boolean isActiveOnWrite;

	private EJSConsole() {
		super("Eclipse.JS", TYPE, SharedImages.getImageDescriptor(SharedImages.ECLIPSE_JS), null, true);
	}

	@Override
	public void firePropertyChange(final Object source, final String property, final Object oldValue, final Object newValue) {
		if (Thread.currentThread() != Display.getDefault().getThread()) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					firePropertyChange(source, property, oldValue, newValue);
				}
			});
			return;
		}
		super.firePropertyChange(source, property, oldValue, newValue);
	}

	/**
	 * 
	 * @return {@link ConsolePrintStream} for error.
	 */
	public synchronized ConsolePrintStream getErrorStream() {
		if (this.errorStream == null) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					IOConsoleOutputStream newOutputStream = newOutputStream();
					newOutputStream.setEncoding("utf-8"); //$NON-NLS-1$
					newOutputStream.setColor(Display.getDefault().getSystemColor(SWT.COLOR_RED));
					try {
						EJSConsole.this.errorStream = new ConsolePrintStream(newOutputStream, "utf-8"); //$NON-NLS-1$
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
			});

		}
		return this.errorStream;
	}

	/**
	 * @return {@link ConsolePrintStream} for normal output.
	 */
	public synchronized ConsolePrintStream getNormalStream() {
		if (this.normalStream == null) {
			IOConsoleOutputStream newOutputStream = newOutputStream();
			newOutputStream.setEncoding("utf-8"); //$NON-NLS-1$
			try {
				this.normalStream = new ConsolePrintStream(newOutputStream, "utf-8"); //$NON-NLS-1$
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return this.normalStream;
	}

	/**
	 * Returns whether the console this stream is writing to will be activated
	 * when this stream is written to.
	 *
	 * @return whether the console this stream is writing to will be activated
	 *         when this stream is written to.
	 */
	public boolean isActivateOnWrite() {
		return this.isActiveOnWrite;
	}

	/**
	 * Sets whether to activate the console this stream is writing to when this
	 * stream is written to.
	 *
	 * @param activateOnWrite
	 *            whether the console this stream is writing to will be
	 *            activated when this stream is written to.
	 */
	public void setActivateOnWrite(boolean activateOnWrite) {
		if (this.isActiveOnWrite == activateOnWrite) {
			return;
		}
		getNormalStream().setActivateOnWrite(activateOnWrite);
		getErrorStream().setActivateOnWrite(activateOnWrite);
		this.isActiveOnWrite = activateOnWrite;
	}
}
