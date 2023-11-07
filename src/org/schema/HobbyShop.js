const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/HobbyShop
 * A store that sells materials useful or necessary for various hobbies.
 *
 * @author schema.org
 * @class HobbyShop
 * @module org.schema
 * @extends Store
 */
module.exports = class HobbyShop extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HobbyShop");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HobbyShop:
 *       type: object
 *       description: "A hobbyshop derived from schema.org/HobbyShop"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/