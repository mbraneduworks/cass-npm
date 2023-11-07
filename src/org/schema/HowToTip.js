const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/HowToTip
 * An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).
 *
 * @author schema.org
 * @class HowToTip
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class HowToTip extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","HowToTip");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     HowToTip:
 *       type: object
 *       description: "A howtotip derived from schema.org/HowToTip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
*/