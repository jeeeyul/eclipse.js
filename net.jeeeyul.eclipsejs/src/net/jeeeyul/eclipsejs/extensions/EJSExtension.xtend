package net.jeeeyul.eclipsejs.extensions

import net.jeeeyul.eclipsejs.EclipseJSCore
import net.jeeeyul.eclipsejs.core.EJSContextFactory
import net.jeeeyul.eclipsejs.core.EJSScopeFactory
import net.jeeeyul.eclipsejs.core.ModuleDescriptor
import org.eclipse.core.resources.IFile
import org.mozilla.javascript.Context
import org.mozilla.javascript.Function
import org.mozilla.javascript.ScriptableObject

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
			this.scope = EJSScopeFactory.getInstance.create(fDescriptor.getModuleDirPath)

			var script = '''
				var ModuleType = require("«fDescriptor.getQualifiedName»");
			'''
			ctx.evaluateString(scope, script, fDescriptor.getModuleFile.fullPath.toPortableString, 1, null)

			var jsArgs = constructorArgs.map [
				Context.javaToJS(it, scope)
			]
			fInstance = ctx.newObject(scope, "ModuleType", jsArgs) as ScriptableObject
			ScriptableObject.putProperty(scope, "instance", fInstance)
		}
		return fInstance
	}

	def getMetaData(String key) {
		fDescriptor.getMetaData.get(key)
	}

	def Object callInstanceFunction(String name, Object... args) {
		var jsArgs = args.map [
			Context.javaToJS(it, scope)
		]
		var fn = ScriptableObject.getProperty(getInstance, name);
		if (fn instanceof Function) {
			return (fn as Function).call(ctx, scope, getInstance, jsArgs);
		} else {
			return null;
		}
	}

	def IFile getResourceFile(String relPath) {
		return fDescriptor.getResource(relPath)
	}
}
