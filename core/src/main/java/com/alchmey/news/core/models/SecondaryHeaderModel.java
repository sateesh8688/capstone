package com.alchmey.news.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

// 
/**
 * @author Sateesh
 * The Class SecondaryHeaderModel.
 */
@Model (adaptables =  Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class SecondaryHeaderModel {
	
	/** The logo. */
	@ValueMapValue
	private String logo;
	
	/** The languages. */
	@ValueMapValue
	private String[] languages;
	
	/** The display languages. */
	@ValueMapValue
	private String displayLanguages;

	/**
	 * Gets the logo.
	 *
	 * @return the logo
	 */
	public String getLogo() {
		return logo;
	}

	/**
	 * Gets the languages.
	 *
	 * @return the languages
	 */
	public String[] getLanguages() {
		return languages;
	}

	/**
	 * Gets the display languages.
	 *
	 * @return the display languages
	 */
	public String getDisplayLanguages() {
		return displayLanguages;
	}
	

}
