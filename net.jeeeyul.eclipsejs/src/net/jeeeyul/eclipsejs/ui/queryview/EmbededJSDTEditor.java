package net.jeeeyul.eclipsejs.ui.queryview;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.wst.jsdt.internal.ui.JavaScriptPlugin;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.CompilationUnitEditor;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.JavaSourceViewer;
import org.eclipse.wst.jsdt.ui.text.IJavaScriptPartitions;
import org.eclipse.wst.jsdt.ui.text.JavaScriptSourceViewerConfiguration;
import org.eclipse.wst.jsdt.ui.text.JavaScriptTextTools;

/**
 * Embeded JSDT {@link CompilationUnitEditor} for {@link QueryView}.
 * 
 * @author Jeeeyul
 *
 */
@SuppressWarnings("restriction")
public class EmbededJSDTEditor extends CompilationUnitEditor {
	@Override
	protected JavaScriptSourceViewerConfiguration createJavaSourceViewerConfiguration() {
		JavaScriptTextTools textTools = JavaScriptPlugin.getDefault()
				.getJavaTextTools();
		return new EmbdedJSDTConfiguration(textTools.getColorManager(),
				getPreferenceStore(), this,
				IJavaScriptPartitions.JAVA_PARTITIONING);
	}

	/*
	 * @see
	 * org.eclipse.ui.texteditor.AbstractTextEditor#setPreferenceStore(org.eclipse
	 * .jface.preference.IPreferenceStore)
	 */
	protected void setPreferenceStore(IPreferenceStore store) {
		super.setPreferenceStore(store);
		if (getSourceViewerConfiguration() instanceof JavaScriptSourceViewerConfiguration) {
			setSourceViewerConfiguration(createJavaSourceViewerConfiguration());
		}
		if (getSourceViewer() instanceof JavaSourceViewer)
			((JavaSourceViewer) getSourceViewer()).setPreferenceStore(store);
	}

}
