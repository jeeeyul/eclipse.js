package net.jeeeyul.eclipsejs.ui.console;

import org.eclipse.ui.console.IConsoleFactory;

/**
 * Console factory for {@link EJSConsole}.
 * 
 * @author Jeeeyul
 *
 */
public class EJSConsoleFactory implements IConsoleFactory {

	@Override
	public void openConsole() {
		EJSConsole.getSingleton().activate();
	}

}
