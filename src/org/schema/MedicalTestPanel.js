const schema = {};
schema.MedicalTest = require("./MedicalTest.js");
/**
 * Schema.org/MedicalTestPanel
 * Any collection of tests commonly ordered together.
 *
 * @author schema.org
 * @class MedicalTestPanel
 * @module org.schema
 * @extends MedicalTest
 */
module.exports = class MedicalTestPanel extends schema.MedicalTest {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalTestPanel");
	}

	/**
	 * Schema.org/subTest
	 * A component test of the panel.
	 *
	 * @property subTest
	 * @type MedicalTest
	 */
	subTest;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalTestPanel:
 *       type: object
 *       description: "A medicaltestpanel derived from schema.org/MedicalTestPanel"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalTest'
 *         - properties:
 *             subTest:
 *               description: A component test of the panel.
 *               $ref: '#/components/schemas/medicaltest'
*/