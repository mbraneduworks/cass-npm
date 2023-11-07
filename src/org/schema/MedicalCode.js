const schema = {};
schema.CategoryCode = require("./CategoryCode.js");
/**
 * Schema.org/MedicalCode
 * A code for a medical entity.
 *
 * @author schema.org
 * @class MedicalCode
 * @module org.schema
 * @extends CategoryCode
 */
module.exports = class MedicalCode extends schema.CategoryCode {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalCode");
	}

	/**
	 * Schema.org/codeValue
	 * A short textual code that uniquely identifies the value.
	 *
	 * @property codeValue
	 * @type Text
	 */
	codeValue;

	/**
	 * Schema.org/codingSystem
	 * The coding system, e.g. 'ICD-10'.
	 *
	 * @property codingSystem
	 * @type Text
	 */
	codingSystem;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalCode:
 *       type: object
 *       description: "A medicalcode derived from schema.org/MedicalCode"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CategoryCode'
 *         - properties:
 *             codeValue:
 *               description: A short textual code that uniquely identifies the value.
 *               type: string
 *             codingSystem:
 *               description: The coding system, e.g. 'ICD-10'.
 *               type: string
*/