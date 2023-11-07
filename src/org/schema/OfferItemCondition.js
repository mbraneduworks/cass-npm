const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/OfferItemCondition
 * A list of possible conditions for the item.
 *
 * @author schema.org
 * @class OfferItemCondition
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class OfferItemCondition extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfferItemCondition");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OfferItemCondition:
 *       type: object
 *       description: "A offeritemcondition derived from schema.org/OfferItemCondition"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/