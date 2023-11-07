const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/MotorcycleDealer
 * A motorcycle dealer.
 *
 * @author schema.org
 * @class MotorcycleDealer
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class MotorcycleDealer extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MotorcycleDealer");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MotorcycleDealer:
 *       type: object
 *       description: "A motorcycledealer derived from schema.org/MotorcycleDealer"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AutomotiveBusiness'
*/