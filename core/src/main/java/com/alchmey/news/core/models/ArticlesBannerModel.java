package com.alchmey.news.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

// 
/**
 * @author Sateesh
 * The Class ArticlesBannerModel.
 */
@Model (adaptables =  Resource.class,defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class ArticlesBannerModel {
	
	/** The banner image. */
	@ValueMapValue
	private String bannerImage;
	
	/** The banner text. */
	@ValueMapValue
	private String bannerText;
	
	/** The page created date. */
	@ValueMapValue
	private String pageCreatedDate;

	/**
	 * Gets the banner image.
	 *
	 * @return the banner image
	 */
	public String getBannerImage() {
		return bannerImage;
	}

	/**
	 * Gets the banner text.
	 *
	 * @return the banner text
	 */
	public String getBannerText() {
		return bannerText;
	}

	/**
	 * Gets the page created date.
	 *
	 * @return the page created date
	 */
	public String getPageCreatedDate() {
		return pageCreatedDate;
	}

	/**
	 * Sets the page created date.
	 *
	 * @param pageCreatedDate the new page created date
	 */
	public void setPageCreatedDate(String pageCreatedDate) {
		this.pageCreatedDate= pageCreatedDate;
	}

	
	
	

}
