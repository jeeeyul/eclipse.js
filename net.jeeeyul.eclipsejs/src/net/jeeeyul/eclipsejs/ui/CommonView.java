package net.jeeeyul.eclipsejs.ui;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.IWSQProjectCallback;
import net.jeeeyul.eclipsejs.core.EJSContextFactory;
import net.jeeeyul.eclipsejs.core.FileScript;
import net.jeeeyul.eclipsejs.core.ScopeFactory;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.NullProgressMonitor;
import org.eclipse.core.runtime.Path;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.ViewPart;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;

public class CommonView extends ViewPart {

	private Composite wrap;

	public CommonView() {
	}

	@Override
	public void init(IViewSite site) throws PartInitException {
		super.init(site);
	}

	@Override
	public void createPartControl(Composite parent) {
		wrap = new Composite(parent, SWT.NORMAL);
		wrap.setLayout(new FillLayout());

		EclipseJSCore.getDefault().getWSQueryProject(new IWSQProjectCallback() {
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

		EJSContextFactory factory = new EJSContextFactory(
				new NullProgressMonitor());
		Context context = factory.enterContext();
		ScriptableObject scope = ScopeFactory.getInstance().create();

		FileScript fileScript = new FileScript(project.getFile(new Path(
				"views/" + getViewSite().getSecondaryId() + ".js")));

		context.evaluateString(scope, fileScript.getScript(),
				fileScript.getScriptFileName(), 1, null);

		ScriptableObject.putProperty(scope, "parent",
				Context.javaToJS(wrap, scope));
		context.evaluateString(scope, "create(parent);", "common-view.js", 1,
				null);
		
		Object partName = context.evaluateString(scope, "getPartName();", "common-view.js", 1,
				null);
		
		setPartName((String) Context.jsToJava(partName, String.class));
		firePropertyChange(PROP_TITLE);
	}

	@Override
	public void setFocus() {
		wrap.setFocus();
	}

}
