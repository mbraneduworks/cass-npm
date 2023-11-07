const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Claim
 * A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.

  Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]].

  At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
  
 *
 * @author schema.org
 * @class Claim
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Claim extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Claim");
	}

	/**
	 * Schema.org/firstAppearance
	 * Indicates the first known occurence of a [[Claim]] in some [[CreativeWork]].
	 *
	 * @property firstAppearance
	 * @type CreativeWork
	 */
	firstAppearance;

	/**
	 * Schema.org/appearance
	 * Indicates an occurence of a [[Claim]] in some [[CreativeWork]].
	 *
	 * @property appearance
	 * @type CreativeWork
	 */
	appearance;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Claim:
 *       type: object
 *       description: "A claim derived from schema.org/Claim"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             firstAppearance:
 *               description: Indicates the first known occurence of a [[Claim]] in some [[CreativeWork]].
 *               $ref: '#/components/schemas/creativework'
 *             appearance:
 *               description: Indicates an occurence of a [[Claim]] in some [[CreativeWork]].
 *               $ref: '#/components/schemas/creativework'
*/