const schema = {};
schema.AssessAction = require("./AssessAction.js");
/**
 * Schema.org/IgnoreAction
 * The act of intentionally disregarding the object. An agent ignores an object.
 *
 * @author schema.org
 * @class IgnoreAction
 * @module org.schema
 * @extends AssessAction
 */
module.exports = class IgnoreAction extends schema.AssessAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","IgnoreAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     IgnoreAction:
 *       type: object
 *       description: "A ignoreaction derived from schema.org/IgnoreAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AssessAction'
*/