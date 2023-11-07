const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/DanceEvent
 * Event type: A social dance.
 *
 * @author schema.org
 * @class DanceEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class DanceEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DanceEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DanceEvent:
 *       type: object
 *       description: "A danceevent derived from schema.org/DanceEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/