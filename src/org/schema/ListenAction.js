const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/ListenAction
 * The act of consuming audio content.
 *
 * @author schema.org
 * @class ListenAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class ListenAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ListenAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ListenAction:
 *       type: object
 *       description: "A listenaction derived from schema.org/ListenAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ConsumeAction'
*/