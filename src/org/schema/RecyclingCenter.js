const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/RecyclingCenter
 * A recycling center.
 *
 * @author schema.org
 * @class RecyclingCenter
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class RecyclingCenter extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RecyclingCenter");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RecyclingCenter:
 *       type: object
 *       description: "A recyclingcenter derived from schema.org/RecyclingCenter"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/