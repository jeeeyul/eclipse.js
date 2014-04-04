function {{name}}(){
}
{{#each fields}}
/**
 * @param {{{wrappedValue}}} {{@key}}
 */
{{../name}}.prototype.set{{toFirstUpper @key}} = function({{@key}}){
	return this.{{@key}} = {{@key}};
};

/**
 * @returns {{{wrappedValue}}}
 */
{{../name}}.prototype.get{{toFirstUpper @key}} = function(){
	return this.{{@key}};
};
{{/each}} 