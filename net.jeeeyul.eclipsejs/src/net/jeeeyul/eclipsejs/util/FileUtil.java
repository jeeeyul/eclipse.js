package net.jeeeyul.eclipsejs.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IFolder;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.NullProgressMonitor;

/**
 * 
 * @author Jeeeyul
 *
 */
public class FileUtil {
	private static final FileUtil instance = new FileUtil();

	/**
	 * @return A singleton instance.
	 */
	public static FileUtil getInstance() {
		return instance;
	}

	/**
	 * 
	 * @param is
	 *            {@link InputStream} to read.
	 * @param charset
	 *            encoding to read.
	 * @return Text Content of given input stream.
	 * @throws IOException
	 */
	public String getTextContent(InputStream is, String charset) throws IOException {
		byte[] buf = new byte[512];
		int len = -1;
		ByteArrayOutputStream baos = new ByteArrayOutputStream();

		while ((len = is.read(buf)) != -1) {
			baos.write(buf, 0, len);
		}
		is.close();
		return baos.toString(charset);
	}

	/**
	 * Store given text content into {@link IFile}.
	 * 
	 * @param file
	 *            file to save.
	 * @param content
	 *            text content to store.
	 * @throws UnsupportedEncodingException
	 * @throws CoreException
	 */
	public void setTextContent(IFile file, String content) throws UnsupportedEncodingException, CoreException {
		byte[] data = content.getBytes(file.getCharset());
		file.setContents(new ByteArrayInputStream(data), true, true, new NullProgressMonitor());
	}

	/**
	 * Store give text content into {@link IFile}.
	 * 
	 * @param file
	 *            file to create.
	 * @param content
	 *            text content to store.
	 * @throws UnsupportedEncodingException
	 * @throws CoreException
	 */
	public void createWithTextContent(IFile file, String content) throws UnsupportedEncodingException, CoreException {
		byte[] data = content.getBytes(file.getCharset());
		file.create(new ByteArrayInputStream(data), true, new NullProgressMonitor());
	}

	/**
	 * Ensure existence of folder.
	 * 
	 * @param folder
	 *            folder to ensure existence. It will ensure all it's parents.
	 */
	public void mkdirp(IFolder folder) {
		if (folder.exists()) {
			return;
		}

		IContainer parent = folder.getParent();
		if (!parent.exists()) {
			if (parent instanceof IFolder) {
				mkdirp((IFolder) parent);
			} else {
				throw new RuntimeException("Project can't be created through mkdirp");
			}
		}

		try {
			folder.create(true, false, new NullProgressMonitor());
		} catch (CoreException e) {
			e.printStackTrace();
		}
	}
}
