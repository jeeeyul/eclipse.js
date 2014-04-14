package net.jeeeyul.eclipsejs.jsdt;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.wst.jsdt.core.ast.ASTVisitor;
import org.eclipse.wst.jsdt.core.ast.IArgument;
import org.eclipse.wst.jsdt.core.ast.IAssignment;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFunctionDeclaration;
import org.eclipse.wst.jsdt.core.ast.IFunctionExpression;
import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.InferOptions;
import org.eclipse.wst.jsdt.core.infer.InferredAttribute;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.internal.compiler.ast.ArrayInitializer;
import org.eclipse.wst.jsdt.internal.compiler.ast.CompilationUnitDeclaration;
import org.eclipse.wst.jsdt.internal.compiler.ast.Expression;
import org.eclipse.wst.jsdt.internal.compiler.ast.NumberLiteral;
import org.eclipse.wst.jsdt.internal.compiler.ast.StringLiteral;

/**
 * Additional Inference Engine for eclipse.js
 * 
 * @author Jeeeyul
 *
 */
@SuppressWarnings("restriction")
public class AdvancedInferenceEngine extends ASTVisitor implements IInferEngine {
	private Pattern staticFieldPatthern = Pattern
			.compile("^([a-zA-Z_][a-zA-Z0-9_-]+(\\.[a-zA-Z_][a-zA-Z0-9_-]*)+)(\\.)([a-zA-Z_][a-zA-Z0-9_-]*)$");
	private CompilationUnitDeclaration parsedUnit;

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
	public void endVisit(IAssignment assignment) {
		IExpression leftHandSide = assignment.getLeftHandSide();
		Expression exp = (Expression) assignment.getExpression();

		if (leftHandSide != null) {
			String leftExp = leftHandSide.toString();
			if (leftExp.contains(".prototype.")) {
				return;
			}
			Matcher matcher = staticFieldPatthern.matcher(leftExp);
			if (matcher.matches()) {
				if (exp instanceof IFunctionExpression) {
					return;
				}

				String type = matcher.group(1);
				String fieldName = matcher.group(4);
				InferredType targetType = parsedUnit.findInferredType(type
						.toCharArray());
				if (targetType == null) {
					return;
				}

				InferredType attrType = getInferredType(exp);
				if (attrType != null) {
					InferredAttribute inferredAttribute = new InferredAttribute(
							fieldName.toCharArray(), targetType, leftHandSide);

					inferredAttribute.isStatic = true;
					inferredAttribute.type = attrType;
					inferredAttribute.nameStart = assignment.sourceStart()
							+ type.length() + 1;
					targetType.addAttribute(inferredAttribute);
				}
			}
		}
		super.endVisit(assignment);
	}

	// processes type hint in function arguments.
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

		super.endVisit(functionDeclaration);
	}

	private InferredType ensureType(String name) {
		InferredType type = parsedUnit.findInferredType(name.toCharArray());
		if (type == null) {
			type = new InferredType(name.toCharArray());
		}
		return type;
	}

	private InferredType getInferredType(IExpression exp) {
		InferredType type = null;
		if (exp instanceof NumberLiteral) {
			type = parsedUnit.findInferredType("Number".toCharArray());
		}

		else if (exp instanceof StringLiteral) {
			type = parsedUnit.findInferredType("String".toCharArray());
		}

		else if (exp instanceof ArrayInitializer) {
			type = ensureType("Array");
		}

		return type;
	}
}
