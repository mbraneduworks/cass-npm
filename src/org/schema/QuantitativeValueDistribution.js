const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/QuantitativeValueDistribution
 * A statistical distribution of values.
 *
 * @author schema.org
 * @class QuantitativeValueDistribution
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class QuantitativeValueDistribution extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","QuantitativeValueDistribution");
	}

	/**
	 * Schema.org/median
	 * The median value.
	 *
	 * @property median
	 * @type Number
	 */
	median;

	/**
	 * Schema.org/percentile75
	 * The 75th percentile value.
	 *
	 * @property percentile75
	 * @type Number
	 */
	percentile75;

	/**
	 * Schema.org/percentile25
	 * The 25th percentile value.
	 *
	 * @property percentile25
	 * @type Number
	 */
	percentile25;

	/**
	 * Schema.org/percentile10
	 * The 10th percentile value.
	 *
	 * @property percentile10
	 * @type Number
	 */
	percentile10;

	/**
	 * Schema.org/percentile90
	 * The 90th percentile value.
	 *
	 * @property percentile90
	 * @type Number
	 */
	percentile90;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     QuantitativeValueDistribution:
 *       type: object
 *       description: "A quantitativevaluedistribution derived from schema.org/QuantitativeValueDistribution"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             median:
 *               description: The median value.
 *               type: number
 *             percentile75:
 *               description: The 75th percentile value.
 *               type: number
 *             percentile25:
 *               description: The 25th percentile value.
 *               type: number
 *             percentile10:
 *               description: The 10th percentile value.
 *               type: number
 *             percentile90:
 *               description: The 90th percentile value.
 *               type: number
 *             duration:
 *               description: The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
 *               $ref: '#/components/schemas/duration'
*/