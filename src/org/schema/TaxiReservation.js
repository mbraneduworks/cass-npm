const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/TaxiReservation
 * A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class TaxiReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class TaxiReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TaxiReservation");
	}

	/**
	 * Schema.org/partySize
	 * Number of people the reservation should accommodate.
	 *
	 * @property partySize
	 * @type QuantitativeValue
	 */
	partySize;

	/**
	 * Schema.org/pickupTime
	 * When a taxi will pickup a passenger or a rental car can be picked up.
	 *
	 * @property pickupTime
	 * @type DateTime
	 */
	pickupTime;

	/**
	 * Schema.org/pickupLocation
	 * Where a taxi will pick up a passenger or a rental car can be picked up.
	 *
	 * @property pickupLocation
	 * @type Place
	 */
	pickupLocation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TaxiReservation:
 *       type: object
 *       description: "A taxireservation derived from schema.org/TaxiReservation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Reservation'
 *         - properties:
 *             partySize:
 *               description: Number of people the reservation should accommodate.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             pickupTime:
 *               description: When a taxi will pickup a passenger or a rental car can be picked up.
 *               type: string
 *             pickupLocation:
 *               description: Where a taxi will pick up a passenger or a rental car can be picked up.
 *               $ref: '#/components/schemas/place'
*/