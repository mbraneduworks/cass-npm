const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/LegalService
 * A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *
 * @author schema.org
 * @class LegalService
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class LegalService extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LegalService");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LegalService:
 *       type: object
 *       description: "A legalservice derived from schema.org/LegalService"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/