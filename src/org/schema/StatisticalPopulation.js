const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/StatisticalPopulation
 * A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property [[populationType]] is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a [[StatisticalPopulation]] representing all [[Person]]s with a [[homeLocation]] of East Podunk California, would be described by applying the appropriate [[homeLocation]] and [[populationType]] properties to a [[StatisticalPopulation]] item that stands for that set of people.
The properties [[numConstraints]] and [[constrainingProperty]] are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statistical
population, and does not imply that the population consists of people. For example, a [[populationType]] of [[Event]] or [[NewsArticle]] could be used. See also [[Observation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details.
  
 *
 * @author schema.org
 * @class StatisticalPopulation
 * @module org.schema
 * @extends Intangible
 */
module.exports = class StatisticalPopulation extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","StatisticalPopulation");
	}

	/**
	 * Schema.org/numConstraints
	 * Indicates the number of constraints (not counting [[populationType]]) defined for a particular [[StatisticalPopulation]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalPopulation]].
	 *
	 * @property numConstraints
	 * @type Integer
	 */
	numConstraints;

	/**
	 * Schema.org/constrainingProperty
	 * Indicates a property used as a constraint to define a [[StatisticalPopulation]] with respect to the set of entities
  corresponding to an indicated type (via [[populationType]]).
	 *
	 * @property constrainingProperty
	 * @type Integer
	 */
	constrainingProperty;

	/**
	 * Schema.org/populationType
	 * Indicates the populationType common to all members of a [[StatisticalPopulation]].
	 *
	 * @property populationType
	 * @type Class
	 */
	populationType;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     StatisticalPopulation:
 *       type: object
 *       description: "A statisticalpopulation derived from schema.org/StatisticalPopulation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             numConstraints:
 *               description: Indicates the number of constraints (not counting [[populationType]]) defined for a particular [[StatisticalPopulation]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalPopulation]].
 *               type: number
 *             constrainingProperty:
 *               description: Indicates a property used as a constraint to define a [[StatisticalPopulation]] with respect to the set of entities corresponding to an indicated type (via [[populationType]]).
 *               type: number
 *             populationType:
 *               description: Indicates the populationType common to all members of a [[StatisticalPopulation]].
 *               $ref: '#/components/schemas/class'
*/