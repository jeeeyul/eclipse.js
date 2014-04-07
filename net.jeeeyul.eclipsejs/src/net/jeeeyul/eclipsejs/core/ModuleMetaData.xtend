package net.jeeeyul.eclipsejs.core

import net.jeeeyul.eclipsejs.script.api.IO
import org.json.simple.JSONObject
import org.json.simple.parser.JSONParser

class ModuleMetaData {
	ModuleDescriptor descriptor
	JSONObject json

	new(ModuleDescriptor descriptor) {
		this.descriptor = descriptor
	}

	def getJSON() {
		if (json == null) {
			if (descriptor.metaFile.exists) {
				try {
					var jsonFile = descriptor.metaFile
					var source = IO.instance.readInputStream(jsonFile.contents, jsonFile.charset)
					json = new JSONParser().parse(source) as JSONObject
				} catch (Exception e) {
					e.printStackTrace()
					json = new JSONObject()
				}
			} else {
				json = new JSONObject()
			}
		}
		return json
	}

	def get(String key) {
		if(JSON.containsKey(key)){
			return JSON.get(key)
		}else{
			getDefaultValue(key)
		}
	}
	
	def String getName(){
		return this.get("name") as String
	}
	
	def private Object getDefaultValue(String key) {
		switch(key){
			case "name" : descriptor.moduleName
			case "version" : "0.0.1"
			default : null
		}
	}

}
