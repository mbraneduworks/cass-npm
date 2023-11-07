const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/RealEstateAgent
 * A real-estate agent.
 *
 * @author schema.org
 * @class RealEstateAgent
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class RealEstateAgent extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RealEstateAgent");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RealEstateAgent:
 *       type: object
 *       description: "A realestateagent derived from schema.org/RealEstateAgent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/