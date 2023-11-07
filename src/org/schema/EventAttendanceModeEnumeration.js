const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/EventAttendanceModeEnumeration
 * An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 *
 * @author schema.org
 * @class EventAttendanceModeEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class EventAttendanceModeEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EventAttendanceModeEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EventAttendanceModeEnumeration:
 *       type: object
 *       description: "A eventattendancemodeenumeration derived from schema.org/EventAttendanceModeEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/