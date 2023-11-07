const schema = {};
schema.Audience = require("./Audience.js");
/**
 * Schema.org/BusinessAudience
 * A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 *
 * @author schema.org
 * @class BusinessAudience
 * @module org.schema
 * @extends Audience
 */
module.exports = class BusinessAudience extends schema.Audience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusinessAudience");
	}

	/**
	 * Schema.org/numberOfEmployees
	 * The number of employees in an organization e.g. business.
	 *
	 * @property numberOfEmployees
	 * @type QuantitativeValue
	 */
	numberOfEmployees;

	/**
	 * Schema.org/yearlyRevenue
	 * The size of the business in annual revenue.
	 *
	 * @property yearlyRevenue
	 * @type QuantitativeValue
	 */
	yearlyRevenue;

	/**
	 * Schema.org/yearsInOperation
	 * The age of the business.
	 *
	 * @property yearsInOperation
	 * @type QuantitativeValue
	 */
	yearsInOperation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusinessAudience:
 *       type: object
 *       description: "A businessaudience derived from schema.org/BusinessAudience"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Audience'
 *         - properties:
 *             numberOfEmployees:
 *               description: The number of employees in an organization e.g. business.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             yearlyRevenue:
 *               description: The size of the business in annual revenue.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             yearsInOperation:
 *               description: The age of the business.
 *               $ref: '#/components/schemas/quantitativevalue'
*/