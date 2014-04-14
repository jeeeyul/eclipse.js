package net.jeeeyul.eclipsejs.util;

import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;

/**
 * Provides workbench APIs to eclipse.js script context.
 * 
 * @author Jeeeyul
 *
 */
public class WorkbenchUtil {
	/**
	 * singleton instance.
	 */
	public static final WorkbenchUtil INSTANCE = new WorkbenchUtil();

	private IWorkbench fWorkbench;
	private IWorkbenchWindow fLastKnownWindow;

	private WorkbenchUtil() {
		fWorkbench = PlatformUI.getWorkbench();
		fWorkbench.addWindowListener(new WindowAdapter() {
			@Override
			public void windowActivated(IWorkbenchWindow window) {
				fLastKnownWindow = window;
			}
		});
	}

	/**
	 * 
	 * @return Active workbench window handle. What if there is no active
	 *         workbench window, It will return first workbench window.
	 */
	public IWorkbenchWindow getActiveWorkbenchWindow() {
		IWorkbenchWindow window = fWorkbench.getActiveWorkbenchWindow();
		if (window == null) {
			window = fLastKnownWindow;
		}
		if (window == null && fWorkbench.getWorkbenchWindowCount() > 0) {
			window = fLastKnownWindow = fWorkbench.getWorkbenchWindows()[0];
		}
		return window;
	}
}
