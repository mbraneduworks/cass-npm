const schema = {};
schema.Action = require("./Action.js");
/**
 * Schema.org/TransferAction
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 *
 * @author schema.org
 * @class TransferAction
 * @module org.schema
 * @extends Action
 */
module.exports = class TransferAction extends schema.Action {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TransferAction");
	}

	/**
	 * Schema.org/fromLocation
	 * A sub property of location. The original location of the object or the agent before the action.
	 *
	 * @property fromLocation
	 * @type Place
	 */
	fromLocation;

	/**
	 * Schema.org/toLocation
	 * A sub property of location. The final location of the object or the agent after the action.
	 *
	 * @property toLocation
	 * @type Place
	 */
	toLocation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TransferAction:
 *       type: object
 *       description: "A transferaction derived from schema.org/TransferAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Action'
 *         - properties:
 *             fromLocation:
 *               description: A sub property of location. The original location of the object or the agent before the action.
 *               $ref: '#/components/schemas/place'
 *             toLocation:
 *               description: A sub property of location. The final location of the object or the agent after the action.
 *               $ref: '#/components/schemas/place'
*/