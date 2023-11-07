const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ToyStore
 * A toy store.
 *
 * @author schema.org
 * @class ToyStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ToyStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ToyStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ToyStore:
 *       type: object
 *       description: "A toystore derived from schema.org/ToyStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/