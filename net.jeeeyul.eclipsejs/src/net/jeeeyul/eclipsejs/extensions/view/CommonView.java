package net.jeeeyul.eclipsejs.extensions.view;

import java.util.ArrayList;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.core.EJSContextFactory;
import net.jeeeyul.eclipsejs.extensions.EJSExtension;
import net.jeeeyul.eclipsejs.runtime.IRuntimeProjectCallback;
import net.jeeeyul.eclipsejs.util.ResourceRegistry;
import net.jeeeyul.eclipsejs.util.ResourceRegistry.Factory;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Label;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.part.PageBook;
import org.eclipse.ui.part.ViewPart;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;

/**
 * Common Viw is a bootstrap view for EJSViews.
 * 
 * @author Jeeeyul
 *
 */
public class CommonView extends ViewPart {
	/**
	 * View ID of {@link CommonView}
	 */
	public static final String ID = CommonView.class.getCanonicalName();

	private PageBook pageBook;
	private Composite viewPage;
	private boolean isDisposed = false;
	private EJSExtension module;
	private ResourceRegistry<String, Image> imageRegistry;
	private ArrayList<Function> readyCallbacks = new ArrayList<Function>();
	private boolean fInitialized = false;

	/**
	 * Creates a {@link CommonView}
	 */
	public CommonView() {
		imageRegistry = new ResourceRegistry<String, Image>();
		imageRegistry.setFactory(new Factory<String, Image>() {
			@Override
			public Image create(String key) {
				try {
					IFile imageFile = module.getResourceFile(key);
					Image image = new Image(Display.getDefault(), imageFile
							.getContents());
					return image;
				} catch (CoreException e) {
					throw new RuntimeException(e);
				}
			}
		});
	}

	/**
	 * @return EJS View Id, it is same with secondary view id.
	 */
	public String getEJSViewID() {
		return getViewSite().getSecondaryId();
	}

	@Override
	public void createPartControl(Composite parent) {
		pageBook = new PageBook(parent, SWT.NORMAL);
		Label loadingLabel = new Label(pageBook, SWT.NORMAL);
		loadingLabel.setText("Preparing Eclipse.JS Runtime...");
		pageBook.showPage(loadingLabel);

		EclipseJSCore.getDefault().getRuntimeProject(
				new IRuntimeProjectCallback() {
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

		if (pageBook == null || pageBook.isDisposed()) {
			return;
		}

		viewPage = new Composite(pageBook, SWT.NORMAL);
		viewPage.setLayout(new FillLayout());

		if (getViewId() != null && module != null) {
			module.callInstanceFunction("create", viewPage);
			pageBook.showPage(viewPage);
			fInitialized = true;
			dispatchReadyCallbacks();
		} else {
			Label label = new Label(pageBook, SWT.NORMAL);
			label.setText("E.JS View ID is not specified!");
			pageBook.showPage(label);
		}
	}

	private void dispatchReadyCallbacks() {
		for (Function each : readyCallbacks) {
			each.call(EJSContextFactory.getSharedContext(), module.getScope(),
					module.getInstance(), new Object[] { module.getInstance() });
		}
		readyCallbacks.clear();
	}

	private void doInit(final IViewSite site) {
		if (isDisposed) {
			return;
		}

		if (Thread.currentThread() != Display.getDefault().getThread()) {
			Display.getDefault().syncExec(new Runnable() {
				@Override
				public void run() {
					doInit(site);
				}
			});
			return;
		}

		String viewId = getViewId();

		if (viewId == null) {
			return;
		}

		module = new EJSExtension("views", viewId, imageRegistry);
		module.callInstanceFunction("_init", site);

		String partName = (String) module.getMetaData("name");
		if (partName != null) {
			setPartName((String) Context.jsToJava(partName, String.class));
			firePropertyChange(PROP_TITLE);
		}

		String imagePath = (String) module.getMetaData("icon");
		if (imagePath != null) {
			Image image = imageRegistry.get(imagePath);
			setTitleImage(image);
		}
	}

	private String getViewId() {
		String viewId = getViewSite().getSecondaryId();
		return viewId;
	}

	@Override
	public void init(IViewSite site) throws PartInitException {
		super.init(site);

		EclipseJSCore.getDefault().getRuntimeProject(
				new IRuntimeProjectCallback() {
					@Override
					public void projectPrepared(IProject project) {
						doInit(getViewSite());
					}
				});
	}

	@Override
	public void setFocus() {
		pageBook.setFocus();
	}

	@Override
	public void dispose() {
		isDisposed = true;
		if (module != null)
			module.callInstanceFunction("dispose");
		imageRegistry.dispose();
		super.dispose();
	}

	/**
	 * Gets view ejs.View instance.
	 * 
	 * @param function
	 *            instance handler function.
	 */
	public void getViewModuleInstance(Function function) {
		if (fInitialized) {
			function.call(EJSContextFactory.getSharedContext(),
					module.getScope(), module.getInstance(),
					new Object[] { module.getInstance() });
		} else {
			readyCallbacks.add(function);
		}
	}
}
