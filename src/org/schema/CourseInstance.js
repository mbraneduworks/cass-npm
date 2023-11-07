const schema = {};
schema.Event = require("./Event.js");
/**
 * Schema.org/CourseInstance
 * An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 *
 * @author schema.org
 * @class CourseInstance
 * @module org.schema
 * @extends Event
 */
module.exports = class CourseInstance extends schema.Event {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CourseInstance");
	}

	/**
	 * Schema.org/courseMode
	 * The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
	 *
	 * @property courseMode
	 * @type URL
	 */
	courseMode;

	/**
	 * Schema.org/courseWorkload
	 * The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week".
	 *
	 * @property courseWorkload
	 * @type Text
	 */
	courseWorkload;

	/**
	 * Schema.org/instructor
	 * A person assigned to instruct or provide instructional assistance for the [[CourseInstance]].
	 *
	 * @property instructor
	 * @type Person
	 */
	instructor;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CourseInstance:
 *       type: object
 *       description: "A courseinstance derived from schema.org/CourseInstance"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Event'
 *         - properties:
 *             courseMode:
 *               description: The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
 *               type: string
 *             courseWorkload:
 *               description: The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week".
 *               type: string
 *             instructor:
 *               description: A person assigned to instruct or provide instructional assistance for the [[CourseInstance]].
 *               $ref: '#/components/schemas/person'
*/