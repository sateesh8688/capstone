package com.alchmey.news.core.service;

import java.util.HashMap;
import java.util.Map;

import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Reference;


/**
 * The Class TrendingSubservice.
 */
public class TrendingSubservice {

	
	/**
	 * Instantiates a new trending subservice.
	 */
	private TrendingSubservice (){

	}
	
	/** The Constant SUB_SERVICE_NAME. */
	public static final String SUB_SERVICE_NAME = "cpservice";
	
	/** The factory. */
	@Reference
	ResourceResolverFactory factory;
	
	 /**
 	 * New resolver.
 	 *
 	 * @param factory the factory
 	 * @return the resource resolver
 	 * @throws LoginException the login exception
 	 */
 	public static ResourceResolver newResolver(ResourceResolverFactory factory)throws LoginException {
 		
		 Map<String, Object> params = new HashMap<>();
		 params.put(ResourceResolverFactory.SUBSERVICE, SUB_SERVICE_NAME);	
		 return factory.getServiceResourceResolver(params);
		 
	 }

}
