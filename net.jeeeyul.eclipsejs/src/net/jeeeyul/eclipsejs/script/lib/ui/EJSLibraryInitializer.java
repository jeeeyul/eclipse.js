package net.jeeeyul.eclipsejs.script.lib.ui;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import net.jeeeyul.eclipsejs.EclipseJSCore;

import org.eclipse.core.runtime.IPath;
import org.eclipse.core.runtime.Path;
import org.eclipse.wst.jsdt.core.IJavaScriptProject;
import org.eclipse.wst.jsdt.core.IJsGlobalScopeContainer;
import org.eclipse.wst.jsdt.core.JsGlobalScopeContainerInitializer;
import org.eclipse.wst.jsdt.core.compiler.libraries.LibraryLocation;
import org.osgi.framework.Bundle;

public class EJSLibraryInitializer extends JsGlobalScopeContainerInitializer
		implements IJsGlobalScopeContainer {

	public static final String LIB_ID = "net.jeeeyul.eclipsejs.lib";
	public static final String LIB_NAME = "Eclipse.JS Libraries";

	public EJSLibraryInitializer() {
	}

	@Override
	public LibraryLocation getLibraryLocation() {
		return EJSLibraryLocation.getInstance();
	}
	
	static class EJSLibraryLocation implements LibraryLocation {
		public EJSLibraryLocation() {
			IPath stateLocation = EclipseJSCore.getDefault().getStateLocation();
			IPath libLocation = stateLocation.append("libraries");
			Bundle bundle = EclipseJSCore.getDefault().getBundle();
			Enumeration<URL> entries = bundle.findEntries("libraries", "*.js",
					true);
			while (entries.hasMoreElements()) {
				URL url = (URL) entries.nextElement();
				IPath srcPath = new Path(url.getPath()).removeFirstSegments(1);
				IPath destPath = libLocation.append(srcPath);
				File dest = destPath.toFile();
				try {
					copyFile(url.openStream(), dest);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		private static LibraryLocation fInstance;

		public static LibraryLocation getInstance() {
			if (fInstance == null) {
				fInstance = new EJSLibraryLocation();
			}
			return fInstance;
		}

		public char[][] getLibraryFileNames() {
			List<char[]> result = new ArrayList<char[]>();
			Bundle bundle = EclipseJSCore.getDefault().getBundle();
			Enumeration<URL> docs = bundle.findEntries("libraries/docs",
					"*.js", false);
			while (docs.hasMoreElements()) {
				URL url = (URL) docs.nextElement();
				IPath path = new Path(url.getPath());
				path = new Path("docs").append(path.lastSegment());
				result.add(path.toPortableString().toCharArray());
			}
			
			Enumeration<URL> runtimes = bundle.findEntries("libraries/both",
					"*.js", false);
			while (runtimes.hasMoreElements()) {
				URL url = (URL) runtimes.nextElement();
				IPath path = new Path(url.getPath());
				path = new Path("both").append(path.lastSegment());
				result.add(path.toPortableString().toCharArray());
			}

			return result.toArray(new char[result.size()][]);
		}

		@Override
		public String getLibraryPath(char[] name) {
			return getLibraryPath(new String(name));
		}

		@Override
		public String getLibraryPath(String name) {
			return EclipseJSCore.getDefault().getStateLocation()
					.append("libraries").append(new String(name))
					.toPortableString();
		}

		@Override
		public IPath getLibraryPathInPlugin() {
			return new Path(getLibraryPath(""));
		}

		@Override
		public IPath getWorkingLibPath() {
			return new Path(getLibraryPath(""));
		}

		protected static void copyFile(InputStream src, File dst)
				throws IOException {
			File dir = dst.getParentFile();
			if (!dir.exists()) {
				dir.mkdirs();
			}
			InputStream in = null;
			OutputStream out = null;
			try {
				in = new BufferedInputStream(src);
				out = new BufferedOutputStream(new FileOutputStream(dst));
				byte[] buffer = new byte[4096];
				int len;
				while ((len = in.read(buffer)) != -1) {
					out.write(buffer, 0, len);
				}
			} finally {
				if (in != null)
					try {
						in.close();
					} catch (IOException e) {
						// problem closing, no recovery or diagnosis possible
					}
				if (out != null)
					try {
						out.close();
					} catch (IOException e) {
						// problem closing, no recovery or diagnosis possible
					}
			}
		}

	}

	@Override
	public String getDescription() {
		return LIB_NAME;
	}

	@Override
	public boolean canUpdateJsGlobalScopeContainer(IPath containerPath,
			IJavaScriptProject project) {
		return true;
	}
}
