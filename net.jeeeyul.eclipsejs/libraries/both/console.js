function Console() {
}

/**
 * Puts given arguments into Eclipse.JS Console View.
 */
Console.prototype.log = function(msg) {
	var arr = Array.prototype.splice.call(arguments, 0);
	var mapped = _(arr).map(function(it) {
		if (it === null) {
			return "null";
		} else if (it === undefined) {
			return "undefined";
		} else {
			return it;
		}
	});

	var msgConsole = net.jeeeyul.eclipsejs.api.EJSConsole.getSingleton();
	msgConsole.getNormalStream().println(_(mapped).join(" ", function(it) {
		if (it === null) {
			return "null";
		} else if (it === undefined) {
			return "undefined";
		}
	}));
};

var console = new Console();
