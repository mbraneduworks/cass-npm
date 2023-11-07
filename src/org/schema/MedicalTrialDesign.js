const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalTrialDesign
 * Design models for medical trials. Enumerated type.
 *
 * @author schema.org
 * @class MedicalTrialDesign
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalTrialDesign extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalTrialDesign");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalTrialDesign:
 *       type: object
 *       description: "A medicaltrialdesign derived from schema.org/MedicalTrialDesign"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEnumeration'
*/