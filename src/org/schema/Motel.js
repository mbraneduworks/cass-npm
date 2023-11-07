const schema = {};
schema.LodgingBusiness = require("./LodgingBusiness.js");
/**
 * Schema.org/Motel
 * A motel.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class Motel
 * @module org.schema
 * @extends LodgingBusiness
 */
module.exports = class Motel extends schema.LodgingBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Motel");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Motel:
 *       type: object
 *       description: "A motel derived from schema.org/Motel"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LodgingBusiness'
*/