const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/MedicalOrganization
 * A medical organization (physical or not), such as hospital, institution or clinic.
 *
 * @author schema.org
 * @class MedicalOrganization
 * @module org.schema
 * @extends Organization
 */
module.exports = class MedicalOrganization extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalOrganization");
	}

	/**
	 * Schema.org/healthPlanNetworkId
	 * Name or unique ID of network. (Networks are often reused across different insurance plans).
	 *
	 * @property healthPlanNetworkId
	 * @type Text
	 */
	healthPlanNetworkId;

	/**
	 * Schema.org/isAcceptingNewPatients
	 * Whether the provider is accepting new patients.
	 *
	 * @property isAcceptingNewPatients
	 * @type Boolean
	 */
	isAcceptingNewPatients;

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
 *     MedicalOrganization:
 *       type: object
 *       description: "A medicalorganization derived from schema.org/MedicalOrganization"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Organization'
 *         - properties:
 *             healthPlanNetworkId:
 *               description: Name or unique ID of network. (Networks are often reused across different insurance plans).
 *               type: string
 *             isAcceptingNewPatients:
 *               description: Whether the provider is accepting new patients.
 *               $ref: '#/components/schemas/boolean'
 *             medicalSpecialty:
 *               description: A medical specialty of the provider.
 *               $ref: '#/components/schemas/medicalspecialty'
*/