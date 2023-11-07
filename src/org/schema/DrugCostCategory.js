const schema = {};
schema.MedicalEnumeration = require("./MedicalEnumeration.js");
/**
 * Schema.org/DrugCostCategory
 * Enumerated categories of medical drug costs.
 *
 * @author schema.org
 * @class DrugCostCategory
 * @module org.schema
 * @extends MedicalEnumeration
 */
module.exports = class DrugCostCategory extends schema.MedicalEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DrugCostCategory");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DrugCostCategory:
 *       type: object
 *       description: "A drugcostcategory derived from schema.org/DrugCostCategory"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEnumeration'
*/