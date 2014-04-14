package net.jeeeyul.eclipsejs.core

import org.json.simple.JSONObject
import org.json.simple.parser.JSONParser
import net.jeeeyul.eclipsejs.util.FileUtil

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
					var source = FileUtil.getInstance.getTextContent(jsonFile.contents, jsonFile.charset)
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
