const schema = {};
schema.ControlAction = require("./ControlAction.js");
/**
 * Schema.org/ActivateAction
 * The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
 *
 * @author schema.org
 * @class ActivateAction
 * @module org.schema
 * @extends ControlAction
 */
module.exports = class ActivateAction extends schema.ControlAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ActivateAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ActivateAction:
 *       type: object
 *       description: "A activateaction derived from schema.org/ActivateAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ControlAction'
*/