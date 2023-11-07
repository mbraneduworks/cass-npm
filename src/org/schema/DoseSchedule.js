const schema = {};
schema.MedicalIntangible = require("./MedicalIntangible.js");
/**
 * Schema.org/DoseSchedule
 * A specific dosing schedule for a drug or supplement.
 *
 * @author schema.org
 * @class DoseSchedule
 * @module org.schema
 * @extends MedicalIntangible
 */
module.exports = class DoseSchedule extends schema.MedicalIntangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DoseSchedule");
	}

	/**
	 * Schema.org/frequency
	 * How often the dose is taken, e.g. 'daily'.
	 *
	 * @property frequency
	 * @type Text
	 */
	frequency;

	/**
	 * Schema.org/doseValue
	 * The value of the dose, e.g. 500.
	 *
	 * @property doseValue
	 * @type Number
	 */
	doseValue;

	/**
	 * Schema.org/doseUnit
	 * The unit of the dose, e.g. 'mg'.
	 *
	 * @property doseUnit
	 * @type Text
	 */
	doseUnit;

	/**
	 * Schema.org/targetPopulation
	 * Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
	 *
	 * @property targetPopulation
	 * @type Text
	 */
	targetPopulation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DoseSchedule:
 *       type: object
 *       description: "A doseschedule derived from schema.org/DoseSchedule"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MedicalIntangible'
 *         - properties:
 *             frequency:
 *               description: How often the dose is taken, e.g. 'daily'.
 *               type: string
 *             doseValue:
 *               description: The value of the dose, e.g. 500.
 *               type: number
 *             doseUnit:
 *               description: The unit of the dose, e.g. 'mg'.
 *               type: string
 *             targetPopulation:
 *               description: Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
 *               type: string
*/