const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Audience
 * Intended audience for an item, i.e. the group for whom the item was created.
 *
 * @author schema.org
 * @class Audience
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Audience extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Audience");
	}

	/**
	 * Schema.org/geographicArea
	 * The geographic area associated with the audience.
	 *
	 * @property geographicArea
	 * @type AdministrativeArea
	 */
	geographicArea;

	/**
	 * Schema.org/audienceType
	 * The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
	 *
	 * @property audienceType
	 * @type Text
	 */
	audienceType;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Audience:
 *       type: object
 *       description: "A audience derived from schema.org/Audience"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             geographicArea:
 *               description: The geographic area associated with the audience.
 *               $ref: '#/components/schemas/administrativearea'
 *             audienceType:
 *               description: The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
 *               type: string
*/