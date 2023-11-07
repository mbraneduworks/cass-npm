const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/SoftwareApplication
 * A software application.
 *
 * @author schema.org
 * @class SoftwareApplication
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class SoftwareApplication extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","SoftwareApplication");
	}

	/**
	 * Schema.org/applicationSubCategory
	 * Subcategory of the application, e.g. 'Arcade Game'.
	 *
	 * @property applicationSubCategory
	 * @type Text
	 */
	applicationSubCategory;

	/**
	 * Schema.org/screenshot
	 * A link to a screenshot image of the app.
	 *
	 * @property screenshot
	 * @type ImageObject
	 */
	screenshot;

	/**
	 * Schema.org/availableOnDevice
	 * Device required to run the application. Used in cases where a specific make/model is required to run the application.
	 *
	 * @property availableOnDevice
	 * @type Text
	 */
	availableOnDevice;

	/**
	 * Schema.org/storageRequirements
	 * Storage requirements (free space required).
	 *
	 * @property storageRequirements
	 * @type URL
	 */
	storageRequirements;

	/**
	 * Schema.org/applicationCategory
	 * Type of software application, e.g. 'Game, Multimedia'.
	 *
	 * @property applicationCategory
	 * @type Text
	 */
	applicationCategory;

	/**
	 * Schema.org/softwareHelp
	 * Software application help.
	 *
	 * @property softwareHelp
	 * @type CreativeWork
	 */
	softwareHelp;

	/**
	 * Schema.org/fileSize
	 * Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
	 *
	 * @property fileSize
	 * @type Text
	 */
	fileSize;

	/**
	 * Schema.org/downloadUrl
	 * If the file can be downloaded, URL to download the binary.
	 *
	 * @property downloadUrl
	 * @type URL
	 */
	downloadUrl;

	/**
	 * Schema.org/featureList
	 * Features or modules provided by this application (and possibly required by other applications).
	 *
	 * @property featureList
	 * @type URL
	 */
	featureList;

	/**
	 * Schema.org/device
	 * Device required to run the application. Used in cases where a specific make/model is required to run the application.
	 *
	 * @property device
	 * @type Text
	 */
	device;

	/**
	 * Schema.org/operatingSystem
	 * Operating systems supported (Windows 7, OSX 10.6, Android 1.6).
	 *
	 * @property operatingSystem
	 * @type Text
	 */
	operatingSystem;

	/**
	 * Schema.org/requirements
	 * Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
	 *
	 * @property requirements
	 * @type URL
	 */
	requirements;

	/**
	 * Schema.org/installUrl
	 * URL at which the app may be installed, if different from the URL of the item.
	 *
	 * @property installUrl
	 * @type URL
	 */
	installUrl;

	/**
	 * Schema.org/processorRequirements
	 * Processor architecture required to run the application (e.g. IA64).
	 *
	 * @property processorRequirements
	 * @type Text
	 */
	processorRequirements;

	/**
	 * Schema.org/countriesNotSupported
	 * Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
	 *
	 * @property countriesNotSupported
	 * @type Text
	 */
	countriesNotSupported;

	/**
	 * Schema.org/softwareVersion
	 * Version of the software instance.
	 *
	 * @property softwareVersion
	 * @type Text
	 */
	softwareVersion;

	/**
	 * Schema.org/releaseNotes
	 * Description of what changed in this version.
	 *
	 * @property releaseNotes
	 * @type URL
	 */
	releaseNotes;

	/**
	 * Schema.org/applicationSuite
	 * The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
	 *
	 * @property applicationSuite
	 * @type Text
	 */
	applicationSuite;

	/**
	 * Schema.org/supportingData
	 * Supporting data for a SoftwareApplication.
	 *
	 * @property supportingData
	 * @type DataFeed
	 */
	supportingData;

	/**
	 * Schema.org/softwareRequirements
	 * Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
	 *
	 * @property softwareRequirements
	 * @type Text
	 */
	softwareRequirements;

	/**
	 * Schema.org/softwareAddOn
	 * Additional content for a software application.
	 *
	 * @property softwareAddOn
	 * @type SoftwareApplication
	 */
	softwareAddOn;

	/**
	 * Schema.org/permissions
	 * Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
	 *
	 * @property permissions
	 * @type Text
	 */
	permissions;

	/**
	 * Schema.org/countriesSupported
	 * Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
	 *
	 * @property countriesSupported
	 * @type Text
	 */
	countriesSupported;

	/**
	 * Schema.org/memoryRequirements
	 * Minimum memory requirements.
	 *
	 * @property memoryRequirements
	 * @type URL
	 */
	memoryRequirements;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     SoftwareApplication:
 *       type: object
 *       description: "A softwareapplication derived from schema.org/SoftwareApplication"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             applicationSubCategory:
 *               description: Subcategory of the application, e.g. 'Arcade Game'.
 *               type: string
 *             screenshot:
 *               description: A link to a screenshot image of the app.
 *               $ref: '#/components/schemas/imageobject'
 *             availableOnDevice:
 *               description: Device required to run the application. Used in cases where a specific make/model is required to run the application.
 *               type: string
 *             storageRequirements:
 *               description: Storage requirements (free space required).
 *               type: string
 *             applicationCategory:
 *               description: Type of software application, e.g. 'Game, Multimedia'.
 *               type: string
 *             softwareHelp:
 *               description: Software application help.
 *               $ref: '#/components/schemas/creativework'
 *             fileSize:
 *               description: Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
 *               type: string
 *             downloadUrl:
 *               description: If the file can be downloaded, URL to download the binary.
 *               type: string
 *             featureList:
 *               description: Features or modules provided by this application (and possibly required by other applications).
 *               type: string
 *             device:
 *               description: Device required to run the application. Used in cases where a specific make/model is required to run the application.
 *               type: string
 *             operatingSystem:
 *               description: Operating systems supported (Windows 7, OSX 10.6, Android 1.6).
 *               type: string
 *             requirements:
 *               description: Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
 *               type: string
 *             installUrl:
 *               description: URL at which the app may be installed, if different from the URL of the item.
 *               type: string
 *             processorRequirements:
 *               description: Processor architecture required to run the application (e.g. IA64).
 *               type: string
 *             countriesNotSupported:
 *               description: Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
 *               type: string
 *             softwareVersion:
 *               description: Version of the software instance.
 *               type: string
 *             releaseNotes:
 *               description: Description of what changed in this version.
 *               type: string
 *             applicationSuite:
 *               description: The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
 *               type: string
 *             supportingData:
 *               description: Supporting data for a SoftwareApplication.
 *               $ref: '#/components/schemas/datafeed'
 *             softwareRequirements:
 *               description: Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
 *               type: string
 *             softwareAddOn:
 *               description: Additional content for a software application.
 *               $ref: '#/components/schemas/softwareapplication'
 *             permissions:
 *               description: Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
 *               type: string
 *             countriesSupported:
 *               description: Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
 *               type: string
 *             memoryRequirements:
 *               description: Minimum memory requirements.
 *               type: string
*/