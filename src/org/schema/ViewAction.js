const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/ViewAction
 * The act of consuming static visual content.
 *
 * @author schema.org
 * @class ViewAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class ViewAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ViewAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ViewAction:
 *       type: object
 *       description: "A viewaction derived from schema.org/ViewAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ConsumeAction'
*/