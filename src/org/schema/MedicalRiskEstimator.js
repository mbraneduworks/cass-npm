const schema = {};
schema.MedicalEntity = require("./MedicalEntity.js");
/**
 * Schema.org/MedicalRiskEstimator
 * Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 *
 * @author schema.org
 * @class MedicalRiskEstimator
 * @module org.schema
 * @extends MedicalEntity
 */
module.exports = class MedicalRiskEstimator extends schema.MedicalEntity {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalRiskEstimator");
	}

	/**
	 * Schema.org/includedRiskFactor
	 * A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition.
	 *
	 * @property includedRiskFactor
	 * @type MedicalRiskFactor
	 */
	includedRiskFactor;

	/**
	 * Schema.org/estimatesRiskOf
	 * The condition, complication, or symptom whose risk is being estimated.
	 *
	 * @property estimatesRiskOf
	 * @type MedicalEntity
	 */
	estimatesRiskOf;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalRiskEstimator:
 *       type: object
 *       description: "A medicalriskestimator derived from schema.org/MedicalRiskEstimator"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalEntity'
 *         - properties:
 *             includedRiskFactor:
 *               description: A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition.
 *               $ref: '#/components/schemas/medicalriskfactor'
 *             estimatesRiskOf:
 *               description: The condition, complication, or symptom whose risk is being estimated.
 *               $ref: '#/components/schemas/medicalentity'
*/