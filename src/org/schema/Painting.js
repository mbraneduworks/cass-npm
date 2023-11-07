const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Painting
 * A painting.
 *
 * @author schema.org
 * @class Painting
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Painting extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Painting");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Painting:
 *       type: object
 *       description: "A painting derived from schema.org/Painting"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
*/