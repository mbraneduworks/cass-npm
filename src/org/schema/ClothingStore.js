const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ClothingStore
 * A clothing store.
 *
 * @author schema.org
 * @class ClothingStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ClothingStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ClothingStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ClothingStore:
 *       type: object
 *       description: "A clothingstore derived from schema.org/ClothingStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/