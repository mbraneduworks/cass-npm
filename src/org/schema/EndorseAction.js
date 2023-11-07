const schema = {};
schema.ReactAction = require("./ReactAction.js");
/**
 * Schema.org/EndorseAction
 * An agent approves/certifies/likes/supports/sanction an object.
 *
 * @author schema.org
 * @class EndorseAction
 * @module org.schema
 * @extends ReactAction
 */
module.exports = class EndorseAction extends schema.ReactAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","EndorseAction");
	}

	/**
	 * Schema.org/endorsee
	 * A sub property of participant. The person/organization being supported.
	 *
	 * @property endorsee
	 * @type Organization
	 */
	endorsee;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     EndorseAction:
 *       type: object
 *       description: "A endorseaction derived from schema.org/EndorseAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ReactAction'
 *         - properties:
 *             endorsee:
 *               description: A sub property of participant. The person/organization being supported.
 *               $ref: '#/components/schemas/organization'
*/