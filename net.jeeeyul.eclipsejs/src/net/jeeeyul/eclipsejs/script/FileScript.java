package net.jeeeyul.eclipsejs.script;

import net.jeeeyul.eclipsejs.script.api.IO;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.runtime.IPath;

public class FileScript implements IScriptProvider {

	private IFile file;

	public FileScript(IFile file) {
		this.file = file;
	}

	@Override
	public String getScript() {
		try {
			return IO.getInstance().readInputStream(file.getContents(),
					file.getCharset());
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	@Override
	public IPath getFullPath() {
		return file.getFullPath();
	}

}
