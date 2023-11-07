const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/CollegeOrUniversity
 * A college, university, or other third-level educational institution.
 *
 * @author schema.org
 * @class CollegeOrUniversity
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class CollegeOrUniversity extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CollegeOrUniversity");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CollegeOrUniversity:
 *       type: object
 *       description: "A collegeoruniversity derived from schema.org/CollegeOrUniversity"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EducationalOrganization'
*/