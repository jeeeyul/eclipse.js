package net.jeeeyul.eclipsejs.ui.console;

import net.jeeeyul.eclipsejs.script.api.EJSConsole;

import org.eclipse.ui.console.IConsoleFactory;

public class EJSConsoleFactory implements IConsoleFactory {

	@Override
	public void openConsole() {
		EJSConsole.getSingleton().activate();
	}

}
