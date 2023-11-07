const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MapCategoryType
 * An enumeration of several kinds of Map.
 *
 * @author schema.org
 * @class MapCategoryType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MapCategoryType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MapCategoryType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MapCategoryType:
 *       type: object
 *       description: "A mapcategorytype derived from schema.org/MapCategoryType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/