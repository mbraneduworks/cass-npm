const schema = {};
schema.AutomotiveBusiness = require("./AutomotiveBusiness.js");
/**
 * Schema.org/AutoBodyShop
 * Auto body shop.
 *
 * @author schema.org
 * @class AutoBodyShop
 * @module org.schema
 * @extends AutomotiveBusiness
 */
module.exports = class AutoBodyShop extends schema.AutomotiveBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AutoBodyShop");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AutoBodyShop:
 *       type: object
 *       description: "A autobodyshop derived from schema.org/AutoBodyShop"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AutomotiveBusiness'
*/