const schema = {};
schema.WebPageElement = require("./WebPageElement.js");
/**
 * Schema.org/WPFooter
 * The footer section of the page.
 *
 * @author schema.org
 * @class WPFooter
 * @module org.schema
 * @extends WebPageElement
 */
module.exports = class WPFooter extends schema.WebPageElement {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WPFooter");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WPFooter:
 *       type: object
 *       description: "A wpfooter derived from schema.org/WPFooter"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPageElement'
*/