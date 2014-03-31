package net.jeeeyul.eclipsejs.core;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;

public class EJSContextFactory extends ContextFactory {

	@Override
	protected Context makeContext() {
		return new EJSContext(this);
	}

}
