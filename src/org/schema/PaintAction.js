const schema = {};
schema.CreateAction = require("./CreateAction.js");
/**
 * Schema.org/PaintAction
 * The act of producing a painting, typically with paint and canvas as instruments.
 *
 * @author schema.org
 * @class PaintAction
 * @module org.schema
 * @extends CreateAction
 */
module.exports = class PaintAction extends schema.CreateAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PaintAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PaintAction:
 *       type: object
 *       description: "A paintaction derived from schema.org/PaintAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreateAction'
*/