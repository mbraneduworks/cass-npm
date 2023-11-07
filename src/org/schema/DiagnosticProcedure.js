const schema = {};
schema.MedicalProcedure = require("./MedicalProcedure.js");
/**
 * Schema.org/DiagnosticProcedure
 * A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes.
 *
 * @author schema.org
 * @class DiagnosticProcedure
 * @module org.schema
 * @extends MedicalProcedure
 */
module.exports = class DiagnosticProcedure extends schema.MedicalProcedure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DiagnosticProcedure");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DiagnosticProcedure:
 *       type: object
 *       description: "A diagnosticprocedure derived from schema.org/DiagnosticProcedure"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalProcedure'
*/