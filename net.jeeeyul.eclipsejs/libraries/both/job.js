/**
 * @constructor
 * 
 * @param {Function} run
 * @param {Boolean} uiThread
 * @param {String} name
 */
ejs.Timeout = function(run, uiThread, name) {
	var impl, superType, runMethodName;

	if (uiThread === undefined) {
		uiThread = true;
	}
	if(name === undefined){
		name = "No name";
	}

	superType = uiThread ? org.eclipse.ui.progress.UIJob : org.eclipse.core.runtime.jobs.Job;
	runMethodName = uiThread ? "runInUIThread" : "run";

	impl = {};
	impl[runMethodName] = function(/* org.eclipse.core.runtime.IProgressMonitor */monitor) {
		try {
			run(monitor);
			return Status.OK_STATUS;
		} catch (e) {
			var message = e.message ? e.message : e.toString();
			return new Status(IStatus.ERROR, ejs.pluginId, message);
		}
	};

	this.handle = new JavaAdapter(superType, impl, name);
};

ejs.Timeout.prototype.schedule = function(delay) {
	this.handle.schedule(delay);
};

ejs.Timeout.prototype.cancel = function() {
	this.handle.cancel();
};

function setTimeout(run, delay) {
	if (delay === undefined) {
		delay = 0;
	}
	var handle = new ejs.Timeout(run);
	handle.schedule(delay);
	return handle;
}

/**
 * 
 * @param {ejs.Timeout}
 *            handle
 */
function clearTimeout(handle) {
	handle.cancel();
}