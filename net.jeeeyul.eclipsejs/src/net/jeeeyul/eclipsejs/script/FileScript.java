package net.jeeeyul.eclipsejs.script;

import net.jeeeyul.eclipsejs.util.FileUtil;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.IPath;

/**
 * {@link IScriptProvider} based on {@link IFile}.
 * 
 * @author Jeeeyul
 *
 */
public class FileScript implements IScriptProvider {

	private IFile file;

	/**
	 * Creates an {@link FileScript}.
	 * 
	 * @param file
	 */
	public FileScript(IFile file) {
		this.file = file;
	}

	@Override
	public String getScript() {
		try {
			return FileUtil.getInstance().getTextContent(file.getContents(), file.getCharset());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public IPath getFullPath() {
		return file.getFullPath();
	}

}
