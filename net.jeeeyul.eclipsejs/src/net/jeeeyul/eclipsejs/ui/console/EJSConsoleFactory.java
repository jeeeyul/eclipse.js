package net.jeeeyul.eclipsejs.ui.console;

import org.eclipse.ui.console.IConsoleFactory;

public class EJSConsoleFactory implements IConsoleFactory {

	@Override
	public void openConsole() {
		EJSConsole.getSingleton().activate();
	}

}
