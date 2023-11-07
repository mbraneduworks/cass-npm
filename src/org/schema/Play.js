const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Play
 * A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note the peformance of a Play would be a [[TheaterEvent]] - the *Play* being the [[workPerformed]].
 *
 * @author schema.org
 * @class Play
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Play extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Play");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Play:
 *       type: object
 *       description: "A play derived from schema.org/Play"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
*/