const schema = {};
schema.HowToItem = require("./HowToItem.js");
/**
 * Schema.org/HowToTool
 * A tool used (but not consumed) when performing instructions for how to achieve a result.
 *
 * @author schema.org
 * @class HowToTool
 * @module org.schema
 * @extends HowToItem
 */
module.exports = class HowToTool extends schema.HowToItem {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToTool");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HowToTool:
 *       type: object
 *       description: "A howtotool derived from schema.org/HowToTool"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:HowToItem'
*/