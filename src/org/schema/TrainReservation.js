const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/TrainReservation
 * A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class TrainReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class TrainReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TrainReservation");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TrainReservation:
 *       type: object
 *       description: "A trainreservation derived from schema.org/TrainReservation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Reservation'
*/