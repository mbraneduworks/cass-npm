const schema = {};
schema.AssessAction = require("./AssessAction.js");
/**
 * Schema.org/ReactAction
 * The act of responding instinctively and emotionally to an object, expressing a sentiment.
 *
 * @author schema.org
 * @class ReactAction
 * @module org.schema
 * @extends AssessAction
 */
module.exports = class ReactAction extends schema.AssessAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReactAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ReactAction:
 *       type: object
 *       description: "A reactaction derived from schema.org/ReactAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AssessAction'
*/