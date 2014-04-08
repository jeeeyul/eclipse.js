package net.jeeeyul.eclipsejs.core;

import java.io.IOException;
import java.net.URL;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.util.IO;

import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;
import org.osgi.framework.Bundle;

/**
 * 
 * @author Jeeeyul
 * @see #create(IPath, Map)
 *
 */
public class EJSScopeFactory {
	private static EJSScopeFactory instance;

	private IO io = new IO();

	public static EJSScopeFactory getInstance() {
		if (instance == null) {
			instance = new EJSScopeFactory();
		}
		return instance;
	}

	private EJSScopeFactory() {
	}

	public ScriptableObject create(IPath path) {
		return create(path, new HashMap<String, Object>());
	}

	/**
	 * Creates a java script scope for eclipse.js scripts. Returned scope will
	 * contains all libraries that shipped with eclipse.js and
	 * <code>require</code> functionality.
	 * 
	 * @param path
	 *            Working directory path. It will be passed as "__dirname" in
	 *            script. This path will be used as offset path of
	 *            <code>require()</code> function also.
	 * @param map
	 *            Additional objects to pass java script scope.
	 * @return java script scope.
	 */
	public ScriptableObject create(IPath path, Map<String, Object> map) {
		IFolder folder = ResourcesPlugin.getWorkspace().getRoot()
				.getFolder(path);
		if (folder.exists() == false) {
			throw new IllegalArgumentException(MessageFormat.format(
					"{0} is not indicating folder", path));
		}
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
				ctx.evaluateString(scope, script,
						"eclipsejs:/" + each.getPath(), 1, null);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

}
