package net.jeeeyul.eclipsejs.core;

import net.jeeeyul.eclipsejs.script.ScriptErrorPresenter;

import org.mozilla.javascript.Callable;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ContextFactory;
import org.mozilla.javascript.RhinoException;
import org.mozilla.javascript.Scriptable;

public class EJSContextFactory extends ContextFactory {
	static {
		ContextFactory.initGlobal(new EJSContextFactory());
	}

	public static EJSContext getSharedContext() {
		Context currentContext = Context.getCurrentContext();
		if (currentContext == null) {
			currentContext = ContextFactory.getGlobal().enterContext();
		}
		return (EJSContext) currentContext;
	}

	@Override
	protected Context makeContext() {
		EJSContext context = new EJSContext(this);
		return context;
	}

	@Override
	protected Object doTopCall(Callable callable, Context cx, Scriptable scope,
			Scriptable thisObj, Object[] args) {
		try {
			Object result = super.doTopCall(callable, cx, scope, thisObj, args);
			return result;
		} catch (RhinoException e) {
			ScriptErrorPresenter.INSTANCE.showError(e);
			throw e;
		}
	}
}
