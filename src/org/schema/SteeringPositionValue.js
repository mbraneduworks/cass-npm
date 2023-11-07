const schema = {};
schema.QualitativeValue = require("./QualitativeValue.js");
/**
 * Schema.org/SteeringPositionValue
 * A value indicating a steering position.
 *
 * @author schema.org
 * @class SteeringPositionValue
 * @module org.schema
 * @extends QualitativeValue
 */
module.exports = class SteeringPositionValue extends schema.QualitativeValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SteeringPositionValue");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SteeringPositionValue:
 *       type: object
 *       description: "A steeringpositionvalue derived from schema.org/SteeringPositionValue"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:QualitativeValue'
*/