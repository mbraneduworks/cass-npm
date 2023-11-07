const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/OfficeEquipmentStore
 * An office equipment store.
 *
 * @author schema.org
 * @class OfficeEquipmentStore
 * @module org.schema
 * @extends Store
 */
module.exports = class OfficeEquipmentStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","OfficeEquipmentStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     OfficeEquipmentStore:
 *       type: object
 *       description: "A officeequipmentstore derived from schema.org/OfficeEquipmentStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/