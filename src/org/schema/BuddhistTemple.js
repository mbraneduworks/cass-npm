const schema = {};
schema.PlaceOfWorship = require("./PlaceOfWorship.js");
/**
 * Schema.org/BuddhistTemple
 * A Buddhist temple.
 *
 * @author schema.org
 * @class BuddhistTemple
 * @module org.schema
 * @extends PlaceOfWorship
 */
module.exports = class BuddhistTemple extends schema.PlaceOfWorship {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BuddhistTemple");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BuddhistTemple:
 *       type: object
 *       description: "A buddhisttemple derived from schema.org/BuddhistTemple"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:PlaceOfWorship'
*/