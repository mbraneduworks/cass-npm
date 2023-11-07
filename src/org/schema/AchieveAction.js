const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/AchieveAction
 * The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.
 *
 * @author schema.org
 * @class AchieveAction
 * @module org.schema
 * @extends Action
 */
module.exports = class AchieveAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AchieveAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AchieveAction:
 *       type: object
 *       description: "A achieveaction derived from schema.org/AchieveAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Action'
*/