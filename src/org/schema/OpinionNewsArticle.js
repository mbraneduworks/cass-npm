const schema = {};
schema.NewsArticle = require("./NewsArticle.js");
/**
 * Schema.org/OpinionNewsArticle
 * An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of news and events. For example, a [[NewsArticle]] consisting of a column or [[Blog]]/[[BlogPosting]] entry in the Opinions section of a news publication. 
 *
 * @author schema.org
 * @class OpinionNewsArticle
 * @module org.schema
 * @extends NewsArticle
 */
module.exports = class OpinionNewsArticle extends schema.NewsArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OpinionNewsArticle");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OpinionNewsArticle:
 *       type: object
 *       description: "A opinionnewsarticle derived from schema.org/OpinionNewsArticle"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:NewsArticle'
*/