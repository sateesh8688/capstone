package com.alchmey.news.core.service;

import java.util.List;

import org.apache.sling.api.resource.ResourceResolver;

import com.alchmey.news.core.models.ArticlesBannerModel;


/**
 * @author Sateesh
 * The Interface TrendingArticlesService.
 */
public interface TrendingArticlesService {
	
	/**
	 * Gets the trending articles.
	 *
	 * @return the trending articles
	 */
	public List<ArticlesBannerModel> getTrendingArticles();

	/**
	 * Gets the resource resolver.
	 *
	 * @return the resource resolver
	 */
	ResourceResolver getResourceResolver();
	
	
}
