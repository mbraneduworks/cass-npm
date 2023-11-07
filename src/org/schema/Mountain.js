const schema = {};
schema.Landform = require("./Landform.js");
/**
 * Schema.org/Mountain
 * A mountain, like Mount Whitney or Mount Everest.
 *
 * @author schema.org
 * @class Mountain
 * @module org.schema
 * @extends Landform
 */
module.exports = class Mountain extends schema.Landform {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Mountain");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Mountain:
 *       type: object
 *       description: "A mountain derived from schema.org/Mountain"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Landform'
*/