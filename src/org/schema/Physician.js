const schema = {};
schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/Physician
 * A doctor's office.
 *
 * @author schema.org
 * @class Physician
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class Physician extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Physician");
	}

	/**
	 * Schema.org/availableService
	 * A medical service available from this provider.
	 *
	 * @property availableService
	 * @type MedicalTest
	 */
	availableService;

	/**
	 * Schema.org/hospitalAffiliation
	 * A hospital with which the physician or office is affiliated.
	 *
	 * @property hospitalAffiliation
	 * @type Hospital
	 */
	hospitalAffiliation;

	/**
	 * Schema.org/medicalSpecialty
	 * A medical specialty of the provider.
	 *
	 * @property medicalSpecialty
	 * @type MedicalSpecialty
	 */
	medicalSpecialty;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Physician:
 *       type: object
 *       description: "A physician derived from schema.org/Physician"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalOrganization'
 *         - properties:
 *             availableService:
 *               description: A medical service available from this provider.
 *               $ref: '#/components/schemas/medicaltest'
 *             hospitalAffiliation:
 *               description: A hospital with which the physician or office is affiliated.
 *               $ref: '#/components/schemas/hospital'
 *             medicalSpecialty:
 *               description: A medical specialty of the provider.
 *               $ref: '#/components/schemas/medicalspecialty'
*/