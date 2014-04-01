/**
 * @param {org.eclipse.swt.widgets.Composite}
 *            parent
 * @param {Object}
 *            desc
 */
exports.createForm = function(parent, desc) {
	var result = new Form();
	var key, label, field;
	var composite = new org.eclipse.swt.widgets.Composite(parent, SWT.NORMAL);
	composite.setLayout(new org.eclipse.swt.layout.GridLayout(2, false));
	
	for (key in desc) {
		label = new org.eclipse.swt.widgets.Label(composite, SWT.NORMAL);
		label.text = key;
		label.setLayoutData(new org.eclipse.swt.layout.GridData(SWT.RIGHT,
				SWT.FILL, false, false, 1, 1));

		field = createValueField(composite, desc[key]);
		field.control.setLayoutData(new org.eclipse.swt.layout.GridData(
				GridData.FILL_HORIZONTAL));

		if (desc.selection) {
			field.setter(desc.selection);
		}
		
		field.key = key;
		result.fields.push(field);
	}
	
	return result;
};

var valueFieldFactory = {
	"text" : function(parent, desc) {
		var field = new org.eclipse.swt.widgets.Text(parent, SWT.BORDER);
		return {
			getter : function() {
				return field.getText();
			},
			setter : function(value) {
				field.setText(value.toString());
			},
			control : field
		};
	},

	"scale" : function(parent, desc) {
		var field = new org.eclipse.swt.widgets.Scale(parent, SWT.NORMAL);
		if (desc.minimum) {
			field.setMinimum(desc.minimum);
		}
		if (desc.maximum) {
			field.setMaximum(desc.maximum);
		}
		return {
			getter : function() {
				return field.getSelection();
			},
			setter : function(newValue) {
				field.setSelection(newValue);
			},
			control : field
		}
	}
};

function createValueField(parent, desc) {
	if (typeof desc === "string") {
		desc = {
			"type" : desc
		};
	}

	var factory = valueFieldFactory[desc.type];
	if (factory) {
		return factory(parent, desc)
	} else {
		return null;
	}
}


function Form(){
	this.fields = [];
}

Form.prototype.getValue = function(){
	var result = {};
	var i;
	for(i in this.fields){
		var each = this.fields[i];
		result[each.key] = each.getter();
	}
	return result;
};