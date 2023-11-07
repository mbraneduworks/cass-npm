const schema = {};
schema.Product = require("./Product.js");
/**
 * Schema.org/IndividualProduct
 * A single, identifiable product instance (e.g. a laptop with a particular serial number).
 *
 * @author schema.org
 * @class IndividualProduct
 * @module org.schema
 * @extends Product
 */
module.exports = class IndividualProduct extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","IndividualProduct");
	}

	/**
	 * Schema.org/serialNumber
	 * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
	 *
	 * @property serialNumber
	 * @type Text
	 */
	serialNumber;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     IndividualProduct:
 *       type: object
 *       description: "A individualproduct derived from schema.org/IndividualProduct"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Product'
 *         - properties:
 *             serialNumber:
 *               description: The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
 *               type: string
*/