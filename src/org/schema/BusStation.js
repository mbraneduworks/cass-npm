const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/BusStation
 * A bus station.
 *
 * @author schema.org
 * @class BusStation
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class BusStation extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusStation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusStation:
 *       type: object
 *       description: "A busstation derived from schema.org/BusStation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/