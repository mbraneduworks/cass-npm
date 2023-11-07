const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalDevicePurpose
 * Categories of medical devices, organized by the purpose or intended use of the device.
 *
 * @author schema.org
 * @class MedicalDevicePurpose
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalDevicePurpose extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalDevicePurpose");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalDevicePurpose:
 *       type: object
 *       description: "A medicaldevicepurpose derived from schema.org/MedicalDevicePurpose"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEnumeration'
*/