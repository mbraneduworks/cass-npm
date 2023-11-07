const schema = {};
schema.TransferAction = require("./TransferAction.js");
/**
 * Schema.org/DownloadAction
 * The act of downloading an object.
 *
 * @author schema.org
 * @class DownloadAction
 * @module org.schema
 * @extends TransferAction
 */
module.exports = class DownloadAction extends schema.TransferAction {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DownloadAction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DownloadAction:
 *       type: object
 *       description: "A downloadaction derived from schema.org/DownloadAction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TransferAction'
*/