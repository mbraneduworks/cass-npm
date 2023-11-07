const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ShoeStore
 * A shoe store.
 *
 * @author schema.org
 * @class ShoeStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ShoeStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ShoeStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ShoeStore:
 *       type: object
 *       description: "A shoestore derived from schema.org/ShoeStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/