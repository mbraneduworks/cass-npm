const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/BoatTrip
 * A trip on a commercial ferry line.
 *
 * @author schema.org
 * @class BoatTrip
 * @module org.schema
 * @extends Trip
 */
module.exports = class BoatTrip extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BoatTrip");
	}

	/**
	 * Schema.org/departureBoatTerminal
	 * The terminal or port from which the boat departs.
	 *
	 * @property departureBoatTerminal
	 * @type BoatTerminal
	 */
	departureBoatTerminal;

	/**
	 * Schema.org/arrivalBoatTerminal
	 * The terminal or port from which the boat arrives.
	 *
	 * @property arrivalBoatTerminal
	 * @type BoatTerminal
	 */
	arrivalBoatTerminal;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BoatTrip:
 *       type: object
 *       description: "A boattrip derived from schema.org/BoatTrip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Trip'
 *         - properties:
 *             departureBoatTerminal:
 *               description: The terminal or port from which the boat departs.
 *               $ref: '#/components/schemas/boatterminal'
 *             arrivalBoatTerminal:
 *               description: The terminal or port from which the boat arrives.
 *               $ref: '#/components/schemas/boatterminal'
*/