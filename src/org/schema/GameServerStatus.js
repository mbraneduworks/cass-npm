const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/GameServerStatus
 * Status of a game server.
 *
 * @author schema.org
 * @class GameServerStatus
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class GameServerStatus extends schema.StatusEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GameServerStatus");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GameServerStatus:
 *       type: object
 *       description: "A gameserverstatus derived from schema.org/GameServerStatus"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StatusEnumeration'
*/