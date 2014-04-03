function View(imageRegistry) {
	this.name = "Eclipse.JS";
	this.icon = null;
	this.imageRegistry = imageRegistry;
	return this;
}

View.prototype.getImage = function(relPath) {
	return this.imageRegistry.get(relPath);
};

View.prototype.init = function(viewSite) {

};

View.prototype.create = function(parent) {
	var parent;
	parent.setLayout(new org.eclipse.swt.layout.GridLayout());

	var messageLabel = new org.eclipse.swt.widgets.Label(parent, SWT.NORMAL);
	messageLabel.setText("Eclipse.JS View Id(Secondary View ID) is not specified.");
};

View.prototype.getName = function() {
	return this.name;
};

View.prototype.getIcon = function() {
	return this.icon;
};

View.prototype.dispose = function() {
};

View.extend = function(descriptor) {
	var result = function() {
		View.apply(this, arguments);
		_.extend(this, descriptor);
		return this;
	};
	result.prototype = Object.create(View.prototype);
	return result;
};