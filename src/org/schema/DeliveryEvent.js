const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/DeliveryEvent
 * An event involving the delivery of an item.
 *
 * @author schema.org
 * @class DeliveryEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class DeliveryEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DeliveryEvent");
	}

	/**
	 * Schema.org/accessCode
	 * Password, PIN, or access code needed for delivery (e.g. from a locker).
	 *
	 * @property accessCode
	 * @type Text
	 */
	accessCode;

	/**
	 * Schema.org/hasDeliveryMethod
	 * Method used for delivery or shipping.
	 *
	 * @property hasDeliveryMethod
	 * @type DeliveryMethod
	 */
	hasDeliveryMethod;

	/**
	 * Schema.org/availableFrom
	 * When the item is available for pickup from the store, locker, etc.
	 *
	 * @property availableFrom
	 * @type DateTime
	 */
	availableFrom;

	/**
	 * Schema.org/availableThrough
	 * After this date, the item will no longer be available for pickup.
	 *
	 * @property availableThrough
	 * @type DateTime
	 */
	availableThrough;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DeliveryEvent:
 *       type: object
 *       description: "A deliveryevent derived from schema.org/DeliveryEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
 *         - properties:
 *             accessCode:
 *               description: Password, PIN, or access code needed for delivery (e.g. from a locker).
 *               type: string
 *             hasDeliveryMethod:
 *               description: Method used for delivery or shipping.
 *               $ref: '#/components/schemas/deliverymethod'
 *             availableFrom:
 *               description: When the item is available for pickup from the store, locker, etc.
 *               type: string
 *             availableThrough:
 *               description: After this date, the item will no longer be available for pickup.
 *               type: string
*/