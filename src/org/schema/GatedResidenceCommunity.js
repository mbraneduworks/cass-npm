const schema = {};
schema.Residence = require("./Residence.js");
/**
 * Schema.org/GatedResidenceCommunity
 * Residence type: Gated community.
 *
 * @author schema.org
 * @class GatedResidenceCommunity
 * @module org.schema
 * @extends Residence
 */
module.exports = class GatedResidenceCommunity extends schema.Residence {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GatedResidenceCommunity");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GatedResidenceCommunity:
 *       type: object
 *       description: "A gatedresidencecommunity derived from schema.org/GatedResidenceCommunity"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Residence'
*/