const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Crematorium
 * A crematorium.
 *
 * @author schema.org
 * @class Crematorium
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Crematorium extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Crematorium");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Crematorium:
 *       type: object
 *       description: "A crematorium derived from schema.org/Crematorium"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/