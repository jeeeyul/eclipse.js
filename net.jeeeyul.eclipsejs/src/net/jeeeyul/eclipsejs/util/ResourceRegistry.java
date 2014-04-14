package net.jeeeyul.eclipsejs.util;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.swt.graphics.Resource;

/**
 * Base Resource Registry and Factory.
 * 
 * @param <KT>
 *            Resource Key Type.
 * @param <RT>
 *            Resource Type.
 * 
 * @author Jeeeyul
 */
public class ResourceRegistry<KT, RT extends Resource> {
	/**
	 * Factory Interface.
	 * 
	 * @author Jeeeyul
	 *
	 * @param <KT>
	 *            resource key type.
	 * @param <RT>
	 *            resource type.
	 */
	public static interface Factory<KT, RT> {
		/**
		 * Creates a resosurce with given key.
		 * 
		 * @param key
		 *            key to create resource.
		 * @return created resosurce.
		 */
		public RT create(KT key);
	}

	private Factory<KT, RT> factory;

	private Map<KT, RT> caches = new HashMap<KT, RT>();

	/**
	 * Gets a resource for given key. what if there is no resource for given
	 * key, It will try to create through factory that can be set by
	 * {@link #setFactory(Factory)}
	 * 
	 * @param key
	 *            key to get resource.
	 * @return resource for given key.
	 */
	public RT get(KT key) {
		RT result = caches.get(key);
		if (result == null && factory != null) {
			result = factory.create(key);
		}
		return result;
	}

	/**
	 * 
	 * @return gets key-value resource factory.
	 */
	public Factory<KT, RT> getFactory() {
		return factory;
	}

	/**
	 * 
	 * @param factory
	 *            A factory that will creates resources for given key.
	 */
	public void setFactory(Factory<KT, RT> factory) {
		this.factory = factory;
	}

	/**
	 * disposes all resources that are created by this {@link ResourceRegistry}.
	 */
	public void dispose() {
		for (RT each : caches.values()) {
			if (each != null && !each.isDisposed()) {
				each.dispose();
			}
		}
		caches.clear();
	}

}
