const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/GasStation
 * A gas station.
 *
 * @author schema.org
 * @class GasStation
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class GasStation extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GasStation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GasStation:
 *       type: object
 *       description: "A gasstation derived from schema.org/GasStation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AutomotiveBusiness'
*/