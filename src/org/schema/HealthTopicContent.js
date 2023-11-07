const schema = {};
schema.WebContent = require("./WebContent.js");
/**
 * Schema.org/HealthTopicContent
 * [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary.
  
 *
 * @author schema.org
 * @class HealthTopicContent
 * @module org.schema
 * @extends WebContent
 */
module.exports = class HealthTopicContent extends schema.WebContent {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HealthTopicContent");
	}

	/**
	 * Schema.org/hasHealthAspect
	 * Indicates the aspect or aspects specifically addressed in some [[HealthTopicContent]]. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects.
	 *
	 * @property hasHealthAspect
	 * @type HealthAspectEnumeration
	 */
	hasHealthAspect;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HealthTopicContent:
 *       type: object
 *       description: "A healthtopiccontent derived from schema.org/HealthTopicContent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebContent'
 *         - properties:
 *             hasHealthAspect:
 *               description: Indicates the aspect or aspects specifically addressed in some [[HealthTopicContent]]. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects.
 *               $ref: '#/components/schemas/healthaspectenumeration'
*/