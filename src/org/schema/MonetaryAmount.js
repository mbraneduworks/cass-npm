const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/MonetaryAmount
 * A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc.
 *
 * @author schema.org
 * @class MonetaryAmount
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class MonetaryAmount extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MonetaryAmount");
	}

	/**
	 * Schema.org/validFrom
	 * The date when the item becomes valid.
	 *
	 * @property validFrom
	 * @type Date
	 */
	validFrom;

	/**
	 * Schema.org/maxValue
	 * The upper value of some characteristic or property.
	 *
	 * @property maxValue
	 * @type Number
	 */
	maxValue;

	/**
	 * Schema.org/minValue
	 * The lower value of some characteristic or property.
	 *
	 * @property minValue
	 * @type Number
	 */
	minValue;

	/**
	 * Schema.org/value
	 * The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
	 *
	 * @property value
	 * @type Text
	 */
	value;

	/**
	 * Schema.org/currency
	 * The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property currency
	 * @type Text
	 */
	currency;

	/**
	 * Schema.org/validThrough
	 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
	 *
	 * @property validThrough
	 * @type Date
	 */
	validThrough;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MonetaryAmount:
 *       type: object
 *       description: "A monetaryamount derived from schema.org/MonetaryAmount"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             validFrom:
 *               description: The date when the item becomes valid.
 *               type: string
 *             maxValue:
 *               description: The upper value of some characteristic or property.
 *               type: number
 *             minValue:
 *               description: The lower value of some characteristic or property.
 *               type: number
 *             value:
 *               description: The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *               type: string
 *             currency:
 *               description: The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *               type: string
 *             validThrough:
 *               description: The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 *               type: string
*/