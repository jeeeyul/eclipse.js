package net.jeeeyul.eclipsejs.ui.console;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.Path;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.ui.console.IPatternMatchListenerDelegate;
import org.eclipse.ui.console.PatternMatchEvent;
import org.eclipse.ui.console.TextConsole;

public class ConsoleLinkMatcher implements IPatternMatchListenerDelegate {
	private Pattern pattern = Pattern
			.compile("((eclipsejs):/)?(/[^/\r\n\\s]+(/[^/\r\n\\s]+)*/[a-zA-Z0-9_\\-\\s\\.]+\\.js)[:#]([\\d]+)");

	private TextConsole console;

	@Override
	public void connect(TextConsole console) {
		this.console = console;

	}

	@Override
	public void disconnect() {
		this.console = null;
	}

	@Override
	public void matchFound(PatternMatchEvent event) {
		try {
			String string = console.getDocument().get(event.getOffset(),
					event.getLength());
			Matcher matcher = pattern.matcher(string);
			System.out.println(matcher.groupCount());
			if (matcher.matches()) {
				String platform = matcher.group(2);
				String path = matcher.group(3);
				int lineNumber = Integer.parseInt(matcher.group(5));

				if (platform == null) {
					IFile file = ResourcesPlugin.getWorkspace().getRoot()
							.getFile(new Path(path));
					console.addHyperlink(new SourceLink(file, lineNumber),
							event.getOffset(), event.getLength());
				} else {
					console.addHyperlink(new BundleLink(path),
							event.getOffset(), event.getLength());
				}
			}
		} catch (BadLocationException e) {
			e.printStackTrace();
		}
	}

}
