const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ConvenienceStore
 * A convenience store.
 *
 * @author schema.org
 * @class ConvenienceStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ConvenienceStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ConvenienceStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ConvenienceStore:
 *       type: object
 *       description: "A conveniencestore derived from schema.org/ConvenienceStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/