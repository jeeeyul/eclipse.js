/**
 * @constructor
 */
ejs.HandlerService = function(){
	this.handle = org.eclipse.ui.PlatformUI.getWorkbench().getService(org.eclipse.ui.handlers.IHandlerService);
	return this;
};

/**
 * 
 * @param {String} commandId
 * @param {Object} paramMap
 * @returns {Object}
 */
ejs.HandlerService.prototype.executeCommand = function(commandId, paramMap){
	if(paramMap === null || paramMap === undefined){
		paramMap = {};
	}
	
	var commandFactory = new net.jeeeyul.eclipsejs.script.api.ParameterizedCommandFactory(commandService.handle);
	var parameterizedCommand = commandFactory.create(commandId, paramMap);
	
	return this.handle.executeCommand(parameterizedCommand, null);
};

var handlerService = new ejs.HandlerService();