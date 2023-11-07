const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/BefriendAction
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 *
 * @author schema.org
 * @class BefriendAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class BefriendAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BefriendAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BefriendAction:
 *       type: object
 *       description: "A befriendaction derived from schema.org/BefriendAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:InteractAction'
*/