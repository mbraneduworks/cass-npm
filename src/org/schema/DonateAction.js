const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/DonateAction
 * The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 *
 * @author schema.org
 * @class DonateAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class DonateAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DonateAction");
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
 *     DonateAction:
 *       type: object
 *       description: "A donateaction derived from schema.org/DonateAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TradeAction'
 *         - properties:
 *             recipient:
 *               description: A sub property of participant. The participant who is at the receiving end of the action.
 *               $ref: '#/components/schemas/organization'
*/