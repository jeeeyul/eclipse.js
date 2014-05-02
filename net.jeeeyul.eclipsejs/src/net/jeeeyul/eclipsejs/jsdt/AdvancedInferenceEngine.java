package net.jeeeyul.eclipsejs.jsdt;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.wst.jsdt.core.ast.IArgument;
import org.eclipse.wst.jsdt.core.ast.IAssignment;
import org.eclipse.wst.jsdt.core.ast.IExpression;
import org.eclipse.wst.jsdt.core.ast.IFunctionCall;
import org.eclipse.wst.jsdt.core.ast.IFunctionDeclaration;
import org.eclipse.wst.jsdt.core.ast.IFunctionExpression;
import org.eclipse.wst.jsdt.core.infer.IInferEngine;
import org.eclipse.wst.jsdt.core.infer.InferEngine;
import org.eclipse.wst.jsdt.core.infer.InferredAttribute;
import org.eclipse.wst.jsdt.core.infer.InferredType;
import org.eclipse.wst.jsdt.internal.compiler.ast.Expression;
import org.eclipse.wst.jsdt.internal.compiler.ast.MessageSend;

/**
 * Additional Inference Engine for eclipse.js
 * 
 * @author Jeeeyul
 *
 */
@SuppressWarnings("restriction")
public class AdvancedInferenceEngine extends InferEngine implements IInferEngine {
	private Pattern staticFieldPatthern = Pattern.compile("^([a-zA-Z_][a-zA-Z0-9_-]+(\\.[a-zA-Z_][a-zA-Z0-9_-]*)+)(\\.)([a-zA-Z_][a-zA-Z0-9_-]*)$");

	
	@Override
	public void endVisit(IAssignment assignment) {
		super.endVisit(assignment);
		
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
				InferredType targetType = findDefinedType(type.toCharArray());
				if (targetType == null) {
					return;
				}

				InferredType attrType = getTypeOf(assignment);
				if (attrType != null) {
					InferredAttribute inferredAttribute = new InferredAttribute(fieldName.toCharArray(), targetType, leftHandSide);

					inferredAttribute.isStatic = true;
					inferredAttribute.type = attrType;
					inferredAttribute.nameStart = assignment.sourceStart() + type.length() + 1;
					targetType.addAttribute(inferredAttribute);
				}
			}
		}
	}

	// processes type hint in function arguments.
	@Override
	public void endVisit(IFunctionDeclaration functionDeclaration) {
		super.endVisit(functionDeclaration);
		IArgument[] arguments = functionDeclaration.getArguments();
		if (arguments != null) {
			for (IArgument each : arguments) {
				char[] comment = each.getComment();
				if (comment != null) {
					String exp = new String(comment).trim();
					if (exp.matches("[a-zA-Z_][a-zA-Z0-9_-]*(\\.[a-zA-Z_][a-zA-Z0-9_-]*)*")) {
						InferredType type = findDefinedType(exp.toCharArray());
						if (type == null) {
							type = new InferredType(exp.toCharArray());
						}
						each.setInferredType(type);
					}
				}
			}
		}
	}

	@Override
	public void endVisit(IFunctionCall call) {
		super.endVisit(call);
		MessageSend send = (MessageSend) call;
		if (send.selector != null) {
			String selectorExp = new String(send.selector);
			if (selectorExp.equals("require") && call.getArguments().length == 1 && call.getReceiver() == null) {
				System.out.println(send.getClass().getSimpleName());
			}
		}
	}

}
