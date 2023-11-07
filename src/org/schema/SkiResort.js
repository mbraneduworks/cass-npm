const schema = {};
schema.Resort = require("./Resort.js");
/**
 * Schema.org/SkiResort
 * A ski resort.
 *
 * @author schema.org
 * @class SkiResort
 * @module org.schema
 * @extends Resort
 */
module.exports = class SkiResort extends schema.Resort {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SkiResort");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SkiResort:
 *       type: object
 *       description: "A skiresort derived from schema.org/SkiResort"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Resort'
*/