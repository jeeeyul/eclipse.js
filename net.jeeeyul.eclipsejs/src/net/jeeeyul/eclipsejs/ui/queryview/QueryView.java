package net.jeeeyul.eclipsejs.ui.queryview;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.runtime.IRuntimeProjectCallback;
import net.jeeeyul.eclipsejs.script.ExecuteScriptJob;
import net.jeeeyul.eclipsejs.script.IScriptProvider;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.NullProgressMonitor;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.action.Action;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IActionBars;
import org.eclipse.ui.IMemento;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.actions.ActionFactory;
import org.eclipse.ui.contexts.IContextService;
import org.eclipse.ui.part.FileEditorInput;
import org.eclipse.ui.part.PageBook;
import org.eclipse.ui.part.ViewPart;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.CompilationUnitEditor;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.CompilationUnitEditorActionContributor;

/**
 * View that can edit and run eclipse.js script.
 * 
 * @author Jeeeyul
 * @since 0.1
 *
 */
@SuppressWarnings("restriction")
public class QueryView extends ViewPart implements IScriptProvider {
	private static final Path QUERY_SCRIPT_PATH = new Path("user/query.js");
	/**
	 * View ID.
	 */
	public static final String ID = QueryView.class.getCanonicalName();

	private EmbededJSDTEditorSite editorSite;
	private CompilationUnitEditor editor;
	private PageBook pageBook;
	private IProject project;
	private Composite editorWrapper;
	private CompilationUnitEditorActionContributor contributor;
	private ExecuteScriptJob executeScriptJob;

	/**
	 * Creates Query View.
	 */
	public QueryView() {
		editor = new EmbededJSDTEditor();
		contributor = new CompilationUnitEditorActionContributor();
	}

	private void createEditor() {
		if (Display.getDefault().getThread() != Thread.currentThread()) {
			Display.getDefault().asyncExec(new Runnable() {
				@Override
				public void run() {
					createEditor();
				}
			});
			return;
		}
		IFile file = project.getFile(QUERY_SCRIPT_PATH);
		try {
			editor.init(editorSite, new FileEditorInput(file));
		} catch (PartInitException e) {
			e.printStackTrace();
		}

		editorWrapper = new Composite(pageBook, SWT.NORMAL);
		editorWrapper.setData("org.eclipse.e4.ui.css.CssClassName",
				"MPart Editor");
		editorWrapper.setLayout(new FillLayout());
		editor.createPartControl(editorWrapper);

		contributor.setActiveEditor(editor);
		pageBook.showPage(editorWrapper);
	}

	@Override
	public void createPartControl(Composite parent) {
		pageBook = new PageBook(parent, SWT.NORMAL);
		Label label = new Label(pageBook, SWT.NORMAL);
		label.setText("Preparing Workspace Query Runtime...");
		pageBook.showPage(label);
		if (project != null) {
			createEditor();
		}
	}

	/**
	 * 
	 * @return An {@link ExecuteScriptJob} for scripts in query view.
	 */
	public ExecuteScriptJob getExecuteScriptJob() {
		if (executeScriptJob == null) {
			executeScriptJob = new ExecuteScriptJob(this);
		}
		return executeScriptJob;
	}

	@Override
	public IPath getFullPath() {
		return project.getFile(QUERY_SCRIPT_PATH).getFullPath();
	}

	public String getScript() {
		return editor.getViewer().getDocument().get();
	}

	@Override
	public void init(IViewSite site) throws PartInitException {
		super.init(site);

		editorSite = new EmbededJSDTEditorSite(site);
		EclipseJSCore.getDefault().getRuntimeProject(
				new IRuntimeProjectCallback() {
					@Override
					public void projectPrepared(IProject project) {
						QueryView.this.project = project;
						if (pageBook != null) {
							createEditor();
						}
					}
				});

		IActionBars actionBars = getViewSite().getActionBars();
		contributor.init(actionBars);

		actionBars.setGlobalActionHandler(ActionFactory.SAVE.getId(),
				new Action() {
					@Override
					public void run() {
						if (editor != null) {
							editor.doSave(new NullProgressMonitor());
						}
					}
				});

		IContextService service = (IContextService) site
				.getService(IContextService.class);
		service.activateContext("net.jeeeyul.eclipsejs.script.view");
	}

	@Override
	public void saveState(IMemento memento) {
		if (editor != null && editorWrapper != null
				&& !editorWrapper.isDisposed()) {
			editor.doSave(new NullProgressMonitor());
		}
		super.saveState(memento);
	}

	@Override
	public void setFocus() {
		pageBook.setFocus();
	}

}
