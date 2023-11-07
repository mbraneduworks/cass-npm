const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/MobilePhoneStore
 * A store that sells mobile phones and related accessories.
 *
 * @author schema.org
 * @class MobilePhoneStore
 * @module org.schema
 * @extends Store
 */
module.exports = class MobilePhoneStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MobilePhoneStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MobilePhoneStore:
 *       type: object
 *       description: "A mobilephonestore derived from schema.org/MobilePhoneStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/