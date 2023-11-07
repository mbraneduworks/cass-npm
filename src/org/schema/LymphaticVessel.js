const schema = {};
schema.Vessel = require("./Vessel.js");
/**
 * Schema.org/LymphaticVessel
 * A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
 *
 * @author schema.org
 * @class LymphaticVessel
 * @module org.schema
 * @extends Vessel
 */
module.exports = class LymphaticVessel extends schema.Vessel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LymphaticVessel");
	}

	/**
	 * Schema.org/regionDrained
	 * The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
	 *
	 * @property regionDrained
	 * @type AnatomicalStructure
	 */
	regionDrained;

	/**
	 * Schema.org/originatesFrom
	 * The vasculature the lymphatic structure originates, or afferents, from.
	 *
	 * @property originatesFrom
	 * @type Vessel
	 */
	originatesFrom;

	/**
	 * Schema.org/runsTo
	 * The vasculature the lymphatic structure runs, or efferents, to.
	 *
	 * @property runsTo
	 * @type Vessel
	 */
	runsTo;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LymphaticVessel:
 *       type: object
 *       description: "A lymphaticvessel derived from schema.org/LymphaticVessel"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Vessel'
 *         - properties:
 *             regionDrained:
 *               description: The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             originatesFrom:
 *               description: The vasculature the lymphatic structure originates, or afferents, from.
 *               $ref: '#/components/schemas/vessel'
 *             runsTo:
 *               description: The vasculature the lymphatic structure runs, or efferents, to.
 *               $ref: '#/components/schemas/vessel'
*/