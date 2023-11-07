const schema = {};
schema.BroadcastChannel = require("./BroadcastChannel.js");
/**
 * Schema.org/RadioChannel
 * A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.
 *
 * @author schema.org
 * @class RadioChannel
 * @module org.schema
 * @extends BroadcastChannel
 */
module.exports = class RadioChannel extends schema.BroadcastChannel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RadioChannel");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RadioChannel:
 *       type: object
 *       description: "A radiochannel derived from schema.org/RadioChannel"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:BroadcastChannel'
*/