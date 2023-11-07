const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Article
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *
 * @author schema.org
 * @class Article
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Article extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Article");
	}

	/**
	 * Schema.org/speakable
	 * Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.

The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:

1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.

2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the [[cssSelector]] property.

3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.


For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
we define a supporting type, [[SpeakableSpecification]]  which is defined to be a possible value of the *speakable* property.
         
	 *
	 * @property speakable
	 * @type SpeakableSpecification
	 */
	speakable;

	/**
	 * Schema.org/backstory
	 * For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.
	 *
	 * @property backstory
	 * @type CreativeWork
	 */
	backstory;

	/**
	 * Schema.org/pagination
	 * Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
	 *
	 * @property pagination
	 * @type Text
	 */
	pagination;

	/**
	 * Schema.org/pageStart
	 * The page on which the work starts; for example "135" or "xiii".
	 *
	 * @property pageStart
	 * @type Integer
	 */
	pageStart;

	/**
	 * Schema.org/pageEnd
	 * The page on which the work ends; for example "138" or "xvi".
	 *
	 * @property pageEnd
	 * @type Text
	 */
	pageEnd;

	/**
	 * Schema.org/wordCount
	 * The number of words in the text of the Article.
	 *
	 * @property wordCount
	 * @type Integer
	 */
	wordCount;

	/**
	 * Schema.org/articleSection
	 * Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.
	 *
	 * @property articleSection
	 * @type Text
	 */
	articleSection;

	/**
	 * Schema.org/articleBody
	 * The actual body of the article.
	 *
	 * @property articleBody
	 * @type Text
	 */
	articleBody;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       description: "A article derived from schema.org/Article"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             speakable:
 *               description: Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the [[cssSelector]] property.3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For thiswe define a supporting type, [[SpeakableSpecification]] which is defined to be a possible value of the *speakable* property. 
 *               $ref: '#/components/schemas/speakablespecification'
 *             backstory:
 *               description: For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.
 *               $ref: '#/components/schemas/creativework'
 *             pagination:
 *               description: Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
 *               type: string
 *             pageStart:
 *               description: The page on which the work starts; for example "135" or "xiii".
 *               type: number
 *             pageEnd:
 *               description: The page on which the work ends; for example "138" or "xvi".
 *               type: string
 *             wordCount:
 *               description: The number of words in the text of the Article.
 *               type: number
 *             articleSection:
 *               description: Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.
 *               type: string
 *             articleBody:
 *               description: The actual body of the article.
 *               type: string
*/