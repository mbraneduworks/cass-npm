const schema = {};
schema.SoftwareApplication = require("./SoftwareApplication.js");
/**
 * Schema.org/WebApplication
 * Web applications.
 *
 * @author schema.org
 * @class WebApplication
 * @module org.schema
 * @extends SoftwareApplication
 */
module.exports = class WebApplication extends schema.SoftwareApplication {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebApplication");
	}

	/**
	 * Schema.org/browserRequirements
	 * Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.
	 *
	 * @property browserRequirements
	 * @type Text
	 */
	browserRequirements;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WebApplication:
 *       type: object
 *       description: "A webapplication derived from schema.org/WebApplication"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:SoftwareApplication'
 *         - properties:
 *             browserRequirements:
 *               description: Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.
 *               type: string
*/