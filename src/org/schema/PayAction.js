const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/PayAction
 * An agent pays a price to a participant.
 *
 * @author schema.org
 * @class PayAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class PayAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PayAction");
	}

	/**
	 * Schema.org/recipient
	 * A sub property of participant. The participant who is at the receiving end of the action.
	 *
	 * @property recipient
	 * @type Organization
	 */
	recipient;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PayAction:
 *       type: object
 *       description: "A payaction derived from schema.org/PayAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TradeAction'
 *         - properties:
 *             recipient:
 *               description: A sub property of participant. The participant who is at the receiving end of the action.
 *               $ref: '#/components/schemas/organization'
*/