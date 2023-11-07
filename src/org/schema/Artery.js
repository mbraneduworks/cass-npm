const schema = {};
schema.Vessel = require("./Vessel.js");
/**
 * Schema.org/Artery
 * A type of blood vessel that specifically carries blood away from the heart.
 *
 * @author schema.org
 * @class Artery
 * @module org.schema
 * @extends Vessel
 */
module.exports = class Artery extends schema.Vessel {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Artery");
	}

	/**
	 * Schema.org/arterialBranch
	 * The branches that comprise the arterial structure.
	 *
	 * @property arterialBranch
	 * @type AnatomicalStructure
	 */
	arterialBranch;

	/**
	 * Schema.org/supplyTo
	 * The area to which the artery supplies blood.
	 *
	 * @property supplyTo
	 * @type AnatomicalStructure
	 */
	supplyTo;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Artery:
 *       type: object
 *       description: "A artery derived from schema.org/Artery"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Vessel'
 *         - properties:
 *             arterialBranch:
 *               description: The branches that comprise the arterial structure.
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             supplyTo:
 *               description: The area to which the artery supplies blood.
 *               $ref: '#/components/schemas/anatomicalstructure'
*/