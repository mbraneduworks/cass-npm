const schema = {};
schema.MedicalTest = require("./MedicalTest.js");
/**
 * Schema.org/ImagingTest
 * Any medical imaging modality typically used for diagnostic purposes.
 *
 * @author schema.org
 * @class ImagingTest
 * @module org.schema
 * @extends MedicalTest
 */
module.exports = class ImagingTest extends schema.MedicalTest {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ImagingTest");
	}

	/**
	 * Schema.org/imagingTechnique
	 * Imaging technique used.
	 *
	 * @property imagingTechnique
	 * @type MedicalImagingTechnique
	 */
	imagingTechnique;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ImagingTest:
 *       type: object
 *       description: "A imagingtest derived from schema.org/ImagingTest"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalTest'
 *         - properties:
 *             imagingTechnique:
 *               description: Imaging technique used.
 *               $ref: '#/components/schemas/medicalimagingtechnique'
*/