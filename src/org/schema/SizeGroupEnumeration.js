const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/SizeGroupEnumeration
 * Enumerates common size groups for various product categories.
 *
 * @author schema.org
 * @class SizeGroupEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class SizeGroupEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SizeGroupEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SizeGroupEnumeration:
 *       type: object
 *       description: "A sizegroupenumeration derived from schema.org/SizeGroupEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/