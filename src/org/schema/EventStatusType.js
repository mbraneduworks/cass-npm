const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/EventStatusType
 * EventStatusType is an enumeration type whose instances represent several states that an Event may be in.
 *
 * @author schema.org
 * @class EventStatusType
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class EventStatusType extends schema.StatusEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EventStatusType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EventStatusType:
 *       type: object
 *       description: "A eventstatustype derived from schema.org/EventStatusType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StatusEnumeration'
*/