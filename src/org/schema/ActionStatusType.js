const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/ActionStatusType
 * The status of an Action.
 *
 * @author schema.org
 * @class ActionStatusType
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class ActionStatusType extends schema.StatusEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ActionStatusType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ActionStatusType:
 *       type: object
 *       description: "A actionstatustype derived from schema.org/ActionStatusType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StatusEnumeration'
*/