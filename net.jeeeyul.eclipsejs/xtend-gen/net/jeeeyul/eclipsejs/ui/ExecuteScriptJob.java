package net.jeeeyul.eclipsejs.ui;

import com.google.common.base.Objects;
import java.util.concurrent.CancellationException;
import net.jeeeyul.eclipsejs.api.EJSConsole;
import net.jeeeyul.eclipsejs.api.ErdConsolePrintStream;
import net.jeeeyul.eclipsejs.core.EJSContextFactory;
import net.jeeeyul.eclipsejs.core.ScopeFactory;
import net.jeeeyul.eclipsejs.ui.IScriptProvider;
import org.eclipse.core.resources.WorkspaceJob;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.xtend2.lib.StringConcatenation;
import org.eclipse.xtext.xbase.lib.Exceptions;
import org.mozilla.javascript.Context;
import org.mozilla.javascript.RhinoException;
import org.mozilla.javascript.ScriptStackElement;
import org.mozilla.javascript.ScriptableObject;

@SuppressWarnings("all")
public class ExecuteScriptJob extends WorkspaceJob {
  private IScriptProvider scriptProvider;
  
  public ExecuteScriptJob(final IScriptProvider scriptProvider) {
    super("Executing Script");
    this.scriptProvider = scriptProvider;
    this.setUser(true);
    this.setSystem(false);
  }
  
  public IStatus runInWorkspace(final IProgressMonitor monitor) throws CoreException {
    EJSContextFactory factory = new EJSContextFactory(monitor);
    Context ctx = factory.enterContext();
    try {
      ScopeFactory _instance = ScopeFactory.getInstance();
      ScriptableObject scope = _instance.create();
      Object _javaToJS = Context.javaToJS(monitor, scope);
      ScriptableObject.putProperty(scope, "monitor", _javaToJS);
      String _script = this.scriptProvider.getScript();
      String _scriptFileName = this.scriptProvider.getScriptFileName();
      ctx.evaluateString(scope, _script, _scriptFileName, 1, null);
    } catch (final Throwable _t) {
      if (_t instanceof RhinoException) {
        final RhinoException e = (RhinoException)_t;
        StringConcatenation _builder = new StringConcatenation();
        String _message = e.getMessage();
        _builder.append(_message, "");
        _builder.newLineIfNotEmpty();
        {
          ScriptStackElement[] _scriptStack = e.getScriptStack();
          for(final ScriptStackElement each : _scriptStack) {
            _builder.append("\t");
            _builder.append("at ");
            String _safeFunctionName = this.safeFunctionName(each);
            _builder.append(_safeFunctionName, "\t");
            _builder.append(" (");
            _builder.append(each.fileName, "\t");
            _builder.append(":");
            _builder.append(each.lineNumber, "\t");
            _builder.append(")");
            _builder.newLineIfNotEmpty();
          }
        }
        String error = _builder.toString();
        EJSConsole _singleton = EJSConsole.getSingleton();
        ErdConsolePrintStream _errorStream = _singleton.getErrorStream();
        _errorStream.println(error);
      } else if (_t instanceof CancellationException) {
        final CancellationException ce = (CancellationException)_t;
        EJSConsole _singleton_1 = EJSConsole.getSingleton();
        ErdConsolePrintStream _errorStream_1 = _singleton_1.getErrorStream();
        _errorStream_1.println("Execution was canceled.");
      } else {
        throw Exceptions.sneakyThrow(_t);
      }
    } finally {
      Context.exit();
    }
    return Status.OK_STATUS;
  }
  
  private String safeFunctionName(final ScriptStackElement e) {
    boolean _notEquals = (!Objects.equal(e.functionName, null));
    if (_notEquals) {
      return e.functionName;
    } else {
      return "anonymous";
    }
  }
}
