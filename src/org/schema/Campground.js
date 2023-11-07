const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/Campground
 * A camping site, campsite, or [[Campground]] is a place used for overnight stay in the outdoors, typically containing individual [[CampingPitch]] locations. \n\n
In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\n

See also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).

 *
 * @author schema.org
 * @class Campground
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class Campground extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Campground");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Campground:
 *       type: object
 *       description: "A campground derived from schema.org/Campground"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/