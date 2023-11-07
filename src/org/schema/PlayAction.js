const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/PlayAction
 * The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 *
 * @author schema.org
 * @class PlayAction
 * @module org.schema
 * @extends Action
 */
module.exports = class PlayAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PlayAction");
	}

	/**
	 * Schema.org/event
	 * Upcoming or past event associated with this place, organization, or action.
	 *
	 * @property event
	 * @type Event
	 */
	event;

	/**
	 * Schema.org/audience
	 * An intended audience, i.e. a group for whom something was created.
	 *
	 * @property audience
	 * @type Audience
	 */
	audience;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PlayAction:
 *       type: object
 *       description: "A playaction derived from schema.org/PlayAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Action'
 *         - properties:
 *             event:
 *               description: Upcoming or past event associated with this place, organization, or action.
 *               $ref: '#/components/schemas/event'
 *             audience:
 *               description: An intended audience, i.e. a group for whom something was created.
 *               $ref: '#/components/schemas/audience'
*/