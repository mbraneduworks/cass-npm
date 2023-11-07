const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/BusReservation
 * A reservation for bus travel. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class BusReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class BusReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusReservation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusReservation:
 *       type: object
 *       description: "A busreservation derived from schema.org/BusReservation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Reservation'
*/