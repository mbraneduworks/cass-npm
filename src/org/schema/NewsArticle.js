/**
 * Schema.org/NewsArticle
 * A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.

A more detailed overview of [schema.org News markup](/docs/news.html) is also available.

 *
 * @author schema.org
 * @class NewsArticle
 * @module org.schema
 */
public class NewsArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "NewsArticle";
	}

}