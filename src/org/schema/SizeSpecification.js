const schema = {};
schema.QualitativeValue = require("./QualitativeValue.js");
/**
 * Schema.org/SizeSpecification
 * Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
 *
 * @author schema.org
 * @class SizeSpecification
 * @module org.schema
 * @extends QualitativeValue
 */
module.exports = class SizeSpecification extends schema.QualitativeValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SizeSpecification");
	}

	/**
	 * Schema.org/hasMeasurement
	 * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
	 *
	 * @property hasMeasurement
	 * @type QuantitativeValue
	 */
	hasMeasurement;

	/**
	 * Schema.org/suggestedGender
	 * The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
	 *
	 * @property suggestedGender
	 * @type Text
	 */
	suggestedGender;

	/**
	 * Schema.org/sizeSystem
	 * The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
	 *
	 * @property sizeSystem
	 * @type Text
	 */
	sizeSystem;

	/**
	 * Schema.org/suggestedAge
	 * The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
	 *
	 * @property suggestedAge
	 * @type QuantitativeValue
	 */
	suggestedAge;

	/**
	 * Schema.org/suggestedMeasurement
	 * A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
	 *
	 * @property suggestedMeasurement
	 * @type QuantitativeValue
	 */
	suggestedMeasurement;

	/**
	 * Schema.org/sizeGroup
	 * The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
	 *
	 * @property sizeGroup
	 * @type Text
	 */
	sizeGroup;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SizeSpecification:
 *       type: object
 *       description: "A sizespecification derived from schema.org/SizeSpecification"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:QualitativeValue'
 *         - properties:
 *             hasMeasurement:
 *               description: A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             suggestedGender:
 *               description: The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
 *               type: string
 *             sizeSystem:
 *               description: The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
 *               type: string
 *             suggestedAge:
 *               description: The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             suggestedMeasurement:
 *               description: A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             sizeGroup:
 *               description: The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
 *               type: string
*/