const schema = {};
schema.FoodEstablishment = require("./FoodEstablishment.js");
/**
 * Schema.org/Winery
 * A winery.
 *
 * @author schema.org
 * @class Winery
 * @module org.schema
 * @extends FoodEstablishment
 */
module.exports = class Winery extends schema.FoodEstablishment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Winery");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Winery:
 *       type: object
 *       description: "A winery derived from schema.org/Winery"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FoodEstablishment'
*/