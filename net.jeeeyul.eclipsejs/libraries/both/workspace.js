//
// Resource
//
/**
 * @constructor
 * @param {org.eclipse.core.runtime.IPath}
 *            fullPath
 */
ejs.Resource = function(fullPath) {
	if (typeof fullPath == "string" || fullPath instanceof java.lang.String) {
		fullPath = new org.eclipse.core.runtime.Path(fullPath);
	}
	this.fullPath = fullPath;
};
ejs.Resource.NONE = 0;
ejs.Resource.DEPTH_ZERO = 0;
ejs.Resource.DEPTH_ONE = 1;
ejs.Resource.DEPTH_INFINITE = 2;

/**
 * * Returns whether this resource exists in the workspace.
 * <p>
 * <code>IResource</code> objects are lightweight handle objects used to
 * access resources in the workspace. However, having a handle object does not
 * necessarily mean the workspace really has such a resource. When the workspace
 * does have a genuine resource of a matching type, the resource is said to
 * <em>exist</em>, and this method returns <code>true</code>; in all other
 * cases, this method returns <code>false</code>. In particular, it returns
 * <code>false</code> if the workspace has no resource at that path, or if it
 * has a resource at that path with a type different from the type of this
 * resource handle.
 * </p>
 * <p>
 * Note that no resources ever exist under a project that is closed; opening a
 * project may bring some resources into existence.
 * </p>
 * <p>
 * The name and path of a resource handle may be invalid. However, validation
 * checks are done automatically as a resource is created; this means that any
 * resource that exists can be safely assumed to have a valid name and path.
 * </p>
 * 
 * @returns {Boolean} <code>true</code> if the resource exists, otherwise
 *          <code>false</code>.
 */
ejs.Resource.prototype.exists = function() {
	return this.handle.exists();
};

/**
 * Returns the name of this resource. The name of a resource is synonymous with
 * the last segment of its full (or project-relative) path for all resources
 * other than the workspace root. The workspace root's name is the empty string.
 * <p>
 * This is a resource handle operation; the resource need not exist.
 * </p>
 * <p>
 * If this resource exists, its name can be safely assumed to be valid.
 * </p>
 * 
 * @returns {String} the name of the resource
 */
ejs.Resource.prototype.getName = function() {
	return String(this.handle.getName());
};

/**
 * @returns {ejs.Container}
 */
ejs.Resource.prototype.getParent = function() {
	return ejs.internal.wrapResource(this.handle.getParent());
};

/**
 * @returns {org.eclipse.core.runtime.IPath}
 */
ejs.Resource.prototype.getFullPath = function() {
	return this.fullPath;
};

ejs.Resource.prototype.toString = function() {
	return this.fullPath.toString();
};

/**
 * Sets the value of the persistent property of this resource identified by the
 * given key. If the supplied value is <code>null</code>, the persistent
 * property is removed from this resource. The change is made immediately on
 * disk.
 * <p>
 * Persistent properties are intended to be used by plug-ins to store
 * resource-specific information that should be persisted across platform
 * sessions. The value of a persistent property is a string that must be short -
 * 2KB or less in length. Unlike session properties, persistent properties are
 * stored on disk and maintained across workspace shutdown and restart.
 * </p>
 * <p>
 * The qualifier part of the property name must be the unique identifier of the
 * declaring plug-in (e.g. <code>"com.example.plugin"</code>).
 * </p>
 * 
 * @param {String}
 *            namespace
 * @param {String}
 *            key
 * @param {String}
 *            value
 */
ejs.Resource.prototype.setPersistentProperty = function(namespace, key, value) {
	var qn = new org.eclipse.core.runtime.QualifiedName(namespace, key);
	this.handle.setPersistentProperty(qn, value);
};

/**
 * Returns the value of the persistent property of this resource identified by
 * the given key, or <code>null</code> if this resource has no such property.
 * 
 * @param {String}
 *            namespace
 * @param {String}
 *            key
 * @returns {String}
 */
