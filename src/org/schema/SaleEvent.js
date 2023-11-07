const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/SaleEvent
 * Event type: Sales event.
 *
 * @author schema.org
 * @class SaleEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class SaleEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SaleEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SaleEvent:
 *       type: object
 *       description: "A saleevent derived from schema.org/SaleEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
*/