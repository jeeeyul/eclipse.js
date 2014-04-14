package net.jeeeyul.eclipsejs.script.internal;

import net.jeeeyul.eclipsejs.ui.queryview.QueryView;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.handlers.HandlerUtil;

/**
 * Handler for executing query view script command.
 * 
 * @author Jeeeyul
 *
 */
public class ExecuteQueryViewScriptHandler extends AbstractHandler {
	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		IWorkbenchWindow window = HandlerUtil.getActiveWorkbenchWindow(event);
		QueryView view = (QueryView) window.getActivePage().findView(
				QueryView.ID);
		if (view != null) {
			view.getExecuteScriptJob().schedule();
		}
		return null;
	}

}
