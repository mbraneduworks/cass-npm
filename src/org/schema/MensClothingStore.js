const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/MensClothingStore
 * A men's clothing store.
 *
 * @author schema.org
 * @class MensClothingStore
 * @module org.schema
 * @extends Store
 */
module.exports = class MensClothingStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MensClothingStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MensClothingStore:
 *       type: object
 *       description: "A mensclothingstore derived from schema.org/MensClothingStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/