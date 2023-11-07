const schema = {};
schema.Room = require("./Room.js");
/**
 * Schema.org/HotelRoom
 * A hotel room is a single room in a hotel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class HotelRoom
 * @module org.schema
 * @extends Room
 */
module.exports = class HotelRoom extends schema.Room {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HotelRoom");
	}

	/**
	 * Schema.org/bed
	 * The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
      If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
	 *
	 * @property bed
	 * @type BedDetails
	 */
	bed;

	/**
	 * Schema.org/occupancy
	 * The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
Typical unit code(s): C62 for person
	 *
	 * @property occupancy
	 * @type QuantitativeValue
	 */
	occupancy;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HotelRoom:
 *       type: object
 *       description: "A hotelroom derived from schema.org/HotelRoom"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Room'
 *         - properties:
 *             bed:
 *               description: The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
 *               $ref: '#/components/schemas/beddetails'
 *             occupancy:
 *               description: The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).Typical unit code(s): C62 for person
 *               $ref: '#/components/schemas/quantitativevalue'
*/