/**
 * @param {org.eclipse.swt.widgets.Composite}
 *            parent
 */
ejs.EmbededBrowser = function(parent) {
	this.handle = new org.eclipse.swt.browser.Browser(parent, SWT.NORMAL);
};

/**
 * Insert a bridge function into browser.
 * 
 * @param name
 *            function name that will be referred in browser script.
 * @param {Function}
 *            handler Function script. Types of arguments and return value must
 *            be primitive or {@link Array}. Otherwise it will be fail.
 */
ejs.EmbededBrowser.prototype.addFunction = function(name, handler) {
	var me = this;
	new JavaAdapter(org.eclipse.swt.browser.BrowserFunction, {
		"function" : function() {
			return handler.apply(me, Array.prototype.splice.call(arguments, 0));
		}
	}, this.handle, name);
};

/**
 * 
 * @param {String}
 *            url
 */
ejs.EmbededBrowser.prototype.setURL = function(url) {
	this.handle.setUrl(url);
};

/**
 * Runs a script in embeded browser.
 * 
 * @param {Function}
 *            run function to run in browser. All contents of function must not
 *            refer outside of function. this function will be serialized and
 *            passed to browser. It can have a return value.
 * @returns
 */
ejs.EmbededBrowser.prototype.eval = function(run) {
	var script = "(" + String(run) + ")();"
	return this.handle.evaluate(script);
};