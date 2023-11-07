const schema = {};
schema.MedicalStudy = require("./MedicalStudy.js");
/**
 * Schema.org/MedicalTrial
 * A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
 *
 * @author schema.org
 * @class MedicalTrial
 * @module org.schema
 * @extends MedicalStudy
 */
module.exports = class MedicalTrial extends schema.MedicalStudy {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalTrial");
	}

	/**
	 * Schema.org/trialDesign
	 * Specifics about the trial design (enumerated).
	 *
	 * @property trialDesign
	 * @type MedicalTrialDesign
	 */
	trialDesign;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalTrial:
 *       type: object
 *       description: "A medicaltrial derived from schema.org/MedicalTrial"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalStudy'
 *         - properties:
 *             trialDesign:
 *               description: Specifics about the trial design (enumerated).
 *               $ref: '#/components/schemas/medicaltrialdesign'
*/