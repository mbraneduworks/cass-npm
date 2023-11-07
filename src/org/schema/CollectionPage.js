const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/CollectionPage
 * Web page type: Collection page.
 *
 * @author schema.org
 * @class CollectionPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class CollectionPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CollectionPage");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CollectionPage:
 *       type: object
 *       description: "A collectionpage derived from schema.org/CollectionPage"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPage'
*/