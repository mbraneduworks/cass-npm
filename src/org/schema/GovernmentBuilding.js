const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/GovernmentBuilding
 * A government building.
 *
 * @author schema.org
 * @class GovernmentBuilding
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class GovernmentBuilding extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentBuilding");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GovernmentBuilding:
 *       type: object
 *       description: "A governmentbuilding derived from schema.org/GovernmentBuilding"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/