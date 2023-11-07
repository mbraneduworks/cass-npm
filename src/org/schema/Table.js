const schema = {};
schema.WebPageElement = require("./WebPageElement.js");
/**
 * Schema.org/Table
 * A table on a Web page.
 *
 * @author schema.org
 * @class Table
 * @module org.schema
 * @extends WebPageElement
 */
module.exports = class Table extends schema.WebPageElement {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Table");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Table:
 *       type: object
 *       description: "A table derived from schema.org/Table"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPageElement'
*/