const schema = {};
schema.CreateAction = require("./CreateAction.js");
/**
 * Schema.org/PhotographAction
 * The act of capturing still images of objects using a camera.
 *
 * @author schema.org
 * @class PhotographAction
 * @module org.schema
 * @extends CreateAction
 */
module.exports = class PhotographAction extends schema.CreateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PhotographAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PhotographAction:
 *       type: object
 *       description: "A photographaction derived from schema.org/PhotographAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreateAction'
*/