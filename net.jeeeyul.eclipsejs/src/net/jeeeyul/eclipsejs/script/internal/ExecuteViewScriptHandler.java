package net.jeeeyul.eclipsejs.script.internal;

import net.jeeeyul.eclipsejs.ui.queryview.QueryView;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.handlers.HandlerUtil;

public class ExecuteViewScriptHandler extends AbstractHandler {
	public ExecuteViewScriptHandler() {
	}

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
