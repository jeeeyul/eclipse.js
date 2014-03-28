package net.jeeeyul.eclipsejs.ui;

import net.jeeeyul.eclipsejs.EclipseJSCore;
import net.jeeeyul.eclipsejs.IWSQProjectCallback;
import net.jeeeyul.eclipsejs.ui.ExecuteScriptJob;
import net.jeeeyul.eclipsejs.ui.QueryView;
import net.jeeeyul.eclipsejs.ui.SharedImages;
import org.eclipse.core.resources.IProject;
import org.eclipse.jface.action.Action;
import org.eclipse.jface.resource.ImageDescriptor;

@SuppressWarnings("all")
public class ExecuteScriptAction extends Action {
  private QueryView view;
  
  private ExecuteScriptJob job;
  
  public ExecuteScriptAction(final QueryView view) {
    this.view = view;
    ImageDescriptor _imageDescriptor = SharedImages.getImageDescriptor(SharedImages.ECLIPSE_JS);
    this.setImageDescriptor(_imageDescriptor);
    this.setText("Execute");
    ExecuteScriptJob _executeScriptJob = new ExecuteScriptJob(view);
    this.job = _executeScriptJob;
  }
  
  public void run() {
    EclipseJSCore _default = EclipseJSCore.getDefault();
    final IWSQProjectCallback _function = new IWSQProjectCallback() {
      public void projectPrepared(final IProject it) {
        ExecuteScriptAction.this.job.schedule();
      }
    };
    _default.getWSQueryProject(_function);
  }
}
