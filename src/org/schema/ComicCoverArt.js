const schema = {};
schema.ComicStory = require("./ComicStory.js");
/**
 * Schema.org/ComicCoverArt
 * The artwork on the cover of a comic.
 *
 * @author schema.org
 * @class ComicCoverArt
 * @module org.schema
 * @extends ComicStory
 */
module.exports = class ComicCoverArt extends schema.ComicStory {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ComicCoverArt");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ComicCoverArt:
 *       type: object
 *       description: "A comiccoverart derived from schema.org/ComicCoverArt"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:ComicStory'
*/