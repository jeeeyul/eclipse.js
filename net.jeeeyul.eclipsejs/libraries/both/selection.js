function Selection(handle) {
	this.handle = handle;
}

/**
 * @returns {String}
 */
Selection.prototype.getType = function() {
	if (this.handle instanceof org.eclipse.jface.text.ITextSelection) {
		return "text";
	} else {
		return "structure"
	}
};

/**
 * @returns {String}
 */
Selection.prototype.getText = function() {

};

/**
 * @returns {Array}
 */
Selection.prototype.toArray = function() {
	if (this.getType() != "structure") {
		throw new Error("toArray is available when selection type is structure.");
	}

	return this.handle.toArray();
};

function SelectionService(handle) {
	this.handle = handle;

}

SelectionService.prototype.addSelectionListener = function(listener) {
	if (typeof listener !== "function") {
		throw new Error("listener must be a function.");
	}

	listener.__bridge = {
		__owner : listener,
		selectionChanged : function(part, selection) {
			listener(part, new Selection(selection));
		}
	};

	this.handle.addSelectionListener(listener.__bridge);
};

SelectionService.prototype.removeSelectionListener = function(listener) {
	if (typeof listener !== "function") {
		throw new Error("listener must be a function.");
	}
	this.handle.removeSelectionListener(listener.__bridge);
};