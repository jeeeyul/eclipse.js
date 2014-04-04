package net.jeeeyul.eclipsejs.ui.console;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IMarker;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.console.IHyperlink;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.ide.IGotoMarker;

public class SourceLink implements IHyperlink {

	private IFile resource;
	private int line;

	public SourceLink(IFile resource, int line) {
		this.resource = resource;
		this.line = line;
	}

	@Override
	public void linkEntered() {

	}

	@Override
	public void linkExited() {

	}

	@Override
	public void linkActivated() {
		IEditorPart editor;
		try {
			IWorkbenchPage page = PlatformUI.getWorkbench()
					.getActiveWorkbenchWindow().getActivePage();
			editor = IDE.openEditor(page, resource);
			IGotoMarker markerAdapter = (IGotoMarker) editor
					.getAdapter(IGotoMarker.class);
			IMarker marker = resource.createMarker("temporary");
			marker.setAttribute(IMarker.LINE_NUMBER, line);
			markerAdapter.gotoMarker(marker);
			marker.delete();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
