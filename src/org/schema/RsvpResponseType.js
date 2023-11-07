const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/RsvpResponseType
 * RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 *
 * @author schema.org
 * @class RsvpResponseType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class RsvpResponseType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RsvpResponseType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RsvpResponseType:
 *       type: object
 *       description: "A rsvpresponsetype derived from schema.org/RsvpResponseType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/