const schema = {};
schema.Accommodation = require("./Accommodation.js");
/**
 * Schema.org/CampingPitch
 * A [[CampingPitch]] is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or [[Campground]].\n\n
In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.
(Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\n
See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).

 *
 * @author schema.org
 * @class CampingPitch
 * @module org.schema
 * @extends Accommodation
 */
module.exports = class CampingPitch extends schema.Accommodation {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CampingPitch");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CampingPitch:
 *       type: object
 *       description: "A campingpitch derived from schema.org/CampingPitch"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Accommodation'
*/