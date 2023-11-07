const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/WebPageElement
 * A web page element, like a table or an image.
 *
 * @author schema.org
 * @class WebPageElement
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class WebPageElement extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WebPageElement");
	}

	/**
	 * Schema.org/xpath
	 * An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
	 *
	 * @property xpath
	 * @type XPathType
	 */
	xpath;

	/**
	 * Schema.org/cssSelector
	 * A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
	 *
	 * @property cssSelector
	 * @type CssSelectorType
	 */
	cssSelector;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WebPageElement:
 *       type: object
 *       description: "A webpageelement derived from schema.org/WebPageElement"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             xpath:
 *               description: An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 *               $ref: '#/components/schemas/xpathtype'
 *             cssSelector:
 *               description: A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 *               $ref: '#/components/schemas/cssselectortype'
*/