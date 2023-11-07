const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/SportsActivityLocation
 * A sports location, such as a playing field.
 *
 * @author schema.org
 * @class SportsActivityLocation
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class SportsActivityLocation extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SportsActivityLocation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SportsActivityLocation:
 *       type: object
 *       description: "A sportsactivitylocation derived from schema.org/SportsActivityLocation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/