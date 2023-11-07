const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/OccupationalExperienceRequirements
 * Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
 *
 * @author schema.org
 * @class OccupationalExperienceRequirements
 * @module org.schema
 * @extends Intangible
 */
module.exports = class OccupationalExperienceRequirements extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OccupationalExperienceRequirements");
	}

	/**
	 * Schema.org/monthsOfExperience
	 * Indicates the minimal number of months of experience required for a position.
	 *
	 * @property monthsOfExperience
	 * @type Number
	 */
	monthsOfExperience;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OccupationalExperienceRequirements:
 *       type: object
 *       description: "A occupationalexperiencerequirements derived from schema.org/OccupationalExperienceRequirements"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             monthsOfExperience:
 *               description: Indicates the minimal number of months of experience required for a position.
 *               type: number
*/