const schema = {};
schema.PriceSpecification = require("./PriceSpecification.js");
/**
 * Schema.org/PaymentChargeSpecification
 * The costs of settling the payment using a particular payment method.
 *
 * @author schema.org
 * @class PaymentChargeSpecification
 * @module org.schema
 * @extends PriceSpecification
 */
module.exports = class PaymentChargeSpecification extends schema.PriceSpecification {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PaymentChargeSpecification");
	}

	/**
	 * Schema.org/appliesToDeliveryMethod
	 * The delivery method(s) to which the delivery charge or payment charge specification applies.
	 *
	 * @property appliesToDeliveryMethod
	 * @type DeliveryMethod
	 */
	appliesToDeliveryMethod;

	/**
	 * Schema.org/appliesToPaymentMethod
	 * The payment method(s) to which the payment charge specification applies.
	 *
	 * @property appliesToPaymentMethod
	 * @type PaymentMethod
	 */
	appliesToPaymentMethod;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PaymentChargeSpecification:
 *       type: object
 *       description: "A paymentchargespecification derived from schema.org/PaymentChargeSpecification"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:PriceSpecification'
 *         - properties:
 *             appliesToDeliveryMethod:
 *               description: The delivery method(s) to which the delivery charge or payment charge specification applies.
 *               $ref: '#/components/schemas/deliverymethod'
 *             appliesToPaymentMethod:
 *               description: The payment method(s) to which the payment charge specification applies.
 *               $ref: '#/components/schemas/paymentmethod'
*/