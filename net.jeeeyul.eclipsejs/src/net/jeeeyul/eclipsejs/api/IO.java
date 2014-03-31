package net.jeeeyul.eclipsejs.api;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.NullProgressMonitor;

public class IO {
	private static final IO instance = new IO();

	public static IO getInstance() {
		return instance;
	}

	public IO() {
	}

	public String readInputStream(InputStream is, String charset)
			throws IOException {
		byte[] buf = new byte[512];
		int len = -1;
		ByteArrayOutputStream baos = new ByteArrayOutputStream();

		while ((len = is.read(buf)) != -1) {
			baos.write(buf, 0, len);
		}
		is.close();
		return baos.toString();
	}

	public void setContents(IFile file, String content)
			throws UnsupportedEncodingException, CoreException {
		byte[] data = content.getBytes(file.getCharset());
		file.setContents(new ByteArrayInputStream(data), true, true,
				new NullProgressMonitor());
	}
}
