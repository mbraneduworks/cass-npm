const schema = {};
schema.NewsArticle = require("./NewsArticle.js");
/**
 * Schema.org/BackgroundNewsArticle
 * A [[NewsArticle]] providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). For example, an in-depth article or frequently-asked-questions ([FAQ](https://en.wikipedia.org/wiki/FAQ)) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using [[Book]] or [[Article]], in particular [[ScholarlyArticle]]. See also [[NewsArticle]] for related vocabulary from a learning/education perspective.
 *
 * @author schema.org
 * @class BackgroundNewsArticle
 * @module org.schema
 * @extends NewsArticle
 */
module.exports = class BackgroundNewsArticle extends schema.NewsArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BackgroundNewsArticle");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BackgroundNewsArticle:
 *       type: object
 *       description: "A backgroundnewsarticle derived from schema.org/BackgroundNewsArticle"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:NewsArticle'
*/