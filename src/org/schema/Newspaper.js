const schema = {};
schema.Periodical = require("./Periodical.js");
/**
 * Schema.org/Newspaper
 * A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily.
 *
 * @author schema.org
 * @class Newspaper
 * @module org.schema
 * @extends Periodical
 */
module.exports = class Newspaper extends schema.Periodical {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Newspaper");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Newspaper:
 *       type: object
 *       description: "A newspaper derived from schema.org/Newspaper"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Periodical'
*/