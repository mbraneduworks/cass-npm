const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/PlaceOfWorship
 * Place of worship, such as a church, synagogue, or mosque.
 *
 * @author schema.org
 * @class PlaceOfWorship
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class PlaceOfWorship extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PlaceOfWorship");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PlaceOfWorship:
 *       type: object
 *       description: "A placeofworship derived from schema.org/PlaceOfWorship"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/