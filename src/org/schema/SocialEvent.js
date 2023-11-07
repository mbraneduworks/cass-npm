const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/SocialEvent
 * Event type: Social event.
 *
 * @author schema.org
 * @class SocialEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class SocialEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SocialEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SocialEvent:
 *       type: object
 *       description: "A socialevent derived from schema.org/SocialEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/