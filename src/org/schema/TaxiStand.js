const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/TaxiStand
 * A taxi stand.
 *
 * @author schema.org
 * @class TaxiStand
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class TaxiStand extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TaxiStand");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TaxiStand:
 *       type: object
 *       description: "A taxistand derived from schema.org/TaxiStand"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/