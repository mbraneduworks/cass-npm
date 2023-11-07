const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Brand
 * A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 *
 * @author schema.org
 * @class Brand
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Brand extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Brand");
	}

	/**
	 * Schema.org/aggregateRating
	 * The overall rating, based on a collection of reviews or ratings, of the item.
	 *
	 * @property aggregateRating
	 * @type AggregateRating
	 */
	aggregateRating;

	/**
	 * Schema.org/review
	 * A review of the item.
	 *
	 * @property review
	 * @type Review
	 */
	review;

	/**
	 * Schema.org/logo
	 * An associated logo.
	 *
	 * @property logo
	 * @type ImageObject
	 */
	logo;

	/**
	 * Schema.org/slogan
	 * A slogan or motto associated with the item.
	 *
	 * @property slogan
	 * @type Text
	 */
	slogan;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Brand:
 *       type: object
 *       description: "A brand derived from schema.org/Brand"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             aggregateRating:
 *               description: The overall rating, based on a collection of reviews or ratings, of the item.
 *               $ref: '#/components/schemas/aggregaterating'
 *             review:
 *               description: A review of the item.
 *               $ref: '#/components/schemas/review'
 *             logo:
 *               description: An associated logo.
 *               $ref: '#/components/schemas/imageobject'
 *             slogan:
 *               description: A slogan or motto associated with the item.
 *               type: string
*/