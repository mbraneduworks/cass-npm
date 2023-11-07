const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/Restaurant
 * A restaurant.
 *
 * @author schema.org
 * @class Restaurant
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class Restaurant extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Restaurant");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       description: "A restaurant derived from schema.org/Restaurant"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FoodEstablishment'
*/