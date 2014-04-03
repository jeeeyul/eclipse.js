package net.jeeeyul.eclipsejs.runtime;

import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;

import net.jeeeyul.eclipsejs.EclipseJSCore;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.resources.WorkspaceJob;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.NullProgressMonitor;
import org.eclipse.core.runtime.Path;
import org.eclipse.core.runtime.Status;

public class EnsureRuntimeProject extends WorkspaceJob {

	private ArrayList<IRuntimeProjectCallback> callbacks = new ArrayList<IRuntimeProjectCallback>(
			50);

	private IProject project;

	public EnsureRuntimeProject() {
		super("Eclipse.JS Project Preparing");
		setSystem(true);
		setUser(false);
	}

	public void addCallback(IRuntimeProjectCallback callback) {
		synchronized (callbacks) {
			callbacks.add(callback);
		}
		schedule();
	}

	private IContainer ensureFolder(IContainer container) throws CoreException {
		if (!container.getParent().exists()) {
			ensureFolder((IFolder) container.getParent());
		}

		if (!container.exists() && container instanceof IFolder) {
			((IFolder) container)
					.create(true, false, new NullProgressMonitor());
		}

		return container;
	}

	private void finish(IProject project) {
		IRuntimeProjectCallback[] array;
		synchronized (callbacks) {
			array = callbacks.toArray(new IRuntimeProjectCallback[callbacks
					.size()]);
			callbacks.clear();
		}

		for (IRuntimeProjectCallback each : array) {
			each.projectPrepared(project);
		}
	}

	@Override
	public IStatus runInWorkspace(IProgressMonitor monitor)
			throws CoreException {

		if (project == null || !project.exists()) {
			project = resolveProject();
		}
		finish(project);

		return Status.OK_STATUS;
	}

	private IProject resolveProject() throws CoreException {
		Enumeration<URL> entries = EclipseJSCore.getDefault().getBundle()
				.findEntries("hidden-project", "*", true);

		project = ResourcesPlugin.getWorkspace().getRoot()
				.getProject(EclipseJSCore.PROJECT_NAME);

		if (project.exists()) {
			return project;
		}
		project.create(new NullProgressMonitor());
		project.open(new NullProgressMonitor());

		while (entries.hasMoreElements()) {
			try {

				URL url = (URL) entries.nextElement();
				if (url.getPath().endsWith("/")) {
					continue;
				}
				IPath path = new Path(url.getPath()).removeFirstSegments(1);
				IFile destFile = project.getFile(path);
				ensureFolder(destFile.getParent());
				if (destFile.exists()) {
					destFile.setContents(url.openStream(), true, false,
							new NullProgressMonitor());
				} else {
					destFile.create(url.openStream(), true,
							new NullProgressMonitor());
				}

				if (!path.segment(0).equals("user")) {
					destFile.setDerived(true, new NullProgressMonitor());
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		project.refreshLocal(IResource.DEPTH_INFINITE,
				new NullProgressMonitor());

		return project;
	}
}
