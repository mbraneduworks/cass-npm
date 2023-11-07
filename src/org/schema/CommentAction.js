const schema = {};
schema.CommunicateAction = require("./CommunicateAction.js");
/**
 * Schema.org/CommentAction
 * The act of generating a comment about a subject.
 *
 * @author schema.org
 * @class CommentAction
 * @module org.schema
 * @extends CommunicateAction
 */
module.exports = class CommentAction extends schema.CommunicateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CommentAction");
	}

	/**
	 * Schema.org/resultComment
	 * A sub property of result. The Comment created or sent as a result of this action.
	 *
	 * @property resultComment
	 * @type Comment
	 */
	resultComment;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CommentAction:
 *       type: object
 *       description: "A commentaction derived from schema.org/CommentAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CommunicateAction'
 *         - properties:
 *             resultComment:
 *               description: A sub property of result. The Comment created or sent as a result of this action.
 *               $ref: '#/components/schemas/comment'
*/