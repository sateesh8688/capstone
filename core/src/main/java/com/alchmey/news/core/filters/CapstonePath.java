package com.alchmey.news.core.filters;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * The Class CapstoneDate.
 */
public class CapstonePath {
	
	/**
	 * Instantiates a new constant paths.
	 */
	private CapstonePath() {
	    throw new IllegalStateException("ConstantPaths class");
	    
	  }

	/** The Constant ARTICLE. */
	public static final String ARTICLE = "/jcr:content/root/container/banner_article";
	
	public static final String YOUTUBEURL="https://www.youtube.com/oembed?" +"url=";
	
	/** The Constant SUB_SERVICE_NAME. */
	public static final String SUB_SERVICE_NAME = "cpservice";
	/**
	 * Gets the date F.
	 *
	 * @param date the date
	 * @return the date F
	 */
	public static String getDateF(Date date) {
		if(date !=null) {
			
			SimpleDateFormat formatter = new SimpleDateFormat("EEE,dd MMMM yyyy");	
			return  formatter.format(date);
		}
		
		return null;

	}
	
	
}
