const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/ElementarySchool
 * An elementary school.
 *
 * @author schema.org
 * @class ElementarySchool
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class ElementarySchool extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ElementarySchool");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ElementarySchool:
 *       type: object
 *       description: "A elementaryschool derived from schema.org/ElementarySchool"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EducationalOrganization'
*/