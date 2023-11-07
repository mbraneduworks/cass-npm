const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Book
 * A book.
 *
 * @author schema.org
 * @class Book
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Book extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Book");
	}

	/**
	 * Schema.org/numberOfPages
	 * The number of pages in the book.
	 *
	 * @property numberOfPages
	 * @type Integer
	 */
	numberOfPages;

	/**
	 * Schema.org/bookEdition
	 * The edition of the book.
	 *
	 * @property bookEdition
	 * @type Text
	 */
	bookEdition;

	/**
	 * Schema.org/bookFormat
	 * The format of the book.
	 *
	 * @property bookFormat
	 * @type BookFormatType
	 */
	bookFormat;

	/**
	 * Schema.org/abridged
	 * Indicates whether the book is an abridged edition.
	 *
	 * @property abridged
	 * @type Boolean
	 */
	abridged;

	/**
	 * Schema.org/illustrator
	 * The illustrator of the book.
	 *
	 * @property illustrator
	 * @type Person
	 */
	illustrator;

	/**
	 * Schema.org/isbn
	 * The ISBN of the book.
	 *
	 * @property isbn
	 * @type Text
	 */
	isbn;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       description: "A book derived from schema.org/Book"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             numberOfPages:
 *               description: The number of pages in the book.
 *               type: number
 *             bookEdition:
 *               description: The edition of the book.
 *               type: string
 *             bookFormat:
 *               description: The format of the book.
 *               $ref: '#/components/schemas/bookformattype'
 *             abridged:
 *               description: Indicates whether the book is an abridged edition.
 *               $ref: '#/components/schemas/boolean'
 *             illustrator:
 *               description: The illustrator of the book.
 *               $ref: '#/components/schemas/person'
 *             isbn:
 *               description: The ISBN of the book.
 *               type: string
*/