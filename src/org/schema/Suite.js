const schema = {};
schema.Accommodation = require("./Accommodation.js");
/**
 * Schema.org/Suite
 * A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class Suite
 * @module org.schema
 * @extends Accommodation
 */
module.exports = class Suite extends schema.Accommodation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Suite");
	}

	/**
	 * Schema.org/numberOfRooms
	 * The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
	 *
	 * @property numberOfRooms
	 * @type QuantitativeValue
	 */
	numberOfRooms;

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
 *     Suite:
 *       type: object
 *       description: "A suite derived from schema.org/Suite"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Accommodation'
 *         - properties:
 *             numberOfRooms:
 *               description: The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             bed:
 *               description: The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
 *               $ref: '#/components/schemas/beddetails'
 *             occupancy:
 *               description: The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).Typical unit code(s): C62 for person
 *               $ref: '#/components/schemas/quantitativevalue'
*/