const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/EngineSpecification
 * Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 *
 * @author schema.org
 * @class EngineSpecification
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class EngineSpecification extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EngineSpecification");
	}

	/**
	 * Schema.org/fuelType
	 * The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
	 *
	 * @property fuelType
	 * @type Text
	 */
	fuelType;

	/**
	 * Schema.org/engineType
	 * The type of engine or engines powering the vehicle.
	 *
	 * @property engineType
	 * @type QualitativeValue
	 */
	engineType;

	/**
	 * Schema.org/engineDisplacement
	 * The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \n\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property engineDisplacement
	 * @type QuantitativeValue
	 */
	engineDisplacement;

	/**
	 * Schema.org/enginePower
	 * The power of the vehicle's engine.
    Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\n\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see  [http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property enginePower
	 * @type QuantitativeValue
	 */
	enginePower;

	/**
	 * Schema.org/torque
	 * The torque (turning force) of the vehicle's engine.\n\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\n\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
	 *
	 * @property torque
	 * @type QuantitativeValue
	 */
	torque;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EngineSpecification:
 *       type: object
 *       description: "A enginespecification derived from schema.org/EngineSpecification"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             fuelType:
 *               description: The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
 *               type: string
 *             engineType:
 *               description: The type of engine or engines powering the vehicle.
 *               $ref: '#/components/schemas/qualitativevalue'
 *             engineDisplacement:
 *               description: The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \n\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             enginePower:
 *               description: The power of the vehicle's engine. Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\n\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see [http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             torque:
 *               description: The torque (turning force) of the vehicle's engine.\n\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\n\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *               $ref: '#/components/schemas/quantitativevalue'
*/