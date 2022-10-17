package com.alchmey.news.core.models;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


/**
 * @author Sateesh
 * The Class VideoLinkModel.
 */
@Model (adaptables =  Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class VideoLinkModel {
	
	/** The you tube links. */
	@ValueMapValue
	private String youTubeLinks;
	
	/** The date str. */
	@ValueMapValue
	private String dateStr;
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	public void init() {
		Date date = new Date();  
		SimpleDateFormat formatter =  new SimpleDateFormat("EEEE, dd MMMM yyyy"); 
		dateStr = formatter.format(date);
	}
	
	/**
	 * Gets the you tube links.
	 *
	 * @return the you tube links
	 */
	public String getYouTubeLinks() {
		return youTubeLinks;
	}
	
	/**
	 * Gets the date str.
	 *
	 * @return the date str
	 */
	public String getDateStr() {
		return dateStr;
	}
	
}
