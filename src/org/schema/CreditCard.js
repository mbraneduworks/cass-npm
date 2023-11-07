const schema = {};
schema.PaymentCard = require("./PaymentCard.js");
/**
 * Schema.org/CreditCard
 * A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA
       
 *
 * @author schema.org
 * @class CreditCard
 * @module org.schema
 * @extends PaymentCard
 */
module.exports = class CreditCard extends schema.PaymentCard {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CreditCard");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CreditCard:
 *       type: object
 *       description: "A creditcard derived from schema.org/CreditCard"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:PaymentCard'
*/