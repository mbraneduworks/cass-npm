const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/FastFoodRestaurant
 * A fast-food restaurant.
 *
 * @author schema.org
 * @class FastFoodRestaurant
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class FastFoodRestaurant extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FastFoodRestaurant");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     FastFoodRestaurant:
 *       type: object
 *       description: "A fastfoodrestaurant derived from schema.org/FastFoodRestaurant"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FoodEstablishment'
*/