const schema = {};
schema.MediaGallery = require("./MediaGallery.js");
/**
 * Schema.org/ImageGallery
 * Web page type: Image gallery page.
 *
 * @author schema.org
 * @class ImageGallery
 * @module org.schema
 * @extends MediaGallery
 */
module.exports = class ImageGallery extends schema.MediaGallery {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ImageGallery");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ImageGallery:
 *       type: object
 *       description: "A imagegallery derived from schema.org/ImageGallery"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MediaGallery'
*/