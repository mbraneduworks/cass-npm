const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/DigitalDocumentPermission
 * A permission for a particular person or group to access a particular file.
 *
 * @author schema.org
 * @class DigitalDocumentPermission
 * @module org.schema
 * @extends Intangible
 */
module.exports = class DigitalDocumentPermission extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DigitalDocumentPermission");
	}

	/**
	 * Schema.org/grantee
	 * The person, organization, contact point, or audience that has been granted this permission.
	 *
	 * @property grantee
	 * @type Organization
	 */
	grantee;

	/**
	 * Schema.org/permissionType
	 * The type of permission granted the person, organization, or audience.
	 *
	 * @property permissionType
	 * @type DigitalDocumentPermissionType
	 */
	permissionType;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DigitalDocumentPermission:
 *       type: object
 *       description: "A digitaldocumentpermission derived from schema.org/DigitalDocumentPermission"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             grantee:
 *               description: The person, organization, contact point, or audience that has been granted this permission.
 *               $ref: '#/components/schemas/organization'
 *             permissionType:
 *               description: The type of permission granted the person, organization, or audience.
 *               $ref: '#/components/schemas/digitaldocumentpermissiontype'
*/