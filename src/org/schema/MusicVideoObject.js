const schema = {};
schema.MediaObject = require("./MediaObject.js");
/**
 * Schema.org/MusicVideoObject
 * A music video file.
 *
 * @author schema.org
 * @class MusicVideoObject
 * @module org.schema
 * @extends MediaObject
 */
module.exports = class MusicVideoObject extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicVideoObject");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicVideoObject:
 *       type: object
 *       description: "A musicvideoobject derived from schema.org/MusicVideoObject"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MediaObject'
*/