const schema = {};
schema.LoanOrCredit = require("./LoanOrCredit.js");
/**
 * Schema.org/MortgageLoan
 * A loan in which property or real estate is used as collateral. (A loan securitized against some real estate).
 *
 * @author schema.org
 * @class MortgageLoan
 * @module org.schema
 * @extends LoanOrCredit
 */
module.exports = class MortgageLoan extends schema.LoanOrCredit {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MortgageLoan");
	}

	/**
	 * Schema.org/domiciledMortgage
	 * Whether borrower is a resident of the jurisdiction where the property is located.
	 *
	 * @property domiciledMortgage
	 * @type Boolean
	 */
	domiciledMortgage;

	/**
	 * Schema.org/loanMortgageMandateAmount
	 * Amount of mortgage mandate that can be converted into a proper mortgage at a later stage.
	 *
	 * @property loanMortgageMandateAmount
	 * @type MonetaryAmount
	 */
	loanMortgageMandateAmount;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MortgageLoan:
 *       type: object
 *       description: "A mortgageloan derived from schema.org/MortgageLoan"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LoanOrCredit'
 *         - properties:
 *             domiciledMortgage:
 *               description: Whether borrower is a resident of the jurisdiction where the property is located.
 *               $ref: '#/components/schemas/boolean'
 *             loanMortgageMandateAmount:
 *               description: Amount of mortgage mandate that can be converted into a proper mortgage at a later stage.
 *               $ref: '#/components/schemas/monetaryamount'
*/