const schema = {};
schema.PublicationEvent = require("./PublicationEvent.js");
/**
 * Schema.org/OnDemandEvent
 * A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 *
 * @author schema.org
 * @class OnDemandEvent
 * @module org.schema
 * @extends PublicationEvent
 */
module.exports = class OnDemandEvent extends schema.PublicationEvent {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OnDemandEvent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OnDemandEvent:
 *       type: object
 *       description: "A ondemandevent derived from schema.org/OnDemandEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:PublicationEvent'
*/