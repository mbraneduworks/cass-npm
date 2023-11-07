const schema = {};
schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/DiagnosticLab
 * A medical laboratory that offers on-site or off-site diagnostic services.
 *
 * @author schema.org
 * @class DiagnosticLab
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class DiagnosticLab extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DiagnosticLab");
	}

	/**
	 * Schema.org/availableTest
	 * A diagnostic test or procedure offered by this lab.
	 *
	 * @property availableTest
	 * @type MedicalTest
	 */
	availableTest;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DiagnosticLab:
 *       type: object
 *       description: "A diagnosticlab derived from schema.org/DiagnosticLab"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalOrganization'
 *         - properties:
 *             availableTest:
 *               description: A diagnostic test or procedure offered by this lab.
 *               $ref: '#/components/schemas/medicaltest'
*/