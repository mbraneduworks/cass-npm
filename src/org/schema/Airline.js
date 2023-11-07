const schema = {};
schema.Organization = require("./Organization.js");
/**
 * Schema.org/Airline
 * An organization that provides flights for passengers.
 *
 * @author schema.org
 * @class Airline
 * @module org.schema
 * @extends Organization
 */
module.exports = class Airline extends schema.Organization {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Airline");
	}

	/**
	 * Schema.org/iataCode
	 * IATA identifier for an airline or airport.
	 *
	 * @property iataCode
	 * @type Text
	 */
	iataCode;

	/**
	 * Schema.org/boardingPolicy
	 * The type of boarding policy used by the airline (e.g. zone-based or group-based).
	 *
	 * @property boardingPolicy
	 * @type BoardingPolicyType
	 */
	boardingPolicy;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Airline:
 *       type: object
 *       description: "A airline derived from schema.org/Airline"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Organization'
 *         - properties:
 *             iataCode:
 *               description: IATA identifier for an airline or airport.
 *               type: string
 *             boardingPolicy:
 *               description: The type of boarding policy used by the airline (e.g. zone-based or group-based).
 *               $ref: '#/components/schemas/boardingpolicytype'
*/