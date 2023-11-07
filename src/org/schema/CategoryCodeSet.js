const schema = {};
schema.DefinedTermSet = require("./DefinedTermSet.js");
/**
 * Schema.org/CategoryCodeSet
 * A set of Category Code values.
 *
 * @author schema.org
 * @class CategoryCodeSet
 * @module org.schema
 * @extends DefinedTermSet
 */
module.exports = class CategoryCodeSet extends schema.DefinedTermSet {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CategoryCodeSet");
	}

	/**
	 * Schema.org/hasCategoryCode
	 * A Category code contained in this code set.
	 *
	 * @property hasCategoryCode
	 * @type CategoryCode
	 */
	hasCategoryCode;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CategoryCodeSet:
 *       type: object
 *       description: "A categorycodeset derived from schema.org/CategoryCodeSet"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:DefinedTermSet'
 *         - properties:
 *             hasCategoryCode:
 *               description: A Category code contained in this code set.
 *               $ref: '#/components/schemas/categorycode'
*/