/**
 * @param {String}
 *            id
 */
ejs.Builder = function(id) {
	this.id = id;
	this.toolkit = new ejs.Builder.Toolkit(this);
};

ejs.Builder.prototype.getId = function() {
	return this.id;
};

ejs.Builder.prototype.build = function(delta, monitor) {
	var me = this;
	var deltas = [];
	if (delta) {
		delta.accept({
			visit : function(delta) {
				var handle = delta.resource;
				if (handle instanceof org.eclipse.core.resources.IFile) {
					var file = new ejs.File(handle.fullPath);
					if (delta.kind == org.eclipse.core.resources.IResourceDelta.CHANGED) {
						deltas.push({
							"handler" : me.changed,
							"file" : file
						});
					}

					else if (delta.kind == org.eclipse.core.resources.IResourceDelta.REMOVED) {
						deltas.push({
							"handler" : me.removed,
							"file" : file
						});
					}

					else if (delta.kind == org.eclipse.core.resources.IResourceDelta.ADDED) {
						deltas.push({
							"handler" : me.added,
							"file" : file
						});
					}
				}
				return true;
			}
		});

		monitor.beginTask("Build", deltas.length);
		deltas.forEach(function(it) {
			if (monitor.isCanceled()) {
				return;
			}
			monitor.subTask(it.file.getName());
			me.toolkit.clearError(it.file);
			it.handler.call(me, it.file, me.toolkit);
			monitor.worked(1);
		});
		monitor.done();
	}
};

ejs.Builder.prototype.fullBuild = function(projectHandle, monitor) {
	var me = this;
	var project = new ejs.Project(projectHandle);
	var allFiles = project.findFiles("**");

	monitor.beginTask("Build", allFiles.length);
	allFiles.forEach(function(/* ejs.File */it) {
		if (monitor.isCanceled()) {
			return;
		}
		monitor.subTask(it.getName());
		me.added.call(me, it, me.toolkit);
		monitor.worked(1);
	});
	monitor.done();
};

ejs.Builder.prototype.clean = function(projectHandle, monitor) {
	var me = this;
	var project = new ejs.Project(projectHandle);
	var files = this.toolkit.getBuildResults(project);
	files.forEach(function(/* ejs.Resource */r) {
		r.deleteResource();
	});

	var markers = project.findMarkers(ejs.Marker.PROBLEM, true, ejs.Resource.DEPTH_INFINITE);
	markers = markers.filter(function(/* ejs.Marker */it) {
		return it.getAttribute("eclipse.js.builder") == me.getId();
	});
	markers.forEach(function(/* ejs.Marker */it) {
		it.deleteMarker();
	});
};

/**
 * @param {ejs.File}
 *            file
 * @param {ejs.Builder.Toolkit}
 *            toolkit
 */
ejs.Builder.prototype.changed = function(file, toolkit) {

};

/**
 * @param {ejs.File}
 *            file
 * @param {ejs.Builder.Toolkit}
 *            toolkit
 */
ejs.Builder.prototype.added = function(file, toolkit) {

};

/**
 * @param {ejs.File}
 *            file
 * @param {ejs.Builder.Toolkit}
 *            toolkit
 */
ejs.Builder.prototype.removed = function(file, toolkit) {

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

/**
 * @constructor
 * @param {ejs.Builder}
 *            builder
 */
ejs.Builder.Toolkit = function(builder) {
	this.builder = builder;
	return this;
};

/**
 * @param {ejs.File}
 *            file
 */
ejs.Builder.Toolkit.prototype.markBuildResult = function(file) {
	file.setPersistentProperty("net.jeeeyul.eclipse.js", this.builder.getId(), "true");
	file.setDerived(true);
};

/**
 * 
 * @param {ejs.Project}
 *            project
 * @returns {Array} an array which contains {@link ejs.Resource}s.
 */
ejs.Builder.Toolkit.prototype.getBuildResults = function(project) {
	var me = this;
	var result = [];
	project.accept(function(/* ejs.Resource */r) {
		if (r.getType() == "file") {
			var prop = r.getPersistentProperty("net.jeeeyul.eclipse.js", me.builder.getId());
			if (prop == "true") {
				result.push(r);
			}
		}
	});
	return result;
};

/**
 * 
 * @param {ejs.File}
 *            file
 * @param {Number}
 *            lineNumber
 * @param {String}
 *            message
 */
ejs.Builder.Toolkit.prototype.reportError = function(file, lineNumber, message) {
	var errMarker = file.createMarker(ejs.Marker.PROBLEM);
	errMarker.setAttribute(ejs.Marker.SEVERITY, ejs.Marker.SEVERITY_ERROR);
	errMarker.setAttribute(ejs.Marker.LINE_NUMBER, lineNumber);
	errMarker.setAttribute(ejs.Marker.MESSAGE, message);
	errMarker.setAttribute("eclipse.js.builder", this.builder.getId());
};

/**
 * 
 * @param {ejs.File}
 *            file
 */
ejs.Builder.Toolkit.prototype.clearError = function(file) {
	var me = this;
	var markers = file.findMarkers(ejs.Marker.PROBLEM, true, ejs.Resource.DEPTH_ONE);
	markers = markers.filter(function(/* ejs.Marker */it) {
		return it.getAttribute("eclipse.js.builder") == me.builder.getId();
	});
	
	markers.forEach(function(/* ejs.Marker */it) {
		it.deleteMarker();
	});
};