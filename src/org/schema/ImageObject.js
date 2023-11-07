const schema = {};
schema.MediaObject = require("./MediaObject.js");
/**
 * Schema.org/ImageObject
 * An image file.
 *
 * @author schema.org
 * @class ImageObject
 * @module org.schema
 * @extends MediaObject
 */
module.exports = class ImageObject extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ImageObject");
	}

	/**
	 * Schema.org/representativeOfPage
	 * Indicates whether this image is representative of the content of the page.
	 *
	 * @property representativeOfPage
	 * @type Boolean
	 */
	representativeOfPage;

	/**
	 * Schema.org/thumbnail
	 * Thumbnail image for an image or video.
	 *
	 * @property thumbnail
	 * @type ImageObject
	 */
	thumbnail;

	/**
	 * Schema.org/exifData
	 * exif data for this object.
	 *
	 * @property exifData
	 * @type Text
	 */
	exifData;

	/**
	 * Schema.org/caption
	 * The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
	 *
	 * @property caption
	 * @type MediaObject
	 */
	caption;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ImageObject:
 *       type: object
 *       description: "A imageobject derived from schema.org/ImageObject"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MediaObject'
 *         - properties:
 *             representativeOfPage:
 *               description: Indicates whether this image is representative of the content of the page.
 *               $ref: '#/components/schemas/boolean'
 *             thumbnail:
 *               description: Thumbnail image for an image or video.
 *               $ref: '#/components/schemas/imageobject'
 *             exifData:
 *               description: exif data for this object.
 *               type: string
 *             caption:
 *               description: The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
 *               $ref: '#/components/schemas/mediaobject'
*/