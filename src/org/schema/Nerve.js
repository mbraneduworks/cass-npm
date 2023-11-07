const schema = {};
schema.AnatomicalStructure = require("./AnatomicalStructure.js");
/**
 * Schema.org/Nerve
 * A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
 *
 * @author schema.org
 * @class Nerve
 * @module org.schema
 * @extends AnatomicalStructure
 */
module.exports = class Nerve extends schema.AnatomicalStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Nerve");
	}

	/**
	 * Schema.org/sourcedFrom
	 * The neurological pathway that originates the neurons.
	 *
	 * @property sourcedFrom
	 * @type BrainStructure
	 */
	sourcedFrom;

	/**
	 * Schema.org/nerveMotor
	 * The neurological pathway extension that involves muscle control.
	 *
	 * @property nerveMotor
	 * @type Muscle
	 */
	nerveMotor;

	/**
	 * Schema.org/branch
	 * The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]].
	 *
	 * @property branch
	 * @type AnatomicalStructure
	 */
	branch;

	/**
	 * Schema.org/sensoryUnit
	 * The neurological pathway extension that inputs and sends information to the brain or spinal cord.
	 *
	 * @property sensoryUnit
	 * @type AnatomicalStructure
	 */
	sensoryUnit;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Nerve:
 *       type: object
 *       description: "A nerve derived from schema.org/Nerve"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AnatomicalStructure'
 *         - properties:
 *             sourcedFrom:
 *               description: The neurological pathway that originates the neurons.
 *               $ref: '#/components/schemas/brainstructure'
 *             nerveMotor:
 *               description: The neurological pathway extension that involves muscle control.
 *               $ref: '#/components/schemas/muscle'
 *             branch:
 *               description: The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]].
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             sensoryUnit:
 *               description: The neurological pathway extension that inputs and sends information to the brain or spinal cord.
 *               $ref: '#/components/schemas/anatomicalstructure'
*/