package net.jeeeyul.eclipsejs.core;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;

public class EJSContextFactory extends ContextFactory {
	static{
		ContextFactory.initGlobal(new EJSContextFactory());
	}
	
	public static EJSContext getSharedContext(){
		Context currentContext = Context.getCurrentContext();
		if(currentContext == null){
			currentContext = ContextFactory.getGlobal().enterContext();
		}
		return (EJSContext) currentContext;
	}

	@Override
	protected Context makeContext() {
		return new EJSContext(this);
	}

}
