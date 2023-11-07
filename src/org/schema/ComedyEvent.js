const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/ComedyEvent
 * Event type: Comedy event.
 *
 * @author schema.org
 * @class ComedyEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class ComedyEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComedyEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ComedyEvent:
 *       type: object
 *       description: "A comedyevent derived from schema.org/ComedyEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/