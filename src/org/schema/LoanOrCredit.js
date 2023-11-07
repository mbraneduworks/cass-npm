const schema = {};
schema.FinancialProduct = require("./FinancialProduct.js");
/**
 * Schema.org/LoanOrCredit
 * A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 *
 * @author schema.org
 * @class LoanOrCredit
 * @module org.schema
 * @extends FinancialProduct
 */
module.exports = class LoanOrCredit extends schema.FinancialProduct {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","LoanOrCredit");
	}

	/**
	 * Schema.org/gracePeriod
	 * The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.
	 *
	 * @property gracePeriod
	 * @type Duration
	 */
	gracePeriod;

	/**
	 * Schema.org/amount
	 * The amount of money.
	 *
	 * @property amount
	 * @type Number
	 */
	amount;

	/**
	 * Schema.org/loanType
	 * The type of a loan or credit.
	 *
	 * @property loanType
	 * @type Text
	 */
	loanType;

	/**
	 * Schema.org/renegotiableLoan
	 * Whether the terms for payment of interest can be renegotiated during the life of the loan.
	 *
	 * @property renegotiableLoan
	 * @type Boolean
	 */
	renegotiableLoan;

	/**
	 * Schema.org/recourseLoan
	 * The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.
	 *
	 * @property recourseLoan
	 * @type Boolean
	 */
	recourseLoan;

	/**
	 * Schema.org/requiredCollateral
	 * Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
	 *
	 * @property requiredCollateral
	 * @type Thing
	 */
	requiredCollateral;

	/**
	 * Schema.org/loanRepaymentForm
	 * A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.
	 *
	 * @property loanRepaymentForm
	 * @type RepaymentSpecification
	 */
	loanRepaymentForm;

	/**
	 * Schema.org/currency
	 * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property currency
	 * @type Text
	 */
	currency;

	/**
	 * Schema.org/loanTerm
	 * The duration of the loan or credit agreement.
	 *
	 * @property loanTerm
	 * @type QuantitativeValue
	 */
	loanTerm;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     LoanOrCredit:
 *       type: object
 *       description: "A loanorcredit derived from schema.org/LoanOrCredit"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FinancialProduct'
 *         - properties:
 *             gracePeriod:
 *               description: The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.
 *               $ref: '#/components/schemas/duration'
 *             amount:
 *               description: The amount of money.
 *               type: number
 *             loanType:
 *               description: The type of a loan or credit.
 *               type: string
 *             renegotiableLoan:
 *               description: Whether the terms for payment of interest can be renegotiated during the life of the loan.
 *               $ref: '#/components/schemas/boolean'
 *             recourseLoan:
 *               description: The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.
 *               $ref: '#/components/schemas/boolean'
 *             requiredCollateral:
 *               description: Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
 *               $ref: '#/components/schemas/thing'
 *             loanRepaymentForm:
 *               description: A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.
 *               $ref: '#/components/schemas/repaymentspecification'
 *             currency:
 *               description: The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *               type: string
 *             loanTerm:
 *               description: The duration of the loan or credit agreement.
 *               $ref: '#/components/schemas/quantitativevalue'
*/