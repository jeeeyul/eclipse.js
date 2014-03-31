var GridLayout = org.eclipse.swt.layout.GridLayout;
var GridData = org.eclipse.swt.layout.GridData;
var Button = org.eclipse.swt.widgets.Button;

exports.create = function(parent) {
	parent.setLayout(new GridLayout());
	var btn = new Button(parent, SWT.PUSH);
	btn.text = "hello";
	
	btn.addListener(SWT.Selection, {
		handleEvent : function(e){
			alert("Hello World!");
		}
	});
};