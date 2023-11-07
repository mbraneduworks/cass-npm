const schema = {};
schema.Permit = require("./Permit.js");
/**
 * Schema.org/GovernmentPermit
 * A permit issued by a government agency.
 *
 * @author schema.org
 * @class GovernmentPermit
 * @module org.schema
 * @extends Permit
 */
module.exports = class GovernmentPermit extends schema.Permit {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GovernmentPermit");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GovernmentPermit:
 *       type: object
 *       description: "A governmentpermit derived from schema.org/GovernmentPermit"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Permit'
*/