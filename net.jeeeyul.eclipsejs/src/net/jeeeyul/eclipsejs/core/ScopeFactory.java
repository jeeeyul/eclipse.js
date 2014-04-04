package net.jeeeyul.eclipsejs.core;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.script.api.IO;
import net.jeeeyul.eclipsejs.script.context.EJSContextFactory;

import org.eclipse.core.runtime.IPath;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;
import org.osgi.framework.Bundle;

public class ScopeFactory {
	private static ScopeFactory instance;

	private IO io = new IO();

	public static ScopeFactory getInstance() {
		if (instance == null) {
			instance = new ScopeFactory();
		}
		return instance;
	}

	private ScopeFactory() {
	}

	public ScriptableObject create(IPath path) {
		return create(path, new HashMap<String, Object>());
	}

	public ScriptableObject create(IPath path, Map<String, Object> map) {
		Context ctx = EJSContextFactory.getSharedContext();
		ScriptableObject scope = ctx.initStandardObjects();

		ScriptableObject.putProperty(scope, "__REQUIRE__", new Require(path));

		for (String each : map.keySet()) {
			Object jsObj = Context.javaToJS(map.get(each), scope);
			ScriptableObject.putProperty(scope, each, jsObj);
		}

		loadCategory(ctx, scope, "both");
		loadCategory(ctx, scope, "runtime");

		return scope;
	}

	private void loadCategory(Context ctx, ScriptableObject scope,
			String category) {
		Bundle bundle = EclipseJSCore.getDefault().getBundle();
		Enumeration<URL> entries = bundle.findEntries("libraries/" + category,
				"*.js", false);
		ArrayList<URL> list = new ArrayList<URL>();
		while (entries.hasMoreElements()) {
			URL url = (URL) entries.nextElement();
			list.add(url);

		}

		Collections.sort(list, new Comparator<URL>() {
			@Override
			public int compare(URL o1, URL o2) {
				if (o1.getFile().equals("bootstrap.js")) {
					return Integer.MIN_VALUE;
				} else {
					return o1.getFile().compareTo(o2.getFile());
				}
			}
		});

		for (URL each : list) {
			try {
				String script = io.readInputStream(each.openStream(), "UTF-8");
				ctx.evaluateString(scope, script, "eclipsejs:/" + each.getPath(), 1, null);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
