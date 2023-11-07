const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/HighSchool
 * A high school.
 *
 * @author schema.org
 * @class HighSchool
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class HighSchool extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HighSchool");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HighSchool:
 *       type: object
 *       description: "A highschool derived from schema.org/HighSchool"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EducationalOrganization'
*/