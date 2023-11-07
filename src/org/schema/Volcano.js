const schema = {};
schema.Landform = require("./Landform.js");
/**
 * Schema.org/Volcano
 * A volcano, like Fuji san.
 *
 * @author schema.org
 * @class Volcano
 * @module org.schema
 * @extends Landform
 */
module.exports = class Volcano extends schema.Landform {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Volcano");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Volcano:
 *       type: object
 *       description: "A volcano derived from schema.org/Volcano"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Landform'
*/