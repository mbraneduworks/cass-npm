const schema = {};
schema.AllocateAction = require("./AllocateAction.js");
/**
 * Schema.org/RejectAction
 * The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction.
 *
 * @author schema.org
 * @class RejectAction
 * @module org.schema
 * @extends AllocateAction
 */
module.exports = class RejectAction extends schema.AllocateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RejectAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RejectAction:
 *       type: object
 *       description: "A rejectaction derived from schema.org/RejectAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AllocateAction'
*/