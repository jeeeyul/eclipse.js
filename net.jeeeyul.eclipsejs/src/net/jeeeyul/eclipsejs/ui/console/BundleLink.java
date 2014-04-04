package net.jeeeyul.eclipsejs.ui.console;

import net.jeeeyul.eclipsejs.EclipseJSCore;

import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.console.IHyperlink;
import org.eclipse.ui.ide.IDE;
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

	public BundleLink(String path) {
		this.path = path;
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
				for(IJavaScriptElement e : target.getChildren()){
					IPackageFragment fragment = (IPackageFragment) e;
					IClassFile classFile = fragment.getClassFiles()[0];
					IEditorInput editorInput = EditorUtility.getEditorInput(classFile);
					IDE.openEditor(PlatformUI.getWorkbench().getActiveWorkbenchWindow().getActivePage(), editorInput, "org.eclipse.wst.jsdt.ui.ClassFileEditor");
				}
			} catch (JavaScriptModelException e) {
				e.printStackTrace();
			} catch (PartInitException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			} 
		}

	}

}
