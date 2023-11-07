const schema = {};
schema.SocialMediaPosting = require("./SocialMediaPosting.js");
/**
 * Schema.org/DiscussionForumPosting
 * A posting to a discussion forum.
 *
 * @author schema.org
 * @class DiscussionForumPosting
 * @module org.schema
 * @extends SocialMediaPosting
 */
module.exports = class DiscussionForumPosting extends schema.SocialMediaPosting {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DiscussionForumPosting");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DiscussionForumPosting:
 *       type: object
 *       description: "A discussionforumposting derived from schema.org/DiscussionForumPosting"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:SocialMediaPosting'
*/