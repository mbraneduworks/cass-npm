const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoRental
 * A car rental business.
 *
 * @author schema.org
 * @class AutoRental
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoRental extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoRental");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AutoRental:
 *       type: object
 *       description: "A autorental derived from schema.org/AutoRental"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AutomotiveBusiness'
*/