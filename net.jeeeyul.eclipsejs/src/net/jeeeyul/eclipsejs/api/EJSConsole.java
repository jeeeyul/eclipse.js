package net.jeeeyul.eclipsejs.api;

import java.io.UnsupportedEncodingException;

import net.jeeeyul.eclipsejs.ui.SharedImages;

import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.console.ConsolePlugin;
import org.eclipse.ui.console.IConsole;
import org.eclipse.ui.console.IConsoleManager;
import org.eclipse.ui.console.IOConsole;
import org.eclipse.ui.console.IOConsoleOutputStream;

public class EJSConsole extends IOConsole {

	public static final String TYPE = "eclipse.js"; //$NON-NLS-1$
	private static EJSConsole INSTANCE;

	public static EJSConsole getSingleton() {
		if (INSTANCE == null) {
			INSTANCE = new EJSConsole();
			IConsoleManager consoleManager = ConsolePlugin.getDefault()
					.getConsoleManager();
			consoleManager.addConsoles(new IConsole[] { INSTANCE });
			INSTANCE.setActivateOnWrite(true);
		}
		return INSTANCE;
	}

	private ErdConsolePrintStream errorStream;
	private ErdConsolePrintStream normalStream;

	private boolean isActiveOnWrite;

	public EJSConsole() {
		super("Eclipse.JS", TYPE, SharedImages
				.getImageDescriptor(SharedImages.ECLIPSE_JS), null, true);
	}

	@Override
	public void firePropertyChange(final Object source, final String property,
			final Object oldValue, final Object newValue) {
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

	public synchronized ErdConsolePrintStream getErrorStream() {
		if (this.errorStream == null) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					IOConsoleOutputStream newOutputStream = newOutputStream();
					newOutputStream.setEncoding("utf-8"); //$NON-NLS-1$
					newOutputStream.setColor(Display.getDefault().getSystemColor(
							SWT.COLOR_RED));
					try {
						EJSConsole.this.errorStream = new ErdConsolePrintStream(newOutputStream,
								"utf-8"); //$NON-NLS-1$
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
			});
			
		}
		return this.errorStream;
	}

	public synchronized ErdConsolePrintStream getNormalStream() {
		if (this.normalStream == null) {
			IOConsoleOutputStream newOutputStream = newOutputStream();
			newOutputStream.setEncoding("utf-8"); //$NON-NLS-1$
			try {
				this.normalStream = new ErdConsolePrintStream(newOutputStream,
						"utf-8"); //$NON-NLS-1$
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return this.normalStream;
	}

	public boolean isActivateOnWrite() {
		return this.isActiveOnWrite;
	}

	public void setActivateOnWrite(boolean activateOnWrite) {
		if (this.isActiveOnWrite == activateOnWrite) {
			return;
		}
		getNormalStream().setActivateOnWrite(activateOnWrite);
		getErrorStream().setActivateOnWrite(activateOnWrite);
		this.isActiveOnWrite = activateOnWrite;
	}
}
