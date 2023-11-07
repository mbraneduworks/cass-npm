const schema = {};
schema.Audience = require("./Audience.js");
/**
 * Schema.org/Researcher
 * Researchers.
 *
 * @author schema.org
 * @class Researcher
 * @module org.schema
 * @extends Audience
 */
module.exports = class Researcher extends schema.Audience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Researcher");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Researcher:
 *       type: object
 *       description: "A researcher derived from schema.org/Researcher"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Audience'
*/