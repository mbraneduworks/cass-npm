const schema = {};
schema.DefinedTerm = require("./DefinedTerm.js");
/**
 * Schema.org/CategoryCode
 * A Category Code.
 *
 * @author schema.org
 * @class CategoryCode
 * @module org.schema
 * @extends DefinedTerm
 */
module.exports = class CategoryCode extends schema.DefinedTerm {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CategoryCode");
	}

	/**
	 * Schema.org/inCodeSet
	 * A [[CategoryCodeSet]] that contains this category code.
	 *
	 * @property inCodeSet
	 * @type URL
	 */
	inCodeSet;

	/**
	 * Schema.org/codeValue
	 * A short textual code that uniquely identifies the value.
	 *
	 * @property codeValue
	 * @type Text
	 */
	codeValue;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CategoryCode:
 *       type: object
 *       description: "A categorycode derived from schema.org/CategoryCode"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:DefinedTerm'
 *         - properties:
 *             inCodeSet:
 *               description: A [[CategoryCodeSet]] that contains this category code.
 *               type: string
 *             codeValue:
 *               description: A short textual code that uniquely identifies the value.
 *               type: string
*/