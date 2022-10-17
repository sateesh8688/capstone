package com.alchmey.news.core.models;

import org.apache.sling.api.resource.Resource;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

// 
/**
 * @author Sateesh
 * The Class FooterModel.
 */
@Model (adaptables =  Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class FooterModel {

	/** The footer logo. */
	@ValueMapValue
	private String footerLogo;
	
	/** The about text. */
	@ValueMapValue
	private String aboutText;

	/**
	 * Gets the footer logo.
	 *
	 * @return the footer logo
	 */
	public String getFooterLogo() {
		return footerLogo;
	}

	/**
	 * Gets the about text.
	 *
	 * @return the about text
	 */
	public String getAboutText() {
		return aboutText;
	}

	
	
	
}
