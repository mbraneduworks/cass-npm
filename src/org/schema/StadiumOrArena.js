const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/StadiumOrArena
 * A stadium.
 *
 * @author schema.org
 * @class StadiumOrArena
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class StadiumOrArena extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","StadiumOrArena");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     StadiumOrArena:
 *       type: object
 *       description: "A stadiumorarena derived from schema.org/StadiumOrArena"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/