ejs.Resource.prototype.getPersistentProperty = function(namespace, key) {
	var qn = new org.eclipse.core.runtime.QualifiedName(namespace, key);
	return this.handle.getPersistentProperty(qn);
};

ejs.Resource.prototype.setDerived = function(derived) {
	this.handle.setDerived(derived, new org.eclipse.core.runtime.NullProgressMonitor());
};

/**
 * returns resource type. It is one of "file", "folder", "project", "root".
 * 
 * @returns {String} resource type.
 */
ejs.Resource.prototype.getType = function() {
	switch (this.handle.getType()) {
	case org.eclipse.core.resources.IResource.FILE:
		return "file";
	case org.eclipse.core.resources.IResource.FOLDER:
		return "folder";
	case org.eclipse.core.resources.IResource.PROJECT:
		return "project";
	case org.eclipse.core.resources.IResource.ROOT:
		return "root";
	}
};

ejs.Resource.prototype.deleteResource = function(force, monitor) {
	if (force == undefined) {
		force = false;
	}
	if (monitor == undefined) {
		monitor = new org.eclipse.core.runtime.NullProgressMonitor();
	}

	this.handle["delete"].call(this.handle, force, monitor);
};

/**
 * 
 * @param {String}
 *            type
 * @returns {ejs.Marker}
 */
ejs.Resource.prototype.createMarker = function(type) {
	return this.handle.createMarker(type);
};

/**
 * @param {String}
 *            type
 * @param {Boolean}
 *            includeSubType
 * @param {Number}
 *            depth
 * @returns {Array}
 */
ejs.Resource.prototype.findMarkers = function(type, includeSubType, depth) {
	/**
	 * @type Array
	 */
	var markerHandles = this.handle.findMarkers(type, includeSubType, depth);
	return markerHandles.map(function(it) {
		return new ejs.Marker(it);
	});
};

ejs.Resource.prototype.getProject = function(){
	return new ejs.Project(this.handle);
};

// 
// Container
// 
/**
 * @constructor
 * @base ejs.Resource
 */
ejs.Container = function(fullPath) {
	ejs.Resource.call(this, fullPath);
	this.constructor = ejs.Container;
};

(function() {
	var k;
	for (k in ejs.Resource) {
		ejs.Container[k] = ejs.Resource[k];
	}
})();

ejs.Container.INCLUDE_PHANTOMS = 1;
ejs.Container.INCLUDE_TEAM_PRIVATE_MEMBERS = 2;
ejs.Container.EXCLUDE_DERIVED = 4;
ejs.Container.INCLUDE_HIDDEN = 8;
ejs.Container.DO_NOT_CHECK_EXISTENCE = 16;

ejs.Container.prototype = Object.create(ejs.Resource.prototype);

/**
 * @returns {ejs.File}
 */
ejs.Container.prototype.getFile = function(path) {
	return new ejs.File(this.fullPath.append(path));
};

ejs.Container.prototype.getFolder = function(path) {
	return new ejs.Folder(this.fullPath.append(path));
};

/**
 * @returns {Array}
 */
ejs.Container.prototype.members = function() {
	return _(this.handle.members()).map(function(it) {
		return ejs.internal.wrapResource(it);
	});
};

/**
 * @param {String}
 *            pattern
 * 
 * @returns {Array}
 */
ejs.Container.prototype.findFiles = function(pattern) {
	var result = [];
	var exp = pattern.replace(/\*\*/g, "«ANY_PATH»").replace(/\*/, "«ANY_SEGMENT»").replace(/\./, "«DOT»").replace("?", "«ANY_CHAR»");
	exp = exp.replace(/«ANY_PATH»/g, ".*").replace(/«ANY_SEGMENT»/g, "[^/]*").replace(/«DOT»/g, "\\\.").replace(/«ANY_CHAR»/g, ".")
	var regexp = new RegExp("^" + exp + "$");

	var offsetLength = this.getFullPath().segmentCount();

	this.handle.accept({
		visit : function(it) {
			var fullPath = it.getFullPath();
			var relPath = fullPath.removeFirstSegments(offsetLength)
			var isFile = (it.type == org.eclipse.core.resources.IResource.FILE);
			if (offsetLength == 0) {
				relPath = relPath.makeRelative();
			}
			if (isFile && regexp.test(relPath.toString())) {
				result.push(new ejs.File(it));
			}
			return true;
		}
	});

	return result;
};

