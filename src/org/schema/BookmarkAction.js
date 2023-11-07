const schema = {};
schema.OrganizeAction = require("./OrganizeAction.js");
/**
 * Schema.org/BookmarkAction
 * An agent bookmarks/flags/labels/tags/marks an object.
 *
 * @author schema.org
 * @class BookmarkAction
 * @module org.schema
 * @extends OrganizeAction
 */
module.exports = class BookmarkAction extends schema.OrganizeAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BookmarkAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BookmarkAction:
 *       type: object
 *       description: "A bookmarkaction derived from schema.org/BookmarkAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:OrganizeAction'
*/