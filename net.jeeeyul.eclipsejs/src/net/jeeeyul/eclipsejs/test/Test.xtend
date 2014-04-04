package net.jeeeyul.eclipsejs.test

import org.json.simple.parser.JSONParser
import org.json.simple.JSONObject

class Test {
	def static void main(String[] args) {
		var parser = new JSONParser
		val json = parser.parse("{\"name\" : \"string\"}") as JSONObject
		println(json.keySet)
	}
	
}