package net.jeeeyul.eclipsejs.ui;

import org.eclipse.jface.action.Action;

public class EJSAction extends Action {

	private IEJSAction action;
	private String name;

	public EJSAction(String name, IEJSAction action) {
		this.name = name;
		setText(name);
		this.action = action;
	}

	@Override
	public void run() {
		this.action.run();
	}

}
