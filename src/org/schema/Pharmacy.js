const schema = {};
schema.MedicalOrganization = require("./MedicalOrganization.js");
/**
 * Schema.org/Pharmacy
 * A pharmacy or drugstore.
 *
 * @author schema.org
 * @class Pharmacy
 * @module org.schema
 * @extends MedicalOrganization
 */
module.exports = class Pharmacy extends schema.MedicalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Pharmacy");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Pharmacy:
 *       type: object
 *       description: "A pharmacy derived from schema.org/Pharmacy"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalOrganization'
*/