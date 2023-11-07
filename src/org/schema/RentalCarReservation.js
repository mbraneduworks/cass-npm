const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/RentalCarReservation
 * A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 * @author schema.org
 * @class RentalCarReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class RentalCarReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RentalCarReservation");
	}

	/**
	 * Schema.org/dropoffLocation
	 * Where a rental car can be dropped off.
	 *
	 * @property dropoffLocation
	 * @type Place
	 */
	dropoffLocation;

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

	/**
	 * Schema.org/dropoffTime
	 * When a rental car can be dropped off.
	 *
	 * @property dropoffTime
	 * @type DateTime
	 */
	dropoffTime;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RentalCarReservation:
 *       type: object
 *       description: "A rentalcarreservation derived from schema.org/RentalCarReservation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Reservation'
 *         - properties:
 *             dropoffLocation:
 *               description: Where a rental car can be dropped off.
 *               $ref: '#/components/schemas/place'
 *             pickupTime:
 *               description: When a taxi will pickup a passenger or a rental car can be picked up.
 *               type: string
 *             pickupLocation:
 *               description: Where a taxi will pick up a passenger or a rental car can be picked up.
 *               $ref: '#/components/schemas/place'
 *             dropoffTime:
 *               description: When a rental car can be dropped off.
 *               type: string
*/