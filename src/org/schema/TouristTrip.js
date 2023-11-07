const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/TouristTrip
 * A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors.
  (See examples below).
 *
 * @author schema.org
 * @class TouristTrip
 * @module org.schema
 * @extends Trip
 */
module.exports = class TouristTrip extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TouristTrip");
	}

	/**
	 * Schema.org/touristType
	 * Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
	 *
	 * @property touristType
	 * @type Audience
	 */
	touristType;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TouristTrip:
 *       type: object
 *       description: "A touristtrip derived from schema.org/TouristTrip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Trip'
 *         - properties:
 *             touristType:
 *               description: Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
 *               $ref: '#/components/schemas/audience'
*/