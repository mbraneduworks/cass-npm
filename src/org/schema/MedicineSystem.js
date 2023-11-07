const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicineSystem
 * Systems of medical practice.
 *
 * @author schema.org
 * @class MedicineSystem
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicineSystem extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicineSystem");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicineSystem:
 *       type: object
 *       description: "A medicinesystem derived from schema.org/MedicineSystem"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEnumeration'
*/