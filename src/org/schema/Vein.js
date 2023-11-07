const schema = {};
schema.Vessel = require("./Vessel.js");
/**
 * Schema.org/Vein
 * A type of blood vessel that specifically carries blood to the heart.
 *
 * @author schema.org
 * @class Vein
 * @module org.schema
 * @extends Vessel
 */
module.exports = class Vein extends schema.Vessel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Vein");
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
	 * Schema.org/tributary
	 * The anatomical or organ system that the vein flows into; a larger structure that the vein connects to.
	 *
	 * @property tributary
	 * @type AnatomicalStructure
	 */
	tributary;

	/**
	 * Schema.org/drainsTo
	 * The vasculature that the vein drains into.
	 *
	 * @property drainsTo
	 * @type Vessel
	 */
	drainsTo;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Vein:
 *       type: object
 *       description: "A vein derived from schema.org/Vein"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Vessel'
 *         - properties:
 *             regionDrained:
 *               description: The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             tributary:
 *               description: The anatomical or organ system that the vein flows into; a larger structure that the vein connects to.
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             drainsTo:
 *               description: The vasculature that the vein drains into.
 *               $ref: '#/components/schemas/vessel'
*/