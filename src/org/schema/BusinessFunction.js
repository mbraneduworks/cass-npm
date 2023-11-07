const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/BusinessFunction
 * The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ConstructionInstallation\n* http://purl.org/goodrelations/v1#Dispose\n* http://purl.org/goodrelations/v1#LeaseOut\n* http://purl.org/goodrelations/v1#Maintain\n* http://purl.org/goodrelations/v1#ProvideService\n* http://purl.org/goodrelations/v1#Repair\n* http://purl.org/goodrelations/v1#Sell\n* http://purl.org/goodrelations/v1#Buy
        
 *
 * @author schema.org
 * @class BusinessFunction
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class BusinessFunction extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","BusinessFunction");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     BusinessFunction:
 *       type: object
 *       description: "A businessfunction derived from schema.org/BusinessFunction"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/