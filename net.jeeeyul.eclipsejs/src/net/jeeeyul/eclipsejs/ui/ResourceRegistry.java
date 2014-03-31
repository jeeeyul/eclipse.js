package net.jeeeyul.eclipsejs.ui;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.swt.graphics.Resource;

public class ResourceRegistry<KT, RT extends Resource> {
	public static interface Factory<KT, RT> {
		public RT create(KT key);
	}

	private Factory<KT, RT> factory;

	private Map<KT, RT> caches = new HashMap<KT, RT>();

	public ResourceRegistry() {
	}

	public RT get(KT key) {
		RT result = caches.get(key);
		if (result == null && factory != null) {
			result = factory.create(key);
		}
		return result;
	}

	public Factory<KT, RT> getFactory() {
		return factory;
	}

	public void setFactory(Factory<KT, RT> factory) {
		this.factory = factory;
	}

	public void dispose() {
		for (RT each : caches.values()) {
			if (each != null && !each.isDisposed()) {
				each.dispose();
			}
		}
		caches.clear();
	}

}
