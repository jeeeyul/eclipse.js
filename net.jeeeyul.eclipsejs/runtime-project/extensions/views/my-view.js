module = View.extend({
	"name" : "My View",
	"icon" : "eclipse.gif",
	"init" : function(viewSite){
		var me = this;
		this.viewSite = viewSite;
		this.selectionListener = function(part, /*Selection*/ selection){
			if(selection.getType() == "structure"){
				var arr = selection.toArray();
				me.view.text = arr.join("\r\n");
			}
		};
	},
	"create" : function(/*org.eclipse.swt.widgets.Shell*/parent) {
		parent.setLayout(new org.eclipse.swt.layout.FillLayout());
		this.view = new org.eclipse.swt.widgets.Text(parent, SWT.V_SCROLL | SWT.H_SCROLL);
		workbench.getActiveWorkbenchWindow().getSelectionService().addSelectionListener(this.selectionListener);
	},
	"dispose" : function() {
		workbench.getActiveWorkbenchWindow().getSelectionService().removeSelectionListener(this.selectionListener);
	}
});