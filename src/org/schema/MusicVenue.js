const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/MusicVenue
 * A music venue.
 *
 * @author schema.org
 * @class MusicVenue
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class MusicVenue extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicVenue");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicVenue:
 *       type: object
 *       description: "A musicvenue derived from schema.org/MusicVenue"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/