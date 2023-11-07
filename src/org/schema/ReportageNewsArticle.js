const schema = {};
schema.NewsArticle = require("./NewsArticle.js");
/**
 * Schema.org/ReportageNewsArticle
 * The [[ReportageNewsArticle]] type is a subtype of [[NewsArticle]] representing
 news articles which are the result of journalistic news reporting conventions.

In practice many news publishers produce a wide variety of article types, many of which might be considered a [[NewsArticle]] but not a [[ReportageNewsArticle]]. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.

The [[ReportageNewsArticle]] type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources.  This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda).  News reports in the [[ReportageNewsArticle]] sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.

A [[ReportageNewsArticle]] which goes deeper into analysis can also be marked with an additional type of [[AnalysisNewsArticle]].

 *
 * @author schema.org
 * @class ReportageNewsArticle
 * @module org.schema
 * @extends NewsArticle
 */
module.exports = class ReportageNewsArticle extends schema.NewsArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReportageNewsArticle");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ReportageNewsArticle:
 *       type: object
 *       description: "A reportagenewsarticle derived from schema.org/ReportageNewsArticle"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:NewsArticle'
*/