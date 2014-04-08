package net.jeeeyul.eclipsejs.extensions.action;

import java.util.Map;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.ui.commands.IElementUpdater;
import org.eclipse.ui.menus.UIElement;

public class CommonActionHandler extends AbstractHandler implements IElementUpdater{

	public CommonActionHandler() {
		
	}

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		return null;
	}

	@Override
	public void updateElement(UIElement element, @SuppressWarnings("rawtypes") Map parameters) {
		
	}

}
