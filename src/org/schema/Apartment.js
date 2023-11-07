const schema = {};
schema.Accommodation = require("./Accommodation.js");
/**
 * Schema.org/Apartment
 * An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
 *
 * @author schema.org
 * @class Apartment
 * @module org.schema
 * @extends Accommodation
 */
module.exports = class Apartment extends schema.Accommodation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Apartment");
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
 *     Apartment:
 *       type: object
 *       description: "A apartment derived from schema.org/Apartment"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Accommodation'
 *         - properties:
 *             numberOfRooms:
 *               description: The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             occupancy:
 *               description: The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).Typical unit code(s): C62 for person
 *               $ref: '#/components/schemas/quantitativevalue'
*/