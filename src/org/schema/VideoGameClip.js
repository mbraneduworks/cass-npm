const schema = {};
schema.Clip = require("./Clip.js");
/**
 * Schema.org/VideoGameClip
 * A short segment/part of a video game.
 *
 * @author schema.org
 * @class VideoGameClip
 * @module org.schema
 * @extends Clip
 */
module.exports = class VideoGameClip extends schema.Clip {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoGameClip");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     VideoGameClip:
 *       type: object
 *       description: "A videogameclip derived from schema.org/VideoGameClip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Clip'
*/