/**
 * Schema.org/PublicToilet
 * A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses.
 *
 * @author schema.org
 * @class PublicToilet
 * @module org.schema
 */
module.exports = class PublicToilet extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "PublicToilet");
	}
};
