const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalTest
 * Any medical test, typically performed for diagnostic purposes.
 *
 * @author schema.org
 * @class MedicalTest
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalTest extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalTest");
	}

	/**
	 * Schema.org/usedToDiagnose
	 * A condition the test is used to diagnose.
	 *
	 * @property usedToDiagnose
	 * @type MedicalCondition
	 */
	usedToDiagnose;

	/**
	 * Schema.org/usesDevice
	 * Device used to perform the test.
	 *
	 * @property usesDevice
	 * @type MedicalDevice
	 */
	usesDevice;

	/**
	 * Schema.org/normalRange
	 * Range of acceptable values for a typical patient, when applicable.
	 *
	 * @property normalRange
	 * @type MedicalEnumeration
	 */
	normalRange;

	/**
	 * Schema.org/affectedBy
	 * Drugs that affect the test's results.
	 *
	 * @property affectedBy
	 * @type Drug
	 */
	affectedBy;

	/**
	 * Schema.org/signDetected
	 * A sign detected by the test.
	 *
	 * @property signDetected
	 * @type MedicalSign
	 */
	signDetected;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalTest:
 *       type: object
 *       description: "A medicaltest derived from schema.org/MedicalTest"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEntity'
 *         - properties:
 *             usedToDiagnose:
 *               description: A condition the test is used to diagnose.
 *               $ref: '#/components/schemas/medicalcondition'
 *             usesDevice:
 *               description: Device used to perform the test.
 *               $ref: '#/components/schemas/medicaldevice'
 *             normalRange:
 *               description: Range of acceptable values for a typical patient, when applicable.
 *               $ref: '#/components/schemas/medicalenumeration'
 *             affectedBy:
 *               description: Drugs that affect the test's results.
 *               $ref: '#/components/schemas/drug'
 *             signDetected:
 *               description: A sign detected by the test.
 *               $ref: '#/components/schemas/medicalsign'
*/