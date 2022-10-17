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
 * The Class PrimaryHeaderModel.
 */
@Model (adaptables =  Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class PrimaryHeaderModel {
	
	/** The trending text. */
	@ValueMapValue
	private String trendingText;
	
	/** The trending desc. */
	@ValueMapValue
	private String trendingDesc;
	
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
	 * Gets the trending text.
	 *
	 * @return the trending text
	 */
	public String getTrendingText() {
		return trendingText;
	}
	
	/**
	 * Gets the trending desc.
	 *
	 * @return the trending desc
	 */
	public String getTrendingDesc() {
		return trendingDesc;
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
