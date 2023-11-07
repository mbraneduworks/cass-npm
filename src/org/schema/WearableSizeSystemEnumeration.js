const schema = {};
schema.SizeSystemEnumeration = require("./SizeSystemEnumeration.js");
/**
 * Schema.org/WearableSizeSystemEnumeration
 * Enumerates common size systems specific for wearable products
 *
 * @author schema.org
 * @class WearableSizeSystemEnumeration
 * @module org.schema
 * @extends SizeSystemEnumeration
 */
module.exports = class WearableSizeSystemEnumeration extends schema.SizeSystemEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WearableSizeSystemEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WearableSizeSystemEnumeration:
 *       type: object
 *       description: "A wearablesizesystemenumeration derived from schema.org/WearableSizeSystemEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:SizeSystemEnumeration'
*/