const schema = {};
schema.SportsActivityLocation = require("./SportsActivityLocation.js");
/**
 * Schema.org/ExerciseGym
 * A gym.
 *
 * @author schema.org
 * @class ExerciseGym
 * @module org.schema
 * @extends SportsActivityLocation
 */
module.exports = class ExerciseGym extends schema.SportsActivityLocation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ExerciseGym");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ExerciseGym:
 *       type: object
 *       description: "A exercisegym derived from schema.org/ExerciseGym"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:SportsActivityLocation'
*/