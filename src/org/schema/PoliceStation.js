const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/PoliceStation
 * A police station.
 *
 * @author schema.org
 * @class PoliceStation
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class PoliceStation extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PoliceStation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PoliceStation:
 *       type: object
 *       description: "A policestation derived from schema.org/PoliceStation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/