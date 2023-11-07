const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/LandmarksOrHistoricalBuildings
 * An historical landmark or building.
 *
 * @author schema.org
 * @class LandmarksOrHistoricalBuildings
 * @module org.schema
 * @extends Place
 */
module.exports = class LandmarksOrHistoricalBuildings extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LandmarksOrHistoricalBuildings");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LandmarksOrHistoricalBuildings:
 *       type: object
 *       description: "A landmarksorhistoricalbuildings derived from schema.org/LandmarksOrHistoricalBuildings"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Place'
*/