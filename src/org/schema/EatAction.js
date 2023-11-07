const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/EatAction
 * The act of swallowing solid objects.
 *
 * @author schema.org
 * @class EatAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class EatAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EatAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EatAction:
 *       type: object
 *       description: "A eataction derived from schema.org/EatAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ConsumeAction'
*/