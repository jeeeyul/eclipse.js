package net.jeeeyul.eclipsejs.script.api

import java.io.FileOutputStream
import java.io.PrintStream
import java.lang.reflect.Field
import java.lang.reflect.Method
import java.lang.reflect.Modifier
import net.jeeeyul.eclipsejs.util.BitExtension
import net.jeeeyul.eclipsejs.util.IO
import org.eclipse.swt.layout.GridData

class JavaDocGenerator {
	extension BitExtension = new BitExtension

	def generate(Class<?> type) '''
		«IF type.primaryConstructor != null»
			/**
			 * @constructor
			«FOR param : type.primaryConstructor.parameterTypes»
				«" "»* @param {«param.typeName»} «param.paramName»
			«ENDFOR»
			 */
			«type.^package.name».«type.simpleName» = function(«type.primaryConstructor.parameterTypes.join(", ")[it.paramName]»){
				«FOR eachField : type.fields.filter[it.public && !it.static]»
					this.«eachField.name» = «eachField.type.fieldInitializer»;
				«ENDFOR»
				return this;
			}
		«ELSE»
			/**
			 * @constructor
			 */
			«type.^package.name».«type.simpleName» = function(){
				return this;
			};
		«ENDIF»
		
		
		«FOR eachField : type.declaredFields.filter[it.public && it.static]»
			«type.canonicalName».«eachField.name» = «eachField.type.fieldInitializer»;
		«ENDFOR»
		
		«FOR eachMethod : type.methods.filter[it.public && it.^static && it.API] SEPARATOR "\r\n"»
			/**
			«FOR param : eachMethod.parameterTypes»
				«" "»* @param {«param.typeName»} «param.paramName»
			«ENDFOR»
			«IF eachMethod.returnType != typeof(void)»
				«" "»* @returns {«eachMethod.returnType.typeName»}
			«ENDIF»
			*/
			«type.canonicalName».«eachMethod.name» = function(«eachMethod.parameterTypes.join(", ")[it.paramName]»){
			}
		«ENDFOR»
		
		«FOR eachMethod : type.methods.filter[it.public && !it.^static && it.API] SEPARATOR "\r\n"»
			/**
			«FOR param : eachMethod.parameterTypes»
				«" "»* @param {«param.typeName»} «param.paramName»
			«ENDFOR»
			«IF eachMethod.returnType != typeof(void)»
				«" "»* @returns {«eachMethod.returnType.typeName»}
			«ENDIF»
			 */
			«type.canonicalName».prototype.«eachMethod.name» = function(«eachMethod.parameterTypes.join(", ")[it.paramName]»){
			};
		«ENDFOR»
	'''

	def paramName(Class<?> paramType) {
		if (paramType.array) {
			return paramType.componentType.simpleName.toFirstLower + "s"
		} else {
			return paramType.simpleName.toFirstLower
		}
	}

	def private boolean isStatic(Method m) {
		m.modifiers.hasFlags(Modifier.STATIC)
	}

	def private boolean isPublic(Method m) {
		m.modifiers.hasFlags(Modifier.PUBLIC)
	}
	
	def private boolean isStatic(Field m) {
		m.modifiers.hasFlags(Modifier.STATIC)
	}

	def private boolean isPublic(Field m) {
		m.modifiers.hasFlags(Modifier.PUBLIC)
	}
	

	def private primaryConstructor(Class<?> type) {
		return type.constructors.sort[a, b|a.parameterTypes.size - b.parameterTypes.size].last
	}

	def private boolean isAPI(Method m) {
		return !m.name.contains("_")
	}
	
	def private fieldInitializer(Class<?> type){
		if(type.array){
			return '''[new «type.componentType.typeName»()]'''
		}else{
			'''new «type.typeName»()'''
		}
	}
	
	def private typeName(Class<?> type) {
		if (type.primitive) {
			switch (type) {
				case typeof(int): "Number"
				case typeof(double): "Number"
				case typeof(float): "Number"
				case typeof(long): "Number"
				case typeof(boolean): "Boolean"
				default: type.simpleName
			}
		} else {
			type.canonicalName
		}
	}
	
	def static genrate(String name){
		var is = typeof(JavaDocGenerator).getResource('''«name».txt''').openStream
		var list = IO.instance.readInputStream(is, "UTF-8").split("(\r\n|\r|\n)+")
		var gen = new JavaDocGenerator
		var fos = new FileOutputStream('''/Users/Jeeeyul/Workspaces/personal/eclipse.js/net.jeeeyul.eclipsejs/libraries/docs/«name».js''');
		var ps = new PrintStream(fos)
		
		for(e : list){
			ps.println(gen.generate(Class.forName(e)))
		}
		
		ps.close();
		fos.close();
	}
	def static void main(String[] args) {
		genrate("swt-widget")
		genrate("swt-custom")
		genrate("swt-event-dnd")
		genrate("swt-graphics")
		genrate("workbench-common")

		println(new JavaDocGenerator().primaryConstructor(typeof(GridData)))
	}
}
