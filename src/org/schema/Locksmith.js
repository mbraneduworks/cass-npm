const schema = {};
schema.HomeAndConstructionBusiness = require("./HomeAndConstructionBusiness.js");
/**
 * Schema.org/Locksmith
 * A locksmith.
 *
 * @author schema.org
 * @class Locksmith
 * @module org.schema
 * @extends HomeAndConstructionBusiness
 */
module.exports = class Locksmith extends schema.HomeAndConstructionBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Locksmith");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Locksmith:
 *       type: object
 *       description: "A locksmith derived from schema.org/Locksmith"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:HomeAndConstructionBusiness'
*/