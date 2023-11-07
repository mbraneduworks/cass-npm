const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/ArchiveComponent
 * An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
 *
 * @author schema.org
 * @class ArchiveComponent
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class ArchiveComponent extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ArchiveComponent");
	}

	/**
	 * Schema.org/holdingArchive
	 * [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]].
	 *
	 * @property holdingArchive
	 * @type ArchiveOrganization
	 */
	holdingArchive;

	/**
	 * Schema.org/itemLocation
	 * Current location of the item.
	 *
	 * @property itemLocation
	 * @type PostalAddress
	 */
	itemLocation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ArchiveComponent:
 *       type: object
 *       description: "A archivecomponent derived from schema.org/ArchiveComponent"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             holdingArchive:
 *               description: [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]].
 *               $ref: '#/components/schemas/archiveorganization'
 *             itemLocation:
 *               description: Current location of the item.
 *               $ref: '#/components/schemas/postaladdress'
*/