const schema = {};
schema.UserInteraction = require("./UserInteraction.js");
/**
 * Schema.org/UserDownloads
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserDownloads
 * @module org.schema
 * @extends UserInteraction
 */
module.exports = class UserDownloads extends schema.UserInteraction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserDownloads");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     UserDownloads:
 *       type: object
 *       description: "A userdownloads derived from schema.org/UserDownloads"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:UserInteraction'
*/