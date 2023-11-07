const schema = {};
schema.Quantity = require("./Quantity.js");
/**
 * Schema.org/Distance
 * Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.
 *
 * @author schema.org
 * @class Distance
 * @module org.schema
 * @extends Quantity
 */
module.exports = class Distance extends schema.Quantity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Distance");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Distance:
 *       type: object
 *       description: "A distance derived from schema.org/Distance"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Quantity'
*/