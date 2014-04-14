package net.jeeeyul.eclipsejs.ui.console;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.console.IHyperlink;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.texteditor.AbstractTextEditor;

/**
 * A link that indicated script file and line number.
 * 
 * @since 0.1
 * @author Jeeeyul
 *
 */
public class SourceLink implements IHyperlink {

	private IFile resource;
	private int line;

	/**
	 * 
	 * @param resource
	 *            script file.
	 * @param line
	 *            line number.
	 */
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
		AbstractTextEditor editor;
		try {
			IWorkbenchPage page = PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage();
			editor = (AbstractTextEditor) IDE.openEditor(page, resource);
			IDocument document = editor.getDocumentProvider().getDocument(editor.getEditorInput());
			IRegion lineInformation = document.getLineInformation(line - 1);
			editor.selectAndReveal(lineInformation.getOffset(), lineInformation.getLength());
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

}
