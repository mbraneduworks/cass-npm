const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/EventReservation
 * A reservation for an event like a concert, sporting event, or lecture.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class EventReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class EventReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EventReservation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EventReservation:
 *       type: object
 *       description: "A eventreservation derived from schema.org/EventReservation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Reservation'
*/