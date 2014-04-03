package net.jeeeyul.eclipsejs.script.api;

import java.io.PrintStream;
import java.io.UnsupportedEncodingException;
import org.eclipse.ui.console.IOConsoleOutputStream;

public class ErdConsolePrintStream extends PrintStream {
	private final IOConsoleOutputStream out;

	public boolean isActivateOnWrite() {
		return this.out.isActivateOnWrite();
	}

	public void setActivateOnWrite(boolean activateOnWrite) {
		this.out.setActivateOnWrite(activateOnWrite);
	}

	public ErdConsolePrintStream(IOConsoleOutputStream out, String encoding)
			throws UnsupportedEncodingException {
		super(out, true, encoding);
		this.out = out;
	}
}