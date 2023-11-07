const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/EducationalOrganization
 * An educational organization.
 *
 * @author schema.org
 * @class EducationalOrganization
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class EducationalOrganization extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EducationalOrganization");
	}

	/**
	 * Schema.org/alumni
	 * Alumni of an organization.
	 *
	 * @property alumni
	 * @type Person
	 */
	alumni;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EducationalOrganization:
 *       type: object
 *       description: "A educationalorganization derived from schema.org/EducationalOrganization"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
 *         - properties:
 *             alumni:
 *               description: Alumni of an organization.
 *               $ref: '#/components/schemas/person'
*/