package com.alchmey.news.core.models;


import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.alchmey.news.core.filters.CapstonePath;
import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;


/**
 * @author Sateesh
 * The Class BannerHomeArticleModel.
 */
@Model (adaptables =  {Resource.class,SlingHttpServletRequest.class},defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class BannerHomeArticleModel {
	
	/** The article links. */
	@ValueMapValue
	private String[] articleLinks;
	
	/** The page manager. */
	@ScriptVariable
	PageManager pageManager;
	
	/** The resolver. */
	@SlingObject
	ResourceResolver resolver;

	
	/** The banner articles. */
	List<ArticlesBannerModel> articleBannerPages =  new ArrayList<>();
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	public void init() {
		if(articleLinks !=null && articleLinks.length > 0) {
			
			for(String path : articleLinks) {
				Page  pages=pageManager.getPage(path);
				Date createdDate = pages.getProperties().get("jcr:created", Date.class);
				SimpleDateFormat formatter = new SimpleDateFormat("EEE,dd MMMM yyyy");	
				String creteDS = formatter.format(createdDate);
				String pagespath = path + CapstonePath.ARTICLE;
				Resource resource = resolver.getResource(pagespath);
				if(resource!=null) {		
					ArticlesBannerModel ba=resource.adaptTo(ArticlesBannerModel.class);		
					ba.setPageCreatedDate(creteDS);
					articleBannerPages.add(ba);
					if(articleBannerPages.size() >= 5) {
						break;
					}
				}			
			}
		}
	}

	/**
	 * Gets the article links.
	 *
	 * @return the article links
	 */
	public String[] getArticleLinks() {
		return articleLinks;
	}

	/**
	 * Gets the banner articles.
	 *
	 * @return the banner articles
	 */
	public List<ArticlesBannerModel> getArticleBannerPages() {
		return articleBannerPages;
	}

	
      
}
