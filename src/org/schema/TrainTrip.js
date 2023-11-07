const schema = {};
schema.Trip = require("./Trip.js");
/**
 * Schema.org/TrainTrip
 * A trip on a commercial train line.
 *
 * @author schema.org
 * @class TrainTrip
 * @module org.schema
 * @extends Trip
 */
module.exports = class TrainTrip extends schema.Trip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TrainTrip");
	}

	/**
	 * Schema.org/arrivalPlatform
	 * The platform where the train arrives.
	 *
	 * @property arrivalPlatform
	 * @type Text
	 */
	arrivalPlatform;

	/**
	 * Schema.org/departurePlatform
	 * The platform from which the train departs.
	 *
	 * @property departurePlatform
	 * @type Text
	 */
	departurePlatform;

	/**
	 * Schema.org/departureStation
	 * The station from which the train departs.
	 *
	 * @property departureStation
	 * @type TrainStation
	 */
	departureStation;

	/**
	 * Schema.org/trainNumber
	 * The unique identifier for the train.
	 *
	 * @property trainNumber
	 * @type Text
	 */
	trainNumber;

	/**
	 * Schema.org/arrivalStation
	 * The station where the train trip ends.
	 *
	 * @property arrivalStation
	 * @type TrainStation
	 */
	arrivalStation;

	/**
	 * Schema.org/trainName
	 * The name of the train (e.g. The Orient Express).
	 *
	 * @property trainName
	 * @type Text
	 */
	trainName;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TrainTrip:
 *       type: object
 *       description: "A traintrip derived from schema.org/TrainTrip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Trip'
 *         - properties:
 *             arrivalPlatform:
 *               description: The platform where the train arrives.
 *               type: string
 *             departurePlatform:
 *               description: The platform from which the train departs.
 *               type: string
 *             departureStation:
 *               description: The station from which the train departs.
 *               $ref: '#/components/schemas/trainstation'
 *             trainNumber:
 *               description: The unique identifier for the train.
 *               type: string
 *             arrivalStation:
 *               description: The station where the train trip ends.
 *               $ref: '#/components/schemas/trainstation'
 *             trainName:
 *               description: The name of the train (e.g. The Orient Express).
 *               type: string
*/