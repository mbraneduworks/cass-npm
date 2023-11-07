const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/TravelAgency
 * A travel agency.
 *
 * @author schema.org
 * @class TravelAgency
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class TravelAgency extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TravelAgency");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TravelAgency:
 *       type: object
 *       description: "A travelagency derived from schema.org/TravelAgency"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/