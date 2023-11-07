const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Manuscript
 * A book, document, or piece of music written by hand rather than typed or printed.
 *
 * @author schema.org
 * @class Manuscript
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Manuscript extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Manuscript");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Manuscript:
 *       type: object
 *       description: "A manuscript derived from schema.org/Manuscript"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
*/