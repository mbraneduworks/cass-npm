const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/QAPage
 * A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).
 *
 * @author schema.org
 * @class QAPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class QAPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","QAPage");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     QAPage:
 *       type: object
 *       description: "A qapage derived from schema.org/QAPage"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPage'
*/