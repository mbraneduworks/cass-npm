const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/RoofingContractor
 * A roofing contractor.
 *
 * @author schema.org
 * @class RoofingContractor
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class RoofingContractor extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RoofingContractor");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RoofingContractor:
 *       type: object
 *       description: "A roofingcontractor derived from schema.org/RoofingContractor"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:HomeAndConstructionBusiness'
*/