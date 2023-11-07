const schema = {};
schema.LocalBusiness = require("./LocalBusiness.js");
/**
 * Schema.org/ProfessionalService
 * Original definition: "provider of professional services."\n\nThe general [[ProfessionalService]] type for local businesses was deprecated due to confusion with [[Service]]. For reference, the types that it included were: [[Dentist]],
        [[AccountingService]], [[Attorney]], [[Notary]], as well as types for several kinds of [[HomeAndConstructionBusiness]]: [[Electrician]], [[GeneralContractor]],
        [[HousePainter]], [[Locksmith]], [[Plumber]], [[RoofingContractor]]. [[LegalService]] was introduced as a more inclusive supertype of [[Attorney]].
 *
 * @author schema.org
 * @class ProfessionalService
 * @module org.schema
 * @extends LocalBusiness
 */
module.exports = class ProfessionalService extends schema.LocalBusiness {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ProfessionalService");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ProfessionalService:
 *       type: object
 *       description: "A professionalservice derived from schema.org/ProfessionalService"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:LocalBusiness'
*/