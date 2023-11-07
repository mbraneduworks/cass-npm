const schema = {};
schema.UserInteraction = require("./UserInteraction.js");
/**
 * Schema.org/UserBlocks
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *
 * @author schema.org
 * @class UserBlocks
 * @module org.schema
 * @extends UserInteraction
 */
module.exports = class UserBlocks extends schema.UserInteraction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UserBlocks");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     UserBlocks:
 *       type: object
 *       description: "A userblocks derived from schema.org/UserBlocks"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:UserInteraction'
*/