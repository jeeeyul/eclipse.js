package net.jeeeyul.eclipsejs.extensions;

import net.jeeeyul.eclipsejs.extensions.builder.EJSBuilder;

/**
 * Constants Palette for eclipse.js project.
 * 
 * @author Jeeeyul
 *
 */
public class ExtensionConstants {
	private static final String PREFIX = "eclipse.js";

	/**
	 * Constants for EJS Builder.
	 * 
	 * @author Jeeeyul
	 *
	 */
	public static class Builder {
		private static final String PREFIX = ExtensionConstants.PREFIX + "/" + "builder";

		/**
		 * ID for {@link EJSBuilder}
		 */
		public static final String BUILDER_ID = PREFIX + "/" + "id";
	}
}
