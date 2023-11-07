const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/MusicStore
 * A music store.
 *
 * @author schema.org
 * @class MusicStore
 * @module org.schema
 * @extends Store
 */
module.exports = class MusicStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicStore:
 *       type: object
 *       description: "A musicstore derived from schema.org/MusicStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/