const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MusicAlbumReleaseType
 * The kind of release which this album is: single, EP or album.
 *
 * @author schema.org
 * @class MusicAlbumReleaseType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MusicAlbumReleaseType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicAlbumReleaseType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicAlbumReleaseType:
 *       type: object
 *       description: "A musicalbumreleasetype derived from schema.org/MusicAlbumReleaseType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/