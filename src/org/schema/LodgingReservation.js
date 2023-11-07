const schema = {};
schema.Reservation = require("./Reservation.js");
/**
 * Schema.org/LodgingReservation
 * A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *
 * @author schema.org
 * @class LodgingReservation
 * @module org.schema
 * @extends Reservation
 */
module.exports = class LodgingReservation extends schema.Reservation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LodgingReservation");
	}

	/**
	 * Schema.org/checkinTime
	 * The earliest someone may check into a lodging establishment.
	 *
	 * @property checkinTime
	 * @type DateTime
	 */
	checkinTime;

	/**
	 * Schema.org/lodgingUnitType
	 * Textual description of the unit type (including suite vs. room, size of bed, etc.).
	 *
	 * @property lodgingUnitType
	 * @type QualitativeValue
	 */
	lodgingUnitType;

	/**
	 * Schema.org/numChildren
	 * The number of children staying in the unit.
	 *
	 * @property numChildren
	 * @type QuantitativeValue
	 */
	numChildren;

	/**
	 * Schema.org/lodgingUnitDescription
	 * A full description of the lodging unit.
	 *
	 * @property lodgingUnitDescription
	 * @type Text
	 */
	lodgingUnitDescription;

	/**
	 * Schema.org/numAdults
	 * The number of adults staying in the unit.
	 *
	 * @property numAdults
	 * @type QuantitativeValue
	 */
	numAdults;

	/**
	 * Schema.org/checkoutTime
	 * The latest someone may check out of a lodging establishment.
	 *
	 * @property checkoutTime
	 * @type DateTime
	 */
	checkoutTime;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LodgingReservation:
 *       type: object
 *       description: "A lodgingreservation derived from schema.org/LodgingReservation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Reservation'
 *         - properties:
 *             checkinTime:
 *               description: The earliest someone may check into a lodging establishment.
 *               type: string
 *             lodgingUnitType:
 *               description: Textual description of the unit type (including suite vs. room, size of bed, etc.).
 *               $ref: '#/components/schemas/qualitativevalue'
 *             numChildren:
 *               description: The number of children staying in the unit.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             lodgingUnitDescription:
 *               description: A full description of the lodging unit.
 *               type: string
 *             numAdults:
 *               description: The number of adults staying in the unit.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             checkoutTime:
 *               description: The latest someone may check out of a lodging establishment.
 *               type: string
*/