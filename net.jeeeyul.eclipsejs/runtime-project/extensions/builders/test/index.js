var Handlebars = require("./handlebars");
Handlebars.registerHelper("toFirstUpper", function(/*String*/ str){
	return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
});

Handlebars.registerHelper("wrappedValue", function(){
	return "{" + this + "}";
});

var cwd = new ejs.Folder(__dirname);
var fileNamePattern = /^(.*)\.model\.json$/;
var template = Handlebars.compile(cwd.getFile("template.hb").getContents());

module = ejs.Builder.extend({
	changed : function(/*ejs.File*/file) {
		console.log(file);
		var fileName = file.getName();
		if(fileName.match(fileNamePattern)){
			var modelName = fileName.replace(fileNamePattern, "$1");
			var out = file.getParent().getFile(modelName + ".js");
			
			var json = eval("(" + file.getContents() + ")");
			var generatedSource = template({
				"name" : modelName,
				"fields" : json
			});
			out.setContents(generatedSource);
		}
	},
	added : function(/*ejs.File*/file) {
		this.changed(file);
	},
	removed : function(/*ejs.File*/file) {
	}
});