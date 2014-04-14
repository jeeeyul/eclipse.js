package net.jeeeyul.eclipsejs.ui.console;

import java.io.PrintStream;
import java.io.UnsupportedEncodingException;
import org.eclipse.ui.console.IOConsoleOutputStream;

/**
 * {@link PrintStream} for {@link EJSConsole}. It wraps
 * {@link IOConsoleOutputStream} as {@link PrintStream} for convenience.
 * 
 * @author Jeeeyul
 *
 */
public class ConsolePrintStream extends PrintStream {
	private final IOConsoleOutputStream out;

	/**
	 * Returns whether the console this stream is writing to will be activated
	 * when this stream is written to.
	 *
	 * @return whether the console this stream is writing to will be activated
	 *         when this stream is written to.
	 */
	public boolean isActivateOnWrite() {
		return this.out.isActivateOnWrite();
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
		this.out.setActivateOnWrite(activateOnWrite);
	}

	/**
	 * creates a new {@link ConsolePrintStream}.
	 * 
	 * @param out
	 * @param encoding
	 * @throws UnsupportedEncodingException
	 */
	public ConsolePrintStream(IOConsoleOutputStream out, String encoding) throws UnsupportedEncodingException {
		super(out, true, encoding);
		this.out = out;
	}
}