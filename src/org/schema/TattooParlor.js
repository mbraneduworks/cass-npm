const schema = {};
schema.HealthAndBeautyBusiness = require("./HealthAndBeautyBusiness.js");
/**
 * Schema.org/TattooParlor
 * A tattoo parlor.
 *
 * @author schema.org
 * @class TattooParlor
 * @module org.schema
 * @extends HealthAndBeautyBusiness
 */
module.exports = class TattooParlor extends schema.HealthAndBeautyBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TattooParlor");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TattooParlor:
 *       type: object
 *       description: "A tattooparlor derived from schema.org/TattooParlor"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:HealthAndBeautyBusiness'
*/