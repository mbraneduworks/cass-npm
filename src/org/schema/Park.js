const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Park
 * A park.
 *
 * @author schema.org
 * @class Park
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Park extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Park");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Park:
 *       type: object
 *       description: "A park derived from schema.org/Park"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/