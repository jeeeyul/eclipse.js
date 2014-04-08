package net.jeeeyul.eclipsejs.util;

import org.eclipse.core.commands.Command;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.commands.IParameter;
import org.eclipse.core.commands.NotEnabledException;
import org.eclipse.core.commands.NotHandledException;
import org.eclipse.core.commands.Parameterization;
import org.eclipse.core.commands.ParameterizedCommand;
import org.eclipse.core.commands.common.NotDefinedException;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.commands.ICommandService;
import org.eclipse.ui.handlers.IHandlerService;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.NativeJSON;

public class WorkbenchUtil {
	public static final WorkbenchUtil INSTANCE = new WorkbenchUtil();

	private IWorkbench fWorkbench;
	private IWorkbenchWindow fLastKnownWindow;

	private WorkbenchUtil() {
		fWorkbench = PlatformUI.getWorkbench();
		fWorkbench.addWindowListener(new WindowAdapter() {
			@Override
			public void windowActivated(IWorkbenchWindow window) {
				fLastKnownWindow = window;
			}
		});
	}

	public IWorkbenchWindow getActiveWorkbenchWindow() {
		IWorkbenchWindow window = fWorkbench.getActiveWorkbenchWindow();
		if (window == null) {
			window = fLastKnownWindow;
		}
		if (window == null && fWorkbench.getWorkbenchWindowCount() > 0) {
			window = fLastKnownWindow = fWorkbench.getWorkbenchWindows()[0];
		}
		return window;
	}

	@SuppressWarnings("unchecked")
	private <T> T getActiveWorkbenchWindowService(Class<T> service) {
		return (T) getActiveWorkbenchWindow().getService(service);
	}

	public Object executeCommand(String commandId, NativeJSON json)
			throws NotDefinedException, ExecutionException,
			NotEnabledException, NotHandledException {
		ICommandService commandService = getActiveWorkbenchWindowService(ICommandService.class);
		Command command = commandService.getCommand(commandId);

		Parameterization[] parameterizations;
		if (json != null) {
			Object[] jsKeys = json.getAllIds();
			parameterizations = new Parameterization[jsKeys.length];
			for (int i = 0; i < jsKeys.length; i++) {
				String eachKey = (String) Context.jsToJava(jsKeys[i],
						String.class);
				IParameter parameter = command.getParameter(eachKey);
				String value = (String) Context.jsToJava(
						json.getAttributes(eachKey), String.class);
				parameterizations[i] = new Parameterization(parameter, value);
			}
		} else {
			parameterizations = new Parameterization[0];
		}

		ParameterizedCommand parameterizedCommand = new ParameterizedCommand(
				command, parameterizations);

		IHandlerService handlerService = getActiveWorkbenchWindowService(IHandlerService.class);
		return handlerService.executeCommand(parameterizedCommand, null);
	}

}
