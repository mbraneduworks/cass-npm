const schema = {};
schema.Enumeration = require("./Enumeration.js");
/**
 * Schema.org/DayOfWeek
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.

Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.
      
 *
 * @author schema.org
 * @class DayOfWeek
 * @module org.schema
 * @extends Enumeration
 */
module.exports = class DayOfWeek extends schema.Enumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DayOfWeek");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DayOfWeek:
 *       type: object
 *       description: "A dayofweek derived from schema.org/DayOfWeek"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Enumeration'
*/