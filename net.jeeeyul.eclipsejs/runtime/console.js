var console = {
	log : function(){
		var arr = Array.prototype.splice.call(arguments, 0);
		var msgConsole = net.jeeeyul.eclipsejs.api.EJSConsole.getSingleton();
		msgConsole.getNormalStream().println(_(arr).join(" "));
	}
};