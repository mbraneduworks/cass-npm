const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/LegalForceStatus
 * A list of possible statuses for the legal force of a legislation.
 *
 * @author schema.org
 * @class LegalForceStatus
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class LegalForceStatus extends schema.StatusEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LegalForceStatus");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LegalForceStatus:
 *       type: object
 *       description: "A legalforcestatus derived from schema.org/LegalForceStatus"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StatusEnumeration'
*/