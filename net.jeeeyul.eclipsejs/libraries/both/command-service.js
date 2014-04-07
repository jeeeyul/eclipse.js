/**
 * @constructor
 */
ejs.CommandService = function(handle) {
	this.handle = handle;
	return this;
};

var commandService = new ejs.CommandService(org.eclipse.ui.PlatformUI.getWorkbench().getService(org.eclipse.ui.commands.ICommandService));