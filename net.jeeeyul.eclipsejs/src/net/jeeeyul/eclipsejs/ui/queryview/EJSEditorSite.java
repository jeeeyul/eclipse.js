package net.jeeeyul.eclipsejs.ui.queryview;

import org.eclipse.jface.action.MenuManager;
import org.eclipse.jface.viewers.ISelectionProvider;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IActionBars;
import org.eclipse.ui.IEditorActionBarContributor;
import org.eclipse.ui.IEditorSite;
import org.eclipse.ui.IKeyBindingService;
import org.eclipse.ui.IViewSite;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;

@SuppressWarnings("deprecation")
public class EJSEditorSite implements IEditorSite {

	private IViewSite viewSite;

	public EJSEditorSite(IViewSite viewSite) {
		super();
		this.viewSite = viewSite;
	}

	public EJSEditorSite() {
	}

	@Override
	public String getId() {
		return viewSite.getId();
	}

	@Override
	public String getPluginId() {
		return viewSite.getPluginId();
	}

	@Override
	public String getRegisteredName() {
		return viewSite.getRegisteredName();
	}

	@Override
	public void registerContextMenu(String menuId, MenuManager menuManager,
			ISelectionProvider selectionProvider) {
		viewSite.registerContextMenu(menuId, menuManager, selectionProvider);

	}

	@Override
	public void registerContextMenu(MenuManager menuManager,
			ISelectionProvider selectionProvider) {
		viewSite.registerContextMenu(menuManager, selectionProvider);

	}

	@Override
	public IKeyBindingService getKeyBindingService() {
		return viewSite.getKeyBindingService();
	}

	@Override
	public IWorkbenchPart getPart() {
		return viewSite.getPart();
	}

	@Override
	public IWorkbenchPage getPage() {
		return viewSite.getPage();
	}

	@Override
	public ISelectionProvider getSelectionProvider() {
		return viewSite.getSelectionProvider();
	}

	@Override
	public Shell getShell() {
		return viewSite.getShell();
	}

	@Override
	public IWorkbenchWindow getWorkbenchWindow() {
		return viewSite.getWorkbenchWindow();
	}

	@Override
	public void setSelectionProvider(ISelectionProvider provider) {
		viewSite.setSelectionProvider(provider);
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapter) {
		return viewSite.getAdapter(adapter);
	}

	@Override
	public Object getService(@SuppressWarnings("rawtypes") Class api) {
		return viewSite.getService(api);
	}

	@Override
	public boolean hasService(@SuppressWarnings("rawtypes") Class api) {
		return viewSite.hasService(api);
	}

	@Override
	public IEditorActionBarContributor getActionBarContributor() {
		return null;
	}

	@Override
	public IActionBars getActionBars() {
		return viewSite.getActionBars();
	}

	@Override
	public void registerContextMenu(MenuManager menuManager,
			ISelectionProvider selectionProvider, boolean includeEditorInput) {

		viewSite.registerContextMenu(menuManager, selectionProvider);
	}

	@Override
	public void registerContextMenu(String menuId, MenuManager menuManager,
			ISelectionProvider selectionProvider, boolean includeEditorInput) {
		viewSite.registerContextMenu(menuId, menuManager, selectionProvider);

	}

}
