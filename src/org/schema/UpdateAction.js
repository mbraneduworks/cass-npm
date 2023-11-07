const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/UpdateAction
 * The act of managing by changing/editing the state of the object.
 *
 * @author schema.org
 * @class UpdateAction
 * @module org.schema
 * @extends Action
 */
module.exports = class UpdateAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","UpdateAction");
	}

	/**
	 * Schema.org/collection
	 * A sub property of object. The collection target of the action.
	 *
	 * @property collection
	 * @type Thing
	 */
	collection;

	/**
	 * Schema.org/targetCollection
	 * A sub property of object. The collection target of the action.
	 *
	 * @property targetCollection
	 * @type Thing
	 */
	targetCollection;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     UpdateAction:
 *       type: object
 *       description: "A updateaction derived from schema.org/UpdateAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Action'
 *         - properties:
 *             collection:
 *               description: A sub property of object. The collection target of the action.
 *               $ref: '#/components/schemas/thing'
 *             targetCollection:
 *               description: A sub property of object. The collection target of the action.
 *               $ref: '#/components/schemas/thing'
*/