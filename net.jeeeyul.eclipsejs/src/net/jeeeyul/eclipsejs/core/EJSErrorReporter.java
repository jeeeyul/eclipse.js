package net.jeeeyul.eclipsejs.core;

import net.jeeeyul.eclipsejs.script.ScriptErrorPresenter;

import org.mozilla.javascript.EcmaError;
import org.mozilla.javascript.ErrorReporter;
import org.mozilla.javascript.EvaluatorException;
import org.mozilla.javascript.ScriptRuntime;

/**
 * Default {@link ErrorReporter} for {@link EJSContext}.
 * 
 * @author Jeeeyul
 * @since 0.1
 */
public class EJSErrorReporter implements ErrorReporter {

	/**
	 * Creates a {@link EJSErrorReporter}.
	 */
	public EJSErrorReporter() {
	}

	@Override
	public void warning(String message, String sourceName, int line,
			String lineSource, int lineOffset) {
	}

	@Override
	public void error(String message, String sourceName, int line,
			String lineSource, int lineOffset) {
		String errorType = "SyntaxError";
		final String TYPE_ERROR_NAME = "TypeError";
		final String DELIMETER = ": ";
		final String prefix = TYPE_ERROR_NAME + DELIMETER;
		if (message.startsWith(prefix)) {
			errorType = TYPE_ERROR_NAME;
			message = message.substring(prefix.length());
		}
		EcmaError exception = ScriptRuntime.constructError(errorType, message,
				sourceName, line, lineSource, lineOffset);
		ScriptErrorPresenter.INSTANCE.showError(exception);
		throw exception;
	}

	@Override
	public EvaluatorException runtimeError(String message, String sourceName,
			int line, String lineSource, int lineOffset) {
		EvaluatorException exception = new EvaluatorException(message,
				sourceName, line, lineSource, lineOffset);
		ScriptErrorPresenter.INSTANCE.showError(exception);
		return exception;
	}

}
