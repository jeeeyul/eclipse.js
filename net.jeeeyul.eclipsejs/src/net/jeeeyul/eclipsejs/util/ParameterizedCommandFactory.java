package net.jeeeyul.eclipsejs.util;

import org.eclipse.core.commands.Command;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.commands.IParameter;
import org.eclipse.core.commands.NotEnabledException;
import org.eclipse.core.commands.NotHandledException;
import org.eclipse.core.commands.Parameterization;
import org.eclipse.core.commands.ParameterizedCommand;
import org.eclipse.core.commands.common.NotDefinedException;
import org.eclipse.ui.commands.ICommandService;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.ScriptableObject;

public class ParameterizedCommandFactory {

	private ICommandService commandService;

	public ParameterizedCommandFactory(ICommandService commandService) {
		this.commandService = commandService;
	}

	public ParameterizedCommand create(String commandId, ScriptableObject json)
			throws NotDefinedException, ExecutionException,
			NotEnabledException, NotHandledException {
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

		return parameterizedCommand;

	}

}
