const schema = {};
schema.MeasurementTypeEnumeration = require("./MeasurementTypeEnumeration.js");
/**
 * Schema.org/WearableMeasurementTypeEnumeration
 * Enumerates common types of measurement for wearables products.
 *
 * @author schema.org
 * @class WearableMeasurementTypeEnumeration
 * @module org.schema
 * @extends MeasurementTypeEnumeration
 */
module.exports = class WearableMeasurementTypeEnumeration extends schema.MeasurementTypeEnumeration {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","WearableMeasurementTypeEnumeration");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     WearableMeasurementTypeEnumeration:
 *       type: object
 *       description: "A wearablemeasurementtypeenumeration derived from schema.org/WearableMeasurementTypeEnumeration"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:MeasurementTypeEnumeration'
*/