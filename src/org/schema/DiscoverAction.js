const schema = {};
schema.FindAction = require("./FindAction.js");
/**
 * Schema.org/DiscoverAction
 * The act of discovering/finding an object.
 *
 * @author schema.org
 * @class DiscoverAction
 * @module org.schema
 * @extends FindAction
 */
module.exports = class DiscoverAction extends schema.FindAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DiscoverAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DiscoverAction:
 *       type: object
 *       description: "A discoveraction derived from schema.org/DiscoverAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FindAction'
*/