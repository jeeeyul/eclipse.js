package net.jeeeyul.eclipsejs.ui;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.IWSQProjectCallback;
import net.jeeeyul.eclipsejs.core.ScopeFactory;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.Path;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.ViewPart;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.ScriptableObject;

public class CommonView extends ViewPart {

	private Composite wrap;
	private Context context;
	private ScriptableObject scope;

	public CommonView() {
	}

	@Override
	public void init(IViewSite site) throws PartInitException {
		super.init(site);

		context = Context.getCurrentContext();
		String viewId = getViewSite().getSecondaryId();
		Path viewFilePath = new Path("views/" + viewId + ".js");

		scope = ScopeFactory.getInstance().create(viewFilePath);

		context.evaluateString(scope,
				"var view = require('/.eclipse.js/extensions/views/" + viewId
						+ "')", "view-" + viewId, 1, null);

		
		callViewFunction("init", site);
		
		Object partName = callViewFunction("getPartName");
		if (partName != null) {
			setPartName((String) Context.jsToJava(partName, String.class));
			firePropertyChange(PROP_TITLE);
		}
	}

	@Override
	public void createPartControl(Composite parent) {
		wrap = new Composite(parent, SWT.NORMAL);
		wrap.setLayout(new FillLayout());

		EclipseJSCore.getDefault().getEJSProject(new IWSQProjectCallback() {
			@Override
			public void projectPrepared(IProject project) {
				doCreate(project);
			}
		});
	}

	protected void doCreate(final IProject project) {
		if (Thread.currentThread() != Display.getDefault().getThread()) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					doCreate(project);
				}
			});
			return;
		}

		if (wrap == null || wrap.isDisposed()) {
			return;
		}

		callViewFunction("create", wrap);
	}

	private Object callViewFunction(String name, Object... args) {
		ScriptableObject view = (ScriptableObject) ScriptableObject
				.getProperty(scope, "view");
		Object fn = ScriptableObject.getProperty(view, name);
		if (fn instanceof Function) {
			return ((Function) fn).call(context, view, view, args);
		} else {
			return null;
		}
	}

	@Override
	public void setFocus() {
		wrap.setFocus();
	}

}
