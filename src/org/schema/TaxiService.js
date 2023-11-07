const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/TaxiService
 * A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
 *
 * @author schema.org
 * @class TaxiService
 * @module org.schema
 * @extends Service
 */
module.exports = class TaxiService extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TaxiService");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TaxiService:
 *       type: object
 *       description: "A taxiservice derived from schema.org/TaxiService"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Service'
*/