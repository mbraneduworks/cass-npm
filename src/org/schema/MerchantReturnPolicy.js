const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/MerchantReturnPolicy
 * A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *
 * @author schema.org
 * @class MerchantReturnPolicy
 * @module org.schema
 * @extends Intangible
 */
module.exports = class MerchantReturnPolicy extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MerchantReturnPolicy");
	}

	/**
	 * Schema.org/returnPolicyCategory
	 * A returnPolicyCategory expresses at most one of several enumerated kinds of return.
	 *
	 * @property returnPolicyCategory
	 * @type MerchantReturnEnumeration
	 */
	returnPolicyCategory;

	/**
	 * Schema.org/refundType
	 * A refundType, from an enumerated list.
	 *
	 * @property refundType
	 * @type RefundTypeEnumeration
	 */
	refundType;

	/**
	 * Schema.org/returnFees
	 * Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy
	 *
	 * @property returnFees
	 * @type ReturnFeesEnumeration
	 */
	returnFees;

	/**
	 * Schema.org/merchantReturnLink
	 * Indicates a Web page or service by URL, for product return.
	 *
	 * @property merchantReturnLink
	 * @type URL
	 */
	merchantReturnLink;

	/**
	 * Schema.org/merchantReturnDays
	 * The merchantReturnDays property indicates the number of days (from purchase) within which relevant merchant return policy is applicable.
	 *
	 * @property merchantReturnDays
	 * @type Integer
	 */
	merchantReturnDays;

	/**
	 * Schema.org/inStoreReturnsOffered
	 * Are in-store returns offered?
	 *
	 * @property inStoreReturnsOffered
	 * @type Boolean
	 */
	inStoreReturnsOffered;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MerchantReturnPolicy:
 *       type: object
 *       description: "A merchantreturnpolicy derived from schema.org/MerchantReturnPolicy"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             returnPolicyCategory:
 *               description: A returnPolicyCategory expresses at most one of several enumerated kinds of return.
 *               $ref: '#/components/schemas/merchantreturnenumeration'
 *             refundType:
 *               description: A refundType, from an enumerated list.
 *               $ref: '#/components/schemas/refundtypeenumeration'
 *             returnFees:
 *               description: Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy
 *               $ref: '#/components/schemas/returnfeesenumeration'
 *             merchantReturnLink:
 *               description: Indicates a Web page or service by URL, for product return.
 *               type: string
 *             merchantReturnDays:
 *               description: The merchantReturnDays property indicates the number of days (from purchase) within which relevant merchant return policy is applicable.
 *               type: number
 *             inStoreReturnsOffered:
 *               description: Are in-store returns offered?
 *               $ref: '#/components/schemas/boolean'
*/