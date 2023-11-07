const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/RepaymentSpecification
 * A structured value representing repayment.
 *
 * @author schema.org
 * @class RepaymentSpecification
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class RepaymentSpecification extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","RepaymentSpecification");
	}

	/**
	 * Schema.org/loanPaymentAmount
	 * The amount of money to pay in a single payment.
	 *
	 * @property loanPaymentAmount
	 * @type MonetaryAmount
	 */
	loanPaymentAmount;

	/**
	 * Schema.org/numberOfLoanPayments
	 * The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.
	 *
	 * @property numberOfLoanPayments
	 * @type Number
	 */
	numberOfLoanPayments;

	/**
	 * Schema.org/loanPaymentFrequency
	 * Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.
	 *
	 * @property loanPaymentFrequency
	 * @type Number
	 */
	loanPaymentFrequency;

	/**
	 * Schema.org/downPayment
	 * a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.
	 *
	 * @property downPayment
	 * @type MonetaryAmount
	 */
	downPayment;

	/**
	 * Schema.org/earlyPrepaymentPenalty
	 * The amount to be paid as a penalty in the event of early payment of the loan.
	 *
	 * @property earlyPrepaymentPenalty
	 * @type MonetaryAmount
	 */
	earlyPrepaymentPenalty;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     RepaymentSpecification:
 *       type: object
 *       description: "A repaymentspecification derived from schema.org/RepaymentSpecification"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             loanPaymentAmount:
 *               description: The amount of money to pay in a single payment.
 *               $ref: '#/components/schemas/monetaryamount'
 *             numberOfLoanPayments:
 *               description: The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.
 *               type: number
 *             loanPaymentFrequency:
 *               description: Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.
 *               type: number
 *             downPayment:
 *               description: a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.
 *               $ref: '#/components/schemas/monetaryamount'
 *             earlyPrepaymentPenalty:
 *               description: The amount to be paid as a penalty in the event of early payment of the loan.
 *               $ref: '#/components/schemas/monetaryamount'
*/