const schema = {};
schema.CivicStructure = require("./CivicStructure.js");
/**
 * Schema.org/PerformingArtsTheater
 * A theater or other performing art center.
 *
 * @author schema.org
 * @class PerformingArtsTheater
 * @module org.schema
 * @extends CivicStructure
 */
module.exports = class PerformingArtsTheater extends schema.CivicStructure {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PerformingArtsTheater");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PerformingArtsTheater:
 *       type: object
 *       description: "A performingartstheater derived from schema.org/PerformingArtsTheater"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CivicStructure'
*/