const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/MedicalEntity
 * The most generic type of entity related to health and the practice of medicine.
 *
 * @author schema.org
 * @class MedicalEntity
 * @module org.schema
 * @extends Thing
 */
module.exports = class MedicalEntity extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalEntity");
	}

	/**
	 * Schema.org/guideline
	 * A medical guideline related to this entity.
	 *
	 * @property guideline
	 * @type MedicalGuideline
	 */
	guideline;

	/**
	 * Schema.org/recognizingAuthority
	 * If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
	 *
	 * @property recognizingAuthority
	 * @type Organization
	 */
	recognizingAuthority;

	/**
	 * Schema.org/legalStatus
	 * The drug or supplement's legal status, including any controlled substance schedules that apply.
	 *
	 * @property legalStatus
	 * @type MedicalEnumeration
	 */
	legalStatus;

	/**
	 * Schema.org/code
	 * A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
	 *
	 * @property code
	 * @type MedicalCode
	 */
	code;

	/**
	 * Schema.org/relevantSpecialty
	 * If applicable, a medical specialty in which this entity is relevant.
	 *
	 * @property relevantSpecialty
	 * @type MedicalSpecialty
	 */
	relevantSpecialty;

	/**
	 * Schema.org/study
	 * A medical study or trial related to this entity.
	 *
	 * @property study
	 * @type MedicalStudy
	 */
	study;

	/**
	 * Schema.org/medicineSystem
	 * The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
	 *
	 * @property medicineSystem
	 * @type MedicineSystem
	 */
	medicineSystem;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalEntity:
 *       type: object
 *       description: "A medicalentity derived from schema.org/MedicalEntity"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Thing'
 *         - properties:
 *             guideline:
 *               description: A medical guideline related to this entity.
 *               $ref: '#/components/schemas/medicalguideline'
 *             recognizingAuthority:
 *               description: If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
 *               $ref: '#/components/schemas/organization'
 *             legalStatus:
 *               description: The drug or supplement's legal status, including any controlled substance schedules that apply.
 *               $ref: '#/components/schemas/medicalenumeration'
 *             code:
 *               description: A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
 *               $ref: '#/components/schemas/medicalcode'
 *             relevantSpecialty:
 *               description: If applicable, a medical specialty in which this entity is relevant.
 *               $ref: '#/components/schemas/medicalspecialty'
 *             study:
 *               description: A medical study or trial related to this entity.
 *               $ref: '#/components/schemas/medicalstudy'
 *             medicineSystem:
 *               description: The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
 *               $ref: '#/components/schemas/medicinesystem'
*/