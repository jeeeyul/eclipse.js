package net.jeeeyul.eclipsejs.script.bridge

import net.jeeeyul.eclipsejs.EclipseJSCore
import net.jeeeyul.eclipsejs.core.ScopeFactory
import net.jeeeyul.eclipsejs.script.ScriptErrorPresenter
import net.jeeeyul.eclipsejs.script.context.EJSContextFactory
import org.eclipse.core.resources.IFile
import org.mozilla.javascript.Context
import org.mozilla.javascript.Function
import org.mozilla.javascript.RhinoException
import org.mozilla.javascript.ScriptableObject
import net.jeeeyul.eclipsejs.core.ModuleDescriptor

class EJSExtension {
	ModuleDescriptor fDescriptor
	ScriptableObject scope
	Context ctx = EJSContextFactory.sharedContext

	ScriptableObject fInstance
	Object[] constructorArgs

	new(String extensionPoint, String id, Object... args) {
		var dir = '''/«EclipseJSCore.PROJECT_NAME»/extensions/«extensionPoint»'''
		fDescriptor = ModuleDescriptor.resolve(dir, "./" + id)
		this.constructorArgs = args;
	}

	def ScriptableObject getInstance() {
		if (fInstance == null) {
			this.scope = ScopeFactory.instance.create(fDescriptor.moduleDirPath)
			
			var script = '''
				var ModuleType = require("«fDescriptor.qualifiedName»");
			'''
			ctx.evaluateString(scope, script, fDescriptor.moduleFile.fullPath.toPortableString, 1, null)

			var jsArgs = constructorArgs.map [
				Context.javaToJS(it, scope)
			]
			fInstance = ctx.newObject(scope, "ModuleType", jsArgs) as ScriptableObject
			ScriptableObject.putProperty(scope, "instance", fInstance)
		}
		return fInstance
	}

	def getMetaData(String key) {
		fDescriptor.metaData.get(key)
	}

	def Object callInstanceFunction(String name, Object... args) {
		try {
			var jsArgs = args.map [
				Context.javaToJS(it, scope)
			]
			var fn = ScriptableObject.getProperty(instance, name);
			if (fn instanceof Function) {
				return (fn as Function).call(ctx, scope, instance, jsArgs);
			} else {
				return null;
			}
		} catch (RhinoException e) {
			ScriptErrorPresenter.INSTANCE.showError(e);
			return null;
		}
	}

	def IFile getResourceFile(String relPath) {
		return fDescriptor.getResource(relPath)
	}
}
