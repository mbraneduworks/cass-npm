const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/TelevisionStation
 * A television station.
 *
 * @author schema.org
 * @class TelevisionStation
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class TelevisionStation extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TelevisionStation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TelevisionStation:
 *       type: object
 *       description: "A televisionstation derived from schema.org/TelevisionStation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/