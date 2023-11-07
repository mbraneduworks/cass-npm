const schema = {};
schema.EmergencyService = require("./EmergencyService.js");
/**
 * Schema.org/FireStation
 * A fire station. With firemen.
 *
 * @author schema.org
 * @class FireStation
 * @module org.schema
 * @extends EmergencyService
 */
module.exports = class FireStation extends schema.EmergencyService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FireStation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     FireStation:
 *       type: object
 *       description: "A firestation derived from schema.org/FireStation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EmergencyService'
*/