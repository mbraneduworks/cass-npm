const schema = {};
schema.Role = require("./Role.js");
/**
 * Schema.org/OrganizationRole
 * A subclass of Role used to describe roles within organizations.
 *
 * @author schema.org
 * @class OrganizationRole
 * @module org.schema
 * @extends Role
 */
module.exports = class OrganizationRole extends schema.Role {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrganizationRole");
	}

	/**
	 * Schema.org/numberedPosition
	 * A number associated with a role in an organization, for example, the number on an athlete's jersey.
	 *
	 * @property numberedPosition
	 * @type Number
	 */
	numberedPosition;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OrganizationRole:
 *       type: object
 *       description: "A organizationrole derived from schema.org/OrganizationRole"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Role'
 *         - properties:
 *             numberedPosition:
 *               description: A number associated with a role in an organization, for example, the number on an athlete's jersey.
 *               type: number
*/