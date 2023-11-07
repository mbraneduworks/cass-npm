const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/EmploymentAgency
 * An employment agency.
 *
 * @author schema.org
 * @class EmploymentAgency
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class EmploymentAgency extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EmploymentAgency");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EmploymentAgency:
 *       type: object
 *       description: "A employmentagency derived from schema.org/EmploymentAgency"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/