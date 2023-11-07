const schema = {};
schema.Rating = require("./Rating.js");
/**
 * Schema.org/AggregateRating
 * The average rating based on multiple ratings or reviews.
 *
 * @author schema.org
 * @class AggregateRating
 * @module org.schema
 * @extends Rating
 */
module.exports = class AggregateRating extends schema.Rating {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AggregateRating");
	}

	/**
	 * Schema.org/ratingCount
	 * The count of total number of ratings.
	 *
	 * @property ratingCount
	 * @type Integer
	 */
	ratingCount;

	/**
	 * Schema.org/itemReviewed
	 * The item that is being reviewed/rated.
	 *
	 * @property itemReviewed
	 * @type Thing
	 */
	itemReviewed;

	/**
	 * Schema.org/reviewCount
	 * The count of total number of reviews.
	 *
	 * @property reviewCount
	 * @type Integer
	 */
	reviewCount;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AggregateRating:
 *       type: object
 *       description: "A aggregaterating derived from schema.org/AggregateRating"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Rating'
 *         - properties:
 *             ratingCount:
 *               description: The count of total number of ratings.
 *               type: number
 *             itemReviewed:
 *               description: The item that is being reviewed/rated.
 *               $ref: '#/components/schemas/thing'
 *             reviewCount:
 *               description: The count of total number of reviews.
 *               type: number
*/