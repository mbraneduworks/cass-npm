const schema = {};
schema.Product = require("./Product.js");
/**
 * Schema.org/SomeProducts
 * A placeholder for multiple similar products of the same kind.
 *
 * @author schema.org
 * @class SomeProducts
 * @module org.schema
 * @extends Product
 */
module.exports = class SomeProducts extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SomeProducts");
	}

	/**
	 * Schema.org/inventoryLevel
	 * The current approximate inventory level for the item or items.
	 *
	 * @property inventoryLevel
	 * @type QuantitativeValue
	 */
	inventoryLevel;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SomeProducts:
 *       type: object
 *       description: "A someproducts derived from schema.org/SomeProducts"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Product'
 *         - properties:
 *             inventoryLevel:
 *               description: The current approximate inventory level for the item or items.
 *               $ref: '#/components/schemas/quantitativevalue'
*/