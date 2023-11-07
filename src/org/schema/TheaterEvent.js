const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/TheaterEvent
 * Event type: Theater performance.
 *
 * @author schema.org
 * @class TheaterEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class TheaterEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TheaterEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TheaterEvent:
 *       type: object
 *       description: "A theaterevent derived from schema.org/TheaterEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/