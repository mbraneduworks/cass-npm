const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/MotorcycleRepair
 * A motorcycle repair shop.
 *
 * @author schema.org
 * @class MotorcycleRepair
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class MotorcycleRepair extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MotorcycleRepair");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MotorcycleRepair:
 *       type: object
 *       description: "A motorcyclerepair derived from schema.org/MotorcycleRepair"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AutomotiveBusiness'
*/