/**
 * @constructor
 */
ejs.View = function(imageRegistry) {
	this.name = "Eclipse.JS";
	this.icon = null;
	this.imageRegistry = imageRegistry;
	return this;
};

ejs.View.prototype.getImage = function(relPath) {
	return this.imageRegistry.get(relPath);
};

ejs.View.prototype._init = function(viewSite) {
	if (typeof this.init === "function") {
		this.init.call(this, ejs.internal.wrapWorkbenchSite(viewSite));
	}
};

ejs.View.prototype.create = function(parent) {
	parent.setLayout(new org.eclipse.swt.layout.GridLayout());
	var messageLabel = new org.eclipse.swt.widgets.Label(parent, SWT.NORMAL);
	messageLabel.setText("Eclipse.JS View Id(Secondary View ID) is not specified.");
};

ejs.View.prototype.getName = function() {
	return this.name;
};

ejs.View.prototype.getIcon = function() {
	return this.icon;
};

ejs.View.prototype.dispose = function() {
};

/**
 * @returns {Function}
 */
ejs.View.extend = function(descriptor) {
	var result = function() {
		ejs.View.apply(this, arguments);
		_.extend(this, descriptor);
		return this;
	};
	result.prototype = Object.create(ejs.View.prototype);
	return result;
};