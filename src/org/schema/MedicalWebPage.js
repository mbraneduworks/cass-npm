const schema = {};
schema.WebPage = require("./WebPage.js");
/**
 * Schema.org/MedicalWebPage
 * A web page that provides medical information.
 *
 * @author schema.org
 * @class MedicalWebPage
 * @module org.schema
 * @extends WebPage
 */
module.exports = class MedicalWebPage extends schema.WebPage {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MedicalWebPage");
	}

	/**
	 * Schema.org/aspect
	 * An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.
	 *
	 * @property aspect
	 * @type Text
	 */
	aspect;

	/**
	 * Schema.org/medicalAudience
	 * Medical audience for page.
	 *
	 * @property medicalAudience
	 * @type MedicalAudienceType
	 */
	medicalAudience;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MedicalWebPage:
 *       type: object
 *       description: "A medicalwebpage derived from schema.org/MedicalWebPage"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:WebPage'
 *         - properties:
 *             aspect:
 *               description: An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.
 *               type: string
 *             medicalAudience:
 *               description: Medical audience for page.
 *               $ref: '#/components/schemas/medicalaudiencetype'
*/