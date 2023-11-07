const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/CheckOutAction
 * The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).\n\nRelated actions:\n\n* [[CheckInAction]]: The antonym of CheckOutAction.\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 *
 * @author schema.org
 * @class CheckOutAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class CheckOutAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CheckOutAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CheckOutAction:
 *       type: object
 *       description: "A checkoutaction derived from schema.org/CheckOutAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CommunicateAction'
*/