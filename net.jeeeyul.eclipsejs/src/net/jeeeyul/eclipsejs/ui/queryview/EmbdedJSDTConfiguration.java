package net.jeeeyul.eclipsejs.ui.queryview;

import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.text.IAutoEditStrategy;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.source.ISourceViewer;
import org.eclipse.jface.text.source.SourceViewerConfiguration;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.texteditor.IDocumentProvider;
import org.eclipse.ui.texteditor.ITextEditor;
import org.eclipse.wst.jsdt.core.IJavaScriptElement;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.IClassFileEditorInput;
import org.eclipse.wst.jsdt.internal.ui.javaeditor.ICompilationUnitDocumentProvider;
import org.eclipse.wst.jsdt.internal.ui.text.java.JavaStringAutoIndentStrategy;
import org.eclipse.wst.jsdt.internal.ui.text.java.SmartSemicolonAutoEditStrategy;
import org.eclipse.wst.jsdt.internal.ui.text.javadoc.JavaDocAutoIndentStrategy;
import org.eclipse.wst.jsdt.ui.text.IColorManager;
import org.eclipse.wst.jsdt.ui.text.IJavaScriptPartitions;
import org.eclipse.wst.jsdt.ui.text.JavaScriptSourceViewerConfiguration;

/**
 * {@link SourceViewerConfiguration} for {@link QueryView}.
 * 
 * @author Jeeeyul
 *
 */
@SuppressWarnings("restriction")
public class EmbdedJSDTConfiguration extends JavaScriptSourceViewerConfiguration {

	/**
	 * Creates an {@link EmbdedJSDTConfiguration}.
	 * 
	 * @param colorManager
	 * @param preferenceStore
	 * @param editor
	 * @param partitioning
	 */
	public EmbdedJSDTConfiguration(IColorManager colorManager,
			IPreferenceStore preferenceStore, ITextEditor editor,
			String partitioning) {
		super(colorManager, preferenceStore, editor, partitioning);
	}

	@Override
	public IAutoEditStrategy[] getAutoEditStrategies(
			ISourceViewer sourceViewer, String contentType) {
		String partitioning = getConfiguredDocumentPartitioning(sourceViewer);
		if (IJavaScriptPartitions.JAVA_DOC.equals(contentType)
				|| IJavaScriptPartitions.JAVA_MULTI_LINE_COMMENT
						.equals(contentType))
			return new IAutoEditStrategy[] { new JavaDocAutoIndentStrategy(
					partitioning) };
		else if (IJavaScriptPartitions.JAVA_STRING.equals(contentType))
			return new IAutoEditStrategy[] {
					new SmartSemicolonAutoEditStrategy(partitioning),
					new JavaStringAutoIndentStrategy(partitioning) };
		else if (IJavaScriptPartitions.JAVA_CHARACTER.equals(contentType)
				|| IDocument.DEFAULT_CONTENT_TYPE.equals(contentType))
			return new IAutoEditStrategy[] {
					new SmartSemicolonAutoEditStrategy(partitioning),
					new JavaAutoIndentStrategy(partitioning, getProject(),
							sourceViewer) };
		else
			return new IAutoEditStrategy[] { new JavaAutoIndentStrategy(
					partitioning, getProject(), sourceViewer) };
	}

	private IJavaScriptProject getProject() {
		ITextEditor editor = getEditor();
		if (editor == null)
			return null;

		IJavaScriptElement element = null;
		IEditorInput input = editor.getEditorInput();
		IDocumentProvider provider = editor.getDocumentProvider();
		if (provider instanceof ICompilationUnitDocumentProvider) {
			ICompilationUnitDocumentProvider cudp = (ICompilationUnitDocumentProvider) provider;
			element = cudp.getWorkingCopy(input);
		} else if (input instanceof IClassFileEditorInput) {
			IClassFileEditorInput cfei = (IClassFileEditorInput) input;
			element = cfei.getClassFile();
		}

		if (element == null)
			return null;

		return element.getJavaScriptProject();
	}
}
