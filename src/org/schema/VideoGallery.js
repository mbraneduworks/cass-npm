const schema = {};
schema.MediaGallery = require("./MediaGallery.js");
/**
 * Schema.org/VideoGallery
 * Web page type: Video gallery page.
 *
 * @author schema.org
 * @class VideoGallery
 * @module org.schema
 * @extends MediaGallery
 */
module.exports = class VideoGallery extends schema.MediaGallery {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoGallery");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     VideoGallery:
 *       type: object
 *       description: "A videogallery derived from schema.org/VideoGallery"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MediaGallery'
*/