const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Playground
 * A playground.
 *
 * @author schema.org
 * @class Playground
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Playground extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Playground");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Playground:
 *       type: object
 *       description: "A playground derived from schema.org/Playground"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/