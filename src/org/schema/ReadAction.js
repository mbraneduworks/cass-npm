const schema = {};
schema.ConsumeAction = require("./ConsumeAction.js");
/**
 * Schema.org/ReadAction
 * The act of consuming written content.
 *
 * @author schema.org
 * @class ReadAction
 * @module org.schema
 * @extends ConsumeAction
 */
module.exports = class ReadAction extends schema.ConsumeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReadAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ReadAction:
 *       type: object
 *       description: "A readaction derived from schema.org/ReadAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ConsumeAction'
*/