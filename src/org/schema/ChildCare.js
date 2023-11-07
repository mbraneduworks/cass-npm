const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/ChildCare
 * A Childcare center.
 *
 * @author schema.org
 * @class ChildCare
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class ChildCare extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ChildCare");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ChildCare:
 *       type: object
 *       description: "A childcare derived from schema.org/ChildCare"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/