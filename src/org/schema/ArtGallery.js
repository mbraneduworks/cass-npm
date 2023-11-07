const schema = {};
schema.EntertainmentBusiness = require("./EntertainmentBusiness.js");
/**
 * Schema.org/ArtGallery
 * An art gallery.
 *
 * @author schema.org
 * @class ArtGallery
 * @module org.schema
 * @extends EntertainmentBusiness
 */
module.exports = class ArtGallery extends schema.EntertainmentBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ArtGallery");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ArtGallery:
 *       type: object
 *       description: "A artgallery derived from schema.org/ArtGallery"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:EntertainmentBusiness'
*/