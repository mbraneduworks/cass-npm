const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/ShoppingCenter
 * A shopping center or mall.
 *
 * @author schema.org
 * @class ShoppingCenter
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class ShoppingCenter extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShoppingCenter");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ShoppingCenter:
 *       type: object
 *       description: "A shoppingcenter derived from schema.org/ShoppingCenter"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/