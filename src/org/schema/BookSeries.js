const schema = {};
schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/BookSeries
 * A series of books. Included books can be indicated with the hasPart property.
 *
 * @author schema.org
 * @class BookSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class BookSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BookSeries");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BookSeries:
 *       type: object
 *       description: "A bookseries derived from schema.org/BookSeries"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWorkSeries'
*/