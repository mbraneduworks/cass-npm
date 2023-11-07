const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/GeoShape
 * The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
 *
 * @author schema.org
 * @class GeoShape
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class GeoShape extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GeoShape");
	}

	/**
	 * Schema.org/polygon
	 * A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.
	 *
	 * @property polygon
	 * @type Text
	 */
	polygon;

	/**
	 * Schema.org/circle
	 * A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.
	 *
	 * @property circle
	 * @type Text
	 */
	circle;

	/**
	 * Schema.org/address
	 * Physical address of the item.
	 *
	 * @property address
	 * @type Text
	 */
	address;

	/**
	 * Schema.org/addressCountry
	 * The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
	 *
	 * @property addressCountry
	 * @type Country
	 */
	addressCountry;

	/**
	 * Schema.org/line
	 * A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.
	 *
	 * @property line
	 * @type Text
	 */
	line;

	/**
	 * Schema.org/box
	 * A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.
	 *
	 * @property box
	 * @type Text
	 */
	box;

	/**
	 * Schema.org/postalCode
	 * The postal code. For example, 94043.
	 *
	 * @property postalCode
	 * @type Text
	 */
	postalCode;

	/**
	 * Schema.org/elevation
	 * The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
	 *
	 * @property elevation
	 * @type Number
	 */
	elevation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GeoShape:
 *       type: object
 *       description: "A geoshape derived from schema.org/GeoShape"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             polygon:
 *               description: A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.
 *               type: string
 *             circle:
 *               description: A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.
 *               type: string
 *             address:
 *               description: Physical address of the item.
 *               type: string
 *             addressCountry:
 *               description: The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
 *               $ref: '#/components/schemas/country'
 *             line:
 *               description: A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.
 *               type: string
 *             box:
 *               description: A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.
 *               type: string
 *             postalCode:
 *               description: The postal code. For example, 94043.
 *               type: string
 *             elevation:
 *               description: The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
 *               type: number
*/