const schema = {};
schema.SportsActivityLocation = require("./SportsActivityLocation.js");
/**
 * Schema.org/BowlingAlley
 * A bowling alley.
 *
 * @author schema.org
 * @class BowlingAlley
 * @module org.schema
 * @extends SportsActivityLocation
 */
module.exports = class BowlingAlley extends schema.SportsActivityLocation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BowlingAlley");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BowlingAlley:
 *       type: object
 *       description: "A bowlingalley derived from schema.org/BowlingAlley"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:SportsActivityLocation'
*/