const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/EventVenue
 * An event venue.
 *
 * @author schema.org
 * @class EventVenue
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class EventVenue extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EventVenue");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EventVenue:
 *       type: object
 *       description: "A eventvenue derived from schema.org/EventVenue"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/