package net.jeeeyul.eclipsejs.ui.console;

import net.jeeeyul.eclipsejs.EclipseJSCore;

import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.console.IHyperlink;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.texteditor.AbstractTextEditor;
import org.eclipse.wst.jsdt.core.IClassFile;
import org.eclipse.wst.jsdt.core.IJavaScriptElement;
import org.eclipse.wst.jsdt.core.IJavaScriptModel;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IPackageFragment;
import org.eclipse.wst.jsdt.core.IPackageFragmentRoot;
import org.eclipse.wst.jsdt.core.JavaScriptCore;
import org.eclipse.wst.jsdt.core.JavaScriptModelException;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.EditorUtility;

@SuppressWarnings("restriction")
public class BundleLink implements IHyperlink {

	private String path;
	private int line;

	public BundleLink(String path, int line) {
		this.path = path;
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
		IPath path = EclipseJSCore.getDefault().getStateLocation()
				.append(this.path);
		IJavaScriptModel model = JavaScriptCore.create(ResourcesPlugin
				.getWorkspace().getRoot());
		IPackageFragmentRoot target = null;
		try {
			IJavaScriptProject[] projects = model.getJavaScriptProjects();
			for (IJavaScriptProject each : projects) {
				try {
					IJavaScriptElement element = each
							.findPackageFragmentRoot(path);
					if (element != null) {
						target = (IPackageFragmentRoot) element;
						break;
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		} catch (JavaScriptModelException e) {
			e.printStackTrace();
		}

		if (target != null) {
			try {
				for (IJavaScriptElement e : target.getChildren()) {
					IPackageFragment fragment = (IPackageFragment) e;
					IClassFile classFile = fragment.getClassFiles()[0];
					IEditorInput editorInput = EditorUtility
							.getEditorInput(classFile);
					AbstractTextEditor editor = (AbstractTextEditor) IDE.openEditor(PlatformUI
							.getWorkbench().getActiveWorkbenchWindow()
							.getActivePage(), editorInput,
							"org.eclipse.wst.jsdt.ui.ClassFileEditor");
					IDocument document = editor.getDocumentProvider()
							.getDocument(editor.getEditorInput());
					IRegion lineInformation = document
							.getLineInformation(line - 1);
					editor.selectAndReveal(lineInformation.getOffset(),
							lineInformation.getLength());
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}
}
