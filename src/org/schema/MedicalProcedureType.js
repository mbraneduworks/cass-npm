const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/MedicalProcedureType
 * An enumeration that describes different types of medical procedures.
 *
 * @author schema.org
 * @class MedicalProcedureType
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class MedicalProcedureType extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalProcedureType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalProcedureType:
 *       type: object
 *       description: "A medicalproceduretype derived from schema.org/MedicalProcedureType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEnumeration'
*/