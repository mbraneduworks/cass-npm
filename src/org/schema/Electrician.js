const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/Electrician
 * An electrician.
 *
 * @author schema.org
 * @class Electrician
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class Electrician extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Electrician");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Electrician:
 *       type: object
 *       description: "A electrician derived from schema.org/Electrician"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:HomeAndConstructionBusiness'
*/