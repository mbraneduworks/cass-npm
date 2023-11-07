const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/Intangible
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 *
 * @author schema.org
 * @class Intangible
 * @module org.schema
 * @extends Thing
 */
module.exports = class Intangible extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Intangible");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Intangible:
 *       type: object
 *       description: "A intangible derived from schema.org/Intangible"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Thing'
*/