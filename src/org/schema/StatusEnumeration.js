const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/StatusEnumeration
 * Lists or enumerations dealing with status types.
 *
 * @author schema.org
 * @class StatusEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class StatusEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","StatusEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     StatusEnumeration:
 *       type: object
 *       description: "A statusenumeration derived from schema.org/StatusEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/