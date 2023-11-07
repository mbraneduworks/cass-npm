const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/TouristInformationCenter
 * A tourist information center.
 *
 * @author schema.org
 * @class TouristInformationCenter
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class TouristInformationCenter extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TouristInformationCenter");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TouristInformationCenter:
 *       type: object
 *       description: "A touristinformationcenter derived from schema.org/TouristInformationCenter"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/