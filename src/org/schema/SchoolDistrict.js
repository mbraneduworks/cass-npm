const schema = {};
schema.AdministrativeArea = require("./AdministrativeArea.js");
/**
 * Schema.org/SchoolDistrict
 * A School District is an administrative area for the administration of schools.
 *
 * @author schema.org
 * @class SchoolDistrict
 * @module org.schema
 * @extends AdministrativeArea
 */
module.exports = class SchoolDistrict extends schema.AdministrativeArea {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SchoolDistrict");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SchoolDistrict:
 *       type: object
 *       description: "A schooldistrict derived from schema.org/SchoolDistrict"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:AdministrativeArea'
*/