const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/SelfStorage
 * A self-storage facility.
 *
 * @author schema.org
 * @class SelfStorage
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class SelfStorage extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SelfStorage");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SelfStorage:
 *       type: object
 *       description: "A selfstorage derived from schema.org/SelfStorage"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/