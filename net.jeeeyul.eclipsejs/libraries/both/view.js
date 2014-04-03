/**
 * @constructor
 */
ejs.View = function(imageRegistry) {
	this.name = "Eclipse.JS";
	this.icon = null;
	this.imageRegistry = imageRegistry;
	return this;
}

ejs.View.prototype.getImage = function(relPath) {
	return this.imageRegistry.get(relPath);
};

ejs.View.prototype.init = function(viewSite) {

};

ejs.View.prototype.create = function(parent) {
	var parent;
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

ejs.View.extend = function(descriptor) {
	var result = function() {
		ejs.View.apply(this, arguments);
		_.extend(this, descriptor);
		return this;
	};
	result.prototype = Object.create(ejs.View.prototype);
	return result;
};