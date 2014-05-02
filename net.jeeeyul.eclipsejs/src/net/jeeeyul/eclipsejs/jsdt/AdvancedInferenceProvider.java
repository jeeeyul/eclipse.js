package net.jeeeyul.eclipsejs.jsdt;

import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.IInferenceFile;
import org.eclipse.wst.jsdt.core.infer.InferrenceProvider;
import org.eclipse.wst.jsdt.core.infer.RefactoringSupport;
import org.eclipse.wst.jsdt.core.infer.ResolutionConfiguration;

/**
 * An additional inference engine provider.
 * 
 * @author Jeeeyul
 *
 */
public class AdvancedInferenceProvider implements InferrenceProvider {
	/**
	 * Inference Provider ID.
	 */
	public static final String ID = "net.jeeeyul.eclipsejs.jsdt.AdvancedInferenceProvider";

	@Override
	public int applysTo(IInferenceFile arg0) {
		return MAYBE_THIS;
	}

	@Override
	public String getID() {
		return ID;
	}

	@Override
	public IInferEngine getInferEngine() {
		AdvancedInferenceEngine engine = new AdvancedInferenceEngine();
		engine.inferenceProvider = this;
		return engine;
	}

	@Override
	public RefactoringSupport getRefactoringSupport() {
		return null;
	}

	@Override
	public ResolutionConfiguration getResolutionConfiguration() {
		return new ResolutionConfiguration();
	}

}
