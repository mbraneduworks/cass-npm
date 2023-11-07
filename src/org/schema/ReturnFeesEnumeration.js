const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/ReturnFeesEnumeration
 * ReturnFeesEnumeration expresses policies for return fees.
 *
 * @author schema.org
 * @class ReturnFeesEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class ReturnFeesEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReturnFeesEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ReturnFeesEnumeration:
 *       type: object
 *       description: "A returnfeesenumeration derived from schema.org/ReturnFeesEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/