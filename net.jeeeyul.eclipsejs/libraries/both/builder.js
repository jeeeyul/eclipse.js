ejs.Builder = function() {

};

ejs.Builder.prototype.build = function(delta, monitor) {
	var me = this;
	delta.accept({
		visit : function(delta) {
			var handle = delta.resource;
			if (handle instanceof org.eclipse.core.resources.IFile) {
				var file = new ejs.File(handle.fullPath);
				if (delta.kind == org.eclipse.core.resources.IResourceDelta.CHANGED) {
					me.changed(file);
				}

				else if (delta.kind == org.eclipse.core.resources.IResourceDelta.REMOVED) {
					me.removed(file);
				}

				else if (delta.kind == org.eclipse.core.resources.IResourceDelta.ADDED) {
					me.added(file);
				}
			}

			return true;
		}
	});
};

/**
 * @param {ejs.File}
 *            file
 */
ejs.Builder.prototype.changed = function(file) {

};

/**
 * @param {ejs.File}
 *            file
 */
ejs.Builder.prototype.added = function(file) {

};

/**
 * @param {ejs.File}
 *            file
 */
ejs.Builder.prototype.removed = function(file) {

};

ejs.Builder.extend = function(descriptor) {
	var result = function() {
		ejs.Builder.apply(this, arguments);
		_.extend(this, descriptor);
		return this;
	};
	result.prototype = Object.create(ejs.Builder.prototype);
	return result;
};