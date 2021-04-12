/**
 * Schema.org/MusicAlbumProductionType
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 *
 * @author schema.org
 * @class MusicAlbumProductionType
 * @module org.schema
 */
public class MusicAlbumProductionType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MusicAlbumProductionType";
	}

}