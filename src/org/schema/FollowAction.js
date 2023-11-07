const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/FollowAction
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.\n\nRelated actions:\n\n* [[BefriendAction]]: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.\n* [[SubscribeAction]]: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.\n* [[RegisterAction]]: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.\n* [[TrackAction]]: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
 *
 * @author schema.org
 * @class FollowAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class FollowAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FollowAction");
	}

	/**
	 * Schema.org/followee
	 * A sub property of object. The person or organization being followed.
	 *
	 * @property followee
	 * @type Organization
	 */
	followee;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     FollowAction:
 *       type: object
 *       description: "A followaction derived from schema.org/FollowAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:InteractAction'
 *         - properties:
 *             followee:
 *               description: A sub property of object. The person or organization being followed.
 *               $ref: '#/components/schemas/organization'
*/