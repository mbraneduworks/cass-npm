const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/NutritionInformation
 * Nutritional information about the recipe.
 *
 * @author schema.org
 * @class NutritionInformation
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class NutritionInformation extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","NutritionInformation");
	}

	/**
	 * Schema.org/proteinContent
	 * The number of grams of protein.
	 *
	 * @property proteinContent
	 * @type Mass
	 */
	proteinContent;

	/**
	 * Schema.org/fatContent
	 * The number of grams of fat.
	 *
	 * @property fatContent
	 * @type Mass
	 */
	fatContent;

	/**
	 * Schema.org/cholesterolContent
	 * The number of milligrams of cholesterol.
	 *
	 * @property cholesterolContent
	 * @type Mass
	 */
	cholesterolContent;

	/**
	 * Schema.org/unsaturatedFatContent
	 * The number of grams of unsaturated fat.
	 *
	 * @property unsaturatedFatContent
	 * @type Mass
	 */
	unsaturatedFatContent;

	/**
	 * Schema.org/fiberContent
	 * The number of grams of fiber.
	 *
	 * @property fiberContent
	 * @type Mass
	 */
	fiberContent;

	/**
	 * Schema.org/saturatedFatContent
	 * The number of grams of saturated fat.
	 *
	 * @property saturatedFatContent
	 * @type Mass
	 */
	saturatedFatContent;

	/**
	 * Schema.org/calories
	 * The number of calories.
	 *
	 * @property calories
	 * @type Energy
	 */
	calories;

	/**
	 * Schema.org/sugarContent
	 * The number of grams of sugar.
	 *
	 * @property sugarContent
	 * @type Mass
	 */
	sugarContent;

	/**
	 * Schema.org/transFatContent
	 * The number of grams of trans fat.
	 *
	 * @property transFatContent
	 * @type Mass
	 */
	transFatContent;

	/**
	 * Schema.org/servingSize
	 * The serving size, in terms of the number of volume or mass.
	 *
	 * @property servingSize
	 * @type Text
	 */
	servingSize;

	/**
	 * Schema.org/sodiumContent
	 * The number of milligrams of sodium.
	 *
	 * @property sodiumContent
	 * @type Mass
	 */
	sodiumContent;

	/**
	 * Schema.org/carbohydrateContent
	 * The number of grams of carbohydrates.
	 *
	 * @property carbohydrateContent
	 * @type Mass
	 */
	carbohydrateContent;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     NutritionInformation:
 *       type: object
 *       description: "A nutritioninformation derived from schema.org/NutritionInformation"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             proteinContent:
 *               description: The number of grams of protein.
 *               $ref: '#/components/schemas/mass'
 *             fatContent:
 *               description: The number of grams of fat.
 *               $ref: '#/components/schemas/mass'
 *             cholesterolContent:
 *               description: The number of milligrams of cholesterol.
 *               $ref: '#/components/schemas/mass'
 *             unsaturatedFatContent:
 *               description: The number of grams of unsaturated fat.
 *               $ref: '#/components/schemas/mass'
 *             fiberContent:
 *               description: The number of grams of fiber.
 *               $ref: '#/components/schemas/mass'
 *             saturatedFatContent:
 *               description: The number of grams of saturated fat.
 *               $ref: '#/components/schemas/mass'
 *             calories:
 *               description: The number of calories.
 *               $ref: '#/components/schemas/energy'
 *             sugarContent:
 *               description: The number of grams of sugar.
 *               $ref: '#/components/schemas/mass'
 *             transFatContent:
 *               description: The number of grams of trans fat.
 *               $ref: '#/components/schemas/mass'
 *             servingSize:
 *               description: The serving size, in terms of the number of volume or mass.
 *               type: string
 *             sodiumContent:
 *               description: The number of milligrams of sodium.
 *               $ref: '#/components/schemas/mass'
 *             carbohydrateContent:
 *               description: The number of grams of carbohydrates.
 *               $ref: '#/components/schemas/mass'
*/