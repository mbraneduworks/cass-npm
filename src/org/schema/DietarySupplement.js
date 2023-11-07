const schema = {};
schema.Substance = require("./Substance.js");
/**
 * Schema.org/DietarySupplement
 * A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
 *
 * @author schema.org
 * @class DietarySupplement
 * @module org.schema
 * @extends Substance
 */
module.exports = class DietarySupplement extends schema.Substance {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DietarySupplement");
	}

	/**
	 * Schema.org/mechanismOfAction
	 * The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
	 *
	 * @property mechanismOfAction
	 * @type Text
	 */
	mechanismOfAction;

	/**
	 * Schema.org/isProprietary
	 * True if this item's name is a proprietary/brand name (vs. generic name).
	 *
	 * @property isProprietary
	 * @type Boolean
	 */
	isProprietary;

	/**
	 * Schema.org/maximumIntake
	 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
	 *
	 * @property maximumIntake
	 * @type MaximumDoseSchedule
	 */
	maximumIntake;

	/**
	 * Schema.org/safetyConsideration
	 * Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.
	 *
	 * @property safetyConsideration
	 * @type Text
	 */
	safetyConsideration;

	/**
	 * Schema.org/legalStatus
	 * The drug or supplement's legal status, including any controlled substance schedules that apply.
	 *
	 * @property legalStatus
	 * @type MedicalEnumeration
	 */
	legalStatus;

	/**
	 * Schema.org/nonProprietaryName
	 * The generic name of this drug or supplement.
	 *
	 * @property nonProprietaryName
	 * @type Text
	 */
	nonProprietaryName;

	/**
	 * Schema.org/proprietaryName
	 * Proprietary name given to the diet plan, typically by its originator or creator.
	 *
	 * @property proprietaryName
	 * @type Text
	 */
	proprietaryName;

	/**
	 * Schema.org/recommendedIntake
	 * Recommended intake of this supplement for a given population as defined by a specific recommending authority.
	 *
	 * @property recommendedIntake
	 * @type RecommendedDoseSchedule
	 */
	recommendedIntake;

	/**
	 * Schema.org/activeIngredient
	 * An active ingredient, typically chemical compounds and/or biologic substances.
	 *
	 * @property activeIngredient
	 * @type Text
	 */
	activeIngredient;

	/**
	 * Schema.org/manufacturer
	 * The manufacturer of the product.
	 *
	 * @property manufacturer
	 * @type Organization
	 */
	manufacturer;

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
 *     DietarySupplement:
 *       type: object
 *       description: "A dietarysupplement derived from schema.org/DietarySupplement"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Substance'
 *         - properties:
 *             mechanismOfAction:
 *               description: The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
 *               type: string
 *             isProprietary:
 *               description: True if this item's name is a proprietary/brand name (vs. generic name).
 *               $ref: '#/components/schemas/boolean'
 *             maximumIntake:
 *               description: Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 *               $ref: '#/components/schemas/maximumdoseschedule'
 *             safetyConsideration:
 *               description: Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.
 *               type: string
 *             legalStatus:
 *               description: The drug or supplement's legal status, including any controlled substance schedules that apply.
 *               $ref: '#/components/schemas/medicalenumeration'
 *             nonProprietaryName:
 *               description: The generic name of this drug or supplement.
 *               type: string
 *             proprietaryName:
 *               description: Proprietary name given to the diet plan, typically by its originator or creator.
 *               type: string
 *             recommendedIntake:
 *               description: Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 *               $ref: '#/components/schemas/recommendeddoseschedule'
 *             activeIngredient:
 *               description: An active ingredient, typically chemical compounds and/or biologic substances.
 *               type: string
 *             manufacturer:
 *               description: The manufacturer of the product.
 *               $ref: '#/components/schemas/organization'
 *             targetPopulation:
 *               description: Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
 *               type: string
*/