/**
 * @param {Function}
 *            visitor
 * @param {Number}
 *            depth
 * @param {Number}
 *            memberFlag
 */
ejs.Container.prototype.accept = function(visitor, depth, memberFlag) {
	if (depth === undefined) {
		depth = ejs.Resource.DEPTH_INFINITE;
	}
	if (memberFlag === undefined) {
		memberFlag = ejs.Resource.NONE;
	}

	net.jeeeyul.eclipsejs.util.WorkspaceUtil.accept(this.handle, {
		visit : function(it) {
			var resosurce = ejs.internal.wrapResource(it);
			var drillDown = visitor(resosurce);
			if (drillDown === undefined) {
				drillDown = true;
			}
			return drillDown;
		}
	}, depth, memberFlag);
};

// 
// WorkspaceRoot
// 

/**
 * @constructor
 * @base ejs.Container
 */
ejs.WorkspaceRoot = function() {
	ejs.Container.call(this, "/");
	this.handle = org.eclipse.core.resources.ResourcesPlugin.getWorkspace().getRoot();
	this.constructor = ejs.Workspace;
	return this;
};

(function() {
	var k;
	for (k in ejs.Container) {
		ejs.WorkspaceRoot[k] = ejs.Container[k];
	}
})();

ejs.WorkspaceRoot.prototype = Object.create(ejs.Container.prototype);

ejs.WorkspaceRoot.prototype.getProject = function(name) {
	return new ejs.Project(name);
};

//
// Project
//
/**
 * @constructor
 * @base ejs.Container
 */
ejs.Project = function(name) {
	if (name instanceof org.eclipse.core.resources.IProject) {
		name = name.getName();
	}

	ejs.Container.call(this, name);

	this.handle = org.eclipse.core.resources.ResourcesPlugin.getWorkspace().getRoot().getProject(name);
	this.constructor = ejs.Project;
	return this;
};

(function() {
	var k;
	for (k in ejs.Container) {
		ejs.Project[k] = ejs.Container[k];
	}
})();

ejs.Project.prototype = Object.create(ejs.Container.prototype);

//
// Folder
// 

/**
 * @constructor
 * @base ejs.Container
 */
ejs.Folder = function(fullPath) {
	if (fullPath instanceof org.eclipse.core.resources.IFolder) {
		fullPath = fullPath.getFullPath();
	}

	ejs.Container.call(this, fullPath);

	this.handle = org.eclipse.core.resources.ResourcesPlugin.getWorkspace().getRoot().getFolder(this.fullPath);
	this.constructor = ejs.Folder;
};

(function() {
	var k;
	for (k in ejs.Container) {
		ejs.Folder[k] = ejs.Container[k];
	}
})();

ejs.Folder.prototype = Object.create(ejs.Container.prototype);

ejs.Folder.prototype.mkdirp = function() {
	ejs.io.mkdirp(this.handle);
};

/**
 * @constructor
 * @base ejs.Resource
 */
ejs.File = function(fullPath) {
	if (fullPath instanceof org.eclipse.core.resources.IFile) {
		fullPath = fullPath.getFullPath();
	}

	ejs.Resource.call(this, fullPath);

	this.handle = org.eclipse.core.resources.ResourcesPlugin.getWorkspace().getRoot().getFile(fullPath);
	this.constructor = ejs.File;
};

(function() {
	var k;
	for (k in ejs.Resource) {
		ejs.File[k] = ejs.Resource[k];
	}
})();

