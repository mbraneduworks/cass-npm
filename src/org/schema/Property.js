const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Property
 * A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 *
 * @author schema.org
 * @class Property
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Property extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Property");
	}

	/**
	 * Schema.org/supersededBy
	 * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
	 *
	 * @property supersededBy
	 * @type Enumeration
	 */
	supersededBy;

	/**
	 * Schema.org/rangeIncludes
	 * Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.
	 *
	 * @property rangeIncludes
	 * @type Class
	 */
	rangeIncludes;

	/**
	 * Schema.org/domainIncludes
	 * Relates a property to a class that is (one of) the type(s) the property is expected to be used on.
	 *
	 * @property domainIncludes
	 * @type Class
	 */
	domainIncludes;

	/**
	 * Schema.org/inverseOf
	 * Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used.
	 *
	 * @property inverseOf
	 * @type Property
	 */
	inverseOf;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Property:
 *       type: object
 *       description: "A property derived from schema.org/Property"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             supersededBy:
 *               description: Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
 *               $ref: '#/components/schemas/enumeration'
 *             rangeIncludes:
 *               description: Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.
 *               $ref: '#/components/schemas/class'
 *             domainIncludes:
 *               description: Relates a property to a class that is (one of) the type(s) the property is expected to be used on.
 *               $ref: '#/components/schemas/class'
 *             inverseOf:
 *               description: Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used.
 *               $ref: '#/components/schemas/property'
*/