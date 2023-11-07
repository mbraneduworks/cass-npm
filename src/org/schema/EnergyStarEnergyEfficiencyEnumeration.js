const schema = {};
schema.EnergyEfficiencyEnumeration = require("./EnergyEfficiencyEnumeration.js");
/**
 * Schema.org/EnergyStarEnergyEfficiencyEnumeration
 * Used to indicate whether a product is EnergyStar certified.
 *
 * @author schema.org
 * @class EnergyStarEnergyEfficiencyEnumeration
 * @module org.schema
 * @extends EnergyEfficiencyEnumeration
 */
module.exports = class EnergyStarEnergyEfficiencyEnumeration extends schema.EnergyEfficiencyEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EnergyStarEnergyEfficiencyEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EnergyStarEnergyEfficiencyEnumeration:
 *       type: object
 *       description: "A energystarenergyefficiencyenumeration derived from schema.org/EnergyStarEnergyEfficiencyEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EnergyEfficiencyEnumeration'
*/