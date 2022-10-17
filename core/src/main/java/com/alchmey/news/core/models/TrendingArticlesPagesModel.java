package com.alchmey.news.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;

import com.alchmey.news.core.service.TrendingArticlesService;




/**
 * @author Sateesh
 * The Class TrendingArticlesPagesModel.
 */
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class TrendingArticlesPagesModel {
	
	/** The trending articles service. */
	@OSGiService
	TrendingArticlesService trendingArticlesService;
	
	/** The trending articles. */
	List<ArticlesBannerModel> trendingArticles;
	
	
	/**
	 * Inits the.
	 */
	@PostConstruct
	public void init() {
		trendingArticles = trendingArticlesService.getTrendingArticles();
	}
	
	/**
	 * Gets the trending articles.
	 *
	 * @return the trending articles
	 */
	public List<ArticlesBannerModel> getTrendingArticles() {
		return trendingArticles;
	}
}
