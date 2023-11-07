const schema = {};
schema.WebPageElement = require("./WebPageElement.js");
/**
 * Schema.org/SiteNavigationElement
 * A navigation element of the page.
 *
 * @author schema.org
 * @class SiteNavigationElement
 * @module org.schema
 * @extends WebPageElement
 */
module.exports = class SiteNavigationElement extends schema.WebPageElement {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SiteNavigationElement");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SiteNavigationElement:
 *       type: object
 *       description: "A sitenavigationelement derived from schema.org/SiteNavigationElement"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPageElement'
*/