const schema = {};
schema.AnatomicalStructure = require("./AnatomicalStructure.js");
/**
 * Schema.org/Joint
 * The anatomical location at which two or more bones make contact.
 *
 * @author schema.org
 * @class Joint
 * @module org.schema
 * @extends AnatomicalStructure
 */
module.exports = class Joint extends schema.AnatomicalStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Joint");
	}

	/**
	 * Schema.org/functionalClass
	 * The degree of mobility the joint allows.
	 *
	 * @property functionalClass
	 * @type MedicalEntity
	 */
	functionalClass;

	/**
	 * Schema.org/structuralClass
	 * The name given to how bone physically connects to each other.
	 *
	 * @property structuralClass
	 * @type Text
	 */
	structuralClass;

	/**
	 * Schema.org/biomechnicalClass
	 * The biomechanical properties of the bone.
	 *
	 * @property biomechnicalClass
	 * @type Text
	 */
	biomechnicalClass;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Joint:
 *       type: object
 *       description: "A joint derived from schema.org/Joint"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AnatomicalStructure'
 *         - properties:
 *             functionalClass:
 *               description: The degree of mobility the joint allows.
 *               $ref: '#/components/schemas/medicalentity'
 *             structuralClass:
 *               description: The name given to how bone physically connects to each other.
 *               type: string
 *             biomechnicalClass:
 *               description: The biomechanical properties of the bone.
 *               type: string
*/