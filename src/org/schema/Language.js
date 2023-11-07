const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Language
 * Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]].
 *
 * @author schema.org
 * @class Language
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Language extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Language");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Language:
 *       type: object
 *       description: "A language derived from schema.org/Language"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
*/