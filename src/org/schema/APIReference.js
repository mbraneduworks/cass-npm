const schema = {};
schema.TechArticle = require("./TechArticle.js");
/**
 * Schema.org/APIReference
 * Reference documentation for application programming interfaces (APIs).
 *
 * @author schema.org
 * @class APIReference
 * @module org.schema
 * @extends TechArticle
 */
module.exports = class APIReference extends schema.TechArticle {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","APIReference");
	}

	/**
	 * Schema.org/programmingModel
	 * Indicates whether API is managed or unmanaged.
	 *
	 * @property programmingModel
	 * @type Text
	 */
	programmingModel;

	/**
	 * Schema.org/targetPlatform
	 * Type of app development: phone, Metro style, desktop, XBox, etc.
	 *
	 * @property targetPlatform
	 * @type Text
	 */
	targetPlatform;

	/**
	 * Schema.org/assembly
	 * Library file name e.g., mscorlib.dll, system.web.dll.
	 *
	 * @property assembly
	 * @type Text
	 */
	assembly;

	/**
	 * Schema.org/executableLibraryName
	 * Library file name e.g., mscorlib.dll, system.web.dll.
	 *
	 * @property executableLibraryName
	 * @type Text
	 */
	executableLibraryName;

	/**
	 * Schema.org/assemblyVersion
	 * Associated product/technology version. e.g., .NET Framework 4.5.
	 *
	 * @property assemblyVersion
	 * @type Text
	 */
	assemblyVersion;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     APIReference:
 *       type: object
 *       description: "A apireference derived from schema.org/APIReference"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:TechArticle'
 *         - properties:
 *             programmingModel:
 *               description: Indicates whether API is managed or unmanaged.
 *               type: string
 *             targetPlatform:
 *               description: Type of app development: phone, Metro style, desktop, XBox, etc.
 *               type: string
 *             assembly:
 *               description: Library file name e.g., mscorlib.dll, system.web.dll.
 *               type: string
 *             executableLibraryName:
 *               description: Library file name e.g., mscorlib.dll, system.web.dll.
 *               type: string
 *             assemblyVersion:
 *               description: Associated product/technology version. e.g., .NET Framework 4.5.
 *               type: string
*/