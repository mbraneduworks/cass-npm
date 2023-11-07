const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/GovernmentOrganization
 * A governmental organization or agency.
 *
 * @author schema.org
 * @class GovernmentOrganization
 * @module org.schema
 * @extends Organization
 */
module.exports = class GovernmentOrganization extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentOrganization");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GovernmentOrganization:
 *       type: object
 *       description: "A governmentorganization derived from schema.org/GovernmentOrganization"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Organization'
*/