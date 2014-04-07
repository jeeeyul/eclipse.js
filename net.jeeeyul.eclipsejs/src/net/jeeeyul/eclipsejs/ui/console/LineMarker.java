package net.jeeeyul.eclipsejs.ui.console;

import java.util.Map;

import org.eclipse.core.resources.IMarker;
import org.eclipse.core.resources.IResource;
import org.eclipse.core.runtime.CoreException;

public class LineMarker implements IMarker {

	private int line;

	public LineMarker(int line) {
		this.line = line;
	}

	@Override
	public Object getAdapter(@SuppressWarnings("rawtypes") Class adapter) {
		return null;
	}

	@Override
	public void delete() throws CoreException {

	}

	@Override
	public boolean exists() {
		return true;
	}

	@Override
	public Object getAttribute(String attributeName) throws CoreException {
		if (attributeName.equals(IMarker.LINE_NUMBER)) {
			return line;
		} else {
			return null;
		}
	}

	@Override
	public int getAttribute(String attributeName, int defaultValue) {
		if (attributeName.equals(IMarker.LINE_NUMBER)) {
			return line;
		} else {
			return defaultValue;
		}
	}

	@Override
	public String getAttribute(String attributeName, String defaultValue) {
		return null;
	}

	@Override
	public boolean getAttribute(String attributeName, boolean defaultValue) {
		return false;
	}

	@Override
	public Map<String, Object> getAttributes() throws CoreException {
		return null;
	}

	@Override
	public Object[] getAttributes(String[] attributeNames) throws CoreException {
		return null;
	}

	@Override
	public long getCreationTime() throws CoreException {
		return 0;
	}

	@Override
	public long getId() {
		return 0;
	}

	@Override
	public IResource getResource() {
		return null;
	}

	@Override
	public String getType() throws CoreException {
		return "temporary";
	}

	@Override
	public boolean isSubtypeOf(String superType) throws CoreException {
		return false;
	}

	@Override
	public void setAttribute(String attributeName, int value)
			throws CoreException {

	}

	@Override
	public void setAttribute(String attributeName, Object value)
			throws CoreException {

	}

	@Override
	public void setAttribute(String attributeName, boolean value)
			throws CoreException {

	}

	@Override
	public void setAttributes(String[] attributeNames, Object[] values)
			throws CoreException {

	}

	@Override
	public void setAttributes(Map<String, ? extends Object> attributes)
			throws CoreException {

	}

}
