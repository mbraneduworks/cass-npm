const schema = {};
schema.StatusEnumeration = require("./StatusEnumeration.js");
/**
 * Schema.org/ReservationStatusType
 * Enumerated status values for Reservation.
 *
 * @author schema.org
 * @class ReservationStatusType
 * @module org.schema
 * @extends StatusEnumeration
 */
module.exports = class ReservationStatusType extends schema.StatusEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ReservationStatusType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ReservationStatusType:
 *       type: object
 *       description: "A reservationstatustype derived from schema.org/ReservationStatusType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StatusEnumeration'
*/