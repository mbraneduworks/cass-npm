const schema = {};
schema.EducationalOrganization = require("./EducationalOrganization.js");
/**
 * Schema.org/MiddleSchool
 * A middle school (typically for children aged around 11-14, although this varies somewhat).
 *
 * @author schema.org
 * @class MiddleSchool
 * @module org.schema
 * @extends EducationalOrganization
 */
module.exports = class MiddleSchool extends schema.EducationalOrganization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MiddleSchool");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MiddleSchool:
 *       type: object
 *       description: "A middleschool derived from schema.org/MiddleSchool"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EducationalOrganization'
*/