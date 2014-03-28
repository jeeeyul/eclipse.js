package net.jeeeyul.eclipsejs;

import net.jeeeyul.eclipsejs.api.EJSConsole;

import org.eclipse.ui.console.IConsoleFactory;

public class EJSConsoleFactory implements IConsoleFactory {

	@Override
	public void openConsole() {
		EJSConsole.getSingleton().activate();
	}

}
