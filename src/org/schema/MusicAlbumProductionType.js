const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/MusicAlbumProductionType
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 *
 * @author schema.org
 * @class MusicAlbumProductionType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class MusicAlbumProductionType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicAlbumProductionType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicAlbumProductionType:
 *       type: object
 *       description: "A musicalbumproductiontype derived from schema.org/MusicAlbumProductionType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/