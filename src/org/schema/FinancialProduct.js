const schema = {};
schema.Service = require("./Service.js");
/**
 * Schema.org/FinancialProduct
 * A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 *
 * @author schema.org
 * @class FinancialProduct
 * @module org.schema
 * @extends Service
 */
module.exports = class FinancialProduct extends schema.Service {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FinancialProduct");
	}

	/**
	 * Schema.org/feesAndCommissionsSpecification
	 * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
	 *
	 * @property feesAndCommissionsSpecification
	 * @type URL
	 */
	feesAndCommissionsSpecification;

	/**
	 * Schema.org/interestRate
	 * The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
	 *
	 * @property interestRate
	 * @type QuantitativeValue
	 */
	interestRate;

	/**
	 * Schema.org/annualPercentageRate
	 * The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
	 *
	 * @property annualPercentageRate
	 * @type Number
	 */
	annualPercentageRate;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     FinancialProduct:
 *       type: object
 *       description: "A financialproduct derived from schema.org/FinancialProduct"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Service'
 *         - properties:
 *             feesAndCommissionsSpecification:
 *               description: Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
 *               type: string
 *             interestRate:
 *               description: The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             annualPercentageRate:
 *               description: The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
 *               type: number
*/