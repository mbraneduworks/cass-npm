const schema = {};
schema.UserInteraction = require("./UserInteraction.js");
/**
 * Schema.org/UserComments
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserComments
 * @module org.schema
 * @extends UserInteraction
 */
module.exports = class UserComments extends schema.UserInteraction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserComments");
	}

	/**
	 * Schema.org/creator
	 * The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
	 *
	 * @property creator
	 * @type Organization
	 */
	creator;

	/**
	 * Schema.org/discusses
	 * Specifies the CreativeWork associated with the UserComment.
	 *
	 * @property discusses
	 * @type CreativeWork
	 */
	discusses;

	/**
	 * Schema.org/replyToUrl
	 * The URL at which a reply may be posted to the specified UserComment.
	 *
	 * @property replyToUrl
	 * @type URL
	 */
	replyToUrl;

	/**
	 * Schema.org/commentTime
	 * The time at which the UserComment was made.
	 *
	 * @property commentTime
	 * @type Date
	 */
	commentTime;

	/**
	 * Schema.org/commentText
	 * The text of the UserComment.
	 *
	 * @property commentText
	 * @type Text
	 */
	commentText;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     UserComments:
 *       type: object
 *       description: "A usercomments derived from schema.org/UserComments"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:UserInteraction'
 *         - properties:
 *             creator:
 *               description: The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
 *               $ref: '#/components/schemas/organization'
 *             discusses:
 *               description: Specifies the CreativeWork associated with the UserComment.
 *               $ref: '#/components/schemas/creativework'
 *             replyToUrl:
 *               description: The URL at which a reply may be posted to the specified UserComment.
 *               type: string
 *             commentTime:
 *               description: The time at which the UserComment was made.
 *               type: string
 *             commentText:
 *               description: The text of the UserComment.
 *               type: string
*/