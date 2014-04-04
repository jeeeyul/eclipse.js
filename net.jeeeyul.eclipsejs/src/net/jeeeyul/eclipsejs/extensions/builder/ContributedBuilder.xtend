package net.jeeeyul.eclipsejs.extensions.builder

import net.jeeeyul.eclipsejs.core.ScopeFactory
import net.jeeeyul.eclipsejs.script.ScriptErrorPresenter
import net.jeeeyul.eclipsejs.script.context.EJSContextFactory
import org.eclipse.core.resources.IResourceDelta
import org.eclipse.core.runtime.IProgressMonitor
import org.eclipse.core.runtime.Path
import org.mozilla.javascript.Context
import org.mozilla.javascript.Function
import org.mozilla.javascript.RhinoException
import org.mozilla.javascript.ScriptableObject
import org.eclipse.core.resources.IProject

class ContributedBuilder {

	ScriptableObject scope
	Context context = EJSContextFactory.sharedContext

	new(String builderId) {
		this.scope = ScopeFactory.instance.create(new Path("/.eclipse.js/extensions"))
		var script = '''var BuilderType = require('./builders/«builderId»'), builder = new BuilderType("«builderId»");'''
		context.evaluateString(scope, script, "builder-extensions", 1, null);
	}

	def incremetalBuild(IResourceDelta delta, IProgressMonitor monitor) {
		callFunction("build", delta, monitor)
	}
	
	def fullBuild(IProject project, IProgressMonitor monitor){
		callFunction("fullBuild", project, monitor)
	}
	
	def clean(IProject project, IProgressMonitor monitor){
		callFunction("clean", project, monitor)
	}
	
	private def Object callFunction(String name, Object... args) {
		var jsArgs = args.map[Context.javaToJS(it, scope)]
		var builder = ScriptableObject.getProperty(scope, "builder") as ScriptableObject
		try {
			var fn = ScriptableObject.getProperty(builder, name);
			if (fn instanceof Function) {
				return (fn as Function).call(context, scope, builder, jsArgs);
			} else {
				return null;
			}
		} catch (RhinoException e) {
			ScriptErrorPresenter.INSTANCE.showError(e);
			return null;
		}
	}

}
