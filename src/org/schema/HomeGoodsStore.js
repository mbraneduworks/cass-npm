const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/HomeGoodsStore
 * A home goods store.
 *
 * @author schema.org
 * @class HomeGoodsStore
 * @module org.schema
 * @extends Store
 */
module.exports = class HomeGoodsStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HomeGoodsStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HomeGoodsStore:
 *       type: object
 *       description: "A homegoodsstore derived from schema.org/HomeGoodsStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/