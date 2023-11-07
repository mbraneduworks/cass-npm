const schema = {};
schema.Project = require("./Project.js");
/**
 * Schema.org/FundingAgency
 * A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages
    the granting process (via [[Grant]]s, typically [[MonetaryGrant]]s).
    A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc.
    
Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation...
    
 *
 * @author schema.org
 * @class FundingAgency
 * @module org.schema
 * @extends Project
 */
module.exports = class FundingAgency extends schema.Project {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","FundingAgency");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     FundingAgency:
 *       type: object
 *       description: "A fundingagency derived from schema.org/FundingAgency"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Project'
*/