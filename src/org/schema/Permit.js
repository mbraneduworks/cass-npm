const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Permit
 * A permit issued by an organization, e.g. a parking pass.
 *
 * @author schema.org
 * @class Permit
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Permit extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Permit");
	}

	/**
	 * Schema.org/validFrom
	 * The date when the item becomes valid.
	 *
	 * @property validFrom
	 * @type Date
	 */
	validFrom;

	/**
	 * Schema.org/permitAudience
	 * The target audience for this permit.
	 *
	 * @property permitAudience
	 * @type Audience
	 */
	permitAudience;

	/**
	 * Schema.org/validIn
	 * The geographic area where a permit or similar thing is valid.
	 *
	 * @property validIn
	 * @type AdministrativeArea
	 */
	validIn;

	/**
	 * Schema.org/issuedThrough
	 * The service through with the permit was granted.
	 *
	 * @property issuedThrough
	 * @type Service
	 */
	issuedThrough;

	/**
	 * Schema.org/issuedBy
	 * The organization issuing the ticket or permit.
	 *
	 * @property issuedBy
	 * @type Organization
	 */
	issuedBy;

	/**
	 * Schema.org/validUntil
	 * The date when the item is no longer valid.
	 *
	 * @property validUntil
	 * @type Date
	 */
	validUntil;

	/**
	 * Schema.org/validFor
	 * The duration of validity of a permit or similar thing.
	 *
	 * @property validFor
	 * @type Duration
	 */
	validFor;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Permit:
 *       type: object
 *       description: "A permit derived from schema.org/Permit"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             validFrom:
 *               description: The date when the item becomes valid.
 *               type: string
 *             permitAudience:
 *               description: The target audience for this permit.
 *               $ref: '#/components/schemas/audience'
 *             validIn:
 *               description: The geographic area where a permit or similar thing is valid.
 *               $ref: '#/components/schemas/administrativearea'
 *             issuedThrough:
 *               description: The service through with the permit was granted.
 *               $ref: '#/components/schemas/service'
 *             issuedBy:
 *               description: The organization issuing the ticket or permit.
 *               $ref: '#/components/schemas/organization'
 *             validUntil:
 *               description: The date when the item is no longer valid.
 *               type: string
 *             validFor:
 *               description: The duration of validity of a permit or similar thing.
 *               $ref: '#/components/schemas/duration'
*/