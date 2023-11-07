const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/BusTrip
 * A trip on a commercial bus line.
 *
 * @author schema.org
 * @class BusTrip
 * @module org.schema
 * @extends Trip
 */
module.exports = class BusTrip extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusTrip");
	}

	/**
	 * Schema.org/busName
	 * The name of the bus (e.g. Bolt Express).
	 *
	 * @property busName
	 * @type Text
	 */
	busName;

	/**
	 * Schema.org/arrivalBusStop
	 * The stop or station from which the bus arrives.
	 *
	 * @property arrivalBusStop
	 * @type BusStation
	 */
	arrivalBusStop;

	/**
	 * Schema.org/departureBusStop
	 * The stop or station from which the bus departs.
	 *
	 * @property departureBusStop
	 * @type BusStop
	 */
	departureBusStop;

	/**
	 * Schema.org/busNumber
	 * The unique identifier for the bus.
	 *
	 * @property busNumber
	 * @type Text
	 */
	busNumber;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusTrip:
 *       type: object
 *       description: "A bustrip derived from schema.org/BusTrip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Trip'
 *         - properties:
 *             busName:
 *               description: The name of the bus (e.g. Bolt Express).
 *               type: string
 *             arrivalBusStop:
 *               description: The stop or station from which the bus arrives.
 *               $ref: '#/components/schemas/busstation'
 *             departureBusStop:
 *               description: The stop or station from which the bus departs.
 *               $ref: '#/components/schemas/busstop'
 *             busNumber:
 *               description: The unique identifier for the bus.
 *               type: string
*/