const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/AlignmentObject
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.

Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 *
 * @author schema.org
 * @class AlignmentObject
 * @module org.schema
 * @extends Intangible
 */
module.exports = class AlignmentObject extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","AlignmentObject");
	}

	/**
	 * Schema.org/targetDescription
	 * The description of a node in an established educational framework.
	 *
	 * @property targetDescription
	 * @type Text
	 */
	targetDescription;

	/**
	 * Schema.org/educationalFramework
	 * The framework to which the resource being described is aligned.
	 *
	 * @property educationalFramework
	 * @type Text
	 */
	educationalFramework;

	/**
	 * Schema.org/targetUrl
	 * The URL of a node in an established educational framework.
	 *
	 * @property targetUrl
	 * @type URL
	 */
	targetUrl;

	/**
	 * Schema.org/alignmentType
	 * A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.
	 *
	 * @property alignmentType
	 * @type Text
	 */
	alignmentType;

	/**
	 * Schema.org/targetName
	 * The name of a node in an established educational framework.
	 *
	 * @property targetName
	 * @type Text
	 */
	targetName;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     AlignmentObject:
 *       type: object
 *       description: "A alignmentobject derived from schema.org/AlignmentObject"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             targetDescription:
 *               description: The description of a node in an established educational framework.
 *               type: string
 *             educationalFramework:
 *               description: The framework to which the resource being described is aligned.
 *               type: string
 *             targetUrl:
 *               description: The URL of a node in an established educational framework.
 *               type: string
 *             alignmentType:
 *               description: A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.
 *               type: string
 *             targetName:
 *               description: The name of a node in an established educational framework.
 *               type: string
*/