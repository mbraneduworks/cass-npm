const schema = {};
schema.WebPageElement = require("./WebPageElement.js");
/**
 * Schema.org/WPHeader
 * The header section of the page.
 *
 * @author schema.org
 * @class WPHeader
 * @module org.schema
 * @extends WebPageElement
 */
module.exports = class WPHeader extends schema.WebPageElement {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WPHeader");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WPHeader:
 *       type: object
 *       description: "A wpheader derived from schema.org/WPHeader"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPageElement'
*/