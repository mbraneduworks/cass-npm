const schema = {};
schema.UserInteraction = require("./UserInteraction.js");
/**
 * Schema.org/UserPageVisits
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserPageVisits
 * @module org.schema
 * @extends UserInteraction
 */
module.exports = class UserPageVisits extends schema.UserInteraction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserPageVisits");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     UserPageVisits:
 *       type: object
 *       description: "A userpagevisits derived from schema.org/UserPageVisits"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:UserInteraction'
*/