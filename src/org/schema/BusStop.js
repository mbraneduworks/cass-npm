const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/BusStop
 * A bus stop.
 *
 * @author schema.org
 * @class BusStop
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class BusStop extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusStop");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusStop:
 *       type: object
 *       description: "A busstop derived from schema.org/BusStop"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/