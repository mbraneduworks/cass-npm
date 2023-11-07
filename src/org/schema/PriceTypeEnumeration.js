const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/PriceTypeEnumeration
 * Enumerates different price types, for example list price, invoice price, and sale price.
 *
 * @author schema.org
 * @class PriceTypeEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class PriceTypeEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PriceTypeEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PriceTypeEnumeration:
 *       type: object
 *       description: "A pricetypeenumeration derived from schema.org/PriceTypeEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/