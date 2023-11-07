const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/HealthClub
 * A health club.
 *
 * @author schema.org
 * @class HealthClub
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class HealthClub extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthClub");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HealthClub:
 *       type: object
 *       description: "A healthclub derived from schema.org/HealthClub"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:HealthAndBeautyBusiness'
*/