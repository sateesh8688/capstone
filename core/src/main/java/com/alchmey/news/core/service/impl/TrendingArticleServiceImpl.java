package com.alchmey.news.core.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.alchmey.news.core.filters.CapstonePath;
import com.alchmey.news.core.models.ArticlesBannerModel;
import com.alchmey.news.core.service.TrendingArticlesService;
import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.Hit;
import com.day.cq.wcm.api.Page;

/**
 * @author Sateesh
 * 
 * The Class TrendingArticleServiceImpl.
 */
@Component(immediate = true, service = TrendingArticlesService.class)
public class TrendingArticleServiceImpl implements TrendingArticlesService{
	
	/** The query builder. */
	@Reference
	QueryBuilder queryBuilder;
	
	/** The Constant LOG. */
	private static final Logger LOG = LoggerFactory.getLogger(TrendingArticleServiceImpl.class);
	
	
	/** The factory. *
	 * All resource resolvers returned by the same resource resolver factory must use the same search path
	 * @param factory the factory*/
	@Reference
	ResourceResolverFactory factory;
	
	/**
	 * Gets the resource resolver.
	 * getResourceresolver is can identified by sub service name 
	 * * @return the resource resolver
	 */
	@Override
	public ResourceResolver getResourceResolver() {		
		ResourceResolver resolver = null;
		
		try {
			Map<String, Object> params = new HashMap<>();
			params.put(ResourceResolverFactory.SUBSERVICE,CapstonePath.SUB_SERVICE_NAME);	
			resolver = factory.getServiceResourceResolver(params);			
		} catch (LoginException e) {
			LOG.error("Error system user - {}",e.getMessage());
		}
		return resolver;		
	}

	/**
	 * Gets the trending articles.
	 *
	 * @return the trending articles
	 */
	@Override
	public List<ArticlesBannerModel> getTrendingArticles() {
		ResourceResolver resolver = getResourceResolver();
		/**
		 *@param query builder  commands in fetch banner article pages in query
		 */
		Map<String, String> queryP = new HashMap<>();
		queryP.put("type", "cq:Page");
		queryP.put("path", "/content/capstone/us/en/article");
		queryP.put("orderby", "@jcr:content/jcr:created");
		queryP.put("orderby.sort","desc");
		
		Query query = queryBuilder.createQuery(PredicateGroup.create(queryP), resolver.adaptTo(Session.class));
		List<Hit> resultPath = query.getResult().getHits();
		
		/**
		 * @return the trending articles 
		 */
		List<ArticlesBannerModel> trendingArticlesPagesPath = new ArrayList<>();
		/**
		 * 
		 *banner article pages come to the trending article logic in resource used to fetch the location ,pages
		 *
		 */
		for (Hit object : resultPath) {
			try {
				Resource resource = object.getResource();
				String paths = resource.getPath() + CapstonePath.ARTICLE;
				Resource bannerResource = resolver.getResource(paths);
				Page pages = resource.adaptTo(Page.class);
				/**
				 * @param Date Creation of page
				 * page creation date using date method				 
				 * */
				Date datec = pages.getProperties().get("jcr:created", Date.class);
				SimpleDateFormat formatter = new SimpleDateFormat("EEEE, d MMMM yyyy");
				String datestr = formatter.format(datec);
				/**
				 * banner article using to add the trending article 
				 *
				 * @return the trending articles
				 */
				ArticlesBannerModel banner = bannerResource.adaptTo(ArticlesBannerModel.class);
				banner.setPageCreatedDate(datestr);
				trendingArticlesPagesPath.add(banner);
			} catch (RepositoryException e) {
				LOG.info("error");
			}
		}	
		return trendingArticlesPagesPath;
	}
	
}
