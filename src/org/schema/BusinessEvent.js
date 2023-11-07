const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/BusinessEvent
 * Event type: Business event.
 *
 * @author schema.org
 * @class BusinessEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class BusinessEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusinessEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusinessEvent:
 *       type: object
 *       description: "A businessevent derived from schema.org/BusinessEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/