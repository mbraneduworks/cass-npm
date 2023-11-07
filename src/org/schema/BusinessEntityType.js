const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/BusinessEntityType
 * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Business\n* http://purl.org/goodrelations/v1#Enduser\n* http://purl.org/goodrelations/v1#PublicInstitution\n* http://purl.org/goodrelations/v1#Reseller
	  
 *
 * @author schema.org
 * @class BusinessEntityType
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class BusinessEntityType extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusinessEntityType");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusinessEntityType:
 *       type: object
 *       description: "A businessentitytype derived from schema.org/BusinessEntityType"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/