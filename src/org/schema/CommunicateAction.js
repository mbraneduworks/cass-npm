const schema = {};
schema.InteractAction = require("./InteractAction.js");
/**
 * Schema.org/CommunicateAction
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 *
 * @author schema.org
 * @class CommunicateAction
 * @module org.schema
 * @extends InteractAction
 */
module.exports = class CommunicateAction extends schema.InteractAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","CommunicateAction");
	}

	/**
	 * Schema.org/recipient
	 * A sub property of participant. The participant who is at the receiving end of the action.
	 *
	 * @property recipient
	 * @type Organization
	 */
	recipient;

	/**
	 * Schema.org/language
	 * A sub property of instrument. The language used on this action.
	 *
	 * @property language
	 * @type Language
	 */
	language;

	/**
	 * Schema.org/about
	 * The subject matter of the content.
	 *
	 * @property about
	 * @type Thing
	 */
	about;

	/**
	 * Schema.org/inLanguage
	 * The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
	 *
	 * @property inLanguage
	 * @type Language
	 */
	inLanguage;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     CommunicateAction:
 *       type: object
 *       description: "A communicateaction derived from schema.org/CommunicateAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:InteractAction'
 *         - properties:
 *             recipient:
 *               description: A sub property of participant. The participant who is at the receiving end of the action.
 *               $ref: '#/components/schemas/organization'
 *             language:
 *               description: A sub property of instrument. The language used on this action.
 *               $ref: '#/components/schemas/language'
 *             about:
 *               description: The subject matter of the content.
 *               $ref: '#/components/schemas/thing'
 *             inLanguage:
 *               description: The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 *               $ref: '#/components/schemas/language'
*/