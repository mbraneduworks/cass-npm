const schema = {};
schema.MedicalProcedure = require("./MedicalProcedure.js");
/**
 * Schema.org/PhysicalExam
 * A type of physical examination of a patient performed by a physician. 
 *
 * @author schema.org
 * @class PhysicalExam
 * @module org.schema
 * @extends MedicalProcedure
 */
module.exports = class PhysicalExam extends schema.MedicalProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PhysicalExam");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PhysicalExam:
 *       type: object
 *       description: "A physicalexam derived from schema.org/PhysicalExam"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalProcedure'
*/