const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/FinancialService
 * Financial services business.
 *
 * @author schema.org
 * @class FinancialService
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class FinancialService extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FinancialService");
	}

	/**
	 * Schema.org/feesAndCommissionsSpecification
	 * Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
	 *
	 * @property feesAndCommissionsSpecification
	 * @type URL
	 */
	feesAndCommissionsSpecification;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     FinancialService:
 *       type: object
 *       description: "A financialservice derived from schema.org/FinancialService"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
 *         - properties:
 *             feesAndCommissionsSpecification:
 *               description: Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
 *               type: string
*/