ejs.File.prototype = Object.create(ejs.Resource.prototype);

ejs.File.prototype.getTextContents = function() {
	return String(ejs.io.readInputStream(this.handle.getContents(), this.handle.getCharset()));
};

ejs.File.prototype.setTextContents = function(contents) {
	if (this.exists()) {
		ejs.io.setContents(this.handle, contents);
	} else {
		ejs.io.create(this.handle, contents);
	}
};

/**
 * gets file path for OS file path notation.
 * 
 * @returns {String} native file path.
 */
ejs.File.prototype.getNativeFilePath = function() {
	var EFS = org.eclipse.core.filesystem.EFS;
	var uri = this.handle.getRawLocationURI();
	return EFS.getStore(uri).toLocalFile(0, null);
};

/**
 * 
 * @returns {Number} The file size.
 */
ejs.File.prototype.getSize = function() {
	var EFS = org.eclipse.core.filesystem.EFS;
	var uri = this.handle.getRawLocationURI();
	var store = EFS.getStore(uri).toLocalFile(0, null);
	var info = store.fetch();
	return info.getLength();
};

// 
// Workspace
//
ejs.Workspace = function() {
	this.handle = org.eclipse.core.resources.ResourcesPlugin.getWorkspace();
};

/**
 * Gets workspace root.
 * 
 * @returns {ejs.WorkspaceRoot}
 */
ejs.Workspace.prototype.getRoot = function() {
	return new ejs.WorkspaceRoot();
};

var workspace = new ejs.Workspace();

//
// Marker
//
ejs.Marker = function(handle) {
	this.handle = handle;
};
ejs.Marker.MARKER = "org.eclipse.core.resources.marker";
ejs.Marker.TASK = "org.eclipse.core.resources.taskmarker";
ejs.Marker.PROBLEM = "org.eclipse.core.resources.problemmarker";
ejs.Marker.TEXT = "org.eclipse.core.resources.textmarker";
ejs.Marker.BOOKMARK = "org.eclipse.core.resources.bookmark";
ejs.Marker.SEVERITY = "severity";
ejs.Marker.MESSAGE = "message";
ejs.Marker.LOCATION = "location";
ejs.Marker.PRIORITY = "priority";
ejs.Marker.DONE = "done";
ejs.Marker.CHAR_START = "charStart";
ejs.Marker.CHAR_END = "charEnd";
ejs.Marker.LINE_NUMBER = "lineNumber";
ejs.Marker.TRANSIENT = "transient";
ejs.Marker.USER_EDITABLE = "userEditable";
ejs.Marker.SOURCE_ID = "sourceId";
ejs.Marker.PRIORITY_HIGH = 2;
ejs.Marker.PRIORITY_NORMAL = 1;
ejs.Marker.PRIORITY_LOW = 0;
ejs.Marker.SEVERITY_ERROR = 2;
ejs.Marker.SEVERITY_WARNING = 1;
ejs.Marker.SEVERITY_INFO = 0;

/**
 * 
 * @param {String}
 *            attrName
 * @returns {Object}
 */
ejs.Marker.prototype.getAttribute = function(attrName, fallback) {
	var value = this.handle.getAttribute(attrName);
	if (value instanceof java.lang.String) {
		value = String(value);
	}
	if (value != null && value != undefined) {
		return value;
	} else {
		return fallback;
	}
};

/**
 * 
 * @returns {ejs.Resource}
 */
ejs.Marker.prototype.getResource = function() {
	return ejs.internal.wrapResource(this.handle.getResource());
};

/**
 * @returns {String}
 */
ejs.Marker.prototype.getType = function() {
	return this.handle.getType();
};

/**
 * 
 * @param {String}
 *            attrName
 * @param value
 */
ejs.Marker.prototype.setAttribute = function(attrName, value) {
	this.handle.setAttribute(attrName, value);
};

ejs.Marker.prototype.deleteMarker = function() {
	this.handle["delete"]();
};
