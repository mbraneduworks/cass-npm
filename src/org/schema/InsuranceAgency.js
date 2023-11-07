const schema = {};
schema.FinancialService = require("./FinancialService.js");
/**
 * Schema.org/InsuranceAgency
 * An Insurance agency.
 *
 * @author schema.org
 * @class InsuranceAgency
 * @module org.schema
 * @extends FinancialService
 */
module.exports = class InsuranceAgency extends schema.FinancialService {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","InsuranceAgency");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     InsuranceAgency:
 *       type: object
 *       description: "A insuranceagency derived from schema.org/InsuranceAgency"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FinancialService'
*/