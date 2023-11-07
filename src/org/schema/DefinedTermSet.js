const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/DefinedTermSet
 * A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 *
 * @author schema.org
 * @class DefinedTermSet
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class DefinedTermSet extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DefinedTermSet");
	}

	/**
	 * Schema.org/hasDefinedTerm
	 * A Defined Term contained in this term set.
	 *
	 * @property hasDefinedTerm
	 * @type DefinedTerm
	 */
	hasDefinedTerm;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DefinedTermSet:
 *       type: object
 *       description: "A definedtermset derived from schema.org/DefinedTermSet"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             hasDefinedTerm:
 *               description: A Defined Term contained in this term set.
 *               $ref: '#/components/schemas/definedterm'
*/