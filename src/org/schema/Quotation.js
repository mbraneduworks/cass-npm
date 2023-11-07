const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Quotation
 * A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]].
 *
 * @author schema.org
 * @class Quotation
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Quotation extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Quotation");
	}

	/**
	 * Schema.org/spokenByCharacter
	 * The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork.
	 *
	 * @property spokenByCharacter
	 * @type Person
	 */
	spokenByCharacter;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Quotation:
 *       type: object
 *       description: "A quotation derived from schema.org/Quotation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             spokenByCharacter:
 *               description: The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork.
 *               $ref: '#/components/schemas/person'
*/