const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/BookFormatType
 * The publication format of the book.
 *
 * @author schema.org
 * @class BookFormatType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class BookFormatType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BookFormatType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BookFormatType:
 *       type: object
 *       description: "A bookformattype derived from schema.org/BookFormatType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/