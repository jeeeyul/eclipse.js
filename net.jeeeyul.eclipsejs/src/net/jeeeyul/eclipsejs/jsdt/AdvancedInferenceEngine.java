package net.jeeeyul.eclipsejs.jsdt;

import org.eclipse.wst.jsdt.core.ast.ASTVisitor;
import org.eclipse.wst.jsdt.core.ast.IArgument;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.IFunctionDeclaration;
import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.InferOptions;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.internal.compiler.ast.CompilationUnitDeclaration;

@SuppressWarnings("restriction")
public class AdvancedInferenceEngine extends ASTVisitor implements IInferEngine {

	private CompilationUnitDeclaration parsedUnit;

	public AdvancedInferenceEngine() {
	}

	@Override
	public void initialize() {

	}

	@Override
	public void setCompilationUnit(CompilationUnitDeclaration parsedUnit) {
		this.parsedUnit = parsedUnit;
	}

	@Override
	public void doInfer() {
		parsedUnit.traverse(this);
	}

	@Override
	public void initializeOptions(InferOptions inferOptions) {
	}

	@Override
	public boolean visit(IFunctionCall functionCall) {
		return super.visit(functionCall);
	}

	@Override
	public void endVisit(IFunctionCall functionCall) {
		super.endVisit(functionCall);
	}

	@Override
	public void endVisit(IFunctionDeclaration functionDeclaration) {
		IArgument[] arguments = functionDeclaration.getArguments();
		if (arguments != null) {
			for (IArgument each : arguments) {
				char[] comment = each.getComment();
				if (comment != null) {
					String exp = new String(comment).trim();
					if (exp.matches("[a-zA-Z_][a-zA-Z0-9_-]*(\\.[a-zA-Z_][a-zA-Z0-9_-]*)*")) {
						InferredType type = parsedUnit.findInferredType(exp
								.toCharArray());
						if (type == null) {
							type = new InferredType(exp.toCharArray());
						}
						each.setInferredType(type);
					}
				}
			}
		}
	}
}
