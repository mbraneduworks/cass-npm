const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/MarryAction
 * The act of marrying a person.
 *
 * @author schema.org
 * @class MarryAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class MarryAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MarryAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MarryAction:
 *       type: object
 *       description: "A marryaction derived from schema.org/MarryAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:InteractAction'
*/