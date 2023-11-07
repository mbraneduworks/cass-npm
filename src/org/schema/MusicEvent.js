const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/MusicEvent
 * Event type: Music event.
 *
 * @author schema.org
 * @class MusicEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class MusicEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicEvent:
 *       type: object
 *       description: "A musicevent derived from schema.org/MusicEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/