const schema = {};
schema.Product = require("./Product.js");
/**
 * Schema.org/ProductGroup
 * A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.

While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]]. 
 *
 * @author schema.org
 * @class ProductGroup
 * @module org.schema
 * @extends Product
 */
module.exports = class ProductGroup extends schema.Product {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProductGroup");
	}

	/**
	 * Schema.org/hasVariant
	 * Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]).
	 *
	 * @property hasVariant
	 * @type Product
	 */
	hasVariant;

	/**
	 * Schema.org/productGroupID
	 * Indicates a textual identifier for a ProductGroup.
	 *
	 * @property productGroupID
	 * @type Text
	 */
	productGroupID;

	/**
	 * Schema.org/variesBy
	 * Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs.
	 *
	 * @property variesBy
	 * @type DefinedTerm
	 */
	variesBy;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ProductGroup:
 *       type: object
 *       description: "A productgroup derived from schema.org/ProductGroup"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Product'
 *         - properties:
 *             hasVariant:
 *               description: Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]).
 *               $ref: '#/components/schemas/product'
 *             productGroupID:
 *               description: Indicates a textual identifier for a ProductGroup.
 *               type: string
 *             variesBy:
 *               description: Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs.
 *               $ref: '#/components/schemas/definedterm'
*/