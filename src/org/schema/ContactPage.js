const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/ContactPage
 * Web page type: Contact page.
 *
 * @author schema.org
 * @class ContactPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class ContactPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ContactPage");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ContactPage:
 *       type: object
 *       description: "A contactpage derived from schema.org/ContactPage"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPage'
*/