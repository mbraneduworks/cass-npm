const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/MovieRentalStore
 * A movie rental store.
 *
 * @author schema.org
 * @class MovieRentalStore
 * @module org.schema
 * @extends Store
 */
module.exports = class MovieRentalStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MovieRentalStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MovieRentalStore:
 *       type: object
 *       description: "A movierentalstore derived from schema.org/MovieRentalStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/