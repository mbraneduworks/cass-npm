const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/OrganizeAction
 * The act of manipulating/administering/supervising/controlling one or more objects.
 *
 * @author schema.org
 * @class OrganizeAction
 * @module org.schema
 * @extends Action
 */
module.exports = class OrganizeAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrganizeAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OrganizeAction:
 *       type: object
 *       description: "A organizeaction derived from schema.org/OrganizeAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Action'
*/