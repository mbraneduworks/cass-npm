const schema = {};
schema.DigitalDocument = require("./DigitalDocument.js");
/**
 * Schema.org/TextDigitalDocument
 * A file composed primarily of text.
 *
 * @author schema.org
 * @class TextDigitalDocument
 * @module org.schema
 * @extends DigitalDocument
 */
module.exports = class TextDigitalDocument extends schema.DigitalDocument {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TextDigitalDocument");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TextDigitalDocument:
 *       type: object
 *       description: "A textdigitaldocument derived from schema.org/TextDigitalDocument"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:DigitalDocument'
*/