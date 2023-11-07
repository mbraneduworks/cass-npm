const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MedicalEnumeration
 * Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.
 *
 * @author schema.org
 * @class MedicalEnumeration
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MedicalEnumeration extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalEnumeration:
 *       type: object
 *       description: "A medicalenumeration derived from schema.org/MedicalEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/