package net.jeeeyul.eclipsejs.core;

import org.json.simple.JSONObject;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.WrapFactory;
import org.mozilla.javascript.json.JsonParser;
import org.mozilla.javascript.json.JsonParser.ParseException;

/**
 * Wraps Java Object to Java Script Objects in {@link EJSContext} by
 * {@link EJSContextFactory}.
 * 
 * @author Jeeeyul
 * 
 * @since 0.1
 *
 */
public class EJSWrapFactory extends WrapFactory {

	/**
	 * Creates an {@link EJSWrapFactory}. It is called by
	 * {@link EJSContextFactory}. Not intended to be call by clients.
	 */
	public EJSWrapFactory() {
	}

	@Override
	public Scriptable wrapAsJavaObject(Context cx, Scriptable scope,
			Object javaObject, Class<?> staticType) {

		if (javaObject instanceof JSONObject) {
			try {
				return (Scriptable) new JsonParser(cx, scope)
						.parseValue(javaObject.toString());
			} catch (ParseException e) {
				e.printStackTrace();
				return null;
			}
		} else {
			return super.wrapAsJavaObject(cx, scope, javaObject, staticType);
		}
	}
}
