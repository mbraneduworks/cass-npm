const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/SubscribeAction
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.\n* [[RegisterAction]]: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 *
 * @author schema.org
 * @class SubscribeAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class SubscribeAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SubscribeAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SubscribeAction:
 *       type: object
 *       description: "A subscribeaction derived from schema.org/SubscribeAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:InteractAction'
*/