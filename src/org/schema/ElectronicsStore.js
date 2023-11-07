const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/ElectronicsStore
 * An electronics store.
 *
 * @author schema.org
 * @class ElectronicsStore
 * @module org.schema
 * @extends Store
 */
module.exports = class ElectronicsStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ElectronicsStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ElectronicsStore:
 *       type: object
 *       description: "A electronicsstore derived from schema.org/ElectronicsStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/