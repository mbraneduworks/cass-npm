const schema = {};
schema.TradeAction = require("./TradeAction.js");
/**
 * Schema.org/SellAction
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 *
 * @author schema.org
 * @class SellAction
 * @module org.schema
 * @extends TradeAction
 */
module.exports = class SellAction extends schema.TradeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SellAction");
	}

	/**
	 * Schema.org/buyer
	 * A sub property of participant. The participant/person/organization that bought the object.
	 *
	 * @property buyer
	 * @type Person
	 */
	buyer;

	/**
	 * Schema.org/warrantyPromise
	 * The warranty promise(s) included in the offer.
	 *
	 * @property warrantyPromise
	 * @type WarrantyPromise
	 */
	warrantyPromise;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SellAction:
 *       type: object
 *       description: "A sellaction derived from schema.org/SellAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TradeAction'
 *         - properties:
 *             buyer:
 *               description: A sub property of participant. The participant/person/organization that bought the object.
 *               $ref: '#/components/schemas/person'
 *             warrantyPromise:
 *               description: The warranty promise(s) included in the offer.
 *               $ref: '#/components/schemas/warrantypromise'
*/