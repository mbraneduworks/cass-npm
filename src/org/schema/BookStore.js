const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/BookStore
 * A bookstore.
 *
 * @author schema.org
 * @class BookStore
 * @module org.schema
 * @extends Store
 */
module.exports = class BookStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BookStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BookStore:
 *       type: object
 *       description: "A bookstore derived from schema.org/BookStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/