package net.jeeeyul.eclipsejs.util;

public class BitExtension {
	public BitExtension() {
	}

	public boolean hasFlags(int flags, int... mask) {
		for (int each : mask) {
			if ((flags & each) == 0) {
				return false;
			}
		}
		return true;
	}

}
