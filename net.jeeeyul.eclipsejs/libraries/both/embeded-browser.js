/**
 * @param {org.eclipse.swt.widgets.Composite}
 *            parent
 */
ejs.EmbededBrowser = function(parent) {
	var me = this;
	this.handle = new org.eclipse.swt.browser.Browser(parent, SWT.NORMAL);

	new JavaAdapter(org.eclipse.swt.browser.BrowserFunction, {
		"function" : function(args) {
			var data = JSON.parse(args[0]);

			if (typeof me.messageHandler === "function") {
				me.messageHandler.call(me, data);
			}
		}
	}, this.handle, "__sendMessage");
};

/**
 * @param Function
 *            handler
 */
ejs.EmbededBrowser.prototype.onMessage = function(handler) {
	this.messageHandler = handler;
};

/**
 * 
 * @param {String}
 *            url
 */
ejs.EmbededBrowser.prototype.setURL = function(url) {
	this.handle.setUrl(url);
};

ejs.EmbededBrowser.prototype.send = function(data) {
	var serializedData = JSON.stringify(data);
	this.handle.evaluate('if(typeof onMessage === "function") onMessage(' + serializedData + ')');
};