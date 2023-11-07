const schema = {};
schema.MedicalIndication = require("./MedicalIndication.js");
/**
 * Schema.org/PreventionIndication
 * An indication for preventing an underlying condition, symptom, etc.
 *
 * @author schema.org
 * @class PreventionIndication
 * @module org.schema
 * @extends MedicalIndication
 */
module.exports = class PreventionIndication extends schema.MedicalIndication {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PreventionIndication");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PreventionIndication:
 *       type: object
 *       description: "A preventionindication derived from schema.org/PreventionIndication"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalIndication'
*/