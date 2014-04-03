/**
 * @constructor
 */
ejs.Selection = function(handle) {
	this.handle = handle;
}

/**
 * @returns {String}
 */
ejs.Selection.prototype.getType = function() {
	if (this.handle instanceof org.eclipse.jface.text.ITextSelection) {
		return "text";
	} else {
		return "structure"
	}
};

/**
 * @returns {String}
 */
ejs.Selection.prototype.getText = function() {

};

/**
 * @returns {Array}
 */
ejs.Selection.prototype.toArray = function() {
	if (this.getType() != "structure") {
		throw new Error("toArray is available when selection type is structure.");
	}

	return this.handle.toArray();
};

/**
 * @constructor
 */
ejs.SelectionService = function(handle) {
	this.handle = handle;

}

ejs.SelectionService.prototype.addSelectionListener = function(listener) {
	if (typeof listener !== "function") {
		throw new Error("listener must be a function.");
	}

	listener.__bridge = {
		__owner : listener,
		selectionChanged : function(part, selection) {
			listener(part, new ejs.Selection(selection));
		}
	};

	this.handle.addSelectionListener(listener.__bridge);
};

ejs.SelectionService.prototype.removeSelectionListener = function(listener) {
	if (typeof listener !== "function") {
		throw new Error("listener must be a function.");
	}
	this.handle.removeSelectionListener(listener.__bridge);
};