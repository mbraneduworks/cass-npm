const schema = {};
schema.Specialty = require("./Specialty.js");
/**
 * Schema.org/MedicalSpecialty
 * Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.
 *
 * @author schema.org
 * @class MedicalSpecialty
 * @module org.schema
 * @extends Specialty
 */
module.exports = class MedicalSpecialty extends schema.Specialty {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalSpecialty");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalSpecialty:
 *       type: object
 *       description: "A medicalspecialty derived from schema.org/MedicalSpecialty"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Specialty'
*/