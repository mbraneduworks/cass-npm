const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/OrderAction
 * An agent orders an object/product/service to be delivered/sent.
 *
 * @author schema.org
 * @class OrderAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class OrderAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OrderAction");
	}

	/**
	 * Schema.org/deliveryMethod
	 * A sub property of instrument. The method of delivery.
	 *
	 * @property deliveryMethod
	 * @type DeliveryMethod
	 */
	deliveryMethod;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OrderAction:
 *       type: object
 *       description: "A orderaction derived from schema.org/OrderAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TradeAction'
 *         - properties:
 *             deliveryMethod:
 *               description: A sub property of instrument. The method of delivery.
 *               $ref: '#/components/schemas/deliverymethod'
*/