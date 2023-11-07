const schema = {};
schema.UserInteraction = require("./UserInteraction.js");
/**
 * Schema.org/UserTweets
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserTweets
 * @module org.schema
 * @extends UserInteraction
 */
module.exports = class UserTweets extends schema.UserInteraction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserTweets");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     UserTweets:
 *       type: object
 *       description: "A usertweets derived from schema.org/UserTweets"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:UserInteraction'
*/