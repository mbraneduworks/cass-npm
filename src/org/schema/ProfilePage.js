const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/ProfilePage
 * Web page type: Profile page.
 *
 * @author schema.org
 * @class ProfilePage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class ProfilePage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProfilePage");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ProfilePage:
 *       type: object
 *       description: "A profilepage derived from schema.org/ProfilePage"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPage'
*/