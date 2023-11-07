const schema = {};
schema.InformAction = require("./InformAction.js");
/**
 * Schema.org/RsvpAction
 * The act of notifying an event organizer as to whether you expect to attend the event.
 *
 * @author schema.org
 * @class RsvpAction
 * @module org.schema
 * @extends InformAction
 */
module.exports = class RsvpAction extends schema.InformAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RsvpAction");
	}

	/**
	 * Schema.org/additionalNumberOfGuests
	 * If responding yes, the number of guests who will attend in addition to the invitee.
	 *
	 * @property additionalNumberOfGuests
	 * @type Number
	 */
	additionalNumberOfGuests;

	/**
	 * Schema.org/rsvpResponse
	 * The response (yes, no, maybe) to the RSVP.
	 *
	 * @property rsvpResponse
	 * @type RsvpResponseType
	 */
	rsvpResponse;

	/**
	 * Schema.org/comment
	 * Comments, typically from users.
	 *
	 * @property comment
	 * @type Comment
	 */
	comment;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RsvpAction:
 *       type: object
 *       description: "A rsvpaction derived from schema.org/RsvpAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:InformAction'
 *         - properties:
 *             additionalNumberOfGuests:
 *               description: If responding yes, the number of guests who will attend in addition to the invitee.
 *               type: number
 *             rsvpResponse:
 *               description: The response (yes, no, maybe) to the RSVP.
 *               $ref: '#/components/schemas/rsvpresponsetype'
 *             comment:
 *               description: Comments, typically from users.
 *               $ref: '#/components/schemas/comment'
*/