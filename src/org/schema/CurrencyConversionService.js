const schema = {};
schema.FinancialProduct = require("./FinancialProduct.js");
/**
 * Schema.org/CurrencyConversionService
 * A service to convert funds from one currency to another currency.
 *
 * @author schema.org
 * @class CurrencyConversionService
 * @module org.schema
 * @extends FinancialProduct
 */
module.exports = class CurrencyConversionService extends schema.FinancialProduct {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CurrencyConversionService");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CurrencyConversionService:
 *       type: object
 *       description: "A currencyconversionservice derived from schema.org/CurrencyConversionService"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:FinancialProduct'
*/