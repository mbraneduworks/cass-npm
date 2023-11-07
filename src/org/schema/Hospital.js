const schema = {};
schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/Hospital
 * A hospital.
 *
 * @author schema.org
 * @class Hospital
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class Hospital extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Hospital");
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
	 * Schema.org/healthcareReportingData
	 * Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]].
	 *
	 * @property healthcareReportingData
	 * @type Dataset
	 */
	healthcareReportingData;

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
 *     Hospital:
 *       type: object
 *       description: "A hospital derived from schema.org/Hospital"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalOrganization'
 *         - properties:
 *             availableService:
 *               description: A medical service available from this provider.
 *               $ref: '#/components/schemas/medicaltest'
 *             healthcareReportingData:
 *               description: Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]].
 *               $ref: '#/components/schemas/dataset'
 *             medicalSpecialty:
 *               description: A medical specialty of the provider.
 *               $ref: '#/components/schemas/medicalspecialty'
*/