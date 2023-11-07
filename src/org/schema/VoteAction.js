const schema = {};
schema.ChooseAction = require("./ChooseAction.js");
/**
 * Schema.org/VoteAction
 * The act of expressing a preference from a fixed/finite/structured set of choices/options.
 *
 * @author schema.org
 * @class VoteAction
 * @module org.schema
 * @extends ChooseAction
 */
module.exports = class VoteAction extends schema.ChooseAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VoteAction");
	}

	/**
	 * Schema.org/candidate
	 * A sub property of object. The candidate subject of this action.
	 *
	 * @property candidate
	 * @type Person
	 */
	candidate;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     VoteAction:
 *       type: object
 *       description: "A voteaction derived from schema.org/VoteAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ChooseAction'
 *         - properties:
 *             candidate:
 *               description: A sub property of object. The candidate subject of this action.
 *               $ref: '#/components/schemas/person'
*/