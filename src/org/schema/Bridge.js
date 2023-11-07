const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Bridge
 * A bridge.
 *
 * @author schema.org
 * @class Bridge
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Bridge extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Bridge");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Bridge:
 *       type: object
 *       description: "A bridge derived from schema.org/Bridge"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/