const schema = {};
schema.FinancialService = require("./FinancialService.js");
/**
 * Schema.org/AccountingService
 * Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
      
 *
 * @author schema.org
 * @class AccountingService
 * @module org.schema
 * @extends FinancialService
 */
module.exports = class AccountingService extends schema.FinancialService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AccountingService");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AccountingService:
 *       type: object
 *       description: "A accountingservice derived from schema.org/AccountingService"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FinancialService'
*/