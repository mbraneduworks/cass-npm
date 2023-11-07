const schema = {};
schema.UseAction = require("./UseAction.js");
/**
 * Schema.org/WearAction
 * The act of dressing oneself in clothing.
 *
 * @author schema.org
 * @class WearAction
 * @module org.schema
 * @extends UseAction
 */
module.exports = class WearAction extends schema.UseAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WearAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WearAction:
 *       type: object
 *       description: "A wearaction derived from schema.org/WearAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:UseAction'
*/