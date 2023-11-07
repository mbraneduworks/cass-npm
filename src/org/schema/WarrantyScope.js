const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/WarrantyScope
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
      
 *
 * @author schema.org
 * @class WarrantyScope
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class WarrantyScope extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WarrantyScope");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WarrantyScope:
 *       type: object
 *       description: "A warrantyscope derived from schema.org/WarrantyScope"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/