const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/EducationEvent
 * Event type: Education event.
 *
 * @author schema.org
 * @class EducationEvent
 * @module org.schema
 * @extends Event
 */
module.exports = class EducationEvent extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EducationEvent");
	}

	/**
	 * Schema.org/educationalLevel
	 * The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
	 *
	 * @property educationalLevel
	 * @type Text
	 */
	educationalLevel;

	/**
	 * Schema.org/teaches
	 * The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
	 *
	 * @property teaches
	 * @type Text
	 */
	teaches;

	/**
	 * Schema.org/assesses
	 * The item being described is intended to assess the competency or learning outcome defined by the referenced term.
	 *
	 * @property assesses
	 * @type Text
	 */
	assesses;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EducationEvent:
 *       type: object
 *       description: "A educationevent derived from schema.org/EducationEvent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
 *         - properties:
 *             educationalLevel:
 *               description: The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
 *               type: string
 *             teaches:
 *               description: The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
 *               type: string
 *             assesses:
 *               description: The item being described is intended to assess the competency or learning outcome defined by the referenced term.
 *               type: string
*/