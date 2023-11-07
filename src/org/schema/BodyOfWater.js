const schema = {};
schema.Landform = require("./Landform.js");
/**
 * Schema.org/BodyOfWater
 * A body of water, such as a sea, ocean, or lake.
 *
 * @author schema.org
 * @class BodyOfWater
 * @module org.schema
 * @extends Landform
 */
module.exports = class BodyOfWater extends schema.Landform {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BodyOfWater");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BodyOfWater:
 *       type: object
 *       description: "A bodyofwater derived from schema.org/BodyOfWater"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Landform'
*/