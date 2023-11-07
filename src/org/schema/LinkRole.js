const schema = {};
schema.Role = require("./Role.js");
/**
 * Schema.org/LinkRole
 * A Role that represents a Web link e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds.
 *
 * @author schema.org
 * @class LinkRole
 * @module org.schema
 * @extends Role
 */
module.exports = class LinkRole extends schema.Role {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LinkRole");
	}

	/**
	 * Schema.org/linkRelationship
	 * Indicates the relationship type of a Web link. 
	 *
	 * @property linkRelationship
	 * @type Text
	 */
	linkRelationship;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LinkRole:
 *       type: object
 *       description: "A linkrole derived from schema.org/LinkRole"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Role'
 *         - properties:
 *             linkRelationship:
 *               description: Indicates the relationship type of a Web link. 
 *               type: string
 *             inLanguage:
 *               description: The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 *               $ref: '#/components/schemas/language'
*/