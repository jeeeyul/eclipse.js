package net.jeeeyul.eclipsejs.util;

/**
 * Xtend extensions for binary operation.
 * 
 * @author Jeeeyul
 *
 */
public class BitExtension {
	/**
	 * @param flags
	 *            flags to test.
	 * @param mask
	 *            bit masks to test.
	 * @return true when given flags contains given bit mask.
	 */
	public boolean hasFlags(int flags, int... mask) {
		for (int each : mask) {
			if ((flags & each) == 0) {
				return false;
			}
		}
		return true;
	}

}
