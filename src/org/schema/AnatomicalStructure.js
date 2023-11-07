const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/AnatomicalStructure
 * Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 *
 * @author schema.org
 * @class AnatomicalStructure
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class AnatomicalStructure extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AnatomicalStructure");
	}

	/**
	 * Schema.org/associatedPathophysiology
	 * If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
	 *
	 * @property associatedPathophysiology
	 * @type Text
	 */
	associatedPathophysiology;

	/**
	 * Schema.org/connectedTo
	 * Other anatomical structures to which this structure is connected.
	 *
	 * @property connectedTo
	 * @type AnatomicalStructure
	 */
	connectedTo;

	/**
	 * Schema.org/relatedTherapy
	 * A medical therapy related to this anatomy.
	 *
	 * @property relatedTherapy
	 * @type MedicalTherapy
	 */
	relatedTherapy;

	/**
	 * Schema.org/relatedCondition
	 * A medical condition associated with this anatomy.
	 *
	 * @property relatedCondition
	 * @type MedicalCondition
	 */
	relatedCondition;

	/**
	 * Schema.org/subStructure
	 * Component (sub-)structure(s) that comprise this anatomical structure.
	 *
	 * @property subStructure
	 * @type AnatomicalStructure
	 */
	subStructure;

	/**
	 * Schema.org/partOfSystem
	 * The anatomical or organ system that this structure is part of.
	 *
	 * @property partOfSystem
	 * @type AnatomicalSystem
	 */
	partOfSystem;

	/**
	 * Schema.org/bodyLocation
	 * Location in the body of the anatomical structure.
	 *
	 * @property bodyLocation
	 * @type Text
	 */
	bodyLocation;

	/**
	 * Schema.org/diagram
	 * An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
	 *
	 * @property diagram
	 * @type ImageObject
	 */
	diagram;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AnatomicalStructure:
 *       type: object
 *       description: "A anatomicalstructure derived from schema.org/AnatomicalStructure"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEntity'
 *         - properties:
 *             associatedPathophysiology:
 *               description: If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
 *               type: string
 *             connectedTo:
 *               description: Other anatomical structures to which this structure is connected.
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             relatedTherapy:
 *               description: A medical therapy related to this anatomy.
 *               $ref: '#/components/schemas/medicaltherapy'
 *             relatedCondition:
 *               description: A medical condition associated with this anatomy.
 *               $ref: '#/components/schemas/medicalcondition'
 *             subStructure:
 *               description: Component (sub-)structure(s) that comprise this anatomical structure.
 *               $ref: '#/components/schemas/anatomicalstructure'
 *             partOfSystem:
 *               description: The anatomical or organ system that this structure is part of.
 *               $ref: '#/components/schemas/anatomicalsystem'
 *             bodyLocation:
 *               description: Location in the body of the anatomical structure.
 *               type: string
 *             diagram:
 *               description: An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
 *               $ref: '#/components/schemas/imageobject'
*/