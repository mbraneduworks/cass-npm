const schema = {};
schema.Place = require("./Place.js");
/**
 * Schema.org/Residence
 * The place where a person lives.
 *
 * @author schema.org
 * @class Residence
 * @module org.schema
 * @extends Place
 */
module.exports = class Residence extends schema.Place {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Residence");
	}

	/**
	 * Schema.org/accommodationFloorPlan
	 * A floorplan of some [[Accommodation]].
	 *
	 * @property accommodationFloorPlan
	 * @type FloorPlan
	 */
	accommodationFloorPlan;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Residence:
 *       type: object
 *       description: "A residence derived from schema.org/Residence"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Place'
 *         - properties:
 *             accommodationFloorPlan:
 *               description: A floorplan of some [[Accommodation]].
 *               $ref: '#/components/schemas/floorplan'
*/