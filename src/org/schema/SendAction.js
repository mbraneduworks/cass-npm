const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/SendAction
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 *
 * @author schema.org
 * @class SendAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class SendAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SendAction");
	}

	/**
	 * Schema.org/deliveryMethod
	 * A sub property of instrument. The method of delivery.
	 *
	 * @property deliveryMethod
	 * @type DeliveryMethod
	 */
	deliveryMethod;

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
 *     SendAction:
 *       type: object
 *       description: "A sendaction derived from schema.org/SendAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TransferAction'
 *         - properties:
 *             deliveryMethod:
 *               description: A sub property of instrument. The method of delivery.
 *               $ref: '#/components/schemas/deliverymethod'
 *             recipient:
 *               description: A sub property of participant. The participant who is at the receiving end of the action.
 *               $ref: '#/components/schemas/organization'
*/