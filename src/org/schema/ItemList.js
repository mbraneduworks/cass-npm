const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/ItemList
 * A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 *
 * @author schema.org
 * @class ItemList
 * @module org.schema
 * @extends Intangible
 */
module.exports = class ItemList extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ItemList");
	}

	/**
	 * Schema.org/numberOfItems
	 * The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
	 *
	 * @property numberOfItems
	 * @type Integer
	 */
	numberOfItems;

	/**
	 * Schema.org/itemListElement
	 * For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.
	 *
	 * @property itemListElement
	 * @type Thing
	 */
	itemListElement;

	/**
	 * Schema.org/itemListOrder
	 * Type of ordering (e.g. Ascending, Descending, Unordered).
	 *
	 * @property itemListOrder
	 * @type ItemListOrderType
	 */
	itemListOrder;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ItemList:
 *       type: object
 *       description: "A itemlist derived from schema.org/ItemList"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             numberOfItems:
 *               description: The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 *               type: number
 *             itemListElement:
 *               description: For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements. Use ListItem with a 'position' property in such cases.
 *               $ref: '#/components/schemas/thing'
 *             itemListOrder:
 *               description: Type of ordering (e.g. Ascending, Descending, Unordered).
 *               $ref: '#/components/schemas/itemlistordertype'
*/