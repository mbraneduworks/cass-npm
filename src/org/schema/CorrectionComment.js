const schema = {};
schema.Comment = require("./Comment.js");
/**
 * Schema.org/CorrectionComment
 * A [[comment]] that corrects [[CreativeWork]].
 *
 * @author schema.org
 * @class CorrectionComment
 * @module org.schema
 * @extends Comment
 */
module.exports = class CorrectionComment extends schema.Comment {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CorrectionComment");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CorrectionComment:
 *       type: object
 *       description: "A correctioncomment derived from schema.org/CorrectionComment"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Comment'
*/