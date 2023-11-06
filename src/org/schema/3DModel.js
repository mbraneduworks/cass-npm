const schema = {};
schema.MediaObject = require("./MediaObject.js");
/**
 * Schema.org/3DModel
 * A 3D model represents some kind of 3D content, which may have [[encoding]]s in one or more [[MediaObject]]s. Many 3D formats are available (e.g. see [Wikipedia](https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats)); specific encoding formats can be represented using the [[encodingFormat]] property applied to the relevant [[MediaObject]]. For the
case of a single file published after Zip compression, the convention of appending '+zip' to the [[encodingFormat]] can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using [[3DModel]].
 *
 * @author schema.org
 * @class 3DModel
 * @module org.schema
 * @extends MediaObject
 */
module.exports = class 3DModel extends schema.MediaObject {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","3DModel");
	}

	/**
	 * Schema.org/isResizable
	 * Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality.
	 *
	 * @property isResizable
	 * @type Boolean
	 */
	isResizable;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     3DModel:
 *       type: object
 *       description: "A 3dmodel derived from schema.org/3DModel"
 *       properties:
 *         CollegeOrUniversity:
 *           description: A college, university, or other third-level educational institution.
 *           $ref: '#/components/schemas/'
 *         Virus:
 *           description: Pathogenic virus that causes viral infection.
 *           $ref: '#/components/schemas/'
 *         hasMenuItem:
 *           description: A food or drink item contained in a menu or menu section.
 *           $ref: '#/components/schemas/menuitem'
 *         AutomatedTeller:
 *           description: ATM/cash machine.
 *           $ref: '#/components/schemas/'
 *         follows:
 *           description: The most generic uni-directional social relation.
 *           $ref: '#/components/schemas/person'
 *         vehicleModelDate:
 *           description: The release date of a vehicle model (often used to differentiate versions of the same make and model).
 *           type: string
 *         workFeatured:
 *           description: A work featured in some event, e.g. exhibited in an ExhibitionEvent. Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
 *           $ref: '#/components/schemas/creativework'
 *         Patient:
 *           description: A patient is any person recipient of health care services.
 *           $ref: '#/components/schemas/'
 *         ExerciseAction:
 *           description: The act of participating in exertive activity for the purposes of improving health and fitness.
 *           $ref: '#/components/schemas/'
 *         ListenAction:
 *           description: The act of consuming audio content.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c8:
 *           description: Nonprofit501c8: Non-profit type referring to Fraternal Beneficiary Societies and Associations.
 *           $ref: '#/components/schemas/'
 *         Joint:
 *           description: The anatomical location at which two or more bones make contact.
 *           $ref: '#/components/schemas/'
 *         EmploymentAgency:
 *           description: An employment agency.
 *           $ref: '#/components/schemas/'
 *         sameAs:
 *           description: URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
 *           type: string
 *         AuthoritativeLegalValue:
 *           description: Indicates that the publisher gives some special status to the publication of the document. ("The Queens Printer" version of a UK Act of Parliament, or the PDF version of a Directive published by the EU Office of Publications). Something "Authoritative" is considered to be also [[OfficialLegalValue]]".
 *           $ref: '#/components/schemas/'
 *         LiveBlogPosting:
 *           description: A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 *           $ref: '#/components/schemas/'
 *         SeeDoctorHealthAspect:
 *           description: Information about questions that may be asked, when to see a professional, measures before seeing a doctor or content about the first consultation.
 *           $ref: '#/components/schemas/'
 *         applicationContact:
 *           description: Contact details for further information relevant to this job posting.
 *           $ref: '#/components/schemas/contactpoint'
 *         SaleEvent:
 *           description: Event type: Sales event.
 *           $ref: '#/components/schemas/'
 *         availableDeliveryMethod:
 *           description: The delivery method(s) available for this offer.
 *           $ref: '#/components/schemas/deliverymethod'
 *         Event:
 *           description: An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the [[offers]] property. Repeated events may be structured as separate Event objects.
 *           $ref: '#/components/schemas/'
 *         authenticator:
 *           description: The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.
 *           $ref: '#/components/schemas/organization'
 *         SpokenWordAlbum:
 *           description: SpokenWordAlbum.
 *           $ref: '#/components/schemas/'
 *         ConfirmAction:
 *           description: The act of notifying someone that a future event/action is going to happen as expected.\n\nRelated actions:\n\n* [[CancelAction]]: The antonym of ConfirmAction.
 *           $ref: '#/components/schemas/'
 *         isGift:
 *           description: Was the offer accepted as a gift for someone other than the buyer.
 *           $ref: '#/components/schemas/boolean'
 *         DrinkAction:
 *           description: The act of swallowing liquids.
 *           $ref: '#/components/schemas/'
 *         grantee:
 *           description: The person, organization, contact point, or audience that has been granted this permission.
 *           $ref: '#/components/schemas/organization'
 *         serverStatus:
 *           description: Status of a game server.
 *           $ref: '#/components/schemas/gameserverstatus'
 *         WholesaleStore:
 *           description: A wholesale store.
 *           $ref: '#/components/schemas/'
 *         hasMeasurement:
 *           description: A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Barcode:
 *           description: An image of a visual machine-readable code such as a barcode or QR code.
 *           $ref: '#/components/schemas/'
 *         numberOfBedrooms:
 *           description: The total integer number of bedrooms in a some [[Accommodation]], [[ApartmentComplex]] or [[FloorPlan]].
 *           type: number
 *         Synagogue:
 *           description: A synagogue.
 *           $ref: '#/components/schemas/'
 *         payload:
 *           description: The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of [[weight]] and [[payload]]\n* Note 2: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 3: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 4: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         referenceQuantity:
 *           description: The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         cookingMethod:
 *           description: The method of cooking, such as Frying, Steaming, ...
 *           type: string
 *         Protozoa:
 *           description: Single-celled organism that causes an infection.
 *           $ref: '#/components/schemas/'
 *         PaymentMethod:
 *           description: A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ByBankTransferInAdvance\n* http://purl.org/goodrelations/v1#ByInvoice\n* http://purl.org/goodrelations/v1#Cash\n* http://purl.org/goodrelations/v1#CheckInAdvance\n* http://purl.org/goodrelations/v1#COD\n* http://purl.org/goodrelations/v1#DirectDebit\n* http://purl.org/goodrelations/v1#GoogleCheckout\n* http://purl.org/goodrelations/v1#PayPal\n* http://purl.org/goodrelations/v1#PaySwarm 
 *           $ref: '#/components/schemas/'
 *         Festival:
 *           description: Event type: Festival.
 *           $ref: '#/components/schemas/'
 *         broadcastFrequency:
 *           description: The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".
 *           type: string
 *         mechanismOfAction:
 *           description: The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
 *           type: string
 *         BodyMeasurementHead:
 *           description: Maximum girth of head above the ears. Used, for example, to fit hats.
 *           $ref: '#/components/schemas/'
 *         NutritionInformation:
 *           description: Nutritional information about the recipe.
 *           $ref: '#/components/schemas/'
 *         polygon:
 *           description: A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.
 *           type: string
 *         MusicEvent:
 *           description: Event type: Music event.
 *           $ref: '#/components/schemas/'
 *         pregnancyCategory:
 *           description: Pregnancy category of this drug.
 *           $ref: '#/components/schemas/drugpregnancycategory'
 *         APIReference:
 *           description: Reference documentation for application programming interfaces (APIs).
 *           $ref: '#/components/schemas/'
 *         StructuredValue:
 *           description: Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 *           $ref: '#/components/schemas/'
 *         Aquarium:
 *           description: Aquarium.
 *           $ref: '#/components/schemas/'
 *         SpecialAnnouncement:
 *           description: A SpecialAnnouncement combines a simple date-stamped textual information update with contextualized Web links and other structured data. It represents an information update made by a locally-oriented organization, for example schools, pharmacies, healthcare providers, community groups, police, local government.For work in progress guidelines on Coronavirus-related markup see [this doc](https://docs.google.com/document/d/14ikaGCKxo50rRM7nvKSlbUpjyIk2WMQd3IkB1lItlrM/edit#).The motivating scenario for SpecialAnnouncement is the [Coronavirus pandemic](https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic), and the initial vocabulary is oriented to this urgent situation. Schema.orgexpect to improve the markup iteratively as it is deployed and as feedback emerges from use. In addition to ourusual [Github entry](https://github.com/schemaorg/schemaorg/issues/2490), feedback comments can also be provided in [this document](https://docs.google.com/document/d/1fpdFFxk8s87CWwACs53SGkYv3aafSxz_DTtOQxMrBJQ/edit#).While this schema is designed to communicate urgent crisis-related information, it is not the same as an emergency warning technology like [CAP](https://en.wikipedia.org/wiki/Common_Alerting_Protocol), although there may be overlaps. The intent is to coverthe kinds of everyday practical information being posted to existing websites during an emergency situation.Several kinds of information can be provided:We encourage the provision of "name", "text", "datePosted", "expires" (if appropriate), "category" and"url" as a simple baseline. It is important to provide a value for "category" where possible, most ideally as a well knownURL from Wikipedia or Wikidata. In the case of the 2019-2020 Coronavirus pandemic, this should be "https://en.wikipedia.org/w/index.php?title=2019-20\_coronavirus\_pandemic" or "https://www.wikidata.org/wiki/Q81068910".For many of the possible properties, values can either be simple links or an inline description, depending on whether a summary is available. For a link, provide just the URL of the appropriate page as the property's value. For an inline description, use a [[WebContent]] type, and provide the url as a property of that, alongside at least a simple "[[text]]" summary of the page. It isunlikely that a single SpecialAnnouncement will need all of the possible properties simultaneously.We expect that in many cases the page referenced might contain more specialized structured data, e.g. contact info, [[openingHours]], [[Event]], [[FAQPage]] etc. By linking to those pages from a [[SpecialAnnouncement]] you can help make it clearer that the events are related to the situation (e.g. Coronavirus) indicated by the [[category]] property of the [[SpecialAnnouncement]].Many [[SpecialAnnouncement]]s will relate to particular regions and to identifiable local organizations. Use [[spatialCoverage]] for the region, and [[announcementLocation]] to indicate specific [[LocalBusiness]]es and [[CivicStructure]]s. If the announcement affects both a particular region and a specific location (for example, a library closure that serves an entire region), use both [[spatialCoverage]] and [[announcementLocation]].The [[about]] property can be used to indicate entities that are the focus of the announcement. We now recommend using [[about]] onlyfor representing non-location entities (e.g. a [[Course]] or a [[RadioStation]]). For places, use [[announcementLocation]] and [[spatialCoverage]]. Consumers of this markup should be aware that the initial design encouraged the use of /about for locations too.The basic content of [[SpecialAnnouncement]] is similar to that of an [RSS](https://en.wikipedia.org/wiki/RSS) or [Atom](https://en.wikipedia.org/wiki/Atom_(Web_standard)) feed. For publishers without such feeds, basic feed-like information can be shared by posting[[SpecialAnnouncement]] updates in a page, e.g. using JSON-LD. For sites with Atom/RSS functionality, you can point to a feedwith the [[webFeed]] property. This can be a simple URL, or an inline [[DataFeed]] object, with [[encodingFormat]] providingmedia type information e.g. "application/rss+xml" or "application/atom+xml".
 *           $ref: '#/components/schemas/'
 *         WearableMeasurementSleeve:
 *           description: Measurement of the sleeve length, for example of a shirt
 *           $ref: '#/components/schemas/'
 *         ScreeningHealthAspect:
 *           description: Content about how to screen or further filter a topic.
 *           $ref: '#/components/schemas/'
 *         numConstraints:
 *           description: Indicates the number of constraints (not counting [[populationType]]) defined for a particular [[StatisticalPopulation]]. This helps applications understand if they have access to a sufficiently complete description of a [[StatisticalPopulation]].
 *           $ref: '#/components/schemas/integer'
 *         applicationSubCategory:
 *           description: Subcategory of the application, e.g. 'Arcade Game'.
 *           type: string
 *         Nonprofit501c6:
 *           description: Nonprofit501c6: Non-profit type referring to Business Leagues, Chambers of Commerce, Real Estate Boards.
 *           $ref: '#/components/schemas/'
 *         vehicleTransmission:
 *           description: The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
 *           $ref: '#/components/schemas/qualitativevalue'
 *         speakable:
 *           description: Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.The *speakable* property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:1.) *id-value* URL references - uses *id-value* of an element in the page being annotated. The simplest use of *speakable* has (potentially relative) URL values, referencing identified sections of the document concerned.2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the [[cssSelector]] property.3.) XPaths - addresses content via XPaths (assuming an XML view of the content). Use the [[xpath]] property.For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For thiswe define a supporting type, [[SpeakableSpecification]] which is defined to be a possible value of the *speakable* property. 
 *           $ref: '#/components/schemas/speakablespecification'
 *         itemCondition:
 *           description: A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
 *           $ref: '#/components/schemas/offeritemcondition'
 *         usesHealthPlanIdStandard:
 *           description: The standard for interpreting thePlan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details.
 *           type: string
 *         legislationType:
 *           description: The type of the legislation. Examples of values are "law", "act", "directive", "decree", "regulation", "statutory instrument", "loi organique", "règlement grand-ducal", etc., depending on the country.
 *           type: string
 *         inSupportOf:
 *           description: Qualification, candidature, degree, application that Thesis supports.
 *           type: string
 *         AmpStory:
 *           description: A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices.
 *           $ref: '#/components/schemas/'
 *         Permit:
 *           description: A permit issued by an organization, e.g. a parking pass.
 *           $ref: '#/components/schemas/'
 *         PriceComponentTypeEnumeration:
 *           description: Enumerates different price components that together make up the total price for an offered product.
 *           $ref: '#/components/schemas/'
 *         proteinContent:
 *           description: The number of grams of protein.
 *           $ref: '#/components/schemas/mass'
 *         PublicHolidays:
 *           description: This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a "day of the week", it can be used with [[OpeningHoursSpecification]]. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs.
 *           $ref: '#/components/schemas/'
 *         FollowAction:
 *           description: The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.\n\nRelated actions:\n\n* [[BefriendAction]]: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.\n* [[SubscribeAction]]: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.\n* [[RegisterAction]]: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.\n* [[TrackAction]]: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
 *           $ref: '#/components/schemas/'
 *         checkinTime:
 *           description: The earliest someone may check into a lodging establishment.
 *           type: string
 *         browserRequirements:
 *           description: Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.
 *           type: string
 *         OfficeEquipmentStore:
 *           description: An office equipment store.
 *           $ref: '#/components/schemas/'
 *         RejectAction:
 *           description: The act of rejecting to/adopting an object.\n\nRelated actions:\n\n* [[AcceptAction]]: The antonym of RejectAction.
 *           $ref: '#/components/schemas/'
 *         DataDownload:
 *           description: A dataset in downloadable form.
 *           $ref: '#/components/schemas/'
 *         numberOfItems:
 *           description: The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.
 *           $ref: '#/components/schemas/integer'
 *         screenshot:
 *           description: A link to a screenshot image of the app.
 *           $ref: '#/components/schemas/imageobject'
 *         WriteAction:
 *           description: The act of authoring written creative content.
 *           $ref: '#/components/schemas/'
 *         MenuItem:
 *           description: A food or drink item listed in a menu or menu section.
 *           $ref: '#/components/schemas/'
 *         UnofficialLegalValue:
 *           description: Indicates that a document has no particular or special standing (e.g. a republication of a law by a private publisher).
 *           $ref: '#/components/schemas/'
 *         catalogNumber:
 *           description: The catalog number for the release.
 *           type: string
 *         description:
 *           description: A description of the item.
 *           type: string
 *         text:
 *           description: The textual content of this CreativeWork.
 *           type: string
 *         Product:
 *           description: Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
 *           $ref: '#/components/schemas/'
 *         DefinitiveLegalValue:
 *           description: Indicates a document for which the text is conclusively what the law says and is legally binding. (e.g. The digitally signed version of an Official Journal.) Something "Definitive" is considered to be also [[AuthoritativeLegalValue]].
 *           $ref: '#/components/schemas/'
 *         validFrom:
 *           description: The date when the item becomes valid.
 *           type: string
 *         orderItemStatus:
 *           description: The current status of the order item.
 *           $ref: '#/components/schemas/orderstatus'
 *         cvdNumC19OverflowPats:
 *           description: numc19overflowpats - ED/OVERFLOW: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed.
 *           type: number
 *         aggregateRating:
 *           description: The overall rating, based on a collection of reviews or ratings, of the item.
 *           $ref: '#/components/schemas/aggregaterating'
 *         hasProductReturnPolicy:
 *           description: Indicates a ProductReturnPolicy that may be applicable.
 *           $ref: '#/components/schemas/productreturnpolicy'
 *         DefinedTermSet:
 *           description: A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 *           $ref: '#/components/schemas/'
 *         sourcedFrom:
 *           description: The neurological pathway that originates the neurons.
 *           $ref: '#/components/schemas/brainstructure'
 *         discussionUrl:
 *           description: A link to the page containing the comments of the CreativeWork.
 *           type: string
 *         FullRefund:
 *           description: A FullRefund ...
 *           $ref: '#/components/schemas/'
 *         penciler:
 *           description: The individual who draws the primary narrative artwork.
 *           $ref: '#/components/schemas/person'
 *         artist:
 *           description: The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints.
 *           $ref: '#/components/schemas/person'
 *         constrainingProperty:
 *           description: Indicates a property used as a constraint to define a [[StatisticalPopulation]] with respect to the set of entities corresponding to an indicated type (via [[populationType]]).
 *           $ref: '#/components/schemas/integer'
 *         DefenceEstablishment:
 *           description: A defence establishment, such as an army or navy base.
 *           $ref: '#/components/schemas/'
 *         MedicalContraindication:
 *           description: A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures).
 *           $ref: '#/components/schemas/'
 *         subjectOf:
 *           description: A CreativeWork or Event about this Thing.
 *           $ref: '#/components/schemas/event'
 *         addOn:
 *           description: An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
 *           $ref: '#/components/schemas/offer'
 *         startTime:
 *           description: The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from *January* to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 *           type: string
 *         temporal:
 *           description: The "temporal" property can be used in cases where more specific properties(e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.
 *           type: string
 *         fatContent:
 *           description: The number of grams of fat.
 *           $ref: '#/components/schemas/mass'
 *         Drug:
 *           description: A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them.
 *           $ref: '#/components/schemas/'
 *         partOfSeason:
 *           description: The season to which this episode belongs.
 *           $ref: '#/components/schemas/creativeworkseason'
 *         OriginalMediaContent:
 *           description: Content coded 'as original media content' in a [[MediaReview]], considered in the context of how it was published or shared.For a [[VideoObject]] to be 'original': No evidence the footage has been misleadingly altered or manipulated, though it may contain false or misleading claims.For an [[ImageObject]] to be 'original': No evidence the image has been misleadingly altered or manipulated, though it may still contain false or misleading claims.For an [[ImageObject]] with embedded text to be 'original': No evidence the image has been misleadingly altered or manipulated, though it may still contain false or misleading claims.For an [[AudioObject]] to be 'original': No evidence the audio has been misleadingly altered or manipulated, though it may contain false or misleading claims.
 *           $ref: '#/components/schemas/'
 *         DryCleaningOrLaundry:
 *           description: A dry-cleaning business.
 *           $ref: '#/components/schemas/'
 *         numberOfDoors:
 *           description: The number of doors.\n\nTypical unit code(s): C62
 *           $ref: '#/components/schemas/quantitativevalue'
 *         floorLevel:
 *           description: The floor level for an [[Accommodation]] in a multi-storey building. Since counting systems [vary internationally](https://en.wikipedia.org/wiki/Storey#Consecutive_number_floor_designations), the local system should be used where possible.
 *           type: string
 *         hasCourse:
 *           description: A course or class that is one of the learning opportunities that constitute an educational / occupational program. No information is implied about whether the course is mandatory or optional; no guarantee is implied about whether the course will be available to everyone on the program.
 *           $ref: '#/components/schemas/course'
 *         conditionsOfAccess:
 *           description: Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an [[ArchiveComponent]] held by an [[ArchiveOrganization]]. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.\n\nFor example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ". 
 *           type: string
 *         PaymentDue:
 *           description: The payment is due, but still within an acceptable time to be received.
 *           $ref: '#/components/schemas/'
 *         instrument:
 *           description: The object that helped the agent perform the action. e.g. John wrote a book with *a pen*.
 *           $ref: '#/components/schemas/thing'
 *         cvdNumTotBeds:
 *           description: numtotbeds - ALL HOSPITAL BEDS: Total number of all Inpatient and outpatient beds, including all staffed,ICU, licensed, and overflow (surge) beds used for inpatients or outpatients.
 *           type: number
 *         isUnlabelledFallback:
 *           description: This can be marked 'true' to indicate that some published [[DeliveryTimeSettings]] or [[ShippingRateSettings]] are intended to apply to all [[OfferShippingDetails]] published by the same merchant, when referenced by a [[shippingSettingsLink]] in those settings. It is not meaningful to use a 'true' value for this property alongside a transitTimeLabel (for [[DeliveryTimeSettings]]) or shippingLabel (for [[ShippingRateSettings]]), since this property is for use with unlabelled settings.
 *           $ref: '#/components/schemas/boolean'
 *         BeautySalon:
 *           description: Beauty salon.
 *           $ref: '#/components/schemas/'
 *         expires:
 *           description: Date the content expires and is no longer useful or available. For example a [[VideoObject]] or [[NewsArticle]] whose availability or relevance is time-limited, or a [[ClaimReview]] fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.
 *           type: string
 *         ReservationStatusType:
 *           description: Enumerated status values for Reservation.
 *           $ref: '#/components/schemas/'
 *         differentialDiagnosis:
 *           description: One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.
 *           $ref: '#/components/schemas/ddxelement'
 *         bitrate:
 *           description: The bitrate of the media object.
 *           type: string
 *         size:
 *           description: A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured [[SizeSpecification]]; in other cases, the [[width]], [[height]], [[depth]] and [[weight]] properties may be more applicable. 
 *           $ref: '#/components/schemas/sizespecification'
 *         backstory:
 *           description: For an [[Article]], typically a [[NewsArticle]], the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.
 *           $ref: '#/components/schemas/creativework'
 *         targetDescription:
 *           description: The description of a node in an established educational framework.
 *           type: string
 *         MoneyTransfer:
 *           description: The act of transferring money from one place to another place. This may occur electronically or physically.
 *           $ref: '#/components/schemas/'
 *         BodyOfWater:
 *           description: A body of water, such as a sea, ocean, or lake.
 *           $ref: '#/components/schemas/'
 *         SalePrice:
 *           description: Represents a sale price (usually active for a limited period) of an offered product.
 *           $ref: '#/components/schemas/'
 *         webCheckinTime:
 *           description: The time when a passenger can check into the flight online.
 *           type: string
 *         artworkSurface:
 *           description: The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.
 *           type: string
 *         productReturnDays:
 *           description: The productReturnDays property indicates the number of days (from purchase) within which relevant product return policy is applicable.
 *           $ref: '#/components/schemas/integer'
 *         Periodical:
 *           description: A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *           $ref: '#/components/schemas/'
 *         RadioSeries:
 *           description: CreativeWorkSeries dedicated to radio broadcast and associated online delivery.
 *           $ref: '#/components/schemas/'
 *         diversityStaffingReport:
 *           description: For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 *           type: string
 *         SoundtrackAlbum:
 *           description: SoundtrackAlbum.
 *           $ref: '#/components/schemas/'
 *         healthPlanNetworkTier:
 *           description: The tier(s) for this network.
 *           type: string
 *         Motorcycle:
 *           description: A motorcycle or motorbike is a single-track, two-wheeled motor vehicle.
 *           $ref: '#/components/schemas/'
 *         TouristAttraction:
 *           description: A tourist attraction. In principle any Thing can be a [[TouristAttraction]], from a [[Mountain]] and [[LandmarksOrHistoricalBuildings]] to a [[LocalBusiness]]. This Type can be used on its own to describe a general [[TouristAttraction]], or be used as an [[additionalType]] to add tourist attraction properties to any other type. (See examples below)
 *           $ref: '#/components/schemas/'
 *         workLocation:
 *           description: A contact location for a person's place of work.
 *           $ref: '#/components/schemas/place'
 *         preparation:
 *           description: Typical preparation that a patient must undergo before having the procedure performed.
 *           type: string
 *         CardiovascularExam:
 *           description: Cardiovascular system assessment withclinical examination.
 *           $ref: '#/components/schemas/'
 *         cvdNumBeds:
 *           description: numbeds - HOSPITAL INPATIENT BEDS: Inpatient beds, including all staffed, licensed, and overflow (surge) beds used for inpatients.
 *           type: number
 *         Photograph:
 *           description: A photograph.
 *           $ref: '#/components/schemas/'
 *         employerOverview:
 *           description: A description of the employer, career opportunities and work environment for this position.
 *           type: string
 *         Thing:
 *           description: The most generic type of item.
 *           $ref: '#/components/schemas/'
 *         modelDate:
 *           description: The release date of a vehicle model (often used to differentiate versions of the same make and model).
 *           type: string
 *         permittedUsage:
 *           description: Indications regarding the permitted usage of the accommodation.
 *           type: string
 *         ComicCoverArt:
 *           description: The artwork on the cover of a comic.
 *           $ref: '#/components/schemas/'
 *         FinancialProduct:
 *           description: A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 *           $ref: '#/components/schemas/'
 *         Balance:
 *           description: Physical activity that is engaged to help maintain posture and balance.
 *           $ref: '#/components/schemas/'
 *         Geriatric:
 *           description: A specific branch of medical science that is concerned with the diagnosis and treatment of diseases, debilities and provision of care to the aged.
 *           $ref: '#/components/schemas/'
 *         Sunday:
 *           description: The day of the week between Saturday and Monday.
 *           $ref: '#/components/schemas/'
 *         transmissionMethod:
 *           description: How the disease spreads, either as a route or vector, for example 'direct contact', 'Aedes aegypti', etc.
 *           type: string
 *         Ear:
 *           description: Ear function assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         ParkingMap:
 *           description: A parking map.
 *           $ref: '#/components/schemas/'
 *         ApartmentComplex:
 *           description: Residence type: Apartment complex.
 *           $ref: '#/components/schemas/'
 *         handlingTime:
 *           description: The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY). This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Course:
 *           description: A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.
 *           $ref: '#/components/schemas/'
 *         Number:
 *           description: Data type: Number.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *           $ref: '#/components/schemas/'
 *         MedicalIntangible:
 *           description: A utility class that serves as the umbrella for a number of 'intangible' things in the medical space.
 *           $ref: '#/components/schemas/'
 *         BodyMeasurementUnderbust:
 *           description: Girth of body just below the bust. Used, for example, to fit women's swimwear.
 *           $ref: '#/components/schemas/'
 *         EmployeeRole:
 *           description: A subclass of OrganizationRole used to describe employee relationships.
 *           $ref: '#/components/schemas/'
 *         tocContinuation:
 *           description: A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render.
 *           $ref: '#/components/schemas/hypertocentry'
 *         Report:
 *           description: A Report generated by governmental or non-governmental organization.
 *           $ref: '#/components/schemas/'
 *         durationOfWarranty:
 *           description: The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Grant:
 *           description: A grant, typically financial or otherwise quantifiable, of resources. Typically a [[funder]] sponsors some [[MonetaryAmount]] to an [[Organization]] or [[Person]], sometimes not necessarily via a dedicated or long-lived [[Project]], resulting in one or more outputs, or [[fundedItem]]s. For financial sponsorship, indicate the [[funder]] of a [[MonetaryGrant]]. For non-financial support, indicate [[sponsor]] of [[Grant]]s of resources (e.g. office space).Grants support activities directed towards some agreed collective goals, often but not always organized as [[Project]]s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.The amount of a [[Grant]] is represented using [[amount]] as a [[MonetaryAmount]]. 
 *           $ref: '#/components/schemas/'
 *         orderDelivery:
 *           description: The delivery of the parcel related to this order or order item.
 *           $ref: '#/components/schemas/parceldelivery'
 *         shippingRate:
 *           description: The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the [[MonetaryAmount]]) are most appropriate.
 *           $ref: '#/components/schemas/monetaryamount'
 *         Clip:
 *           description: A short TV or radio program or a segment/part of a program.
 *           $ref: '#/components/schemas/'
 *         price:
 *           description: The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols. 
 *           type: string
 *         TennisComplex:
 *           description: A tennis complex.
 *           $ref: '#/components/schemas/'
 *         CompletedActionStatus:
 *           description: An action that has already taken place.
 *           $ref: '#/components/schemas/'
 *         geoIntersects:
 *           description: Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/place'
 *         PathologyTest:
 *           description: A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
 *           $ref: '#/components/schemas/'
 *         recipeCuisine:
 *           description: The cuisine of the recipe (for example, French or Ethiopian).
 *           type: string
 *         timeRequired:
 *           description: Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.
 *           $ref: '#/components/schemas/duration'
 *         numberOfEmployees:
 *           description: The number of employees in an organization e.g. business.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         subtitleLanguage:
 *           description: Languages in which subtitles/captions are available, in [IETF BCP 47 standard format](http://tools.ietf.org/html/bcp47).
 *           type: string
 *         beneficiaryBank:
 *           description: A bank or bank’s branch, financial institution or international financial institution operating the beneficiary’s bank account or releasing funds for the beneficiary.
 *           $ref: '#/components/schemas/bankorcreditunion'
 *         directors:
 *           description: A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 *           $ref: '#/components/schemas/person'
 *         EndorseAction:
 *           description: An agent approves/certifies/likes/supports/sanction an object.
 *           $ref: '#/components/schemas/'
 *         supersededBy:
 *           description: Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
 *           $ref: '#/components/schemas/enumeration'
 *         StudioAlbum:
 *           description: StudioAlbum.
 *           $ref: '#/components/schemas/'
 *         Comment:
 *           description: A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the [[text]] property, and its topic via [[about]], properties shared with all CreativeWorks.
 *           $ref: '#/components/schemas/'
 *         EvidenceLevelC:
 *           description: Only consensus opinion of experts, case studies, or standard-of-care.
 *           $ref: '#/components/schemas/'
 *         HyperTocEntry:
 *           description: A HyperToEntry is an item within a [[HyperToc]], which represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. The media object itself is indicated using [[associatedMedia]]. Each section of interest within that content can be described with a [[HyperTocEntry]], with associated [[startOffset]] and [[endOffset]]. When several entries are all from the same file, [[associatedMedia]] is used on the overarching [[HyperTocEntry]]; if the content has been split into multiple files, they can be referenced using [[associatedMedia]] on each [[HyperTocEntry]].
 *           $ref: '#/components/schemas/'
 *         regionDrained:
 *           description: The anatomical or organ system drained by this vessel; generally refers to a specific part of an organ.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         HVACBusiness:
 *           description: A business that provide Heating, Ventilation and Air Conditioning services.
 *           $ref: '#/components/schemas/'
 *         credentialCategory:
 *           description: The category or type of credential being described, for example "degree”, “certificate”, “badge”, or more specific term.
 *           type: string
 *         ProfessionalService:
 *           description: Original definition: "provider of professional services."\n\nThe general [[ProfessionalService]] type for local businesses was deprecated due to confusion with [[Service]]. For reference, the types that it included were: [[Dentist]], [[AccountingService]], [[Attorney]], [[Notary]], as well as types for several kinds of [[HomeAndConstructionBusiness]]: [[Electrician]], [[GeneralContractor]], [[HousePainter]], [[Locksmith]], [[Plumber]], [[RoofingContractor]]. [[LegalService]] was introduced as a more inclusive supertype of [[Attorney]].
 *           $ref: '#/components/schemas/'
 *         dateModified:
 *           description: The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
 *           type: string
 *         AskAction:
 *           description: The act of posing a question / favor to someone.\n\nRelated actions:\n\n* [[ReplyAction]]: Appears generally as a response to AskAction.
 *           $ref: '#/components/schemas/'
 *         employees:
 *           description: People working for this organization.
 *           $ref: '#/components/schemas/person'
 *         ratingCount:
 *           description: The count of total number of ratings.
 *           $ref: '#/components/schemas/integer'
 *         Mass:
 *           description: Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.
 *           $ref: '#/components/schemas/'
 *         PerformingGroup:
 *           description: A performance group, such as a band, an orchestra, or a circus.
 *           $ref: '#/components/schemas/'
 *         exerciseCourse:
 *           description: A sub property of location. The course where this action was taken.
 *           $ref: '#/components/schemas/place'
 *         Seat:
 *           description: Used to describe a seat, such as a reserved seat in an event reservation.
 *           $ref: '#/components/schemas/'
 *         CriticReview:
 *           description: A [[CriticReview]] is a more specialized form of Review written or published by a source that is recognized for its reviewing activities. These can include online columns, travel and food guides, TV and radio shows, blogs and other independent Web sites. [[CriticReview]]s are typically more in-depth and professionally written. For simpler, casually written user/visitor/viewer/customer reviews, it is more appropriate to use the [[UserReview]] type. Review aggregator sites such as Metacritic already separate out the site's user reviews from selected critic reviews that originate from third-party sources.
 *           $ref: '#/components/schemas/'
 *         availableOnDevice:
 *           description: Device required to run the application. Used in cases where a specific make/model is required to run the application.
 *           type: string
 *         trackingNumber:
 *           description: Shipper tracking number.
 *           type: string
 *         marginOfError:
 *           description: A marginOfError for an [[Observation]].
 *           $ref: '#/components/schemas/quantitativevalue'
 *         IndividualProduct:
 *           description: A single, identifiable product instance (e.g. a laptop with a particular serial number).
 *           $ref: '#/components/schemas/'
 *         ownedFrom:
 *           description: The date and time of obtaining the product.
 *           type: string
 *         providesService:
 *           description: The service provided by this channel.
 *           $ref: '#/components/schemas/service'
 *         cvdNumC19OFMechVentPats:
 *           description: numc19ofmechventpats - ED/OVERFLOW and VENTILATED: Patients with suspected or confirmed COVID-19 who are in the ED or any overflow location awaiting an inpatient bed and on a mechanical ventilator.
 *           type: number
 *         isProprietary:
 *           description: True if this item's name is a proprietary/brand name (vs. generic name).
 *           $ref: '#/components/schemas/boolean'
 *         printSection:
 *           description: If this NewsArticle appears in print, this field indicates the print section in which the article appeared.
 *           type: string
 *         valueName:
 *           description: Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.
 *           type: string
 *         dropoffLocation:
 *           description: Where a rental car can be dropped off.
 *           $ref: '#/components/schemas/place'
 *         requiredMaxAge:
 *           description: Audiences defined by a person's maximum age.
 *           $ref: '#/components/schemas/integer'
 *         Monday:
 *           description: The day of the week between Sunday and Tuesday.
 *           $ref: '#/components/schemas/'
 *         spatialCoverage:
 *           description: The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
 *           $ref: '#/components/schemas/place'
 *         membershipPointsEarned:
 *           description: The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
 *           $ref: '#/components/schemas/quantitativevalue'
 *         MusicComposition:
 *           description: A musical composition.
 *           $ref: '#/components/schemas/'
 *         candidate:
 *           description: A sub property of object. The candidate subject of this action.
 *           $ref: '#/components/schemas/person'
 *         Dentistry:
 *           description: A branch of medicine that is involved in the dental care.
 *           $ref: '#/components/schemas/'
 *         competitor:
 *           description: A competitor in a sports event.
 *           $ref: '#/components/schemas/person'
 *         guideline:
 *           description: A medical guideline related to this entity.
 *           $ref: '#/components/schemas/medicalguideline'
 *         WebPage:
 *           description: A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 *           $ref: '#/components/schemas/'
 *         ComicSeries:
 *           description: A sequential publication of comic stories under a unifying title, for example "The Amazing Spider-Man" or "Groo the Wanderer".
 *           $ref: '#/components/schemas/'
 *         customer:
 *           description: Party placing the order or paying the invoice.
 *           $ref: '#/components/schemas/organization'
 *         photos:
 *           description: Photographs of this place.
 *           $ref: '#/components/schemas/photograph'
 *         fromLocation:
 *           description: A sub property of location. The original location of the object or the agent before the action.
 *           $ref: '#/components/schemas/place'
 *         MediaSubscription:
 *           description: A subscription which allows a user to access media including audio, video, books, etc.
 *           $ref: '#/components/schemas/'
 *         PlanAction:
 *           description: The act of planning the execution of an event/task/action/reservation/plan to a future date.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupExtraTall:
 *           description: Size group "Extra Tall" for wearables.
 *           $ref: '#/components/schemas/'
 *         affiliation:
 *           description: An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 *           $ref: '#/components/schemas/organization'
 *         circle:
 *           description: A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.
 *           type: string
 *         acceptedOffer:
 *           description: The offer(s) -- e.g., product, quantity and price combinations -- included in the order.
 *           $ref: '#/components/schemas/offer'
 *         artform:
 *           description: e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
 *           type: string
 *         associatedPathophysiology:
 *           description: If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
 *           type: string
 *         WebApplication:
 *           description: Web applications.
 *           $ref: '#/components/schemas/'
 *         EBook:
 *           description: Book format: Ebook.
 *           $ref: '#/components/schemas/'
 *         followup:
 *           description: Typical or recommended followup care after the procedure is performed.
 *           type: string
 *         EducationalAudience:
 *           description: An EducationalAudience.
 *           $ref: '#/components/schemas/'
 *         datasetTimeInterval:
 *           description: The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).
 *           type: string
 *         Winery:
 *           description: A winery.
 *           $ref: '#/components/schemas/'
 *         Thursday:
 *           description: The day of the week between Wednesday and Friday.
 *           $ref: '#/components/schemas/'
 *         Drawing:
 *           description: A picture or diagram made with a pencil, pen, or crayon rather than paint.
 *           $ref: '#/components/schemas/'
 *         educationalLevel:
 *           description: The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
 *           type: string
 *         ParentalSupport:
 *           description: ParentalSupport: this is a benefit for parental support.
 *           $ref: '#/components/schemas/'
 *         legislationLegalForce:
 *           description: Whether the legislation is currently in force, not in force, or partially in force.
 *           $ref: '#/components/schemas/legalforcestatus'
 *         ConsumeAction:
 *           description: The act of ingesting information/resources/food.
 *           $ref: '#/components/schemas/'
 *         educationRequirements:
 *           description: Educational background needed for the position or Occupation.
 *           type: string
 *         AnaerobicActivity:
 *           description: Physical activity that is of high-intensity which utilizes the anaerobic metabolism of the body.
 *           $ref: '#/components/schemas/'
 *         FoodService:
 *           description: A food service, like breakfast, lunch, or dinner.
 *           $ref: '#/components/schemas/'
 *         representativeOfPage:
 *           description: Indicates whether this image is representative of the content of the page.
 *           $ref: '#/components/schemas/boolean'
 *         healthPlanNetworkId:
 *           description: Name or unique ID of network. (Networks are often reused across different insurance plans).
 *           type: string
 *         BowlingAlley:
 *           description: A bowling alley.
 *           $ref: '#/components/schemas/'
 *         PhysicalActivity:
 *           description: Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 *           $ref: '#/components/schemas/'
 *         storageRequirements:
 *           description: Storage requirements (free space required).
 *           type: string
 *         question:
 *           description: A sub property of object. A question.
 *           $ref: '#/components/schemas/question'
 *         CausesHealthAspect:
 *           description: Information about the causes and main actions that gave rise to the topic.
 *           $ref: '#/components/schemas/'
 *         fuelEfficiency:
 *           description: The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).\n\n* Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use [[unitText]] to indicate the unit of measurement, e.g. mpg or km/L.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel economy to another value.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         CommentAction:
 *           description: The act of generating a comment about a subject.
 *           $ref: '#/components/schemas/'
 *         depth:
 *           description: The depth of the item.
 *           $ref: '#/components/schemas/distance'
 *         epidemiology:
 *           description: The characteristics of associated patients, such as age, gender, race etc.
 *           type: string
 *         AnatomicalStructure:
 *           description: Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 *           $ref: '#/components/schemas/'
 *         EUEnergyEfficiencyCategoryD:
 *           description: Represents EU Energy Efficiency Class D as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         currentExchangeRate:
 *           description: The current price of a currency.
 *           $ref: '#/components/schemas/unitpricespecification'
 *         PhysicalActivityCategory:
 *           description: Categories of physical activity, organized by physiologic classification.
 *           $ref: '#/components/schemas/'
 *         greaterOrEqual:
 *           description: This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         trialDesign:
 *           description: Specifics about the trial design (enumerated).
 *           $ref: '#/components/schemas/medicaltrialdesign'
 *         height:
 *           description: The height of the item.
 *           $ref: '#/components/schemas/distance'
 *         worksFor:
 *           description: Organizations that the person works for.
 *           $ref: '#/components/schemas/organization'
 *         VoteAction:
 *           description: The act of expressing a preference from a fixed/finite/structured set of choices/options.
 *           $ref: '#/components/schemas/'
 *         WearableMeasurementOutsideLeg:
 *           description: Measurement of the outside leg, for example of pants
 *           $ref: '#/components/schemas/'
 *         postalCodePrefix:
 *           description: A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK.
 *           type: string
 *         broadcastSubChannel:
 *           description: The subchannel used for the broadcast.
 *           type: string
 *         spokenByCharacter:
 *           description: The (e.g. fictional) character, Person or Organization to whom the quotation is attributed within the containing CreativeWork.
 *           $ref: '#/components/schemas/person'
 *         printPage:
 *           description: If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).
 *           type: string
 *         WearableMeasurementCup:
 *           description: Measurement of the cup, for example of a bra
 *           $ref: '#/components/schemas/'
 *         videoFormat:
 *           description: The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
 *           type: string
 *         address:
 *           description: Physical address of the item.
 *           type: string
 *         parentItem:
 *           description: The parent of a question, answer or item in general.
 *           $ref: '#/components/schemas/comment'
 *         LandmarksOrHistoricalBuildings:
 *           description: An historical landmark or building.
 *           $ref: '#/components/schemas/'
 *         textValue:
 *           description: Text value being annotated.
 *           type: string
 *         skills:
 *           description: A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
 *           $ref: '#/components/schemas/definedterm'
 *         OceanBodyOfWater:
 *           description: An ocean (for example, the Pacific).
 *           $ref: '#/components/schemas/'
 *         dataset:
 *           description: A dataset contained in this catalog.
 *           $ref: '#/components/schemas/dataset'
 *         programType:
 *           description: The type of educational or occupational program. For example, classroom, internship, alternance, etc..
 *           $ref: '#/components/schemas/definedterm'
 *         True:
 *           description: The boolean value true.
 *           $ref: '#/components/schemas/'
 *         Code:
 *           description: Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *           $ref: '#/components/schemas/'
 *         itinerary:
 *           description: Destination(s) ( [[Place]] ) that make up a trip. For a trip where destination order is important use [[ItemList]] to specify that order (see examples).
 *           $ref: '#/components/schemas/place'
 *         ReimbursementCap:
 *           description: The drug's cost represents the maximum reimbursement paid by an insurer for the drug.
 *           $ref: '#/components/schemas/'
 *         DoubleBlindedTrial:
 *           description: A trial design in which neither the researcher nor the patient knows the details of the treatment the patient was randomly assigned to.
 *           $ref: '#/components/schemas/'
 *         LiquorStore:
 *           description: A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.
 *           $ref: '#/components/schemas/'
 *         includedInHealthInsurancePlan:
 *           description: The insurance plans that cover this drug.
 *           $ref: '#/components/schemas/healthinsuranceplan'
 *         exampleOfWork:
 *           description: A creative work that this work is an example/instance/realization/derivation of.
 *           $ref: '#/components/schemas/creativework'
 *         departureGate:
 *           description: Identifier of the flight's departure gate.
 *           type: string
 *         Pharmacy:
 *           description: A pharmacy or drugstore.
 *           $ref: '#/components/schemas/'
 *         Longitudinal:
 *           description: Unlike cross-sectional studies, longitudinal studies track the same people, and therefore the differences observed in those people are less likely to be the result of cultural differences across generations. Longitudinal studies are also used in medicine to uncover predictors of certain diseases.
 *           $ref: '#/components/schemas/'
 *         SizeSystemEnumeration:
 *           description: Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 *           $ref: '#/components/schemas/'
 *         copyrightYear:
 *           description: The year during which the claimed copyright for the CreativeWork was first asserted.
 *           type: number
 *         MusicAlbumProductionType:
 *           description: Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 *           $ref: '#/components/schemas/'
 *         Recipe:
 *           description: A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via [[suitableForDiet]]. The [[keywords]] property can also be used to add more detail.
 *           $ref: '#/components/schemas/'
 *         honorificPrefix:
 *           description: An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 *           type: string
 *         EngineSpecification:
 *           description: Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 *           $ref: '#/components/schemas/'
 *         healthPlanCopay:
 *           description: Whether The copay amount.
 *           $ref: '#/components/schemas/pricespecification'
 *         gameServer:
 *           description: The server on which it is possible to play the game.
 *           $ref: '#/components/schemas/gameserver'
 *         WPAdBlock:
 *           description: An advertising section of the page.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupPetite:
 *           description: Size group "Petite" for wearables.
 *           $ref: '#/components/schemas/'
 *         Continent:
 *           description: One of the continents (for example, Europe or Africa).
 *           $ref: '#/components/schemas/'
 *         loanPaymentAmount:
 *           description: The amount of money to pay in a single payment.
 *           $ref: '#/components/schemas/monetaryamount'
 *         sender:
 *           description: A sub property of participant. The participant who is at the sending end of the action.
 *           $ref: '#/components/schemas/person'
 *         sourceOrganization:
 *           description: The Organization on whose behalf the creator was working.
 *           $ref: '#/components/schemas/organization'
 *         WantAction:
 *           description: The act of expressing a desire about the object. An agent wants an object.
 *           $ref: '#/components/schemas/'
 *         CreditCard:
 *           description: A card payment method of a particular brand or name. Used to mark up a particular payment method and/or the financial product/service that supplies the card account.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#AmericanExpress\n* http://purl.org/goodrelations/v1#DinersClub\n* http://purl.org/goodrelations/v1#Discover\n* http://purl.org/goodrelations/v1#JCB\n* http://purl.org/goodrelations/v1#MasterCard\n* http://purl.org/goodrelations/v1#VISA 
 *           $ref: '#/components/schemas/'
 *         SelfStorage:
 *           description: A self-storage facility.
 *           $ref: '#/components/schemas/'
 *         gracePeriod:
 *           description: The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.
 *           $ref: '#/components/schemas/duration'
 *         significantLink:
 *           description: One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
 *           type: string
 *         InsertAction:
 *           description: The act of adding at a specific location in an ordered collection.
 *           $ref: '#/components/schemas/'
 *         reportNumber:
 *           description: The number or other unique designator assigned to a Report by the publishing organization.
 *           type: string
 *         HowToStep:
 *           description: A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.
 *           $ref: '#/components/schemas/'
 *         inker:
 *           description: The individual who traces over the pencil drawings in ink after pencils are complete.
 *           $ref: '#/components/schemas/person'
 *         SomeProducts:
 *           description: A placeholder for multiple similar products of the same kind.
 *           $ref: '#/components/schemas/'
 *         subStageSuffix:
 *           description: The substage, e.g. 'a' for Stage IIIa.
 *           type: string
 *         musicCompositionForm:
 *           description: The type of composition (e.g. overture, sonata, symphony, etc.).
 *           type: string
 *         firstPerformance:
 *           description: The date and place the work was first performed.
 *           $ref: '#/components/schemas/event'
 *         PetStore:
 *           description: A pet store.
 *           $ref: '#/components/schemas/'
 *         interactionCount:
 *           description: This property is deprecated, alongside the UserInteraction types on which it depended.
 *           $ref: '#/components/schemas/'
 *         rangeIncludes:
 *           description: Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.
 *           $ref: '#/components/schemas/class'
 *         Nonprofit501c17:
 *           description: Nonprofit501c17: Non-profit type referring to Supplemental Unemployment Benefit Trusts.
 *           $ref: '#/components/schemas/'
 *         EmergencyService:
 *           description: An emergency service, such as a fire station or ER.
 *           $ref: '#/components/schemas/'
 *         ReactAction:
 *           description: The act of responding instinctively and emotionally to an object, expressing a sentiment.
 *           $ref: '#/components/schemas/'
 *         costCurrency:
 *           description: The currency (in 3-letter of the drug cost. See: http://en.wikipedia.org/wiki/ISO_4217. 
 *           type: string
 *         Skin:
 *           description: Skin assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         MedicalIndication:
 *           description: A condition or factor that indicates use of a medical therapy, including signs, symptoms, risk factors, anatomical states, etc.
 *           $ref: '#/components/schemas/'
 *         correctionsPolicy:
 *           description: For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 *           type: string
 *         albumProductionType:
 *           description: Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 *           $ref: '#/components/schemas/musicalbumproductiontype'
 *         legislationDate:
 *           description: The date of adoption or signature of the legislation. This is the date at which the text is officially aknowledged to be a legislation, even though it might not even be published or in force.
 *           type: string
 *         MathSolver:
 *           description: A math solver which is capable of solving a subset of mathematical problems.
 *           $ref: '#/components/schemas/'
 *         permitAudience:
 *           description: The target audience for this permit.
 *           $ref: '#/components/schemas/audience'
 *         ToyStore:
 *           description: A toy store.
 *           $ref: '#/components/schemas/'
 *         OTC:
 *           description: The character of a medical substance, typically a medicine, of being available over the counter or not.
 *           $ref: '#/components/schemas/'
 *         thumbnail:
 *           description: Thumbnail image for an image or video.
 *           $ref: '#/components/schemas/imageobject'
 *         exerciseType:
 *           description: Type(s) of exercise or activity, such as strength training, flexibility training, aerobics, cardiac rehabilitation, etc.
 *           type: string
 *         tourBookingPage:
 *           description: A page providing information on how to book a tour of some [[Place]], such as an [[Accommodation]] or [[ApartmentComplex]] in a real estate setting, as well as other kinds of tours as appropriate.
 *           type: string
 *         WritePermission:
 *           description: Permission to write or edit the document.
 *           $ref: '#/components/schemas/'
 *         GroupBoardingPolicy:
 *           description: The airline boards by groups based on check-in time, priority, etc.
 *           $ref: '#/components/schemas/'
 *         OrderCancelled:
 *           description: OrderStatus representing cancellation of an order.
 *           $ref: '#/components/schemas/'
 *         Observation:
 *           description: Instances of the class [[Observation]] are used to specify observations about an entity (which may or may not be an instance of a [[StatisticalPopulation]]), at a particular time. The principal properties of an [[Observation]] are [[observedNode]], [[measuredProperty]], [[measuredValue]] (or [[median]], etc.) and [[observationDate]] ([[measuredProperty]] properties can, but need not always, be W3C RDF Data Cube "measure properties", as in the [lifeExpectancy example](https://www.w3.org/TR/vocab-data-cube/#dsd-example)).See also [[StatisticalPopulation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details. 
 *           $ref: '#/components/schemas/'
 *         OrderItem:
 *           description: An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 *           $ref: '#/components/schemas/'
 *         currenciesAccepted:
 *           description: The currency accepted.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *           type: string
 *         LendAction:
 *           description: The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.\n\nRelated actions:\n\n* [[BorrowAction]]: Reciprocal of LendAction.
 *           $ref: '#/components/schemas/'
 *         EventPostponed:
 *           description: The event has been postponed and no new date has been set. The event's previousStartDate should be set.
 *           $ref: '#/components/schemas/'
 *         isPartOf:
 *           description: Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
 *           type: string
 *         longitude:
 *           description: The longitude of a location. For example ```-122.08585``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
 *           type: number
 *         trainingSalary:
 *           description: The estimated salary earned while in the program.
 *           $ref: '#/components/schemas/monetaryamountdistribution'
 *         Legislation:
 *           description: A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
 *           $ref: '#/components/schemas/'
 *         dateRead:
 *           description: The date/time at which the message has been read by the recipient if a single recipient exists.
 *           type: string
 *         ownershipFundingInfo:
 *           description: For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 *           $ref: '#/components/schemas/creativework'
 *         verificationFactCheckingPolicy:
 *           description: Disclosure about verification and fact-checking processes for a [[NewsMediaOrganization]] or other fact-checking [[Organization]].
 *           type: string
 *         Radiography:
 *           description: Radiography is an imaging technique that uses electromagnetic radiation other than visible light, especially X-rays, to view the internal structure of a non-uniformly composed and opaque object such as the human body.
 *           $ref: '#/components/schemas/'
 *         fuelType:
 *           description: The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
 *           type: string
 *         item:
 *           description: An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
 *           $ref: '#/components/schemas/thing'
 *         InvoicePrice:
 *           description: Represents the invoice price of an offered product.
 *           $ref: '#/components/schemas/'
 *         CaseSeries:
 *           description: A case series (also known as a clinical series) is a medical research study that tracks patients with a known exposure given similar treatment or examines their medical records for exposure and outcome. A case series can be retrospective or prospective and usually involves a smaller number of patients than the more powerful case-control studies or randomized controlled trials. Case series may be consecutive or non-consecutive, depending on whether all cases presenting to the reporting authors over a period of time were included, or only a selection.
 *           $ref: '#/components/schemas/'
 *         TraditionalChinese:
 *           description: A system of medicine based on common theoretical concepts that originated in China and evolved over thousands of years, that uses herbs, acupuncture, exercise, massage, dietary therapy, and other methods to treat a wide range of conditions.
 *           $ref: '#/components/schemas/'
 *         ConvenienceStore:
 *           description: A convenience store.
 *           $ref: '#/components/schemas/'
 *         PhysicalExam:
 *           description: A type of physical examination of a patient performed by a physician. 
 *           $ref: '#/components/schemas/'
 *         discountCurrency:
 *           description: The currency of the discount.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *           type: string
 *         geo:
 *           description: The geo coordinates of the place.
 *           $ref: '#/components/schemas/geoshape'
 *         WearableMeasurementWaist:
 *           description: Measurement of the waist section, for example of pants
 *           $ref: '#/components/schemas/'
 *         healthPlanCopayOption:
 *           description: Whether the copay is before or after deductible, etc. TODO: Is this a closed set?
 *           type: string
 *         OutletStore:
 *           description: An outlet store.
 *           $ref: '#/components/schemas/'
 *         contentType:
 *           description: The supported content type(s) for an EntryPoint response.
 *           type: string
 *         EducationalOrganization:
 *           description: An educational organization.
 *           $ref: '#/components/schemas/'
 *         TherapeuticProcedure:
 *           description: A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 *           $ref: '#/components/schemas/'
 *         TransitMap:
 *           description: A transit map.
 *           $ref: '#/components/schemas/'
 *         ReportageNewsArticle:
 *           description: The [[ReportageNewsArticle]] type is a subtype of [[NewsArticle]] representing news articles which are the result of journalistic news reporting conventions.In practice many news publishers produce a wide variety of article types, many of which might be considered a [[NewsArticle]] but not a [[ReportageNewsArticle]]. For example, opinion pieces, reviews, analysis, sponsored or satirical articles, or articles that combine several of these elements.The [[ReportageNewsArticle]] type is based on a stricter ideal for "news" as a work of journalism, with articles based on factual information either observed or verified by the author, or reported and verified from knowledgeable sources. This often includes perspectives from multiple viewpoints on a particular issue (distinguishing news reports from public relations or propaganda). News reports in the [[ReportageNewsArticle]] sense de-emphasize the opinion of the author, with commentary and value judgements typically expressed elsewhere.A [[ReportageNewsArticle]] which goes deeper into analysis can also be marked with an additional type of [[AnalysisNewsArticle]].
 *           $ref: '#/components/schemas/'
 *         game:
 *           description: Video game which is played on this server.
 *           $ref: '#/components/schemas/videogame'
 *         connectedTo:
 *           description: Other anatomical structures to which this structure is connected.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         CT:
 *           description: X-ray computed tomography imaging.
 *           $ref: '#/components/schemas/'
 *         ItemListOrderAscending:
 *           description: An ItemList ordered with lower values listed first.
 *           $ref: '#/components/schemas/'
 *         functionalClass:
 *           description: The degree of mobility the joint allows.
 *           $ref: '#/components/schemas/medicalentity'
 *         gettingTestedInfo:
 *           description: Information about getting tested (for a [[MedicalCondition]]), e.g. in the context of a pandemic.
 *           $ref: '#/components/schemas/webcontent'
 *         CreativeWorkSeries:
 *           description: A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike [[ItemList]] which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).\n\nSpecific subtypes are available for describing [[TVSeries]], [[RadioSeries]], [[MovieSeries]], [[BookSeries]], [[Periodical]] and [[VideoGameSeries]]. In each case, the [[hasPart]] / [[isPartOf]] properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.\n\nIt is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate. 
 *           $ref: '#/components/schemas/'
 *         MovieTheater:
 *           description: A movie theater.
 *           $ref: '#/components/schemas/'
 *         MoveAction:
 *           description: The act of an agent relocating to a place.\n\nRelated actions:\n\n* [[TransferAction]]: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 *           $ref: '#/components/schemas/'
 *         guidelineDate:
 *           description: Date on which this guideline's recommendation was made.
 *           type: string
 *         WinAction:
 *           description: The act of achieving victory in a competitive activity.
 *           $ref: '#/components/schemas/'
 *         businessDays:
 *           description: Days of the week when the merchant typically operates, indicated via opening hours markup.
 *           $ref: '#/components/schemas/openinghoursspecification'
 *         Downpayment:
 *           description: Represents the downpayment (up-front payment) price component of the total price for an offered product that has additional installment payments.
 *           $ref: '#/components/schemas/'
 *         Hospital:
 *           description: A hospital.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupWomens:
 *           description: Size group "Womens" for wearables.
 *           $ref: '#/components/schemas/'
 *         seller:
 *           description: An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider.
 *           $ref: '#/components/schemas/organization'
 *         TieAction:
 *           description: The act of reaching a draw in a competitive activity.
 *           $ref: '#/components/schemas/'
 *         AchieveAction:
 *           description: The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.
 *           $ref: '#/components/schemas/'
 *         PronounceableText:
 *           description: Data type: PronounceableText.
 *           $ref: '#/components/schemas/'
 *         BookSeries:
 *           description: A series of books. Included books can be indicated with the hasPart property.
 *           $ref: '#/components/schemas/'
 *         Nose:
 *           description: Nose function assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         EndorsementRating:
 *           description: An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a"Like" or "+1" on a social network. It can be considered the [[result]] of an [[EndorseAction]] in which the [[object]] of the action is rated positively bysome [[agent]]. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the [[Action]].An [[EndorsementRating]] may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.
 *           $ref: '#/components/schemas/'
 *         mealService:
 *           description: Description of the meals that will be provided or available for purchase.
 *           type: string
 *         reviewAspect:
 *           description: This Review or Rating is relevant to this part or facet of the itemReviewed.
 *           type: string
 *         HowTo:
 *           description: Instructions that explain how to achieve a result by performing a sequence of steps.
 *           $ref: '#/components/schemas/'
 *         billingPeriod:
 *           description: The time interval used to compute the invoice.
 *           $ref: '#/components/schemas/duration'
 *         MedicalProcedure:
 *           description: A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 *           $ref: '#/components/schemas/'
 *         Embassy:
 *           description: An embassy.
 *           $ref: '#/components/schemas/'
 *         StagesHealthAspect:
 *           description: Stages that can be observed from a topic.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupBoys:
 *           description: Size group "Boys" for wearables.
 *           $ref: '#/components/schemas/'
 *         InternationalTrial:
 *           description: An international trial.
 *           $ref: '#/components/schemas/'
 *         runtimePlatform:
 *           description: Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
 *           type: string
 *         Thesis:
 *           description: A thesis or dissertation document submitted in support of candidature for an academic degree or professional qualification.
 *           $ref: '#/components/schemas/'
 *         suggestedGender:
 *           description: The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
 *           type: string
 *         CableOrSatelliteService:
 *           description: A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
 *           $ref: '#/components/schemas/'
 *         bodyType:
 *           description: Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
 *           $ref: '#/components/schemas/qualitativevalue'
 *         SearchResultsPage:
 *           description: Web page type: Search results page.
 *           $ref: '#/components/schemas/'
 *         Hotel:
 *           description: A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         JoinAction:
 *           description: An agent joins an event/group with participants/friends at a location.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, JoinAction refers to joining a group/team of people.\n* [[SubscribeAction]]: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.\n* [[FollowAction]]: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 *           $ref: '#/components/schemas/'
 *         additionalVariable:
 *           description: Any additional component of the exercise prescription that may need to be articulated to the patient. This may include the order of exercises, the number of repetitions of movement, quantitative distance, progressions over time, etc.
 *           type: string
 *         wheelbase:
 *           description: The distance between the centers of the front and rear wheels.\n\nTypical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
 *           $ref: '#/components/schemas/quantitativevalue'
 *         EducationalOccupationalCredential:
 *           description: An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 *           $ref: '#/components/schemas/'
 *         EUEnergyEfficiencyCategoryA:
 *           description: Represents EU Energy Efficiency Class A as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         MovingCompany:
 *           description: A moving company.
 *           $ref: '#/components/schemas/'
 *         numberOfPlayers:
 *           description: Indicate how many people can play this game (minimum, maximum, or range).
 *           $ref: '#/components/schemas/quantitativevalue'
 *         SafetyHealthAspect:
 *           description: Content about the safety-related aspects of a health topic.
 *           $ref: '#/components/schemas/'
 *         Occupation:
 *           description: A profession, may involve prolonged training and/or a formal qualification.
 *           $ref: '#/components/schemas/'
 *         programmingLanguage:
 *           description: The computer programming language.
 *           type: string
 *         aircraft:
 *           description: The kind of aircraft (e.g., "Boeing 747").
 *           type: string
 *         DayOfWeek:
 *           description: The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.Originally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org. 
 *           $ref: '#/components/schemas/'
 *         ProductReturnNotPermitted:
 *           description: ProductReturnNotPermitted: product returns are not permitted.
 *           $ref: '#/components/schemas/'
 *         masthead:
 *           description: For a [[NewsMediaOrganization]], a link to the masthead page or a page listing top editorial management.
 *           type: string
 *         serviceOutput:
 *           description: The tangible thing generated by the service, e.g. a passport, permit, etc.
 *           $ref: '#/components/schemas/thing'
 *         UserPlays:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         AppendAction:
 *           description: The act of inserting at the end if an ordered collection.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501d:
 *           description: Nonprofit501d: Non-profit type referring to Religious and Apostolic Associations.
 *           $ref: '#/components/schemas/'
 *         GatedResidenceCommunity:
 *           description: Residence type: Gated community.
 *           $ref: '#/components/schemas/'
 *         servesCuisine:
 *           description: The cuisine of the restaurant.
 *           type: string
 *         associatedAnatomy:
 *           description: The anatomy of the underlying organ system or structures associated with this entity.
 *           $ref: '#/components/schemas/anatomicalsystem'
 *         ReadPermission:
 *           description: Permission to read or view the document.
 *           $ref: '#/components/schemas/'
 *         subTrip:
 *           description: Identifies a [[Trip]] that is a subTrip of this Trip. For example Day 1, Day 2, etc. of a multi-day trip.
 *           $ref: '#/components/schemas/trip'
 *         Oncologic:
 *           description: A specific branch of medical science that deals with benign and malignant tumors, including the study of their development, diagnosis, treatment and prevention.
 *           $ref: '#/components/schemas/'
 *         gtin12:
 *           description: The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *           type: string
 *         actionStatus:
 *           description: Indicates the current disposition of the Action.
 *           $ref: '#/components/schemas/actionstatustype'
 *         WebPageElement:
 *           description: A web page element, like a table or an image.
 *           $ref: '#/components/schemas/'
 *         MedicalDevicePurpose:
 *           description: Categories of medical devices, organized by the purpose or intended use of the device.
 *           $ref: '#/components/schemas/'
 *         WearableMeasurementLength:
 *           description: Represents the length, for example of a dress
 *           $ref: '#/components/schemas/'
 *         PET:
 *           description: Positron emission tomography imaging.
 *           $ref: '#/components/schemas/'
 *         BenefitsHealthAspect:
 *           description: Content about the benefits and advantages of usage or utilization of topic.
 *           $ref: '#/components/schemas/'
 *         DepartAction:
 *           description: The act of departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
 *           $ref: '#/components/schemas/'
 *         GeneralContractor:
 *           description: A general contractor.
 *           $ref: '#/components/schemas/'
 *         ActionAccessSpecification:
 *           description: A set of requirements that a must be fulfilled in order to perform an Action.
 *           $ref: '#/components/schemas/'
 *         foodEvent:
 *           description: A sub property of location. The specific food event where the action occurred.
 *           $ref: '#/components/schemas/foodevent'
 *         OrderProblem:
 *           description: OrderStatus representing that there is a problem with the order.
 *           $ref: '#/components/schemas/'
 *         Pulmonary:
 *           description: A specific branch of medical science that pertains to the study of the respiratory system and its respective disease states.
 *           $ref: '#/components/schemas/'
 *         globalLocationNumber:
 *           description: The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 *           type: string
 *         Musculoskeletal:
 *           description: A specific branch of medical science that pertains to diagnosis and treatment of disorders of muscles, ligaments and skeletal system.
 *           $ref: '#/components/schemas/'
 *         WarrantyPromise:
 *           description: A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 *           $ref: '#/components/schemas/'
 *         NLNonprofitType:
 *           description: NLNonprofitType: Non-profit organization type originating from the Netherlands.
 *           $ref: '#/components/schemas/'
 *         BodyMeasurementArm:
 *           description: Arm length (measured between arms/shoulder line intersection and the prominent wrist bone). Used, for example, to fit shirts.
 *           $ref: '#/components/schemas/'
 *         DeliveryChargeSpecification:
 *           description: The price for the delivery of an offer using a particular delivery method.
 *           $ref: '#/components/schemas/'
 *         knowsAbout:
 *           description: Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 *           type: string
 *         sportsEvent:
 *           description: A sub property of location. The sports event where this action occurred.
 *           $ref: '#/components/schemas/sportsevent'
 *         numberOfPartialBathrooms:
 *           description: Number of partial bathrooms - The total number of half and ¼ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsPartial field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsPartial+Field). 
 *           type: number
 *         isSimilarTo:
 *           description: A pointer to another, functionally similar product (or multiple products).
 *           $ref: '#/components/schemas/service'
 *         albumRelease:
 *           description: A release of this album.
 *           $ref: '#/components/schemas/musicrelease'
 *         estimatedSalary:
 *           description: An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
 *           $ref: '#/components/schemas/monetaryamount'
 *         expectsAcceptanceOf:
 *           description: An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.
 *           $ref: '#/components/schemas/offer'
 *         starRating:
 *           description: An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).
 *           $ref: '#/components/schemas/rating'
 *         AudiobookFormat:
 *           description: Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties.
 *           $ref: '#/components/schemas/'
 *         contactPoint:
 *           description: A contact point for a person or organization.
 *           $ref: '#/components/schemas/contactpoint'
 *         seasons:
 *           description: A season in a media series.
 *           $ref: '#/components/schemas/creativeworkseason'
 *         video:
 *           description: An embedded video object.
 *           $ref: '#/components/schemas/videoobject'
 *         shippingDestination:
 *           description: indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges.
 *           $ref: '#/components/schemas/definedregion'
 *         hasHealthAspect:
 *           description: Indicates the aspect or aspects specifically addressed in some [[HealthTopicContent]]. For example, that the content is an overview, or that it talks about treatment, self-care, treatments or their side-effects.
 *           $ref: '#/components/schemas/healthaspectenumeration'
 *         VitalSign:
 *           description: Vital signs are measures of various physiological functions in order to assess the most basic body functions.
 *           $ref: '#/components/schemas/'
 *         workTranslation:
 *           description: A work that is a translation of the content of this work. e.g. 西遊記 has an English workTranslation “Journey to the West”,a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese translation Tây du ký bình khảo.
 *           $ref: '#/components/schemas/creativework'
 *         recognizingAuthority:
 *           description: If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
 *           $ref: '#/components/schemas/organization'
 *         cholesterolContent:
 *           description: The number of milligrams of cholesterol.
 *           $ref: '#/components/schemas/mass'
 *         addressLocality:
 *           description: The locality in which the street address is, and which is in the region. For example, Mountain View.
 *           type: string
 *         defaultValue:
 *           description: The default value of the input. For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.
 *           type: string
 *         userInteractionCount:
 *           description: The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.
 *           $ref: '#/components/schemas/integer'
 *         MRI:
 *           description: Magnetic resonance imaging.
 *           $ref: '#/components/schemas/'
 *         TransformedContent:
 *           description: Content coded 'transformed content' in a [[MediaReview]], considered in the context of how it was published or shared.For a [[VideoObject]] to be 'transformed content': or all of the video has been manipulated to transform the footage itself. This category includes using tools like the Adobe Suite to change the speed of the video, add or remove visual elements or dub audio. Deepfakes are also a subset of transformation.For an [[ImageObject]] to be transformed content': Adding or deleting visual elements to give the image a different meaning with the intention to mislead.For an [[ImageObject]] with embedded text to be 'transformed content': Adding or deleting visual elements to give the image a different meaning with the intention to mislead.For an [[AudioObject]] to be 'transformed content': Part or all of the audio has been manipulated to alter the words or sounds, or the audio has been synthetically generated, such as to create a sound-alike voice.
 *           $ref: '#/components/schemas/'
 *         codeSampleType:
 *           description: What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
 *           type: string
 *         healthCondition:
 *           description: Specifying the health condition(s) of a patient, medical study, or other target audience.
 *           $ref: '#/components/schemas/medicalcondition'
 *         ContagiousnessHealthAspect:
 *           description: Content about contagion mechanisms and contagiousness information over the topic.
 *           $ref: '#/components/schemas/'
 *         jobTitle:
 *           description: The job title of the person (for example, Financial Manager).
 *           type: string
 *         employmentType:
 *           description: Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).
 *           type: string
 *         MulticellularParasite:
 *           description: Multicellular parasite that causes an infection.
 *           $ref: '#/components/schemas/'
 *         stepValue:
 *           description: The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.
 *           type: number
 *         playersOnline:
 *           description: Number of players on the server.
 *           $ref: '#/components/schemas/integer'
 *         BodyMeasurementTypeEnumeration:
 *           description: Enumerates types (or dimensions) of a person's body measurements, for example for fitting of clothes.
 *           $ref: '#/components/schemas/'
 *         season:
 *           description: A season in a media series.
 *           $ref: '#/components/schemas/creativeworkseason'
 *         workPerformed:
 *           description: A work performed in some event, for example a play performed in a TheaterEvent.
 *           $ref: '#/components/schemas/creativework'
 *         naturalProgression:
 *           description: The expected progression of the condition if it is not treated and allowed to progress naturally.
 *           type: string
 *         Property:
 *           description: A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 *           $ref: '#/components/schemas/'
 *         membershipNumber:
 *           description: A unique identifier for the membership.
 *           type: string
 *         possibleTreatment:
 *           description: A possible treatment to address this condition, sign or symptom.
 *           $ref: '#/components/schemas/medicaltherapy'
 *         BroadcastRelease:
 *           description: BroadcastRelease.
 *           $ref: '#/components/schemas/'
 *         VisualArtwork:
 *           description: A work of art that is primarily visual in character.
 *           $ref: '#/components/schemas/'
 *         eventSchedule:
 *           description: Associates an [[Event]] with a [[Schedule]]. There are circumstances where it is preferable to share a schedule for a series of repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An [[Event]] that is associated with a [[Schedule]] using this property should not have [[startDate]] or [[endDate]] properties. These are instead defined within the associated [[Schedule]], this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months or seasons.
 *           $ref: '#/components/schemas/schedule'
 *         realEstateAgent:
 *           description: A sub property of participant. The real estate agent involved in the action.
 *           $ref: '#/components/schemas/realestateagent'
 *         sdPublisher:
 *           description: Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The[[sdPublisher]] property helps make such practices more explicit.
 *           $ref: '#/components/schemas/person'
 *         BodyMeasurementChest:
 *           description: Maximum girth of chest. Used, for example, to fit men's suits.
 *           $ref: '#/components/schemas/'
 *         OrderInTransit:
 *           description: OrderStatus representing that an order is in transit.
 *           $ref: '#/components/schemas/'
 *         Brewery:
 *           description: Brewery.
 *           $ref: '#/components/schemas/'
 *         RsvpResponseMaybe:
 *           description: The invitee may or may not attend.
 *           $ref: '#/components/schemas/'
 *         educationalFramework:
 *           description: The framework to which the resource being described is aligned.
 *           type: string
 *         supply:
 *           description: A sub-property of instrument. A supply consumed when performing instructions or a direction.
 *           type: string
 *         FDAcategoryB:
 *           description: A designation by the US FDA signifying that animal reproduction studies have failed to demonstrate a risk to the fetus and there are no adequate and well-controlled studies in pregnant women.
 *           $ref: '#/components/schemas/'
 *         Rating:
 *           description: A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 *           $ref: '#/components/schemas/'
 *         NonprofitANBI:
 *           description: NonprofitANBI: Non-profit type referring to a Public Benefit Organization (NL).
 *           $ref: '#/components/schemas/'
 *         NotYetRecruiting:
 *           description: Not yet recruiting.
 *           $ref: '#/components/schemas/'
 *         MedicalTestPanel:
 *           description: Any collection of tests commonly ordered together.
 *           $ref: '#/components/schemas/'
 *         RoofingContractor:
 *           description: A roofing contractor.
 *           $ref: '#/components/schemas/'
 *         pagination:
 *           description: Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
 *           type: string
 *         Online:
 *           description: Game server status: Online. Server is available.
 *           $ref: '#/components/schemas/'
 *         AggregateRating:
 *           description: The average rating based on multiple ratings or reviews.
 *           $ref: '#/components/schemas/'
 *         knowsLanguage:
 *           description: Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 *           type: string
 *         hasOccupation:
 *           description: The Person's occupation. For past professions, use Role for expressing dates.
 *           $ref: '#/components/schemas/occupation'
 *         postalCodeRange:
 *           description: A defined range of postal codes.
 *           $ref: '#/components/schemas/postalcoderangespecification'
 *         creator:
 *           description: The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
 *           $ref: '#/components/schemas/organization'
 *         hiringOrganization:
 *           description: Organization offering the job position.
 *           $ref: '#/components/schemas/organization'
 *         totalPaymentDue:
 *           description: The total amount due.
 *           $ref: '#/components/schemas/monetaryamount'
 *         transcript:
 *           description: If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
 *           type: string
 *         GenderType:
 *           description: An enumeration of genders.
 *           $ref: '#/components/schemas/'
 *         QualitativeValue:
 *           description: A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 *           $ref: '#/components/schemas/'
 *         OfferShippingDetails:
 *           description: OfferShippingDetails represents information about shipping destinations.Multiple of these entities can be used to represent different shipping rates for different destinations:One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.Multiple of these entities can be used to represent different shipping costs and delivery times.Two entities that are identical but differ in rate and time:e.g. Cheaper and slower: $5 in 5-7daysor Fast and expensive: $15 in 1-2 days.
 *           $ref: '#/components/schemas/'
 *         secondaryPrevention:
 *           description: A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.
 *           $ref: '#/components/schemas/medicaltherapy'
 *         URL:
 *           description: Data type: URL.
 *           $ref: '#/components/schemas/'
 *         playMode:
 *           description: Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time.
 *           $ref: '#/components/schemas/gameplaymode'
 *         attendees:
 *           description: A person attending the event.
 *           $ref: '#/components/schemas/organization'
 *         PaymentPastDue:
 *           description: The payment is due and considered late.
 *           $ref: '#/components/schemas/'
 *         Flexibility:
 *           description: Physical activity that is engaged in to improve joint and muscle flexibility.
 *           $ref: '#/components/schemas/'
 *         thumbnailUrl:
 *           description: A thumbnail image relevant to the Thing.
 *           type: string
 *         geoCoveredBy:
 *           description: Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/geospatialgeometry'
 *         inDefinedTermSet:
 *           description: A [[DefinedTermSet]] that contains this term.
 *           $ref: '#/components/schemas/definedtermset'
 *         WearableSizeGroupJuniors:
 *           description: Size group "Juniors" for wearables.
 *           $ref: '#/components/schemas/'
 *         followee:
 *           description: A sub property of object. The person or organization being followed.
 *           $ref: '#/components/schemas/organization'
 *         ArtGallery:
 *           description: An art gallery.
 *           $ref: '#/components/schemas/'
 *         potentialAction:
 *           description: Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
 *           $ref: '#/components/schemas/action'
 *         ratingValue:
 *           description: The rating for the content.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *           type: number
 *         MedicalEvidenceLevel:
 *           description: Level of evidence for a medical guideline. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         partOfTrip:
 *           description: Identifies that this [[Trip]] is a subTrip of another Trip. For example Day 1, Day 2, etc. of a multi-day trip.
 *           $ref: '#/components/schemas/trip'
 *         leiCode:
 *           description: An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 *           type: string
 *         Bone:
 *           description: Rigid connective tissue that comprises up the skeletal structure of the human body.
 *           $ref: '#/components/schemas/'
 *         coursePrerequisites:
 *           description: Requirements for taking the Course. May be completion of another [[Course]] or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using [[AlignmentObject]].
 *           $ref: '#/components/schemas/course'
 *         sensoryRequirement:
 *           description: A description of any sensory requirements and levels necessary to function on the job, including hearing and vision. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
 *           $ref: '#/components/schemas/definedterm'
 *         toRecipient:
 *           description: A sub property of recipient. The recipient who was directly sent the message.
 *           $ref: '#/components/schemas/audience'
 *         CleaningFee:
 *           description: Represents the cleaning fee part of the total price for an offered product, for example a vacation rental.
 *           $ref: '#/components/schemas/'
 *         translationOfWork:
 *           description: The work that this work has been translated from. e.g. 物种起源 is a translationOf “On the Origin of Species”
 *           $ref: '#/components/schemas/creativework'
 *         menu:
 *           description: Either the actual menu as a structured representation, as text, or a URL of the menu.
 *           $ref: '#/components/schemas/menu'
 *         reviewBody:
 *           description: The actual body of the review.
 *           type: string
 *         UserBlocks:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         State:
 *           description: A state or province of a country.
 *           $ref: '#/components/schemas/'
 *         founder:
 *           description: A person who founded this organization.
 *           $ref: '#/components/schemas/person'
 *         minPrice:
 *           description: The lowest price if the price is a range.
 *           type: number
 *         ControlAction:
 *           description: An agent controls a device or application.
 *           $ref: '#/components/schemas/'
 *         yearlyRevenue:
 *           description: The size of the business in annual revenue.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         lesserOrEqual:
 *           description: This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         Organization:
 *           description: An organization such as a school, NGO, corporation, club, etc.
 *           $ref: '#/components/schemas/'
 *         departureBoatTerminal:
 *           description: The terminal or port from which the boat departs.
 *           $ref: '#/components/schemas/boatterminal'
 *         OrderDelivered:
 *           description: OrderStatus representing successful delivery of an order.
 *           $ref: '#/components/schemas/'
 *         SheetMusic:
 *           description: Printed music, as opposed to performed or recorded music.
 *           $ref: '#/components/schemas/'
 *         HealthPlanFormulary:
 *           description: For a given health insurance plan, the specification for costs and coverage of prescription drugs. 
 *           $ref: '#/components/schemas/'
 *         strengthUnit:
 *           description: The units of an active ingredient's strength, e.g. mg.
 *           type: string
 *         applicationStartDate:
 *           description: The date at which the program begins collecting applications for the next enrollment cycle.
 *           type: string
 *         ReviewAction:
 *           description: The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 *           $ref: '#/components/schemas/'
 *         broadcastChannelId:
 *           description: The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.
 *           type: string
 *         Apartment:
 *           description: An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).
 *           $ref: '#/components/schemas/'
 *         MedicalGuidelineRecommendation:
 *           description: A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 *           $ref: '#/components/schemas/'
 *         numberOfPages:
 *           description: The number of pages in the book.
 *           $ref: '#/components/schemas/integer'
 *         EUEnergyEfficiencyCategoryE:
 *           description: Represents EU Energy Efficiency Class E as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         StagedContent:
 *           description: Content coded 'staged content' in a [[MediaReview]], considered in the context of how it was published or shared.For a [[VideoObject]] to be 'staged content': A video that has been created using actors or similarly contrived.For an [[ImageObject]] to be 'staged content': An image that was created using actors or similarly contrived, such as a screenshot of a fake tweet.For an [[ImageObject]] with embedded text to be 'staged content': An image that was created using actors or similarly contrived, such as a screenshot of a fake tweet.For an [[AudioObject]] to be 'staged content': Audio that has been created using actors or similarly contrived.
 *           $ref: '#/components/schemas/'
 *         industry:
 *           description: The industry associated with the job position.
 *           type: string
 *         GovernmentPermit:
 *           description: A permit issued by a government agency.
 *           $ref: '#/components/schemas/'
 *         leaseLength:
 *           description: Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Rheumatologic:
 *           description: A specific branch of medical science that deals with the study and treatment of rheumatic, autoimmune or joint diseases.
 *           $ref: '#/components/schemas/'
 *         ArriveAction:
 *           description: The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.
 *           $ref: '#/components/schemas/'
 *         TrainStation:
 *           description: A train station.
 *           $ref: '#/components/schemas/'
 *         DeliveryMethod:
 *           description: A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DeliveryModeDirectDownload\n* http://purl.org/goodrelations/v1#DeliveryModeFreight\n* http://purl.org/goodrelations/v1#DeliveryModeMail\n* http://purl.org/goodrelations/v1#DeliveryModeOwnFleet\n* http://purl.org/goodrelations/v1#DeliveryModePickUp\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS 
 *           $ref: '#/components/schemas/'
 *         maximumIntake:
 *           description: Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 *           $ref: '#/components/schemas/maximumdoseschedule'
 *         Chapter:
 *           description: One of the sections into which a book is divided. A chapter usually has a section number or a name.
 *           $ref: '#/components/schemas/'
 *         titleEIDR:
 *           description: An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing at the most general/abstract level, a work of film or television.For example, the motion picture known as "Ghostbusters" has a titleEIDR of "10.5240/7EC7-228A-510A-053E-CBB8-J". This title (or work) may have several variants, which EIDR calls "edits". See [[editEIDR]].Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
 *           type: string
 *         MedicalBusiness:
 *           description: A particular physical or virtual business of an organization for medical purposes. Examples of MedicalBusiness include differents business run by health professionals.
 *           $ref: '#/components/schemas/'
 *         Chiropractic:
 *           description: A system of medicine focused on the relationship between the body's structure, mainly the spine, and its functioning.
 *           $ref: '#/components/schemas/'
 *         Vehicle:
 *           description: A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 *           $ref: '#/components/schemas/'
 *         EventCancelled:
 *           description: The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s).
 *           $ref: '#/components/schemas/'
 *         engineType:
 *           description: The type of engine or engines powering the vehicle.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         Nonprofit501c4:
 *           description: Nonprofit501c4: Non-profit type referring to Civic Leagues, Social Welfare Organizations, and Local Associations of Employees.
 *           $ref: '#/components/schemas/'
 *         MusicPlaylist:
 *           description: A collection of music tracks in playlist form.
 *           $ref: '#/components/schemas/'
 *         BloodTest:
 *           description: A medical test performed on a sample of a patient's blood.
 *           $ref: '#/components/schemas/'
 *         Book:
 *           description: A book.
 *           $ref: '#/components/schemas/'
 *         PrescriptionOnly:
 *           description: Available by prescription only.
 *           $ref: '#/components/schemas/'
 *         drugClass:
 *           description: The class of drug this belongs to (e.g., statins).
 *           $ref: '#/components/schemas/drugclass'
 *         RentalCarReservation:
 *           description: A reservation for a rental car.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *           $ref: '#/components/schemas/'
 *         paymentDue:
 *           description: The date that payment is due.
 *           type: string
 *         Project:
 *           description: An enterprise (potentially individual but typically collaborative), planned to achieve a particular aim.Use properties from [[Organization]], [[subOrganization]]/[[parentOrganization]] to indicate project sub-structures. 
 *           $ref: '#/components/schemas/'
 *         performerIn:
 *           description: Event that this person is a performer or participant in.
 *           $ref: '#/components/schemas/event'
 *         Urologic:
 *           description: A specific branch of medical science that is concerned with the diagnosis and treatment of diseases pertaining to the urinary tract and the urogenital system.
 *           $ref: '#/components/schemas/'
 *         minimumPaymentDue:
 *           description: The minimum payment required at this time.
 *           $ref: '#/components/schemas/pricespecification'
 *         valueRequired:
 *           description: Whether the property must be filled in to complete the action. Default is false.
 *           $ref: '#/components/schemas/boolean'
 *         DrugClass:
 *           description: A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 *           $ref: '#/components/schemas/'
 *         UnRegisterAction:
 *           description: The act of un-registering from a service.\n\nRelated actions:\n\n* [[RegisterAction]]: antonym of UnRegisterAction.\n* [[LeaveAction]]: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 *           $ref: '#/components/schemas/'
 *         healthPlanDrugTier:
 *           description: The tier(s) of drugs offered by this formulary or insurance plan.
 *           type: string
 *         WearableSizeGroupInfants:
 *           description: Size group "Infants" for wearables.
 *           $ref: '#/components/schemas/'
 *         vehicleInteriorType:
 *           description: The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
 *           type: string
 *         tongueWeight:
 *           description: The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         MerchantReturnUnspecified:
 *           description: MerchantReturnUnspecified: a product return policy is not specified here.
 *           $ref: '#/components/schemas/'
 *         sportsTeam:
 *           description: A sub property of participant. The sports team that participated on this action.
 *           $ref: '#/components/schemas/sportsteam'
 *         numberOfAvailableAccommodationUnits:
 *           description: Indicates the number of available accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAccommodationUnits]].
 *           $ref: '#/components/schemas/quantitativevalue'
 *         variantCover:
 *           description: A description of the variant cover for the issue, if the issue is a variant printing. For example, "Bryan Hitch Variant Cover" or "2nd Printing Variant".
 *           type: string
 *         mainEntityOfPage:
 *           description: Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See [background notes](/docs/datamodel.html#mainEntityBackground) for details.
 *           type: string
 *         subTest:
 *           description: A component test of the panel.
 *           $ref: '#/components/schemas/medicaltest'
 *         InfectiousAgentClass:
 *           description: Classes of agents or pathogens that transmit infectious diseases. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         Campground:
 *           description: A camping site, campsite, or [[Campground]] is a place used for overnight stay in the outdoors, typically containing individual [[CampingPitch]] locations. \n\nIn British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\nSee also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).
 *           $ref: '#/components/schemas/'
 *         playerType:
 *           description: Player type required&#x2014;for example, Flash or Silverlight.
 *           type: string
 *         contentReferenceTime:
 *           description: The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
 *           type: string
 *         ListItem:
 *           description: An list item, e.g. a step in a checklist or how-to description.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c7:
 *           description: Nonprofit501c7: Non-profit type referring to Social and Recreational Clubs.
 *           $ref: '#/components/schemas/'
 *         availableService:
 *           description: A medical service available from this provider.
 *           $ref: '#/components/schemas/medicaltest'
 *         HealthInsurancePlan:
 *           description: A US-style health insurance plan, including PPOs, EPOs, and HMOs. 
 *           $ref: '#/components/schemas/'
 *         VideoGame:
 *           description: A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 *           $ref: '#/components/schemas/'
 *         discusses:
 *           description: Specifies the CreativeWork associated with the UserComment.
 *           $ref: '#/components/schemas/creativework'
 *         amount:
 *           description: The amount of money.
 *           type: number
 *         eligibleRegion:
 *           description: The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]]. 
 *           $ref: '#/components/schemas/place'
 *         datePublished:
 *           description: Date of first broadcast/publication.
 *           type: string
 *         BreadcrumbList:
 *           description: A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.\n\nThe [[position]] property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an [[itemListOrder]] of [[ItemListOrderAscending]] (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list. 
 *           $ref: '#/components/schemas/'
 *         confirmationNumber:
 *           description: A number that confirms the given order or payment has been received.
 *           type: string
 *         Sculpture:
 *           description: A piece of sculpture.
 *           $ref: '#/components/schemas/'
 *         applicationCategory:
 *           description: Type of software application, e.g. 'Game, Multimedia'.
 *           type: string
 *         maxValue:
 *           description: The upper value of some characteristic or property.
 *           type: number
 *         warranty:
 *           description: The warranty promise(s) included in the offer.
 *           $ref: '#/components/schemas/warrantypromise'
 *         includedRiskFactor:
 *           description: A modifiable or non-modifiable risk factor included in the calculation, e.g. age, coexisting condition.
 *           $ref: '#/components/schemas/medicalriskfactor'
 *         codeRepository:
 *           description: Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).
 *           type: string
 *         vehicleEngine:
 *           description: Information about the engine or engines of the vehicle.
 *           $ref: '#/components/schemas/enginespecification'
 *         OpenTrial:
 *           description: A trial design in which the researcher knows the full details of the treatment, and so does the patient.
 *           $ref: '#/components/schemas/'
 *         dateVehicleFirstRegistered:
 *           description: The date of the first registration of the vehicle with the respective public authorities.
 *           type: string
 *         FMRadioChannel:
 *           description: A radio channel that uses FM.
 *           $ref: '#/components/schemas/'
 *         speed:
 *           description: The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by [[maxValue]] should be the maximum speed achievable under regular conditions.\n\nTypical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot\n\n*Note 1: Use [[minValue]] and [[maxValue]] to indicate the range. Typically, the minimal value is zero.\n* Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the [[valueReference]] property.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Wednesday:
 *           description: The day of the week between Tuesday and Thursday.
 *           $ref: '#/components/schemas/'
 *         MusicStore:
 *           description: A music store.
 *           $ref: '#/components/schemas/'
 *         Suite:
 *           description: A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         Table:
 *           description: A table on a Web page.
 *           $ref: '#/components/schemas/'
 *         borrower:
 *           description: A sub property of participant. The person that borrows the object being lent.
 *           $ref: '#/components/schemas/person'
 *         Pond:
 *           description: A pond.
 *           $ref: '#/components/schemas/'
 *         RearWheelDriveConfiguration:
 *           description: Real-wheel drive is a transmission layout where the engine drives the rear wheels.
 *           $ref: '#/components/schemas/'
 *         releaseOf:
 *           description: The album this is a release of.
 *           $ref: '#/components/schemas/musicalbum'
 *         Text:
 *           description: Data type: Text.
 *           $ref: '#/components/schemas/'
 *         RentalVehicleUsage:
 *           description: Indicates the usage of the vehicle as a rental car.
 *           $ref: '#/components/schemas/'
 *         PoliceStation:
 *           description: A police station.
 *           $ref: '#/components/schemas/'
 *         underName:
 *           description: The person or organization the reservation or ticket is for.
 *           $ref: '#/components/schemas/organization'
 *         safetyConsideration:
 *           description: Any potential safety concern associated with the supplement. May include interactions with other drugs and foods, pregnancy, breastfeeding, known adverse reactions, and documented efficacy of the supplement.
 *           type: string
 *         VenueMap:
 *           description: A venue map (e.g. for malls, auditoriums, museums, etc.).
 *           $ref: '#/components/schemas/'
 *         LocalBusiness:
 *           description: A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 *           $ref: '#/components/schemas/'
 *         messageAttachment:
 *           description: A CreativeWork attached to the message.
 *           $ref: '#/components/schemas/creativework'
 *         weight:
 *           description: The weight of the product or person.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         physiologicalBenefits:
 *           description: Specific physiologic benefits associated to the plan.
 *           type: string
 *         arrivalTerminal:
 *           description: Identifier of the flight's arrival terminal.
 *           type: string
 *         ExhibitionEvent:
 *           description: Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...
 *           $ref: '#/components/schemas/'
 *         legislationJurisdiction:
 *           description: The jurisdiction from which the legislation originates.
 *           type: string
 *         InformAction:
 *           description: The act of notifying someone of information pertinent to them, with no expectation of a response.
 *           $ref: '#/components/schemas/'
 *         availabilityEnds:
 *           description: The end of the availability of the product or service included in the offer.
 *           type: string
 *         Bridge:
 *           description: A bridge.
 *           $ref: '#/components/schemas/'
 *         cvdNumC19HospPats:
 *           description: numc19hosppats - HOSPITALIZED: Patients currently hospitalized in an inpatient care location who have suspected or confirmed COVID-19.
 *           type: number
 *         deliveryMethod:
 *           description: A sub property of instrument. The method of delivery.
 *           $ref: '#/components/schemas/deliverymethod'
 *         includesHealthPlanNetwork:
 *           description: Networks covered by this plan.
 *           $ref: '#/components/schemas/healthplannetwork'
 *         parentService:
 *           description: A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.
 *           $ref: '#/components/schemas/broadcastservice'
 *         expectedArrivalFrom:
 *           description: The earliest date the package may arrive.
 *           type: string
 *         recipient:
 *           description: A sub property of participant. The participant who is at the receiving end of the action.
 *           $ref: '#/components/schemas/organization'
 *         acceptsReservations:
 *           description: Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings ```Yes``` or ```No```.
 *           type: string
 *         bookEdition:
 *           description: The edition of the book.
 *           type: string
 *         temporalCoverage:
 *           description: The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in [ISO 8601 time interval format](https://en.wikipedia.org/wiki/ISO_8601#Time_intervals). In the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL. Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
 *           type: string
 *         Vessel:
 *           description: A component of the human body circulatory system comprised of an intricate network of hollow tubes that transport blood throughout the entire body.
 *           $ref: '#/components/schemas/'
 *         SelfCareHealthAspect:
 *           description: Self care actions or measures that can be taken to sooth, health or avoid a topic. This may be carried at home and can be carried/managed by the person itself.
 *           $ref: '#/components/schemas/'
 *         LoseAction:
 *           description: The act of being defeated in a competitive activity.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupEnumeration:
 *           description: Enumerates common size groups (also known as "size types") for wearable products.
 *           $ref: '#/components/schemas/'
 *         HealthAspectEnumeration:
 *           description: HealthAspectEnumeration enumerates several aspects of health content online, each of which might be described using [[hasHealthAspect]] and [[HealthTopicContent]].
 *           $ref: '#/components/schemas/'
 *         department:
 *           description: A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 *           $ref: '#/components/schemas/organization'
 *         SurgicalProcedure:
 *           description: A medical procedure involving an incision with instruments; performed for diagnose, or therapeutic purposes.
 *           $ref: '#/components/schemas/'
 *         NoninvasiveProcedure:
 *           description: A type of medical procedure that involves noninvasive techniques.
 *           $ref: '#/components/schemas/'
 *         homeLocation:
 *           description: A contact location for a person's residence.
 *           $ref: '#/components/schemas/contactpoint'
 *         gameTip:
 *           description: Links to tips, tactics, etc.
 *           $ref: '#/components/schemas/creativework'
 *         Nonprofit501c26:
 *           description: Nonprofit501c26: Non-profit type referring to State-Sponsored Organizations Providing Health Coverage for High-Risk Individuals.
 *           $ref: '#/components/schemas/'
 *         ImageObject:
 *           description: An image file.
 *           $ref: '#/components/schemas/'
 *         HowToSection:
 *           description: A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).
 *           $ref: '#/components/schemas/'
 *         embedUrl:
 *           description: A URL pointing to a player for a specific video. In general, this is the information in the ```src``` element of an ```embed``` tag and should not be the same as the content of the ```loc``` tag.
 *           type: string
 *         MedicalRiskFactor:
 *           description: A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 *           $ref: '#/components/schemas/'
 *         EditedOrCroppedContent:
 *           description: Content coded 'edited or cropped content' in a [[MediaReview]], considered in the context of how it was published or shared.For a [[VideoObject]] to be 'edited or cropped content': The video has been edited or rearranged. This category applies to time edits, including editing multiple videos together to alter the story being told or editing out large portions from a video.For an [[ImageObject]] to be 'edited or cropped content': Presenting a part of an image from a larger whole to mislead the viewer.For an [[ImageObject]] with embedded text to be 'edited or cropped content': Presenting a part of an image from a larger whole to mislead the viewer.For an [[AudioObject]] to be 'edited or cropped content': The audio has been edited or rearranged. This category applies to time edits, including editing multiple audio clips together to alter the story being told or editing out large portions from the recording.
 *           $ref: '#/components/schemas/'
 *         arrivalTime:
 *           description: The expected arrival time.
 *           type: string
 *         deliveryStatus:
 *           description: New entry added as the package passes through each leg of its journey (from shipment to final delivery).
 *           $ref: '#/components/schemas/deliveryevent'
 *         coach:
 *           description: A person that acts in a coaching role for a sports team.
 *           $ref: '#/components/schemas/person'
 *         ComicStory:
 *           description: The term "story" is any indivisible, re-printable unit of a comic, including the interior stories, covers, and backmatter. Most comics have at least two stories: a cover (ComicCoverArt) and an interior story.
 *           $ref: '#/components/schemas/'
 *         itemReviewed:
 *           description: The item that is being reviewed/rated.
 *           $ref: '#/components/schemas/thing'
 *         numberedPosition:
 *           description: A number associated with a role in an organization, for example, the number on an athlete's jersey.
 *           type: number
 *         ArchiveComponent:
 *           description: An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
 *           $ref: '#/components/schemas/'
 *         EnergyStarCertified:
 *           description: Represents EnergyStar certification.
 *           $ref: '#/components/schemas/'
 *         unsaturatedFatContent:
 *           description: The number of grams of unsaturated fat.
 *           $ref: '#/components/schemas/mass'
 *         RadioStation:
 *           description: A radio station.
 *           $ref: '#/components/schemas/'
 *         ScholarlyArticle:
 *           description: A scholarly article.
 *           $ref: '#/components/schemas/'
 *         hasMenu:
 *           description: Either the actual menu as a structured representation, as text, or a URL of the menu.
 *           $ref: '#/components/schemas/menu'
 *         worstRating:
 *           description: The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.
 *           type: number
 *         softwareHelp:
 *           description: Software application help.
 *           $ref: '#/components/schemas/creativework'
 *         jobStartDate:
 *           description: The date on which a successful applicant for this job would be expected to start work. Choose a specific date in the future or use the jobImmediateStart property to indicate the position is to be filled as soon as possible.
 *           type: string
 *         gender:
 *           description: Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While schema:Male and schema:Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 *           type: string
 *         jobImmediateStart:
 *           description: An indicator as to whether a position is available for an immediate start.
 *           $ref: '#/components/schemas/boolean'
 *         HobbyShop:
 *           description: A store that sells materials useful or necessary for various hobbies.
 *           $ref: '#/components/schemas/'
 *         iswcCode:
 *           description: The International Standard Musical Work Code for the composition.
 *           type: string
 *         expectedArrivalUntil:
 *           description: The latest date the package may arrive.
 *           type: string
 *         billingStart:
 *           description: Specifies after how much time this price (or price component) becomes valid and billing starts. Can be used, for example, to model a price increase after the first year of a subscription. The unit of measurement is specified by the unitCode property.
 *           type: number
 *         videoFrameSize:
 *           description: The frame size of the video.
 *           type: string
 *         Map:
 *           description: A map.
 *           $ref: '#/components/schemas/'
 *         cvdNumVent:
 *           description: numvent - MECHANICAL VENTILATORS: Total number of ventilators available.
 *           type: number
 *         Head:
 *           description: Head assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         Lung:
 *           description: Lung and respiratory system clinical examination.
 *           $ref: '#/components/schemas/'
 *         recordingOf:
 *           description: The composition this track is a recording of.
 *           $ref: '#/components/schemas/musiccomposition'
 *         seasonNumber:
 *           description: Position of the season within an ordered group of seasons.
 *           $ref: '#/components/schemas/integer'
 *         studyDesign:
 *           description: Specifics about the observational study design (enumerated).
 *           $ref: '#/components/schemas/medicalobservationalstudydesign'
 *         ReservationPending:
 *           description: The status of a reservation when a request has been sent, but not confirmed.
 *           $ref: '#/components/schemas/'
 *         fileFormat:
 *           description: Media type, typically MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml)) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.
 *           type: string
 *         awayTeam:
 *           description: The away team in a sports event.
 *           $ref: '#/components/schemas/sportsteam'
 *         pageStart:
 *           description: The page on which the work starts; for example "135" or "xiii".
 *           $ref: '#/components/schemas/integer'
 *         ProgramMembership:
 *           description: Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 *           $ref: '#/components/schemas/'
 *         PatientExperienceHealthAspect:
 *           description: Content about the real life experience of patients or people that have lived a similar experience about the topic. May be forums, topics, Q-and-A and related material.
 *           $ref: '#/components/schemas/'
 *         servicePhone:
 *           description: The phone number to use to access the service.
 *           $ref: '#/components/schemas/contactpoint'
 *         algorithm:
 *           description: The algorithm or rules to follow to compute the score.
 *           type: string
 *         MedicineSystem:
 *           description: Systems of medical practice.
 *           $ref: '#/components/schemas/'
 *         paymentStatus:
 *           description: The status of payment; whether the invoice has been paid or not.
 *           $ref: '#/components/schemas/paymentstatustype'
 *         alumni:
 *           description: Alumni of an organization.
 *           $ref: '#/components/schemas/person'
 *         orderItemNumber:
 *           description: The identifier of the order item.
 *           type: string
 *         Electrician:
 *           description: An electrician.
 *           $ref: '#/components/schemas/'
 *         ChooseAction:
 *           description: The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 *           $ref: '#/components/schemas/'
 *         contentLocation:
 *           description: The location depicted or described in the content. For example, the location in a photograph or painting.
 *           $ref: '#/components/schemas/place'
 *         VideoObject:
 *           description: A video file.
 *           $ref: '#/components/schemas/'
 *         employmentUnit:
 *           description: Indicates the department, unit and/or facility where the employee reports and/or in which the job is to be performed.
 *           $ref: '#/components/schemas/organization'
 *         alternativeHeadline:
 *           description: A secondary title of the CreativeWork.
 *           type: string
 *         course:
 *           description: A sub property of location. The course where this action was taken.
 *           $ref: '#/components/schemas/place'
 *         vendor:
 *           description: 'vendor' is an earlier term for 'seller'.
 *           $ref: '#/components/schemas/organization'
 *         Duration:
 *           description: Quantity: Duration (use [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601)).
 *           $ref: '#/components/schemas/'
 *         broadcastServiceTier:
 *           description: The type of service required to have access to the channel (e.g. Standard or Premium).
 *           type: string
 *         fiberContent:
 *           description: The number of grams of fiber.
 *           $ref: '#/components/schemas/mass'
 *         DrugPrescriptionStatus:
 *           description: Indicates whether this drug is available by prescription or over-the-counter.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c5:
 *           description: Nonprofit501c5: Non-profit type referring to Labor, Agricultural and Horticultural Organizations.
 *           $ref: '#/components/schemas/'
 *         MedicalTherapy:
 *           description: Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 *           $ref: '#/components/schemas/'
 *         Mountain:
 *           description: A mountain, like Mount Whitney or Mount Everest.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupExtraShort:
 *           description: Size group "Extra Short" for wearables.
 *           $ref: '#/components/schemas/'
 *         cutoffTime:
 *           description: Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the [[ShippingRateSettings]] publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC).
 *           type: string
 *         orderNumber:
 *           description: The identifier of the transaction.
 *           type: string
 *         ImageGallery:
 *           description: Web page type: Image gallery page.
 *           $ref: '#/components/schemas/'
 *         contributor:
 *           description: A secondary contributor to the CreativeWork or Event.
 *           $ref: '#/components/schemas/person'
 *         members:
 *           description: A member of this organization.
 *           $ref: '#/components/schemas/organization'
 *         UnemploymentSupport:
 *           description: UnemploymentSupport: this is a benefit for unemployment support.
 *           $ref: '#/components/schemas/'
 *         addressCountry:
 *           description: The country. For example, USA. You can also provide the two-letter [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1).
 *           $ref: '#/components/schemas/country'
 *         Zoo:
 *           description: A zoo.
 *           $ref: '#/components/schemas/'
 *         accommodationCategory:
 *           description: Category of an [[Accommodation]], following real estate conventions e.g. RESO (see [PropertySubType](https://ddwiki.reso.org/display/DDW17/PropertySubType+Field), and [PropertyType](https://ddwiki.reso.org/display/DDW17/PropertyType+Field) fields for suggested values).
 *           type: string
 *         schoolClosuresInfo:
 *           description: Information about school closures.
 *           type: string
 *         MedicalCause:
 *           description: The causative agent(s) that are responsible for the pathophysiologic process that eventually results in a medical condition, symptom or sign. In this schema, unless otherwise specified this is meant to be the proximate cause of the medical condition, symptom or sign. The proximate cause is defined as the causative agent that most directly results in the medical condition, symptom or sign. For example, the HIV virus could be considered a cause of AIDS. Or in a diagnostic context, if a patient fell and sustained a hip fracture and two days later sustained a pulmonary embolism which eventuated in a cardiac arrest, the cause of the cardiac arrest (the proximate cause) would be the pulmonary embolism and not the fall. Medical causes can include cardiovascular, chemical, dermatologic, endocrine, environmental, gastroenterologic, genetic, hematologic, gynecologic, iatrogenic, infectious, musculoskeletal, neurologic, nutritional, obstetric, oncologic, otolaryngologic, pharmacologic, psychiatric, pulmonary, renal, rheumatologic, toxic, traumatic, or urologic causes; medical conditions can be causes as well.
 *           $ref: '#/components/schemas/'
 *         spouse:
 *           description: The person's spouse.
 *           $ref: '#/components/schemas/person'
 *         MerchantReturnNotPermitted:
 *           description: MerchantReturnNotPermitted: product returns are not permitted.
 *           $ref: '#/components/schemas/'
 *         driveWheelConfiguration:
 *           description: The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
 *           type: string
 *         XRay:
 *           description: X-ray imaging.
 *           $ref: '#/components/schemas/'
 *         MayTreatHealthAspect:
 *           description: Related topics may be treated by a Topic.
 *           $ref: '#/components/schemas/'
 *         version:
 *           description: The version of the CreativeWork embodied by a specified resource.
 *           type: number
 *         PreOrder:
 *           description: Indicates that the item is available for pre-order.
 *           $ref: '#/components/schemas/'
 *         securityClearanceRequirement:
 *           description: A description of any security clearance requirements of the job.
 *           type: string
 *         sizeSystem:
 *           description: The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
 *           type: string
 *         estimatesRiskOf:
 *           description: The condition, complication, or symptom whose risk is being estimated.
 *           $ref: '#/components/schemas/medicalentity'
 *         QAPage:
 *           description: A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).
 *           $ref: '#/components/schemas/'
 *         RealEstateListing:
 *           description: A [[RealEstateListing]] is a listing that describes one or more real-estate [[Offer]]s (whose [[businessFunction]] is typically to lease out, or to sell). The [[RealEstateListing]] type itself represents the overall listing, as manifested in some [[WebPage]]. 
 *           $ref: '#/components/schemas/'
 *         missionCoveragePrioritiesPolicy:
 *           description: For a [[NewsMediaOrganization]], a statement on coverage priorities, including any public agenda or stance on issues.
 *           $ref: '#/components/schemas/creativework'
 *         FilmAction:
 *           description: The act of capturing sound and moving images on film, video, or digitally.
 *           $ref: '#/components/schemas/'
 *         postOfficeBoxNumber:
 *           description: The post office box number for PO box addresses.
 *           type: string
 *         cvdNumBedsOcc:
 *           description: numbedsocc - HOSPITAL INPATIENT BED OCCUPANCY: Total number of staffed inpatient beds that are occupied.
 *           type: number
 *         nerveMotor:
 *           description: The neurological pathway extension that involves muscle control.
 *           $ref: '#/components/schemas/muscle'
 *         siblings:
 *           description: A sibling of the person.
 *           $ref: '#/components/schemas/person'
 *         clinicalPharmacology:
 *           description: Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
 *           type: string
 *         MedicalAudience:
 *           description: Target audiences for medical web pages.
 *           $ref: '#/components/schemas/'
 *         Neck:
 *           description: Neck assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         UserPageVisits:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         responsibilities:
 *           description: Responsibilities associated with this role or Occupation.
 *           type: string
 *         agent:
 *           description: The direct performer or driver of the action (animate or inanimate). e.g. *John* wrote a book.
 *           $ref: '#/components/schemas/organization'
 *         unitText:
 *           description: A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for<a href='unitCode'>unitCode</a>.
 *           type: string
 *         option:
 *           description: A sub property of object. The options subject to this action.
 *           type: string
 *         CarUsageType:
 *           description: A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 *           $ref: '#/components/schemas/'
 *         Game:
 *           description: The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.
 *           $ref: '#/components/schemas/'
 *         CommunicateAction:
 *           description: The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 *           $ref: '#/components/schemas/'
 *         workPresented:
 *           description: The movie presented during this event.
 *           $ref: '#/components/schemas/movie'
 *         CompoundPriceSpecification:
 *           description: A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").
 *           $ref: '#/components/schemas/'
 *         PhotographAction:
 *           description: The act of capturing still images of objects using a camera.
 *           $ref: '#/components/schemas/'
 *         Emergency:
 *           description: A specific branch of medical science that deals with the evaluation and initial treatment of medical conditions caused by trauma or sudden illness.
 *           $ref: '#/components/schemas/'
 *         musicGroupMember:
 *           description: A member of a music group&#x2014;for example, John, Paul, George, or Ringo.
 *           $ref: '#/components/schemas/person'
 *         isAcceptingNewPatients:
 *           description: Whether the provider is accepting new patients.
 *           $ref: '#/components/schemas/boolean'
 *         accessMode:
 *           description: The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual. 
 *           type: string
 *         risks:
 *           description: Specific physiologic risks associated to the diet plan.
 *           type: string
 *         jobBenefits:
 *           description: Description of benefits associated with the job.
 *           type: string
 *         FAQPage:
 *           description: A [[FAQPage]] is a [[WebPage]] presenting one or more "[Frequently asked questions](https://en.wikipedia.org/wiki/FAQ)" (see also [[QAPage]]).
 *           $ref: '#/components/schemas/'
 *         MedicalEnumeration:
 *           description: Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.
 *           $ref: '#/components/schemas/'
 *         deliveryLeadTime:
 *           description: The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         numberOfLoanPayments:
 *           description: The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.
 *           type: number
 *         containedInPlace:
 *           description: The basic containment relation between a place and one that contains it.
 *           $ref: '#/components/schemas/place'
 *         expertConsiderations:
 *           description: Medical expert advice related to the plan.
 *           type: string
 *         RestrictedDiet:
 *           description: A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons. 
 *           $ref: '#/components/schemas/'
 *         cashBack:
 *           description: A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
 *           $ref: '#/components/schemas/boolean'
 *         Attorney:
 *           description: Professional service: Attorney. \n\nThis type is deprecated - [[LegalService]] is more inclusive and less ambiguous.
 *           $ref: '#/components/schemas/'
 *         Distillery:
 *           description: A distillery.
 *           $ref: '#/components/schemas/'
 *         WearableMeasurementChestOrBust:
 *           description: Measurement of the chest/bust section, for example of a suit
 *           $ref: '#/components/schemas/'
 *         ServiceChannel:
 *           description: A means for accessing a service, e.g. a government office location, web site, or phone number.
 *           $ref: '#/components/schemas/'
 *         spatial:
 *           description: The "spatial" property can be used in cases when more specific properties(e.g. [[locationCreated]], [[spatialCoverage]], [[contentLocation]]) are not known to be appropriate.
 *           $ref: '#/components/schemas/place'
 *         jobLocation:
 *           description: A (typically single) geographic location associated with the job position.
 *           $ref: '#/components/schemas/place'
 *         nerve:
 *           description: The underlying innervation associated with the muscle.
 *           $ref: '#/components/schemas/nerve'
 *         fileSize:
 *           description: Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
 *           type: string
 *         ItemListUnordered:
 *           description: An ItemList ordered with no explicit order.
 *           $ref: '#/components/schemas/'
 *         EUEnergyEfficiencyCategoryB:
 *           description: Represents EU Energy Efficiency Class B as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         GameServerStatus:
 *           description: Status of a game server.
 *           $ref: '#/components/schemas/'
 *         encoding:
 *           description: A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
 *           $ref: '#/components/schemas/mediaobject'
 *         openingHours:
 *           description: The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.\n\n* Days are specified using the following two-letter combinations: ```Mo```, ```Tu```, ```We```, ```Th```, ```Fr```, ```Sa```, ```Su```.\n* Times are specified using 24:00 format. For example, 3pm is specified as ```15:00```, 10am as ```10:00```. \n* Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.\n* If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.
 *           type: string
 *         hasVariant:
 *           description: Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]).
 *           $ref: '#/components/schemas/product'
 *         RemixAlbum:
 *           description: RemixAlbum.
 *           $ref: '#/components/schemas/'
 *         lyrics:
 *           description: The words in the song.
 *           $ref: '#/components/schemas/creativework'
 *         Clinician:
 *           description: Medical clinicians, including practicing physicians and other medical professionals involved in clinical practice.
 *           $ref: '#/components/schemas/'
 *         suggestedAnswer:
 *           description: An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.
 *           $ref: '#/components/schemas/answer'
 *         producer:
 *           description: The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
 *           $ref: '#/components/schemas/person'
 *         VegetarianDiet:
 *           description: A diet exclusive of animal meat.
 *           $ref: '#/components/schemas/'
 *         seatingCapacity:
 *           description: The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons 
 *           $ref: '#/components/schemas/quantitativevalue'
 *         SinglePlayer:
 *           description: Play mode: SinglePlayer. Which is played by a lone player.
 *           $ref: '#/components/schemas/'
 *         Ayurvedic:
 *           description: A system of medicine that originated in India over thousands of years and that focuses on integrating and balancing the body, mind, and spirit.
 *           $ref: '#/components/schemas/'
 *         employee:
 *           description: Someone working for this organization.
 *           $ref: '#/components/schemas/person'
 *         recordLabel:
 *           description: The label that issued the release.
 *           $ref: '#/components/schemas/organization'
 *         availableLanguage:
 *           description: A language someone may use with or at the item, service or place. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[inLanguage]]
 *           type: string
 *         infectiousAgentClass:
 *           description: The class of infectious agent (bacteria, prion, etc.) that causes the disease.
 *           $ref: '#/components/schemas/infectiousagentclass'
 *         Substance:
 *           description: Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 *           $ref: '#/components/schemas/'
 *         Audiobook:
 *           description: An audiobook.
 *           $ref: '#/components/schemas/'
 *         maxPrice:
 *           description: The highest price if the price is a range.
 *           type: number
 *         GovernmentOrganization:
 *           description: A governmental organization or agency.
 *           $ref: '#/components/schemas/'
 *         evidenceLevel:
 *           description: Strength of evidence of the data used to formulate the guideline (enumerated).
 *           $ref: '#/components/schemas/medicalevidencelevel'
 *         MusicGroup:
 *           description: A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 *           $ref: '#/components/schemas/'
 *         partySize:
 *           description: Number of people the reservation should accommodate.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         monthsOfExperience:
 *           description: Indicates the minimal number of months of experience required for a position.
 *           type: number
 *         abstract:
 *           description: An abstract is a short description that summarizes a [[CreativeWork]].
 *           type: string
 *         endorsers:
 *           description: People or organizations that endorse the plan.
 *           $ref: '#/components/schemas/person'
 *         givenName:
 *           description: Given name. In the U.S., the first name of a Person.
 *           type: string
 *         Nonprofit501c13:
 *           description: Nonprofit501c13: Non-profit type referring to Cemetery Companies.
 *           $ref: '#/components/schemas/'
 *         rxcui:
 *           description: The RxCUI drug identifier from RXNORM.
 *           type: string
 *         EUEnergyEfficiencyCategoryG:
 *           description: Represents EU Energy Efficiency Class G as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         feesAndCommissionsSpecification:
 *           description: Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
 *           type: string
 *         MedicalCode:
 *           description: A code for a medical entity.
 *           $ref: '#/components/schemas/'
 *         SizeSystemImperial:
 *           description: Imperial size system.
 *           $ref: '#/components/schemas/'
 *         OpinionNewsArticle:
 *           description: An [[OpinionNewsArticle]] is a [[NewsArticle]] that primarily expresses opinions rather than journalistic reporting of news and events. For example, a [[NewsArticle]] consisting of a column or [[Blog]]/[[BlogPosting]] entry in the Opinions section of a news publication. 
 *           $ref: '#/components/schemas/'
 *         downvoteCount:
 *           description: The number of downvotes this question, answer or comment has received from the community.
 *           $ref: '#/components/schemas/integer'
 *         Female:
 *           description: The female gender.
 *           $ref: '#/components/schemas/'
 *         warrantyScope:
 *           description: The scope of the warranty promise.
 *           $ref: '#/components/schemas/warrantyscope'
 *         TaxiReservation:
 *           description: A reservation for a taxi.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         BarOrPub:
 *           description: A bar or pub.
 *           $ref: '#/components/schemas/'
 *         NewsMediaOrganization:
 *           description: A News/Media organization such as a newspaper or TV station.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemCN:
 *           description: Chinese size system for wearables.
 *           $ref: '#/components/schemas/'
 *         CorrectionComment:
 *           description: A [[comment]] that corrects [[CreativeWork]].
 *           $ref: '#/components/schemas/'
 *         Hackathon:
 *           description: A [hackathon](https://en.wikipedia.org/wiki/Hackathon) event.
 *           $ref: '#/components/schemas/'
 *         FindAction:
 *           description: The act of finding an object.\n\nRelated actions:\n\n* [[SearchAction]]: FindAction is generally lead by a SearchAction, but not necessarily.
 *           $ref: '#/components/schemas/'
 *         OrderPaymentDue:
 *           description: OrderStatus representing that payment is due on an order.
 *           $ref: '#/components/schemas/'
 *         reservationStatus:
 *           description: The current status of the reservation.
 *           $ref: '#/components/schemas/reservationstatustype'
 *         afterMedia:
 *           description: A media object representing the circumstances after performing this direction.
 *           type: string
 *         requiredQuantity:
 *           description: The required quantity of the item(s).
 *           type: number
 *         publication:
 *           description: A publication event associated with the item.
 *           $ref: '#/components/schemas/publicationevent'
 *         subOrganization:
 *           description: A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 *           $ref: '#/components/schemas/organization'
 *         broadcastOfEvent:
 *           description: The event being broadcast such as a sporting event or awards ceremony.
 *           $ref: '#/components/schemas/event'
 *         DVDFormat:
 *           description: DVDFormat.
 *           $ref: '#/components/schemas/'
 *         vatID:
 *           description: The Value-added Tax ID of the organization or person.
 *           type: string
 *         CompleteDataFeed:
 *           description: A [[CompleteDataFeed]] is a [[DataFeed]] whose standard representation includes content for every item currently in the feed.This is the equivalent of Atom's element as defined in Feed Paging and Archiving [RFC 5005](https://tools.ietf.org/html/rfc5005), For example (and as defined for Atom), when using data from a feed that represents a collection of items that varies over time (e.g. "Top Twenty Records") there is no need to have newer entries mixed in alongside older, obsolete entries. By marking this feed as a CompleteDataFeed, old entries can be safely discarded when the feed is refreshed, since we can assume the feed has provided descriptions for all current items.
 *           $ref: '#/components/schemas/'
 *         SoldOut:
 *           description: Indicates that the item has sold out.
 *           $ref: '#/components/schemas/'
 *         OwnershipInfo:
 *           description: A structured value providing information about when a certain organization or person owned a certain product.
 *           $ref: '#/components/schemas/'
 *         FDAcategoryD:
 *           description: A designation by the US FDA signifying that there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience or studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks.
 *           $ref: '#/components/schemas/'
 *         SizeSpecification:
 *           description: Size related properties of a product, typically a size code ([[name]]) and optionally a [[sizeSystem]], [[sizeGroup]], and product measurements ([[hasMeasurement]]). In addition, the intended audience can be defined through [[suggestedAge]], [[suggestedGender]], and suggested body measurements ([[suggestedMeasurement]]).
 *           $ref: '#/components/schemas/'
 *         increasesRiskOf:
 *           description: The condition, complication, etc. influenced by this factor.
 *           $ref: '#/components/schemas/medicalentity'
 *         fuelCapacity:
 *           description: The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.\n\nTypical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
 *           $ref: '#/components/schemas/quantitativevalue'
 *         specialOpeningHoursSpecification:
 *           description: The special opening hours of a certain place.\n\nUse this to explicitly override general opening hours brought in scope by [[openingHoursSpecification]] or [[openingHours]]. 
 *           $ref: '#/components/schemas/openinghoursspecification'
 *         HinduTemple:
 *           description: A Hindu temple.
 *           $ref: '#/components/schemas/'
 *         arrivalPlatform:
 *           description: The platform where the train arrives.
 *           type: string
 *         Nonprofit501c12:
 *           description: Nonprofit501c12: Non-profit type referring to Benevolent Life Insurance Associations, Mutual Ditch or Irrigation Companies, Mutual or Cooperative Telephone Companies.
 *           $ref: '#/components/schemas/'
 *         locationCreated:
 *           description: The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
 *           $ref: '#/components/schemas/place'
 *         includedInDataCatalog:
 *           description: A data catalog which contains this dataset.
 *           $ref: '#/components/schemas/datacatalog'
 *         geoOverlaps:
 *           description: Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/place'
 *         returnPolicyCategory:
 *           description: A returnPolicyCategory expresses at most one of several enumerated kinds of return.
 *           $ref: '#/components/schemas/merchantreturnenumeration'
 *         tributary:
 *           description: The anatomical or organ system that the vein flows into; a larger structure that the vein connects to.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         AudioObject:
 *           description: An audio file.
 *           $ref: '#/components/schemas/'
 *         EventAttendanceModeEnumeration:
 *           description: An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 *           $ref: '#/components/schemas/'
 *         legalStatus:
 *           description: The drug or supplement's legal status, including any controlled substance schedules that apply.
 *           $ref: '#/components/schemas/medicalenumeration'
 *         actor:
 *           description: An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 *           $ref: '#/components/schemas/person'
 *         TVClip:
 *           description: A short TV program or a segment/part of a TV program.
 *           $ref: '#/components/schemas/'
 *         holdingArchive:
 *           description: [[ArchiveOrganization]] that holds, keeps or maintains the [[ArchiveComponent]].
 *           $ref: '#/components/schemas/archiveorganization'
 *         MovieRentalStore:
 *           description: A movie rental store.
 *           $ref: '#/components/schemas/'
 *         opens:
 *           description: The opening hour of the place or service on the given day(s) of the week.
 *           type: string
 *         EUEnergyEfficiencyCategoryA1Plus:
 *           description: Represents EU Energy Efficiency Class A+ as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         BodyMeasurementHips:
 *           description: Girth of hips (measured around the buttocks). Used, for example, to fit skirts.
 *           $ref: '#/components/schemas/'
 *         diet:
 *           description: A sub property of instrument. The diet used in this action.
 *           $ref: '#/components/schemas/diet'
 *         maintainer:
 *           description: A maintainer of a [[Dataset]], software package ([[SoftwareApplication]]), or other [[Project]]. A maintainer is a [[Person]] or [[Organization]] that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When [[maintainer]] is applied to a specific version of something e.g. a particular version or packaging of a [[Dataset]], it is always possible that the upstream source has a different maintainer. The [[isBasedOn]] property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work. 
 *           $ref: '#/components/schemas/organization'
 *         Resort:
 *           description: A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>. 
 *           $ref: '#/components/schemas/'
 *         nonprofitStatus:
 *           description: nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
 *           $ref: '#/components/schemas/nonprofittype'
 *         applicantLocationRequirements:
 *           description: The location(s) applicants can apply from. This is usually used for telecommuting jobs where the applicant does not need to be in a physical office. Note: This should not be used for citizenship or work visa requirements.
 *           $ref: '#/components/schemas/administrativearea'
 *         photo:
 *           description: A photograph of this place.
 *           $ref: '#/components/schemas/imageobject'
 *         ItemListOrderDescending:
 *           description: An ItemList ordered with higher values listed first.
 *           $ref: '#/components/schemas/'
 *         SizeSystemMetric:
 *           description: Metric size system.
 *           $ref: '#/components/schemas/'
 *         duns:
 *           description: The Dun & Bradstreet DUNS number for identifying an organization or business person.
 *           type: string
 *         Collection:
 *           description: A collection of items e.g. creative works or products.
 *           $ref: '#/components/schemas/'
 *         TravelAgency:
 *           description: A travel agency.
 *           $ref: '#/components/schemas/'
 *         busName:
 *           description: The name of the bus (e.g. Bolt Express).
 *           type: string
 *         antagonist:
 *           description: The muscle whose action counteracts the specified muscle.
 *           $ref: '#/components/schemas/muscle'
 *         originatesFrom:
 *           description: The vasculature the lymphatic structure originates, or afferents, from.
 *           $ref: '#/components/schemas/vessel'
 *         Florist:
 *           description: A florist.
 *           $ref: '#/components/schemas/'
 *         occupationalCategory:
 *           description: A category describing the job, preferably using a term from a taxonomy such as [BLS O*NET-SOC](http://www.onetcenter.org/taxonomy.html), [ISCO-08](https://www.ilo.org/public/english/bureau/stat/isco/isco08/) or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.\nNote: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
 *           $ref: '#/components/schemas/categorycode'
 *         MusicAlbumReleaseType:
 *           description: The kind of release which this album is: single, EP or album.
 *           $ref: '#/components/schemas/'
 *         Season:
 *           description: A media season e.g. tv, radio, video game etc.
 *           $ref: '#/components/schemas/'
 *         MedicalRiskCalculator:
 *           description: A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators.
 *           $ref: '#/components/schemas/'
 *         Therapeutic:
 *           description: A medical device used for therapeutic purposes.
 *           $ref: '#/components/schemas/'
 *         MaximumDoseSchedule:
 *           description: The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
 *           $ref: '#/components/schemas/'
 *         ccRecipient:
 *           description: A sub property of recipient. The recipient copied on a message.
 *           $ref: '#/components/schemas/contactpoint'
 *         MonetaryAmount:
 *           description: A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use [[PriceSpecification]] Types to describe the price of an Offer, Invoice, etc.
 *           $ref: '#/components/schemas/'
 *         bookFormat:
 *           description: The format of the book.
 *           $ref: '#/components/schemas/bookformattype'
 *         eligibleDuration:
 *           description: The duration for which the given offer is valid.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Intangible:
 *           description: A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 *           $ref: '#/components/schemas/'
 *         UnitPriceSpecification:
 *           description: The price asked for a given offer by the respective organization or person.
 *           $ref: '#/components/schemas/'
 *         availabilityStarts:
 *           description: The beginning of the availability of the product or service included in the offer.
 *           type: string
 *         serviceOperator:
 *           description: The operating organization, if different from the provider. This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.
 *           $ref: '#/components/schemas/organization'
 *         BackgroundNewsArticle:
 *           description: A [[NewsArticle]] providing historical context, definition and detail on a specific topic (aka "explainer" or "backgrounder"). For example, an in-depth article or frequently-asked-questions ([FAQ](https://en.wikipedia.org/wiki/FAQ)) document on topics such as Climate Change or the European Union. Other kinds of background material from a non-news setting are often described using [[Book]] or [[Article]], in particular [[ScholarlyArticle]]. See also [[NewsArticle]] for related vocabulary from a learning/education perspective.
 *           $ref: '#/components/schemas/'
 *         ComputerStore:
 *           description: A computer store.
 *           $ref: '#/components/schemas/'
 *         isPlanForApartment:
 *           description: Indicates some accommodation that this floor plan describes.
 *           $ref: '#/components/schemas/accommodation'
 *         RespiratoryTherapy:
 *           description: The therapy that is concerned with the maintenance or improvement of respiratory function (as in patients with pulmonary disease).
 *           $ref: '#/components/schemas/'
 *         ComedyEvent:
 *           description: Event type: Comedy event.
 *           $ref: '#/components/schemas/'
 *         PodcastEpisode:
 *           description: A single episode of a podcast series.
 *           $ref: '#/components/schemas/'
 *         Ligament:
 *           description: A short band of tough, flexible, fibrous connective tissue that functions to connect multiple bones, cartilages, and structurally support joints.
 *           $ref: '#/components/schemas/'
 *         EUEnergyEfficiencyEnumeration:
 *           description: Enumerates the EU energy efficiency classes A-G as well as A+, A++, and A+++ as defined in EU directive 2017/1369.
 *           $ref: '#/components/schemas/'
 *         replyToUrl:
 *           description: The URL at which a reply may be posted to the specified UserComment.
 *           type: string
 *         LegislationObject:
 *           description: A specific object or file containing a Legislation. Note that the same Legislation can be published in multiple files. For example, a digitally signed PDF, a plain PDF and an HTML version.
 *           $ref: '#/components/schemas/'
 *         legislationConsolidates:
 *           description: Indicates another legislation taken into account in this consolidated legislation (which is usually the product of an editorial process that revises the legislation). This property should be used multiple times to refer to both the original version or the previous consolidated version, and to the legislations making the change.
 *           $ref: '#/components/schemas/legislation'
 *         reviewRating:
 *           description: The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work.
 *           $ref: '#/components/schemas/rating'
 *         DDxElement:
 *           description: An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 *           $ref: '#/components/schemas/'
 *         MenuSection:
 *           description: A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 *           $ref: '#/components/schemas/'
 *         AutoPartsStore:
 *           description: An auto parts store.
 *           $ref: '#/components/schemas/'
 *         dataFeedElement:
 *           description: An item within in a data feed. Data feeds may have many elements.
 *           type: string
 *         RecyclingCenter:
 *           description: A recycling center.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c27:
 *           description: Nonprofit501c27: Non-profit type referring to State-Sponsored Workers' Compensation Reinsurance Organizations.
 *           $ref: '#/components/schemas/'
 *         permissionType:
 *           description: The type of permission granted the person, organization, or audience.
 *           $ref: '#/components/schemas/digitaldocumentpermissiontype'
 *         PawnShop:
 *           description: A shop that will buy, or lend money against the security of, personal possessions.
 *           $ref: '#/components/schemas/'
 *         LinkRole:
 *           description: A Role that represents a Web link e.g. as expressed via the 'url' property. Its linkRelationship property can indicate URL-based and plain textual link types e.g. those in IANA link registry or others such as 'amphtml'. This structure provides a placeholder where details from HTML's link element can be represented outside of HTML, e.g. in JSON-LD feeds.
 *           $ref: '#/components/schemas/'
 *         BusTrip:
 *           description: A trip on a commercial bus line.
 *           $ref: '#/components/schemas/'
 *         performer:
 *           description: A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.
 *           $ref: '#/components/schemas/person'
 *         interactionService:
 *           description: The WebSite or SoftwareApplication where the interactions took place.
 *           $ref: '#/components/schemas/softwareapplication'
 *         serviceSmsNumber:
 *           description: The number to access the service by text message.
 *           $ref: '#/components/schemas/contactpoint'
 *         partOfEpisode:
 *           description: The episode to which this clip belongs.
 *           $ref: '#/components/schemas/episode'
 *         cargoVolume:
 *           description: The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.\n\nTypical unit code(s): LTR for liters, FTQ for cubic foot/feet\n\nNote: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         EffectivenessHealthAspect:
 *           description: Content about the effectiveness-related aspects of a health topic.
 *           $ref: '#/components/schemas/'
 *         availableTest:
 *           description: A diagnostic test or procedure offered by this lab.
 *           $ref: '#/components/schemas/medicaltest'
 *         entertainmentBusiness:
 *           description: A sub property of location. The entertainment business where the action occurred.
 *           $ref: '#/components/schemas/entertainmentbusiness'
 *         GiveAction:
 *           description: The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.\n\nRelated actions:\n\n* [[TakeAction]]: Reciprocal of GiveAction.\n* [[SendAction]]: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
 *           $ref: '#/components/schemas/'
 *         Country:
 *           description: A country.
 *           $ref: '#/components/schemas/'
 *         WPFooter:
 *           description: The footer section of the page.
 *           $ref: '#/components/schemas/'
 *         BookStore:
 *           description: A bookstore.
 *           $ref: '#/components/schemas/'
 *         ProductReturnPolicy:
 *           description: A ProductReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *           $ref: '#/components/schemas/'
 *         BroadcastChannel:
 *           description: A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 *           $ref: '#/components/schemas/'
 *         ActivateAction:
 *           description: The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
 *           $ref: '#/components/schemas/'
 *         JewelryStore:
 *           description: A jewelry store.
 *           $ref: '#/components/schemas/'
 *         SymptomsHealthAspect:
 *           description: Symptoms or related symptoms of a Topic.
 *           $ref: '#/components/schemas/'
 *         hasMerchantReturnPolicy:
 *           description: Indicates a MerchantReturnPolicy that may be applicable.
 *           $ref: '#/components/schemas/merchantreturnpolicy'
 *         paymentAccepted:
 *           description: Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.
 *           type: string
 *         OnDemandEvent:
 *           description: A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 *           $ref: '#/components/schemas/'
 *         breastfeedingWarning:
 *           description: Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
 *           type: string
 *         paymentMethodId:
 *           description: An identifier for the method of payment used (e.g. the last 4 digits of the credit card).
 *           type: string
 *         BodyMeasurementNeck:
 *           description: Girth of neck. Used, for example, to fit shirts.
 *           $ref: '#/components/schemas/'
 *         Tuesday:
 *           description: The day of the week between Monday and Wednesday.
 *           $ref: '#/components/schemas/'
 *         application:
 *           description: An application that can complete the request.
 *           $ref: '#/components/schemas/softwareapplication'
 *         accountId:
 *           description: The identifier for the account the payment will be applied to.
 *           type: string
 *         sportsActivityLocation:
 *           description: A sub property of location. The sports activity location where this action occurred.
 *           $ref: '#/components/schemas/sportsactivitylocation'
 *         Prion:
 *           description: A prion is an infectious agent composed of protein in a misfolded form.
 *           $ref: '#/components/schemas/'
 *         Series:
 *           description: A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also [[CreativeWorkSeries]], [[EventSeries]].
 *           $ref: '#/components/schemas/'
 *         ProductReturnUnlimitedWindow:
 *           description: ProductReturnUnlimitedWindow: there is an unlimited window for product returns.
 *           $ref: '#/components/schemas/'
 *         copyrightHolder:
 *           description: The party holding the legal copyright to the CreativeWork.
 *           $ref: '#/components/schemas/person'
 *         Airline:
 *           description: An organization that provides flights for passengers.
 *           $ref: '#/components/schemas/'
 *         colleague:
 *           description: A colleague of the person.
 *           type: string
 *         MedicalImagingTechnique:
 *           description: Any medical imaging modality typically used for diagnostic purposes. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         RadioEpisode:
 *           description: A radio episode which can be part of a series or season.
 *           $ref: '#/components/schemas/'
 *         offers:
 *           description: An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. 
 *           $ref: '#/components/schemas/demand'
 *         refundType:
 *           description: A refundType, from an enumerated list.
 *           $ref: '#/components/schemas/refundtypeenumeration'
 *         contactPoints:
 *           description: A contact point for a person or organization.
 *           $ref: '#/components/schemas/contactpoint'
 *         departureAirport:
 *           description: The airport where the flight originates.
 *           $ref: '#/components/schemas/airport'
 *         RelatedTopicsHealthAspect:
 *           description: Other prominent or relevant topics tied to the main topic.
 *           $ref: '#/components/schemas/'
 *         WorkersUnion:
 *           description: A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying.
 *           $ref: '#/components/schemas/'
 *         unnamedSourcesPolicy:
 *           description: For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 *           type: string
 *         StoreCreditRefund:
 *           description: A StoreCreditRefund ...
 *           $ref: '#/components/schemas/'
 *         founders:
 *           description: A person who founded this organization.
 *           $ref: '#/components/schemas/person'
 *         MonetaryAmountDistribution:
 *           description: A statistical distribution of monetary amounts.
 *           $ref: '#/components/schemas/'
 *         billingAddress:
 *           description: The billing address for the order.
 *           $ref: '#/components/schemas/postaladdress'
 *         SpreadsheetDigitalDocument:
 *           description: A spreadsheet file.
 *           $ref: '#/components/schemas/'
 *         observedNode:
 *           description: The observedNode of an [[Observation]], often a [[StatisticalPopulation]].
 *           $ref: '#/components/schemas/statisticalpopulation'
 *         variableMeasured:
 *           description: The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.
 *           type: string
 *         AboutPage:
 *           description: Web page type: About page.
 *           $ref: '#/components/schemas/'
 *         makesOffer:
 *           description: A pointer to products or services offered by the organization or person.
 *           $ref: '#/components/schemas/offer'
 *         AdvertiserContentArticle:
 *           description: An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](https://en.wikipedia.org/wiki/Advertorial), sponsored content, native advertising and other paid content.
 *           $ref: '#/components/schemas/'
 *         median:
 *           description: The median value.
 *           type: number
 *         MedicalProcedureType:
 *           description: An enumeration that describes different types of medical procedures.
 *           $ref: '#/components/schemas/'
 *         PreOrderAction:
 *           description: An agent orders a (not yet released) object/product/service to be delivered/sent.
 *           $ref: '#/components/schemas/'
 *         DataType:
 *           description: The basic data types such as Integers, Strings, etc.
 *           $ref: '#/components/schemas/'
 *         validIn:
 *           description: The geographic area where a permit or similar thing is valid.
 *           $ref: '#/components/schemas/administrativearea'
 *         healthPlanMarketingUrl:
 *           description: The URL that goes directly to the plan brochure for the specific standard plan or plan variation.
 *           type: string
 *         genre:
 *           description: Genre of the creative work, broadcast channel or group.
 *           type: string
 *         SendAction:
 *           description: The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:\n\n* [[ReceiveAction]]: The reciprocal of SendAction.\n* [[GiveAction]]: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 *           $ref: '#/components/schemas/'
 *         vehicleIdentificationNumber:
 *           description: The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
 *           type: string
 *         GolfCourse:
 *           description: A golf course.
 *           $ref: '#/components/schemas/'
 *         unitCode:
 *           description: The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
 *           type: string
 *         serialNumber:
 *           description: The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
 *           type: string
 *         BankAccount:
 *           description: A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.
 *           $ref: '#/components/schemas/'
 *         inBroadcastLineup:
 *           description: The CableOrSatelliteService offering the channel.
 *           $ref: '#/components/schemas/cableorsatelliteservice'
 *         track:
 *           description: A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
 *           $ref: '#/components/schemas/itemlist'
 *         DamagedCondition:
 *           description: Indicates that the item is damaged.
 *           $ref: '#/components/schemas/'
 *         WebContent:
 *           description: WebContent is a type representing all [[WebPage]], [[WebSite]] and [[WebPageElement]] content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The [[WebContent]] type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types [[WebPage]], [[WebSite]] and [[WebPageElement]] will eventually be declared as subtypes of [[WebContent]]).
 *           $ref: '#/components/schemas/'
 *         PerformAction:
 *           description: The act of participating in performance arts.
 *           $ref: '#/components/schemas/'
 *         Pathology:
 *           description: A specific branch of medical science that is concerned with the study of the cause, origin and nature of a disease state, including its consequences as a result of manifestation of the disease. In clinical care, the term is used to designate a branch of medicine using laboratory tests to diagnose and determine the prognostic significance of illness.
 *           $ref: '#/components/schemas/'
 *         BedAndBreakfast:
 *           description: Bed and breakfast.<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         numberOfSeasons:
 *           description: The number of seasons in this series.
 *           $ref: '#/components/schemas/integer'
 *         author:
 *           description: The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
 *           $ref: '#/components/schemas/organization'
 *         issueNumber:
 *           description: Identifies the issue of publication; for example, "iii" or "2".
 *           $ref: '#/components/schemas/integer'
 *         accessCode:
 *           description: Password, PIN, or access code needed for delivery (e.g. from a locker).
 *           type: string
 *         ActiveNotRecruiting:
 *           description: Active, but not recruiting new participants.
 *           $ref: '#/components/schemas/'
 *         HealthPlanCostSharingSpecification:
 *           description: A description of costs to the patient under a given network or formulary.
 *           $ref: '#/components/schemas/'
 *         MerchantReturnPolicy:
 *           description: A MerchantReturnPolicy provides information about product return policies associated with an [[Organization]] or [[Product]].
 *           $ref: '#/components/schemas/'
 *         doesNotShip:
 *           description: Indicates when shipping to a particular [[shippingDestination]] is not available.
 *           $ref: '#/components/schemas/boolean'
 *         Beach:
 *           description: Beach.
 *           $ref: '#/components/schemas/'
 *         SportsClub:
 *           description: A sports club.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c3:
 *           description: Nonprofit501c3: Non-profit type referring to Religious, Educational, Charitable, Scientific, Literary, Testing for Public Safety, to Foster National or International Amateur Sports Competition, or Prevention of Cruelty to Children or Animals Organizations.
 *           $ref: '#/components/schemas/'
 *         ParentAudience:
 *           description: A set of characteristics describing parents, who can be interested in viewing some content.
 *           $ref: '#/components/schemas/'
 *         CheckInAction:
 *           description: The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).\n\nRelated actions:\n\n* [[CheckOutAction]]: The antonym of CheckInAction.\n* [[ArriveAction]]: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.\n* [[ConfirmAction]]: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the *start* of a previously reserved service rather than its validity/existence.
 *           $ref: '#/components/schemas/'
 *         LowCalorieDiet:
 *           description: A diet focused on reduced calorie intake.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemUK:
 *           description: United Kingdom size system for wearables.
 *           $ref: '#/components/schemas/'
 *         accessibilitySummary:
 *           description: A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
 *           type: string
 *         startDate:
 *           description: The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 *           type: string
 *         gameLocation:
 *           description: Real or fictional location of the game (or part of game).
 *           $ref: '#/components/schemas/place'
 *         ReservationPackage:
 *           description: A group of multiple reservations with common values for all sub-reservations.
 *           $ref: '#/components/schemas/'
 *         Movie:
 *           description: A movie.
 *           $ref: '#/components/schemas/'
 *         utterances:
 *           description: Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a [[HyperTocEntry]].
 *           type: string
 *         relatedTherapy:
 *           description: A medical therapy related to this anatomy.
 *           $ref: '#/components/schemas/medicaltherapy'
 *         recipeIngredient:
 *           description: A single ingredient used in the recipe, e.g. sugar, flour or garlic.
 *           type: string
 *         domainIncludes:
 *           description: Relates a property to a class that is (one of) the type(s) the property is expected to be used on.
 *           $ref: '#/components/schemas/class'
 *         participant:
 *           description: Other co-agents that participated in the action indirectly. e.g. John wrote a book with *Steve*.
 *           $ref: '#/components/schemas/person'
 *         encodingType:
 *           description: The supported encoding type(s) for an EntryPoint request.
 *           type: string
 *         CatholicChurch:
 *           description: A Catholic church.
 *           $ref: '#/components/schemas/'
 *         MovieSeries:
 *           description: A series of movies. Included movies can be indicated with the hasPart property.
 *           $ref: '#/components/schemas/'
 *         HotelRoom:
 *           description: A hotel room is a single room in a hotel.<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         UsedCondition:
 *           description: Indicates that the item is used.
 *           $ref: '#/components/schemas/'
 *         programMembershipUsed:
 *           description: Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.
 *           $ref: '#/components/schemas/programmembership'
 *         ReplaceAction:
 *           description: The act of editing a recipient by replacing an old object with a new object.
 *           $ref: '#/components/schemas/'
 *         includesAttraction:
 *           description: Attraction located at destination.
 *           $ref: '#/components/schemas/touristattraction'
 *         PlayAction:
 *           description: The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.\n\nRelated actions:\n\n* [[ListenAction]]: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.\n* [[WatchAction]]: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.
 *           $ref: '#/components/schemas/'
 *         vehicleSpecialUsage:
 *           description: Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
 *           type: string
 *         arrivalGate:
 *           description: Identifier of the flight's arrival gate.
 *           type: string
 *         measuredProperty:
 *           description: The measuredProperty of an [[Observation]], either a schema.org property, a property from other RDF-compatible systems e.g. W3C RDF Data Cube, or schema.org extensions such as [GS1's](https://www.gs1.org/voc/?show=properties).
 *           $ref: '#/components/schemas/property'
 *         actionApplication:
 *           description: An application that can complete the request.
 *           $ref: '#/components/schemas/softwareapplication'
 *         ClaimReview:
 *           description: A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).
 *           $ref: '#/components/schemas/'
 *         MotorizedBicycle:
 *           description: A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling.
 *           $ref: '#/components/schemas/'
 *         usedToDiagnose:
 *           description: A condition the test is used to diagnose.
 *           $ref: '#/components/schemas/medicalcondition'
 *         SuperficialAnatomy:
 *           description: Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure).
 *           $ref: '#/components/schemas/'
 *         dateCreated:
 *           description: The date on which the CreativeWork was created or the item was added to a DataFeed.
 *           type: string
 *         percentile75:
 *           description: The 75th percentile value.
 *           type: number
 *         loanType:
 *           description: The type of a loan or credit.
 *           type: string
 *         USNonprofitType:
 *           description: USNonprofitType: Non-profit organization type originating from the United States.
 *           $ref: '#/components/schemas/'
 *         RandomizedTrial:
 *           description: A randomized trial design.
 *           $ref: '#/components/schemas/'
 *         pickupTime:
 *           description: When a taxi will pickup a passenger or a rental car can be picked up.
 *           type: string
 *         AnimalShelter:
 *           description: Animal shelter.
 *           $ref: '#/components/schemas/'
 *         Corporation:
 *           description: Organization: A business corporation.
 *           $ref: '#/components/schemas/'
 *         dateSent:
 *           description: The date/time at which the message was sent.
 *           type: string
 *         applicableLocation:
 *           description: The location in which the status applies.
 *           $ref: '#/components/schemas/administrativearea'
 *         musicArrangement:
 *           description: An arrangement derived from the composition.
 *           $ref: '#/components/schemas/musiccomposition'
 *         clipNumber:
 *           description: Position of the clip within an ordered group of clips.
 *           type: string
 *         identifyingExam:
 *           description: A physical examination that can identify this sign.
 *           $ref: '#/components/schemas/physicalexam'
 *         director:
 *           description: A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 *           $ref: '#/components/schemas/person'
 *         musicBy:
 *           description: The composer of the soundtrack.
 *           $ref: '#/components/schemas/musicgroup'
 *         volumeNumber:
 *           description: Identifies the volume of publication or multi-part work; for example, "iii" or "2".
 *           type: string
 *         additionalType:
 *           description: An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
 *           type: string
 *         MedicalRiskEstimator:
 *           description: Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 *           $ref: '#/components/schemas/'
 *         recipeYield:
 *           description: The quantity produced by the recipe (for example, number of people served, number of servings, etc).
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Researcher:
 *           description: Researchers.
 *           $ref: '#/components/schemas/'
 *         buyer:
 *           description: A sub property of participant. The participant/person/organization that bought the object.
 *           $ref: '#/components/schemas/person'
 *         educationalRole:
 *           description: An educationalRole of an EducationalAudience.
 *           type: string
 *         DigitalAudioTapeFormat:
 *           description: DigitalAudioTapeFormat.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupGirls:
 *           description: Size group "Girls" for wearables.
 *           $ref: '#/components/schemas/'
 *         MedicalOrganization:
 *           description: A medical organization (physical or not), such as hospital, institution or clinic.
 *           $ref: '#/components/schemas/'
 *         QuantitativeValue:
 *           description:  A point value or interval for product characteristics and other purposes.
 *           $ref: '#/components/schemas/'
 *         priceCurrency:
 *           description: The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *           type: string
 *         tocEntry:
 *           description: Indicates a [[HyperTocEntry]] in a [[HyperToc]].
 *           $ref: '#/components/schemas/hypertocentry'
 *         OrderReturned:
 *           description: OrderStatus representing that an order has been returned.
 *           $ref: '#/components/schemas/'
 *         WearableMeasurementWidth:
 *           description: Measurement of the width, for example of shoes
 *           $ref: '#/components/schemas/'
 *         RsvpResponseNo:
 *           description: The invitee will not attend.
 *           $ref: '#/components/schemas/'
 *         xpath:
 *           description: An XPath, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 *           $ref: '#/components/schemas/xpathtype'
 *         isicV4:
 *           description: The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 *           type: string
 *         acceptedPaymentMethod:
 *           description: The payment method(s) accepted by seller for this offer.
 *           $ref: '#/components/schemas/paymentmethod'
 *         monthlyMinimumRepaymentAmount:
 *           description: The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.
 *           $ref: '#/components/schemas/monetaryamount'
 *         childMinAge:
 *           description: Minimal age of the child.
 *           type: number
 *         CurrencyConversionService:
 *           description: A service to convert funds from one currency to another currency.
 *           $ref: '#/components/schemas/'
 *         numberOfEpisodes:
 *           description: The number of episodes in this season or series.
 *           $ref: '#/components/schemas/integer'
 *         greater:
 *           description: This ordering relation for qualitative values indicates that the subject is greater than the object.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         Date:
 *           description: A date value in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
 *           $ref: '#/components/schemas/'
 *         floorLimit:
 *           description: A floor limit is the amount of money above which credit card transactions must be authorized.
 *           $ref: '#/components/schemas/monetaryamount'
 *         BackOrder:
 *           description: Indicates that the item is available on back order.
 *           $ref: '#/components/schemas/'
 *         cvdNumC19HOPats:
 *           description: numc19hopats - HOSPITAL ONSET: Patients hospitalized in an NHSN inpatient care location with onset of suspected or confirmed COVID-19 14 or more days after hospitalization.
 *           type: number
 *         issuedThrough:
 *           description: The service through with the permit was granted.
 *           $ref: '#/components/schemas/service'
 *         width:
 *           description: The width of the item.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         yearsInOperation:
 *           description: The age of the business.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         AnalysisNewsArticle:
 *           description: An AnalysisNewsArticle is a [[NewsArticle]] that, while based on factual reporting, incorporates the expertise of the author/producer, offering interpretations and conclusions.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupMisses:
 *           description: Size group "Misses" (also known as "Missy") for wearables.
 *           $ref: '#/components/schemas/'
 *         Plumber:
 *           description: A plumbing service.
 *           $ref: '#/components/schemas/'
 *         DiagnosticLab:
 *           description: A medical laboratory that offers on-site or off-site diagnostic services.
 *           $ref: '#/components/schemas/'
 *         EventSeries:
 *           description: A series of [[Event]]s. Included events can relate with the series using the [[superEvent]] property.An EventSeries is a collection of events that share some unifying characteristic. For example, "The Olympic Games" is a series, whichis repeated regularly. The "2012 London Olympics" can be presented both as an [[Event]] in the series "Olympic Games", and as an[[EventSeries]] that included a number of sporting competitions as Events.The nature of the association between the events in an [[EventSeries]] can vary, but typical examples couldinclude a thematic event series (e.g. topical meetups or classes), or a series of regular events that share a location, attendee group and/or organizers.EventSeries has been defined as a kind of Event to make it easy for publishers to use it in an Event context withoutworrying about which kinds of series are really event-like enough to call an Event. In general an EventSeriesmay seem more Event-like when the period of time is compact and when aspects such as location are fixed, butit may also sometimes prove useful to describe a longer-term series as an Event. 
 *           $ref: '#/components/schemas/'
 *         CheckoutPage:
 *           description: Web page type: Checkout page.
 *           $ref: '#/components/schemas/'
 *         AssessAction:
 *           description: The act of forming one's opinion, reaction or sentiment.
 *           $ref: '#/components/schemas/'
 *         NoteDigitalDocument:
 *           description: A file containing a note, primarily for the author.
 *           $ref: '#/components/schemas/'
 *         OnSitePickup:
 *           description: A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office.
 *           $ref: '#/components/schemas/'
 *         AutoRental:
 *           description: A car rental business.
 *           $ref: '#/components/schemas/'
 *         broker:
 *           description: An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
 *           $ref: '#/components/schemas/organization'
 *         ActiveActionStatus:
 *           description: An in-progress action (e.g, while watching the movie, or driving to a location).
 *           $ref: '#/components/schemas/'
 *         nonProprietaryName:
 *           description: The generic name of this drug or supplement.
 *           type: string
 *         WearableMeasurementInseam:
 *           description: Measurement of the inseam, for example of pants
 *           $ref: '#/components/schemas/'
 *         reviews:
 *           description: Review of the item.
 *           $ref: '#/components/schemas/review'
 *         Volcano:
 *           description: A volcano, like Fuji san.
 *           $ref: '#/components/schemas/'
 *         isConsumableFor:
 *           description: A pointer to another product (or multiple products) for which this product is a consumable.
 *           $ref: '#/components/schemas/product'
 *         NewsArticle:
 *           description: A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.A more detailed overview of [schema.org News markup](/docs/news.html) is also available.
 *           $ref: '#/components/schemas/'
 *         paymentUrl:
 *           description: The URL for sending a payment.
 *           type: string
 *         VinylFormat:
 *           description: VinylFormat.
 *           $ref: '#/components/schemas/'
 *         contentRating:
 *           description: Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.
 *           type: string
 *         Completed:
 *           description: Completed.
 *           $ref: '#/components/schemas/'
 *         HowToSupply:
 *           description: A supply consumed when performing the instructions for how to achieve a result.
 *           $ref: '#/components/schemas/'
 *         CoOp:
 *           description: Play mode: CoOp. Co-operative games, where you play on the same team with friends.
 *           $ref: '#/components/schemas/'
 *         inCodeSet:
 *           description: A [[CategoryCodeSet]] that contains this category code.
 *           type: string
 *         emissionsCO2:
 *           description: The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".
 *           type: number
 *         Nonprofit501c24:
 *           description: Nonprofit501c24: Non-profit type referring to Section 4049 ERISA Trusts.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemEN13402:
 *           description: EN 13402 (joint European standard for size labelling of clothes).
 *           $ref: '#/components/schemas/'
 *         carrierRequirements:
 *           description: Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).
 *           type: string
 *         GeoShape:
 *           description: The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
 *           $ref: '#/components/schemas/'
 *         howPerformed:
 *           description: How the procedure is performed.
 *           type: string
 *         EvidenceLevelB:
 *           description: Data derived from a single randomized trial, or nonrandomized studies.
 *           $ref: '#/components/schemas/'
 *         accessibilityAPI:
 *           description: Indicates that the resource is compatible with the referenced accessibility API ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
 *           type: string
 *         relatedCondition:
 *           description: A medical condition associated with this anatomy.
 *           $ref: '#/components/schemas/medicalcondition'
 *         FDAnotEvaluated:
 *           description: A designation that the drug in question has not been assigned a pregnancy category designation by the US FDA.
 *           $ref: '#/components/schemas/'
 *         Trip:
 *           description: A trip or journey. An itinerary of visits to one or more places.
 *           $ref: '#/components/schemas/'
 *         Recommendation:
 *           description: [[Recommendation]] is a type of [[Review]] that suggests or proposes something as the best option or best course of action. Recommendations may be for products or services, or other concrete things, as in the case of a ranked list or product guide. A [[Guide]] may list multiple recommendations for different categories. For example, in a [[Guide]] about which TVs to buy, the author may have several [[Recommendation]]s.
 *           $ref: '#/components/schemas/'
 *         EnergyConsumptionDetails:
 *           description: EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example [EU directive 2017/1369](https://eur-lex.europa.eu/eli/reg/2017/1369/oj) for energy labeling and the [Energy labeling rule](https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/energy-water-use-labeling-consumer) under the Energy Policy and Conservation Act (EPCA) in the US.
 *           $ref: '#/components/schemas/'
 *         dietFeatures:
 *           description: Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.
 *           type: string
 *         Consortium:
 *           description: A Consortium is a membership [[Organization]] whose members are typically Organizations.
 *           $ref: '#/components/schemas/'
 *         step:
 *           description: A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.
 *           type: string
 *         MedicalTrialDesign:
 *           description: Design models for medical trials. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         identifier:
 *           description: The identifier property represents any kind of identifier for any kind of [[Thing]], such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See [background notes](/docs/datamodel.html#identifierBg) for more details. 
 *           type: string
 *         serviceUrl:
 *           description: The website to access the service.
 *           type: string
 *         familyName:
 *           description: Family name. In the U.S., the last name of a Person.
 *           type: string
 *         healthcareReportingData:
 *           description: Indicates data describing a hospital, e.g. a CDC [[CDCPMDRecord]] or as some kind of [[Dataset]].
 *           $ref: '#/components/schemas/dataset'
 *         touristType:
 *           description: Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc. 
 *           $ref: '#/components/schemas/audience'
 *         equal:
 *           description: This ordering relation for qualitative values indicates that the subject is equal to the object.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         Offer:
 *           description: An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
 *           $ref: '#/components/schemas/'
 *         LegalValueLevel:
 *           description: A list of possible levels for the legal validity of a legislation.
 *           $ref: '#/components/schemas/'
 *         valueReference:
 *           description: A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
 *           $ref: '#/components/schemas/structuredvalue'
 *         renegotiableLoan:
 *           description: Whether the terms for payment of interest can be renegotiated during the life of the loan.
 *           $ref: '#/components/schemas/boolean'
 *         publisher:
 *           description: The publisher of the creative work.
 *           $ref: '#/components/schemas/person'
 *         Service:
 *           description: A service provided by an organization, e.g. delivery service, print services, etc.
 *           $ref: '#/components/schemas/'
 *         priceSpecification:
 *           description: One or more detailed price specifications, indicating the unit price and delivery or payment charges.
 *           $ref: '#/components/schemas/pricespecification'
 *         answerExplanation:
 *           description: A step-by-step or full explanation about Answer. Can outline how this Answer was achieved or contain more broad clarification or statement about it. 
 *           $ref: '#/components/schemas/comment'
 *         ItemAvailability:
 *           description: A list of possible product availability options.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c10:
 *           description: Nonprofit501c10: Non-profit type referring to Domestic Fraternal Societies and Associations.
 *           $ref: '#/components/schemas/'
 *         license:
 *           description: A license document that applies to this content, typically indicated by URL.
 *           $ref: '#/components/schemas/creativework'
 *         eligibleTransactionVolume:
 *           description: The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
 *           $ref: '#/components/schemas/pricespecification'
 *         exifData:
 *           description: exif data for this object.
 *           type: string
 *         episodes:
 *           description: An episode of a TV/radio series or season.
 *           $ref: '#/components/schemas/episode'
 *         DateTime:
 *           description: A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).
 *           $ref: '#/components/schemas/'
 *         endOffset:
 *           description: The end time of the clip expressed as the number of seconds from the beginning of the work.
 *           $ref: '#/components/schemas/hypertocentry'
 *         BusOrCoach:
 *           description: A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel.
 *           $ref: '#/components/schemas/'
 *         isFamilyFriendly:
 *           description: Indicates whether this content is family friendly.
 *           $ref: '#/components/schemas/boolean'
 *         DemoAlbum:
 *           description: DemoAlbum.
 *           $ref: '#/components/schemas/'
 *         OneTimePayments:
 *           description: OneTimePayments: this is a benefit for one-time payments for individuals.
 *           $ref: '#/components/schemas/'
 *         termsOfService:
 *           description: Human-readable terms of service documentation.
 *           type: string
 *         previousStartDate:
 *           description: Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
 *           type: string
 *         Nonprofit501c22:
 *           description: Nonprofit501c22: Non-profit type referring to Withdrawal Liability Payment Funds.
 *           $ref: '#/components/schemas/'
 *         accessibilityHazard:
 *           description: A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
 *           type: string
 *         subReservation:
 *           description: The individual reservations included in the package. Typically a repeated property.
 *           $ref: '#/components/schemas/reservation'
 *         referencesOrder:
 *           description: The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.
 *           $ref: '#/components/schemas/order'
 *         LocationFeatureSpecification:
 *           description: Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 *           $ref: '#/components/schemas/'
 *         bookingTime:
 *           description: The date and time the reservation was booked.
 *           type: string
 *         mainEntity:
 *           description: Indicates the primary entity described in some page or other CreativeWork.
 *           $ref: '#/components/schemas/thing'
 *         DistanceFee:
 *           description: Represents the distance fee (e.g., price per km or mile) part of the total price for an offered product, for example a car rental.
 *           $ref: '#/components/schemas/'
 *         RentAction:
 *           description: The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 *           $ref: '#/components/schemas/'
 *         layoutImage:
 *           description: A schematic image showing the floorplan layout.
 *           type: string
 *         shippingLabel:
 *           description: Label to match an [[OfferShippingDetails]] with a [[ShippingRateSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
 *           type: string
 *         GeospatialGeometry:
 *           description: (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices.
 *           $ref: '#/components/schemas/'
 *         award:
 *           description: An award won by or for this item.
 *           type: string
 *         HowToItem:
 *           description: An item used as either a tool or supply when performing the instructions for how to to achieve a result.
 *           $ref: '#/components/schemas/'
 *         BoatReservation:
 *           description: A reservation for boat travel.Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         hasDeliveryMethod:
 *           description: Method used for delivery or shipping.
 *           $ref: '#/components/schemas/deliverymethod'
 *         amountOfThisGood:
 *           description: The quantity of the goods included in the offer.
 *           type: number
 *         departurePlatform:
 *           description: The platform from which the train departs.
 *           type: string
 *         ChildrensEvent:
 *           description: Event type: Children's event.
 *           $ref: '#/components/schemas/'
 *         creditedTo:
 *           description: The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.
 *           $ref: '#/components/schemas/organization'
 *         PrognosisHealthAspect:
 *           description: Typical progression and happenings of life course of the topic.
 *           $ref: '#/components/schemas/'
 *         replacee:
 *           description: A sub property of object. The object that is being replaced.
 *           $ref: '#/components/schemas/thing'
 *         cvdNumC19Died:
 *           description: numc19died - DEATHS: Patients with suspected or confirmed COVID-19 who died in the hospital, ED, or any overflow location.
 *           type: number
 *         frequency:
 *           description: How often the dose is taken, e.g. 'daily'.
 *           type: string
 *         dateline:
 *           description: A [dateline](https://en.wikipedia.org/wiki/Dateline) is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.Structured representations of dateline-related information can also be expressed more explicitly using [[locationCreated]] (which represents where a work was created e.g. where a news report was written). For location depicted or described in the content, use [[contentLocation]].Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines". 
 *           type: string
 *         MobilePhoneStore:
 *           description: A store that sells mobile phones and related accessories.
 *           $ref: '#/components/schemas/'
 *         AlignmentObject:
 *           description: An intangible item that describes an alignment between a learning resource and a node in an educational framework.Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 *           $ref: '#/components/schemas/'
 *         provider:
 *           description: The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 *           $ref: '#/components/schemas/organization'
 *         programName:
 *           description: The program providing the membership.
 *           type: string
 *         Accommodation:
 *           description: An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         gtin13:
 *           description: The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *           type: string
 *         Optometric:
 *           description: The science or practice of testing visual acuity and prescribing corrective lenses.
 *           $ref: '#/components/schemas/'
 *         gtin:
 *           description: A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. 
 *           type: string
 *         opponent:
 *           description: A sub property of participant. The opponent on this action.
 *           $ref: '#/components/schemas/person'
 *         UserInteraction:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         Hostel:
 *           description: A hostel - cheap accommodation, often in shared dormitories.<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         status:
 *           description: The status of the study (enumerated).
 *           type: string
 *         RsvpAction:
 *           description: The act of notifying an event organizer as to whether you expect to attend the event.
 *           $ref: '#/components/schemas/'
 *         Hardcover:
 *           description: Book format: Hardcover.
 *           $ref: '#/components/schemas/'
 *         gameItem:
 *           description: An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
 *           $ref: '#/components/schemas/thing'
 *         accommodationFloorPlan:
 *           description: A floorplan of some [[Accommodation]].
 *           $ref: '#/components/schemas/floorplan'
 *         HomeAndConstructionBusiness:
 *           description: A construction business.\n\nA HomeAndConstructionBusiness is a [[LocalBusiness]] that provides services around homes and buildings.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *           $ref: '#/components/schemas/'
 *         competencyRequired:
 *           description: Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
 *           type: string
 *         videoQuality:
 *           description: The quality of the video.
 *           type: string
 *         workload:
 *           description: Quantitative measure of the physiologic output of the exercise; also referred to as energy expenditure.
 *           $ref: '#/components/schemas/energy'
 *         review:
 *           description: A review of the item.
 *           $ref: '#/components/schemas/review'
 *         events:
 *           description: Upcoming or past events associated with this place or organization.
 *           $ref: '#/components/schemas/event'
 *         ComputerLanguage:
 *           description: This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the [[Language]] type.
 *           $ref: '#/components/schemas/'
 *         characterName:
 *           description: The name of a character played in some acting or performing role, i.e. in a PerformanceRole.
 *           type: string
 *         WearableSizeGroupMaternity:
 *           description: Size group "Maternity" for wearables.
 *           $ref: '#/components/schemas/'
 *         FoodEstablishment:
 *           description: A food-related business.
 *           $ref: '#/components/schemas/'
 *         openingHoursSpecification:
 *           description: The opening hours of a certain place.
 *           $ref: '#/components/schemas/openinghoursspecification'
 *         strengthValue:
 *           description: The value of an active ingredient's strength, e.g. 325.
 *           type: number
 *         PodcastSeries:
 *           description: A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 *           $ref: '#/components/schemas/'
 *         BookFormatType:
 *           description: The publication format of the book.
 *           $ref: '#/components/schemas/'
 *         healthPlanCostSharing:
 *           description: Whether The costs to the patient for services under this network or formulary.
 *           $ref: '#/components/schemas/boolean'
 *         cvdCollectionDate:
 *           description: collectiondate - Date for which patient counts are reported.
 *           type: string
 *         CheckOutAction:
 *           description: The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).\n\nRelated actions:\n\n* [[CheckInAction]]: The antonym of CheckOutAction.\n* [[DepartAction]]: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.\n* [[CancelAction]]: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 *           $ref: '#/components/schemas/'
 *         labelDetails:
 *           description: Link to the drug's label details.
 *           type: string
 *         occupationLocation:
 *           description:  The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.
 *           $ref: '#/components/schemas/administrativearea'
 *         Library:
 *           description: A library.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c16:
 *           description: Nonprofit501c16: Non-profit type referring to Cooperative Organizations to Finance Crop Operations.
 *           $ref: '#/components/schemas/'
 *         LegislativeBuilding:
 *           description: A legislative building&#x2014;for example, the state capitol.
 *           $ref: '#/components/schemas/'
 *         ActivationFee:
 *           description: Represents the activation fee part of the total price for an offered product, for example a cellphone contract.
 *           $ref: '#/components/schemas/'
 *         additionalNumberOfGuests:
 *           description: If responding yes, the number of guests who will attend in addition to the invitee.
 *           type: number
 *         areaServed:
 *           description: The geographic area where a service or offered item is provided.
 *           $ref: '#/components/schemas/place'
 *         ContactPointOption:
 *           description: Enumerated options related to a ContactPoint.
 *           $ref: '#/components/schemas/'
 *         diseaseSpreadStatistics:
 *           description: Statistical information about the spread of a disease, either as [[WebContent]], or described directly as a [[Dataset]], or the specific [[Observation]]s in the dataset. When a [[WebContent]] URL is provided, the page indicated might also contain more such markup.
 *           $ref: '#/components/schemas/observation'
 *         availableFrom:
 *           description: When the item is available for pickup from the store, locker, etc.
 *           type: string
 *         interestRate:
 *           description: The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         byArtist:
 *           description: The artist that performed this album or recording.
 *           $ref: '#/components/schemas/person'
 *         RecommendedDoseSchedule:
 *           description: A recommended dosing schedule for a drug or supplement as prescribed or recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
 *           $ref: '#/components/schemas/'
 *         Paperback:
 *           description: Book format: Paperback.
 *           $ref: '#/components/schemas/'
 *         passengerPriorityStatus:
 *           description: The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).
 *           type: string
 *         AutoDealer:
 *           description: An car dealership.
 *           $ref: '#/components/schemas/'
 *         BroadcastService:
 *           description: A delivery service through which content is provided via broadcast over the air or online.
 *           $ref: '#/components/schemas/'
 *         Genetic:
 *           description: A specific branch of medical science that pertains to hereditary transmission and the variation of inherited characteristics and disorders.
 *           $ref: '#/components/schemas/'
 *         requiredGender:
 *           description: Audiences defined by a person's gender.
 *           type: string
 *         advanceBookingRequirement:
 *           description: The amount of time that is required between accepting the offer and the actual usage of the resource or service.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         InvestmentOrDeposit:
 *           description: A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.
 *           $ref: '#/components/schemas/'
 *         InForce:
 *           description: Indicates that a legislation is in force.
 *           $ref: '#/components/schemas/'
 *         collection:
 *           description: A sub property of object. The collection target of the action.
 *           $ref: '#/components/schemas/thing'
 *         publicTransportClosuresInfo:
 *           description: Information about public transport closures.
 *           type: string
 *         PublicationEvent:
 *           description: A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 *           $ref: '#/components/schemas/'
 *         cvdNumVentUse:
 *           description: numventuse - MECHANICAL VENTILATORS IN USE: Total number of ventilators in use.
 *           type: number
 *         TVEpisode:
 *           description: A TV episode which can be part of a series or season.
 *           $ref: '#/components/schemas/'
 *         dissolutionDate:
 *           description: The date that this organization was dissolved.
 *           type: string
 *         OfflinePermanently:
 *           description: Game server status: OfflinePermanently. Server is offline and not available.
 *           $ref: '#/components/schemas/'
 *         member:
 *           description: A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 *           $ref: '#/components/schemas/person'
 *         overdosage:
 *           description: Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
 *           type: string
 *         AmusementPark:
 *           description: An amusement park.
 *           $ref: '#/components/schemas/'
 *         legislationResponsible:
 *           description: An individual or organization that has some kind of responsibility for the legislation. Typically the ministry who is/was in charge of elaborating the legislation, or the adressee for potential questions about the legislation once it is published.
 *           $ref: '#/components/schemas/person'
 *         ResearchProject:
 *           description: A Research project.
 *           $ref: '#/components/schemas/'
 *         free:
 *           description: A flag to signal that the item, event, or place is accessible for free.
 *           $ref: '#/components/schemas/boolean'
 *         WearableMeasurementHeight:
 *           description: Measurement of the height, for example the heel height of a shoe
 *           $ref: '#/components/schemas/'
 *         Person:
 *           description: A person (alive, dead, undead, or fictional).
 *           $ref: '#/components/schemas/'
 *         SuspendAction:
 *           description: The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
 *           $ref: '#/components/schemas/'
 *         termsPerYear:
 *           description: The number of times terms of study are offered per year. Semesters and quarters are common units for term. For example, if the student can only take 2 semesters for the program in one year, then termsPerYear should be 2.
 *           type: number
 *         Artery:
 *           description: A type of blood vessel that specifically carries blood away from the heart.
 *           $ref: '#/components/schemas/'
 *         travelBans:
 *           description: Information about travel bans, e.g. in the context of a pandemic.
 *           $ref: '#/components/schemas/webcontent'
 *         hasCourseInstance:
 *           description: An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.
 *           $ref: '#/components/schemas/courseinstance'
 *         DoseSchedule:
 *           description: A specific dosing schedule for a drug or supplement.
 *           $ref: '#/components/schemas/'
 *         FoodEstablishmentReservation:
 *           description: A reservation to dine at a food-related business.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c19:
 *           description: Nonprofit501c19: Non-profit type referring to Post or Organization of Past or Present Members of the Armed Forces.
 *           $ref: '#/components/schemas/'
 *         accountablePerson:
 *           description: Specifies the Person that is legally accountable for the CreativeWork.
 *           $ref: '#/components/schemas/person'
 *         GasStation:
 *           description: A gas station.
 *           $ref: '#/components/schemas/'
 *         saturatedFatContent:
 *           description: The number of grams of saturated fat.
 *           $ref: '#/components/schemas/mass'
 *         arterialBranch:
 *           description: The branches that comprise the arterial structure.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         deliveryAddress:
 *           description: Destination address.
 *           $ref: '#/components/schemas/postaladdress'
 *         BefriendAction:
 *           description: The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 *           $ref: '#/components/schemas/'
 *         webFeed:
 *           description: The URL for a feed, e.g. associated with a podcast series, blog, or series of date-stamped updates. This is usually RSS or Atom.
 *           type: string
 *         MedicalObservationalStudy:
 *           description: An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment.
 *           $ref: '#/components/schemas/'
 *         RepaymentSpecification:
 *           description: A structured value representing repayment.
 *           $ref: '#/components/schemas/'
 *         RiverBodyOfWater:
 *           description: A river (for example, the broad majestic Shannon).
 *           $ref: '#/components/schemas/'
 *         scheduledPaymentDate:
 *           description: The date the invoice is scheduled to be paid.
 *           type: string
 *         GraphicNovel:
 *           description: Book format: GraphicNovel. May represent a bound collection of ComicIssue instances.
 *           $ref: '#/components/schemas/'
 *         departureStation:
 *           description: The station from which the train departs.
 *           $ref: '#/components/schemas/trainstation'
 *         OccupationalTherapy:
 *           description: A treatment of people with physical, emotional, or social problems, using purposeful activity to help them overcome or learn to deal with their problems.
 *           $ref: '#/components/schemas/'
 *         PaymentStatusType:
 *           description: A specific payment status. For example, PaymentDue, PaymentComplete, etc.
 *           $ref: '#/components/schemas/'
 *         Recruiting:
 *           description: Recruiting participants.
 *           $ref: '#/components/schemas/'
 *         ContactPage:
 *           description: Web page type: Contact page.
 *           $ref: '#/components/schemas/'
 *         geoWithin:
 *           description: Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/place'
 *         branch:
 *           description: The branches that delineate from the nerve bundle. Not to be confused with [[branchOf]].
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         Role:
 *           description: Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.\n\nSee also [blog post](http://blog.schema.org/2014/06/introducing-role.html).
 *           $ref: '#/components/schemas/'
 *         printEdition:
 *           description: The edition of the print product in which the NewsArticle appears.
 *           type: string
 *         targetUrl:
 *           description: The URL of a node in an established educational framework.
 *           type: string
 *         childMaxAge:
 *           description: Maximal age of the child.
 *           type: number
 *         stupidProperty:
 *           description: This is a StupidProperty! - for testing only
 *           $ref: '#/components/schemas/quantitativevalue'
 *         programmingModel:
 *           description: Indicates whether API is managed or unmanaged.
 *           type: string
 *         HealthPlanNetwork:
 *           description: A US-style health insurance plan network. 
 *           $ref: '#/components/schemas/'
 *         productGroupID:
 *           description: Indicates a textual identifier for a ProductGroup.
 *           type: string
 *         domiciledMortgage:
 *           description: Whether borrower is a resident of the jurisdiction where the property is located.
 *           $ref: '#/components/schemas/boolean'
 *         GlutenFreeDiet:
 *           description: A diet exclusive of gluten.
 *           $ref: '#/components/schemas/'
 *         CategoryCodeSet:
 *           description: A set of Category Code values.
 *           $ref: '#/components/schemas/'
 *         FrontWheelDriveConfiguration:
 *           description: Front-wheel drive is a transmission layout where the engine drives the front wheels.
 *           $ref: '#/components/schemas/'
 *         interactingDrug:
 *           description: Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
 *           $ref: '#/components/schemas/drug'
 *         hasEnergyConsumptionDetails:
 *           description: Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
 *           $ref: '#/components/schemas/energyconsumptiondetails'
 *         exchangeRateSpread:
 *           description: The difference between the price at which a broker or other intermediary buys and sells foreign currency.
 *           $ref: '#/components/schemas/monetaryamount'
 *         Nonprofit501c20:
 *           description: Nonprofit501c20: Non-profit type referring to Group Legal Services Plan Organizations.
 *           $ref: '#/components/schemas/'
 *         artMedium:
 *           description: The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
 *           type: string
 *         DeliveryTimeSettings:
 *           description: A DeliveryTimeSettings represents re-usable pieces of shipping information, relating to timing. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of a [[OfferShippingDetails]]. Several occurrences can be published, distinguished (and identified/referenced) by their different values for [[transitTimeLabel]].
 *           $ref: '#/components/schemas/'
 *         School:
 *           description: A school.
 *           $ref: '#/components/schemas/'
 *         valuePattern:
 *           description: Specifies a regular expression for testing literal values according to the HTML spec.
 *           type: string
 *         arrivalBusStop:
 *           description: The stop or station from which the bus arrives.
 *           $ref: '#/components/schemas/busstation'
 *         trainNumber:
 *           description: The unique identifier for the train.
 *           type: string
 *         productReturnLink:
 *           description: Indicates a Web page or service by URL, for product return.
 *           type: string
 *         PriceTypeEnumeration:
 *           description: Enumerates different price types, for example list price, invoice price, and sale price.
 *           $ref: '#/components/schemas/'
 *         netWorth:
 *           description: The total financial value of the person as calculated by subtracting assets from liabilities.
 *           $ref: '#/components/schemas/pricespecification'
 *         supplyTo:
 *           description: The area to which the artery supplies blood.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         MedicalScholarlyArticle:
 *           description: A scholarly article in the medical domain.
 *           $ref: '#/components/schemas/'
 *         serviceAudience:
 *           description: The audience eligible for this service.
 *           $ref: '#/components/schemas/audience'
 *         seeks:
 *           description: A pointer to products or services sought by the organization or person (demand).
 *           $ref: '#/components/schemas/demand'
 *         significance:
 *           description: The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.
 *           type: string
 *         recordedAs:
 *           description: An audio recording of the work.
 *           $ref: '#/components/schemas/musicrecording'
 *         securityScreening:
 *           description: The type of security screening the passenger is subject to.
 *           type: string
 *         FastFoodRestaurant:
 *           description: A fast-food restaurant.
 *           $ref: '#/components/schemas/'
 *         Neuro:
 *           description: Neurological system clinical examination.
 *           $ref: '#/components/schemas/'
 *         studySubject:
 *           description: A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.
 *           $ref: '#/components/schemas/medicalentity'
 *         ChildCare:
 *           description: A Childcare center.
 *           $ref: '#/components/schemas/'
 *         encodesCreativeWork:
 *           description: The CreativeWork encoded by this media object.
 *           $ref: '#/components/schemas/creativework'
 *         alternateName:
 *           description: An alias for the item.
 *           type: string
 *         hasCategoryCode:
 *           description: A Category code contained in this code set.
 *           $ref: '#/components/schemas/categorycode'
 *         downloadUrl:
 *           description: If the file can be downloaded, URL to download the binary.
 *           type: string
 *         winner:
 *           description: A sub property of participant. The winner of the action.
 *           $ref: '#/components/schemas/person'
 *         LymphaticVessel:
 *           description: A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
 *           $ref: '#/components/schemas/'
 *         MixtapeAlbum:
 *           description: MixtapeAlbum.
 *           $ref: '#/components/schemas/'
 *         WPSideBar:
 *           description: A sidebar section of the page.
 *           $ref: '#/components/schemas/'
 *         muscleAction:
 *           description: The movement the muscle generates.
 *           type: string
 *         reservationId:
 *           description: A unique identifier for the reservation.
 *           type: string
 *         suitableForDiet:
 *           description: Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
 *           $ref: '#/components/schemas/restricteddiet'
 *         HearingImpairedSupported:
 *           description: Uses devices to support users with hearing impairments.
 *           $ref: '#/components/schemas/'
 *         Article:
 *           description: An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *           $ref: '#/components/schemas/'
 *         CssSelectorType:
 *           description: Text representing a CSS selector.
 *           $ref: '#/components/schemas/'
 *         MerchantReturnFiniteReturnWindow:
 *           description: MerchantReturnFiniteReturnWindow: there is a finite window for product returns.
 *           $ref: '#/components/schemas/'
 *         distance:
 *           description: The distance travelled, e.g. exercising or travelling.
 *           $ref: '#/components/schemas/distance'
 *         LiveAlbum:
 *           description: LiveAlbum.
 *           $ref: '#/components/schemas/'
 *         target:
 *           description: Indicates a target EntryPoint for an Action.
 *           $ref: '#/components/schemas/entrypoint'
 *         TheaterGroup:
 *           description: A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
 *           $ref: '#/components/schemas/'
 *         partOfInvoice:
 *           description: The order is being paid as part of the referenced Invoice.
 *           $ref: '#/components/schemas/invoice'
 *         sharedContent:
 *           description: A CreativeWork such as an image, video, or audio clip shared as part of this posting.
 *           $ref: '#/components/schemas/creativework'
 *         departureTerminal:
 *           description: Identifier of the flight's departure terminal.
 *           type: string
 *         MusicAlbum:
 *           description: A collection of music tracks.
 *           $ref: '#/components/schemas/'
 *         EventReservation:
 *           description: A reservation for an event like a concert, sporting event, or lecture.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         ticketNumber:
 *           description: The unique identifier for the ticket.
 *           type: string
 *         HowToTool:
 *           description: A tool used (but not consumed) when performing instructions for how to achieve a result.
 *           $ref: '#/components/schemas/'
 *         resultComment:
 *           description: A sub property of result. The Comment created or sent as a result of this action.
 *           $ref: '#/components/schemas/comment'
 *         shippingSettingsLink:
 *           description: Link to a page containing [[ShippingRateSettings]] and [[DeliveryTimeSettings]] details.
 *           type: string
 *         newsUpdatesAndGuidelines:
 *           description: Indicates a page with news updates and guidelines. This could often be (but is not required to be) the main page containing [[SpecialAnnouncement]] markup on a site.
 *           type: string
 *         nextItem:
 *           description: A link to the ListItem that follows the current one.
 *           $ref: '#/components/schemas/listitem'
 *         MinimumAdvertisedPrice:
 *           description: Represents the minimum advertised price ("MAP") (as dictated by the manufacturer) of an offered product.
 *           $ref: '#/components/schemas/'
 *         BrainStructure:
 *           description: Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity.
 *           $ref: '#/components/schemas/'
 *         cssSelector:
 *           description: A CSS selector, e.g. of a [[SpeakableSpecification]] or [[WebPageElement]]. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
 *           $ref: '#/components/schemas/cssselectortype'
 *         TelevisionChannel:
 *           description: A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
 *           $ref: '#/components/schemas/'
 *         RegisterAction:
 *           description: The act of registering to be a user of a service, product or web page.\n\nRelated actions:\n\n* [[JoinAction]]: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.\n* [FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.\n* [[SubscribeAction]]: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemDE:
 *           description: German size system for wearables.
 *           $ref: '#/components/schemas/'
 *         DepositAccount:
 *           description: A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.
 *           $ref: '#/components/schemas/'
 *         CivicStructure:
 *           description: A public structure, such as a town hall or concert hall.
 *           $ref: '#/components/schemas/'
 *         Midwifery:
 *           description: A nurse-like health profession that deals with pregnancy, childbirth, and the postpartum period (including care of the newborn), besides sexual and reproductive health of women throughout their lives.
 *           $ref: '#/components/schemas/'
 *         DisabilitySupport:
 *           description: DisabilitySupport: this is a benefit for disability support.
 *           $ref: '#/components/schemas/'
 *         arrivalStation:
 *           description: The station where the train trip ends.
 *           $ref: '#/components/schemas/trainstation'
 *         clincalPharmacology:
 *           description: Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
 *           type: string
 *         DataFeed:
 *           description: A single feed providing structured information about one or more entities or topics.
 *           $ref: '#/components/schemas/'
 *         Schedule:
 *           description: A schedule defines a repeating time period used to describe a regularly occurring [[Event]]. At a minimum a schedule will specify [[repeatFrequency]] which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
 *           $ref: '#/components/schemas/'
 *         hasOfferCatalog:
 *           description: Indicates an OfferCatalog listing for this Organization, Person, or Service.
 *           $ref: '#/components/schemas/offercatalog'
 *         relatedDrug:
 *           description: Any other drug related to this one, for example commonly-prescribed alternatives.
 *           $ref: '#/components/schemas/drug'
 *         floorSize:
 *           description: The size of the accommodation, e.g. in square meter or squarefoot.Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard 
 *           $ref: '#/components/schemas/quantitativevalue'
 *         percentile25:
 *           description: The 25th percentile value.
 *           type: number
 *         seatingType:
 *           description: The type/class of the seat.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         ReservationCancelled:
 *           description: The status for a previously confirmed reservation that is now cancelled.
 *           $ref: '#/components/schemas/'
 *         birthDate:
 *           description: Date of birth.
 *           type: string
 *         EventVenue:
 *           description: An event venue.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemFR:
 *           description: French size system for wearables.
 *           $ref: '#/components/schemas/'
 *         BroadcastFrequencySpecification:
 *           description: The frequency in MHz and the modulation used for a particular BroadcastService.
 *           $ref: '#/components/schemas/'
 *         Taxi:
 *           description: A taxi.
 *           $ref: '#/components/schemas/'
 *         IceCreamShop:
 *           description: An ice cream shop.
 *           $ref: '#/components/schemas/'
 *         PaymentComplete:
 *           description: The payment has been received and processed.
 *           $ref: '#/components/schemas/'
 *         produces:
 *           description: The tangible thing generated by the service, e.g. a passport, permit, etc.
 *           $ref: '#/components/schemas/thing'
 *         ExerciseGym:
 *           description: A gym.
 *           $ref: '#/components/schemas/'
 *         interactivityType:
 *           description: The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
 *           type: string
 *         postalCodeBegin:
 *           description: First postal code in a range (included).
 *           type: string
 *         editEIDR:
 *           description: An [EIDR](https://eidr.org/) (Entertainment Identifier Registry) [[identifier]] representing a specific edit / edition for a work of film or television.For example, the motion picture known as "Ghostbusters" whose [[titleEIDR]] is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".Since schema.org types like [[Movie]] and [[TVEpisode]] can be used for both works and their multiple expressions, it is possible to use [[titleEIDR]] alone (for a general description), or alongside [[editEIDR]] for a more edit-specific description.
 *           type: string
 *         Specialty:
 *           description: Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.
 *           $ref: '#/components/schemas/'
 *         paymentDueDate:
 *           description: The date that payment is due.
 *           type: string
 *         loanPaymentFrequency:
 *           description: Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.
 *           type: number
 *         featureList:
 *           description: Features or modules provided by this application (and possibly required by other applications).
 *           type: string
 *         MeasurementTypeEnumeration:
 *           description: Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 *           $ref: '#/components/schemas/'
 *         FlightReservation:
 *           description: A reservation for air travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         MedicalEntity:
 *           description: The most generic type of entity related to health and the practice of medicine.
 *           $ref: '#/components/schemas/'
 *         activityFrequency:
 *           description: How often one should engage in the activity.
 *           type: string
 *         publishedOn:
 *           description: A broadcast service associated with the publication event.
 *           $ref: '#/components/schemas/broadcastservice'
 *         foodWarning:
 *           description: Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
 *           type: string
 *         CDFormat:
 *           description: CDFormat.
 *           $ref: '#/components/schemas/'
 *         Optician:
 *           description: A store that sells reading glasses and similar devices for improving vision.
 *           $ref: '#/components/schemas/'
 *         itemOffered:
 *           description: An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *           $ref: '#/components/schemas/creativework'
 *         translator:
 *           description: Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
 *           $ref: '#/components/schemas/person'
 *         Saturday:
 *           description: The day of the week between Friday and Sunday.
 *           $ref: '#/components/schemas/'
 *         isAvailableGenerically:
 *           description: True if the drug is available in a generic form (regardless of name).
 *           $ref: '#/components/schemas/boolean'
 *         targetPlatform:
 *           description: Type of app development: phone, Metro style, desktop, XBox, etc.
 *           type: string
 *         WearableSizeSystemEurope:
 *           description: European size system for wearables.
 *           $ref: '#/components/schemas/'
 *         commentCount:
 *           description: The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
 *           $ref: '#/components/schemas/integer'
 *         BodyMeasurementHand:
 *           description: Maximum hand girth (measured over the knuckles of the open right hand excluding thumb, fingers together). Used, for example, to fit gloves.
 *           $ref: '#/components/schemas/'
 *         Playground:
 *           description: A playground.
 *           $ref: '#/components/schemas/'
 *         StrengthTraining:
 *           description: Physical activity that is engaged in to improve muscle and bone strength. Also referred to as resistance training.
 *           $ref: '#/components/schemas/'
 *         Play:
 *           description: A play is a form of literature, usually consisting of dialogue between characters, intended for theatrical performance rather than just reading. Note the peformance of a Play would be a [[TheaterEvent]] - the *Play* being the [[workPerformed]].
 *           $ref: '#/components/schemas/'
 *         CourseInstance:
 *           description: An instance of a [[Course]] which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.
 *           $ref: '#/components/schemas/'
 *         DaySpa:
 *           description: A day spa.
 *           $ref: '#/components/schemas/'
 *         intensity:
 *           description: Quantitative measure gauging the degree of force involved in the exercise, for example, heartbeats per minute. May include the velocity of the movement.
 *           type: string
 *         Nonprofit501f:
 *           description: Nonprofit501f: Non-profit type referring to Cooperative Service Organizations.
 *           $ref: '#/components/schemas/'
 *         hasDriveThroughService:
 *           description: Indicates whether some facility (e.g. [[FoodEstablishment]], [[CovidTestingFacility]]) offers a service that can be used by driving through in a car. In the case of [[CovidTestingFacility]] such facilities could potentially help with social distancing from other potentially-infected users.
 *           $ref: '#/components/schemas/boolean'
 *         HighSchool:
 *           description: A high school.
 *           $ref: '#/components/schemas/'
 *         Friday:
 *           description: The day of the week between Thursday and Saturday.
 *           $ref: '#/components/schemas/'
 *         AcceptAction:
 *           description: The act of committing to/adopting an object.\n\nRelated actions:\n\n* [[RejectAction]]: The antonym of AcceptAction.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c9:
 *           description: Nonprofit501c9: Non-profit type referring to Voluntary Employee Beneficiary Associations.
 *           $ref: '#/components/schemas/'
 *         UserPlusOnes:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         PrependAction:
 *           description: The act of inserting at the beginning if an ordered collection.
 *           $ref: '#/components/schemas/'
 *         SubwayStation:
 *           description: A subway station.
 *           $ref: '#/components/schemas/'
 *         TakeAction:
 *           description: The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.\n\nRelated actions:\n\n* [[GiveAction]]: The reciprocal of TakeAction.\n* [[ReceiveAction]]: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 *           $ref: '#/components/schemas/'
 *         containedIn:
 *           description: The basic containment relation between a place and one that contains it.
 *           $ref: '#/components/schemas/place'
 *         dateReceived:
 *           description: The date/time the message was received if a single recipient exists.
 *           type: string
 *         InteractionCounter:
 *           description: A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 *           $ref: '#/components/schemas/'
 *         HealthClub:
 *           description: A health club.
 *           $ref: '#/components/schemas/'
 *         MediaManipulationRatingEnumeration:
 *           description:  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context.
 *           $ref: '#/components/schemas/'
 *         cookTime:
 *           description: The time it takes to actually cook the dish, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 *           $ref: '#/components/schemas/duration'
 *         geoCovers:
 *           description: Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/place'
 *         code:
 *           description: A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
 *           $ref: '#/components/schemas/medicalcode'
 *         BusinessAudience:
 *           description: A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 *           $ref: '#/components/schemas/'
 *         map:
 *           description: A URL to a map of the place.
 *           type: string
 *         runtime:
 *           description: Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).
 *           type: string
 *         arrivalBoatTerminal:
 *           description: The terminal or port from which the boat arrives.
 *           $ref: '#/components/schemas/boatterminal'
 *         PriceSpecification:
 *           description: A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use [[MonetaryAmount]] to describe independent amounts of money such as a salary, credit card limits, etc.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemAU:
 *           description: Australian size system for wearables.
 *           $ref: '#/components/schemas/'
 *         doseValue:
 *           description: The value of the dose, e.g. 500.
 *           type: number
 *         MedicalCondition:
 *           description: Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 *           $ref: '#/components/schemas/'
 *         cvdFacilityCounty:
 *           description: Name of the County of the NHSN facility that this data record applies to. Use [[cvdFacilityId]] to identify the facility. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
 *           type: string
 *         KosherDiet:
 *           description: A diet conforming to Jewish dietary practices.
 *           $ref: '#/components/schemas/'
 *         httpMethod:
 *           description: An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.
 *           type: string
 *         OpeningHoursSpecification:
 *           description: A structured value providing information about the opening hours of a place or a certain service inside a place.\n\nThe place is __open__ if the [[opens]] property is specified, and __closed__ otherwise.\n\nIf the value for the [[closes]] property is less than the value for the [[opens]] property then the hour range is assumed to span over the next day. 
 *           $ref: '#/components/schemas/'
 *         HairSalon:
 *           description: A hair salon.
 *           $ref: '#/components/schemas/'
 *         children:
 *           description: A child of the person.
 *           $ref: '#/components/schemas/person'
 *         PostalCodeRangeSpecification:
 *           description: Indicates a range of postalcodes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.
 *           $ref: '#/components/schemas/'
 *         broadcastDisplayName:
 *           description: The name displayed in the channel guide. For many US affiliates, it is the network name.
 *           type: string
 *         Dentist:
 *           description: A dentist.
 *           $ref: '#/components/schemas/'
 *         MedicalStudyStatus:
 *           description: The status of a medical study. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         SiteNavigationElement:
 *           description: A navigation element of the page.
 *           $ref: '#/components/schemas/'
 *         arrivalAirport:
 *           description: The airport where the flight terminates.
 *           $ref: '#/components/schemas/airport'
 *         device:
 *           description: Device required to run the application. Used in cases where a specific make/model is required to run the application.
 *           type: string
 *         regionsAllowed:
 *           description: The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in [ISO 3166 format](http://en.wikipedia.org/wiki/ISO_3166).
 *           $ref: '#/components/schemas/place'
 *         schemaVersion:
 *           description: Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to indicate the use of a specific schema.org release, e.g. ```10.0``` as a simple string, or more explicitly via URL, ```schema:docs/releases.html#v10.0```. There may be situations in which other schemas might usefully be referenced this way, e.g. ```http://dublincore.org/specifications/dublin-core/dces/1999-07-02/``` but this has not been carefully explored in the community.
 *           type: string
 *         InternetCafe:
 *           description: An internet cafe.
 *           $ref: '#/components/schemas/'
 *         numberOfRooms:
 *           description: The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Dermatologic:
 *           description: Something relating to or practicing dermatology.
 *           $ref: '#/components/schemas/'
 *         ListPrice:
 *           description: Represents the list price (the price a product is actually advertised for) of an offered product.
 *           $ref: '#/components/schemas/'
 *         Review:
 *           description: A review of an item - for example, of a restaurant, movie, or store.
 *           $ref: '#/components/schemas/'
 *         ratingExplanation:
 *           description: A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using [[ClaimReview]].
 *           type: string
 *         geoMidpoint:
 *           description: Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.
 *           $ref: '#/components/schemas/geocoordinates'
 *         productSupported:
 *           description: The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
 *           type: string
 *         WearableSizeGroupShort:
 *           description: Size group "Short" for wearables.
 *           $ref: '#/components/schemas/'
 *         appliesToDeliveryMethod:
 *           description: The delivery method(s) to which the delivery charge or payment charge specification applies.
 *           $ref: '#/components/schemas/deliverymethod'
 *         qualifications:
 *           description: Specific qualifications required for this role or Occupation.
 *           $ref: '#/components/schemas/educationaloccupationalcredential'
 *         EducationalOccupationalProgram:
 *           description: A program offered by an institution which determines the learning progress to achieve an outcome, usually a credential like a degree or certificate. This would define a discrete set of opportunities (e.g., job, courses) that together constitute a program with a clear start, end, set of requirements, and transition to a new occupational opportunity (e.g., a job), or sometimes a higher educational opportunity (e.g., an advanced degree).
 *           $ref: '#/components/schemas/'
 *         organizer:
 *           description: An organizer of an Event.
 *           $ref: '#/components/schemas/person'
 *         proprietaryName:
 *           description: Proprietary name given to the diet plan, typically by its originator or creator.
 *           type: string
 *         legislationChanges:
 *           description: Another legislation that this legislation changes. This encompasses the notions of amendment, replacement, correction, repeal, or other types of change. This may be a direct change (textual or non-textual amendment) or a consequential or indirect change. The property is to be used to express the existence of a change relationship between two acts rather than the existence of a consolidated version of the text that shows the result of the change. For consolidation relationships, use the <a href="/legislationConsolidates">legislationConsolidates</a> property.
 *           $ref: '#/components/schemas/legislation'
 *         downPayment:
 *           description: a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.
 *           $ref: '#/components/schemas/monetaryamount'
 *         GeoCircle:
 *           description: A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius. The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'. 
 *           $ref: '#/components/schemas/'
 *         BookmarkAction:
 *           description: An agent bookmarks/flags/labels/tags/marks an object.
 *           $ref: '#/components/schemas/'
 *         modifiedTime:
 *           description: The date and time the reservation was modified.
 *           type: string
 *         serviceLocation:
 *           description: The location (e.g. civic structure, local business, etc.) where a person can go to access the service.
 *           $ref: '#/components/schemas/place'
 *         amenityFeature:
 *           description: An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
 *           $ref: '#/components/schemas/locationfeaturespecification'
 *         subEvents:
 *           description: Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.
 *           $ref: '#/components/schemas/event'
 *         relatedStructure:
 *           description: Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         sdDatePublished:
 *           description: Indicates the date on which the current structured data was generated / published. Typically used alongside [[sdPublisher]]
 *           type: string
 *         event:
 *           description: Upcoming or past event associated with this place, organization, or action.
 *           $ref: '#/components/schemas/event'
 *         jobLocationType:
 *           description: A description of the job location (e.g TELECOMMUTE for telecommute jobs).
 *           type: string
 *         FinancialService:
 *           description: Financial services business.
 *           $ref: '#/components/schemas/'
 *         icaoCode:
 *           description: ICAO identifier for an airport.
 *           type: string
 *         ProductCollection:
 *           description: A set of products (either [[ProductGroup]]s or specific variants) that are listed together e.g. in an [[Offer]].
 *           $ref: '#/components/schemas/'
 *         inventoryLevel:
 *           description: The current approximate inventory level for the item or items.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         beforeMedia:
 *           description: A media object representing the circumstances before performing this direction.
 *           type: string
 *         Dataset:
 *           description: A body of structured information describing some topic(s) of interest.
 *           $ref: '#/components/schemas/'
 *         Airport:
 *           description: An airport.
 *           $ref: '#/components/schemas/'
 *         RadioSeason:
 *           description: Season dedicated to radio broadcast and associated online delivery.
 *           $ref: '#/components/schemas/'
 *         PreventionIndication:
 *           description: An indication for preventing an underlying condition, symptom, etc.
 *           $ref: '#/components/schemas/'
 *         AdministrativeArea:
 *           description: A geographical region, typically under the jurisdiction of a particular government.
 *           $ref: '#/components/schemas/'
 *         totalPrice:
 *           description: The total price for the reservation or ticket, including applicable taxes, shipping, etc.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *           type: number
 *         legislationPassedBy:
 *           description: The person or organization that originally passed or made the law : typically parliament (for primary legislation) or government (for secondary legislation). This indicates the "legal author" of the law, as opposed to its physical author.
 *           $ref: '#/components/schemas/organization'
 *         Newspaper:
 *           description: A publication containing information about varied topics that are pertinent to general information, a geographic area, or a specific subject matter (i.e. business, culture, education). Often published daily.
 *           $ref: '#/components/schemas/'
 *         OrderAction:
 *           description: An agent orders an object/product/service to be delivered/sent.
 *           $ref: '#/components/schemas/'
 *         lastReviewed:
 *           description: Date on which the content on this web page was last reviewed for accuracy and/or completeness.
 *           type: string
 *         LearningResource:
 *           description: The LearningResource type can be used to indicate [[CreativeWork]]s (whether physical or digital) that have a particular and explicit orientation towards learning, education, skill acquisition, and other educational purposes.[[LearningResource]] is expected to be used as an addition to a primary type such as [[Book]], [[VideoObject]], [[Product]] etc.[[EducationEvent]] serves a similar purpose for event-like things (e.g. a [[Trip]]). A [[LearningResource]] may be created as a result of an [[EducationEvent]], for example by recording one.
 *           $ref: '#/components/schemas/'
 *         operatingSystem:
 *           description: Operating systems supported (Windows 7, OSX 10.6, Android 1.6).
 *           type: string
 *         email:
 *           description: Email address.
 *           type: string
 *         possibleComplication:
 *           description: A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
 *           type: string
 *         recommendedIntake:
 *           description: Recommended intake of this supplement for a given population as defined by a specific recommending authority.
 *           $ref: '#/components/schemas/recommendeddoseschedule'
 *         DietarySupplement:
 *           description: A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
 *           $ref: '#/components/schemas/'
 *         endTime:
 *           description: The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to *December*. For media, including audio and video, it's the time offset of the end of a clip within a larger file.\n\nNote that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
 *           type: string
 *         educationalUse:
 *           description: The purpose of a work in the context of education; for example, 'assignment', 'group work'.
 *           $ref: '#/components/schemas/definedterm'
 *         relevantOccupation:
 *           description: The Occupation for the JobPosting.
 *           $ref: '#/components/schemas/occupation'
 *         InsuranceAgency:
 *           description: An Insurance agency.
 *           $ref: '#/components/schemas/'
 *         courseCode:
 *           description: The identifier for the [[Course]] used by the course [[provider]] (e.g. CS101 or 6.001).
 *           type: string
 *         DrawAction:
 *           description: The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.
 *           $ref: '#/components/schemas/'
 *         ineligibleRegion:
 *           description: The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]]. 
 *           $ref: '#/components/schemas/geoshape'
 *         gamePlatform:
 *           description: The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
 *           $ref: '#/components/schemas/thing'
 *         Diet:
 *           description: A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
 *           $ref: '#/components/schemas/'
 *         priceComponentType:
 *           description: Identifies a price component (for example, a line item on an invoice), part of the total price for an offer.
 *           $ref: '#/components/schemas/pricecomponenttypeenumeration'
 *         Ticket:
 *           description: Used to describe a ticket to an event, a flight, a bus ride, etc.
 *           $ref: '#/components/schemas/'
 *         AutomotiveBusiness:
 *           description: Car repair, sales, or parts.
 *           $ref: '#/components/schemas/'
 *         UserReview:
 *           description: A review created by an end-user (e.g. consumer, purchaser, attendee etc.), in contrast with [[CriticReview]].
 *           $ref: '#/components/schemas/'
 *         accessibilityControl:
 *           description: Identifies input methods that are sufficient to fully control the described resource ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
 *           type: string
 *         OfferForPurchase:
 *           description: An [[OfferForPurchase]] in Schema.org represents an [[Offer]] to sell something, i.e. an [[Offer]] whose [[businessFunction]] is [sell](http://purl.org/goodrelations/v1#Sell.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for background on the underlying concepts. 
 *           $ref: '#/components/schemas/'
 *         Quiz:
 *           description: Quiz: A test of knowledge, skills and abilities.
 *           $ref: '#/components/schemas/'
 *         subStructure:
 *           description: Component (sub-)structure(s) that comprise this anatomical structure.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         SeatingMap:
 *           description: A seating map.
 *           $ref: '#/components/schemas/'
 *         billingIncrement:
 *           description: This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.
 *           type: number
 *         VeganDiet:
 *           description: A diet exclusive of all animal products.
 *           $ref: '#/components/schemas/'
 *         TollFree:
 *           description: The associated telephone number is toll free.
 *           $ref: '#/components/schemas/'
 *         performTime:
 *           description: The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 *           $ref: '#/components/schemas/duration'
 *         GeoCoordinates:
 *           description: The geographic coordinates of a place or event.
 *           $ref: '#/components/schemas/'
 *         legalName:
 *           description: The official name of the organization, e.g. the registered company name.
 *           type: string
 *         BasicIncome:
 *           description: BasicIncome: this is a benefit for basic income.
 *           $ref: '#/components/schemas/'
 *         highPrice:
 *           description: The highest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *           type: number
 *         DJMixAlbum:
 *           description: DJMixAlbum.
 *           $ref: '#/components/schemas/'
 *         itemLocation:
 *           description: Current location of the item.
 *           $ref: '#/components/schemas/postaladdress'
 *         Neurologic:
 *           description: A specific branch of medical science that studies the nerves and nervous system and its respective disease states.
 *           $ref: '#/components/schemas/'
 *         SatiricalArticle:
 *           description: An [[Article]] whose content is primarily [[satirical]](https://en.wikipedia.org/wiki/Satire) in nature, i.e. unlikely to be literally true. A satirical article is sometimes but not necessarily also a [[NewsArticle]]. [[ScholarlyArticle]]s are also sometimes satirized.
 *           $ref: '#/components/schemas/'
 *         specialty:
 *           description: One of the domain specialities to which this web page's content applies.
 *           $ref: '#/components/schemas/specialty'
 *         courseMode:
 *           description: The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
 *           type: string
 *         lodgingUnitType:
 *           description: Textual description of the unit type (including suite vs. room, size of bed, etc.).
 *           $ref: '#/components/schemas/qualitativevalue'
 *         Question:
 *           description: A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 *           $ref: '#/components/schemas/'
 *         engineDisplacement:
 *           description: The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. \n\nTypical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches\n* Note 1: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         boardingGroup:
 *           description: The airline-specific indicator of boarding order / preference.
 *           type: string
 *         AerobicActivity:
 *           description: Physical activity of relatively low intensity that depends primarily on the aerobic energy-generating process; during activity, the aerobic metabolism uses oxygen to adequately meet energy demands during exercise.
 *           $ref: '#/components/schemas/'
 *         upvoteCount:
 *           description: The number of upvotes this question, answer or comment has received from the community.
 *           $ref: '#/components/schemas/integer'
 *         issuedBy:
 *           description: The organization issuing the ticket or permit.
 *           $ref: '#/components/schemas/organization'
 *         iataCode:
 *           description: IATA identifier for an airline or airport.
 *           type: string
 *         ClothingStore:
 *           description: A clothing store.
 *           $ref: '#/components/schemas/'
 *         calories:
 *           description: The number of calories.
 *           $ref: '#/components/schemas/energy'
 *         alignmentType:
 *           description: A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.
 *           type: string
 *         FDAcategoryA:
 *           description: A designation by the US FDA signifying that adequate and well-controlled studies have failed to demonstrate a risk to the fetus in the first trimester of pregnancy (and there is no evidence of risk in later trimesters).
 *           $ref: '#/components/schemas/'
 *         color:
 *           description: The color of the product.
 *           type: string
 *         OrganizeAction:
 *           description: The act of manipulating/administering/supervising/controlling one or more objects.
 *           $ref: '#/components/schemas/'
 *         Boolean:
 *           description: Boolean: True or False.
 *           $ref: '#/components/schemas/'
 *         Physiotherapy:
 *           description: The practice of treatment of disease, injury, or deformity by physical methods such as massage, heat treatment, and exercise rather than by drugs or surgery..
 *           $ref: '#/components/schemas/'
 *         seatSection:
 *           description: The section location of the reserved seat (e.g. Orchestra).
 *           type: string
 *         answerCount:
 *           description: The number of answers this question has received.
 *           $ref: '#/components/schemas/integer'
 *         Enumeration:
 *           description: Lists or enumerations—for example, a list of cuisines or music genres, etc.
 *           $ref: '#/components/schemas/'
 *         InfectiousDisease:
 *           description: An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease.
 *           $ref: '#/components/schemas/'
 *         language:
 *           description: A sub property of instrument. The language used on this action.
 *           $ref: '#/components/schemas/language'
 *         BusStop:
 *           description: A bus stop.
 *           $ref: '#/components/schemas/'
 *         requirements:
 *           description: Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
 *           type: string
 *         album:
 *           description: A music album.
 *           $ref: '#/components/schemas/musicalbum'
 *         SingleFamilyResidence:
 *           description: Residence type: Single-family home.
 *           $ref: '#/components/schemas/'
 *         DiagnosticProcedure:
 *           description: A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes.
 *           $ref: '#/components/schemas/'
 *         Mosque:
 *           description: A mosque.
 *           $ref: '#/components/schemas/'
 *         ScreeningEvent:
 *           description: A screening of a movie or other video.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c15:
 *           description: Nonprofit501c15: Non-profit type referring to Mutual Insurance Companies or Associations.
 *           $ref: '#/components/schemas/'
 *         OnlineEventAttendanceMode:
 *           description: OnlineEventAttendanceMode - an event that is primarily conducted online. 
 *           $ref: '#/components/schemas/'
 *         multipleValues:
 *           description: Whether multiple values are allowed for the property. Default is false.
 *           $ref: '#/components/schemas/boolean'
 *         priceRange:
 *           description: The price range of the business, for example ```$$$```.
 *           type: string
 *         AnatomicalSystem:
 *           description: An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 *           $ref: '#/components/schemas/'
 *         BusReservation:
 *           description: A reservation for bus travel. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         ResultsAvailable:
 *           description: Results are available.
 *           $ref: '#/components/schemas/'
 *         targetName:
 *           description: The name of a node in an established educational framework.
 *           type: string
 *         readonlyValue:
 *           description: Whether or not a property is mutable. Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.
 *           $ref: '#/components/schemas/boolean'
 *         incentiveCompensation:
 *           description: Description of bonus and commission compensation aspects of the job.
 *           type: string
 *         broadcastAffiliateOf:
 *           description: The media network(s) whose content is broadcast on this station.
 *           $ref: '#/components/schemas/organization'
 *         additionalProperty:
 *           description: A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.\n\nNote: Publishers should be aware that applications designed to use specific schema.org properties (e.g. schema:width, schema:color, schema:gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
 *           $ref: '#/components/schemas/propertyvalue'
 *         postalCodeEnd:
 *           description: Last postal code in the range (included). Needs to be after [[postalCodeBegin]].
 *           type: string
 *         Time:
 *           description: A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see [XML schema for details](http://www.w3.org/TR/xmlschema-2/#time)).
 *           $ref: '#/components/schemas/'
 *         primaryImageOfPage:
 *           description: Indicates the main image on the page.
 *           $ref: '#/components/schemas/imageobject'
 *         sponsor:
 *           description: A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 *           $ref: '#/components/schemas/person'
 *         includesHealthPlanFormulary:
 *           description: Formularies covered by this plan.
 *           $ref: '#/components/schemas/healthplanformulary'
 *         telephone:
 *           description: The telephone number.
 *           type: string
 *         jurisdiction:
 *           description: Indicates a legal jurisdiction, e.g. of some legislation, or where some government service is based.
 *           $ref: '#/components/schemas/administrativearea'
 *         NewCondition:
 *           description: Indicates that the item is new.
 *           $ref: '#/components/schemas/'
 *         coverageEndTime:
 *           description: The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.
 *           type: string
 *         actionPlatform:
 *           description: The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.
 *           type: string
 *         foundingDate:
 *           description: The date that this organization was founded.
 *           type: string
 *         assembly:
 *           description: Library file name e.g., mscorlib.dll, system.web.dll.
 *           type: string
 *         salaryUponCompletion:
 *           description: The expected salary upon completing the training.
 *           $ref: '#/components/schemas/monetaryamountdistribution'
 *         vehicleSeatingCapacity:
 *           description: The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.\n\nTypical unit code(s): C62 for persons.
 *           type: number
 *         TravelAction:
 *           description: The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
 *           $ref: '#/components/schemas/'
 *         DeliveryEvent:
 *           description: An event involving the delivery of an item.
 *           $ref: '#/components/schemas/'
 *         birthPlace:
 *           description: The place where the person was born.
 *           $ref: '#/components/schemas/place'
 *         publishedBy:
 *           description: An agent associated with the publication event.
 *           $ref: '#/components/schemas/organization'
 *         educationalAlignment:
 *           description: An alignment to an established educational framework.This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource [[teaches]] or [[assesses]] a competency.
 *           $ref: '#/components/schemas/alignmentobject'
 *         DataCatalog:
 *           description: A collection of datasets.
 *           $ref: '#/components/schemas/'
 *         episodeNumber:
 *           description: Position of the episode within an ordered group of episodes.
 *           $ref: '#/components/schemas/integer'
 *         NonprofitType:
 *           description: NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 *           $ref: '#/components/schemas/'
 *         exerciseRelatedDiet:
 *           description: A sub property of instrument. The diet used in this action.
 *           $ref: '#/components/schemas/diet'
 *         logo:
 *           description: An associated logo.
 *           $ref: '#/components/schemas/imageobject'
 *         installUrl:
 *           description: URL at which the app may be installed, if different from the URL of the item.
 *           type: string
 *         LeftHandDriving:
 *           description: The steering position is on the left side of the vehicle (viewed from the main direction of driving).
 *           $ref: '#/components/schemas/'
 *         Registry:
 *           description: A registry-based study design.
 *           $ref: '#/components/schemas/'
 *         activeIngredient:
 *           description: An active ingredient, typically chemical compounds and/or biologic substances.
 *           type: string
 *         characterAttribute:
 *           description: A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
 *           $ref: '#/components/schemas/thing'
 *         WatchAction:
 *           description: The act of consuming dynamic/moving visual content.
 *           $ref: '#/components/schemas/'
 *         Diagnostic:
 *           description: A medical device used for diagnostic purposes.
 *           $ref: '#/components/schemas/'
 *         isAccessibleForFree:
 *           description: A flag to signal that the item, event, or place is accessible for free.
 *           $ref: '#/components/schemas/boolean'
 *         hospitalAffiliation:
 *           description: A hospital with which the physician or office is affiliated.
 *           $ref: '#/components/schemas/hospital'
 *         musicalKey:
 *           description: The key, mode, or scale this composition uses.
 *           type: string
 *         administrationRoute:
 *           description: A route by which this drug may be administered, e.g. 'oral'.
 *           type: string
 *         usesDevice:
 *           description: Device used to perform the test.
 *           $ref: '#/components/schemas/medicaldevice'
 *         Reservoir:
 *           description: A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.
 *           $ref: '#/components/schemas/'
 *         Cardiovascular:
 *           description: A specific branch of medical science that pertains to diagnosis and treatment of disorders of heart and vasculature.
 *           $ref: '#/components/schemas/'
 *         cvdNumICUBedsOcc:
 *           description: numicubedsocc - ICU BED OCCUPANCY: Total number of staffed inpatient ICU beds that are occupied.
 *           type: number
 *         encodings:
 *           description: A media object that encodes this CreativeWork.
 *           $ref: '#/components/schemas/mediaobject'
 *         mpn:
 *           description: The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
 *           type: string
 *         SearchAction:
 *           description: The act of searching for an object.\n\nRelated actions:\n\n* [[FindAction]]: SearchAction generally leads to a FindAction, but not necessarily.
 *           $ref: '#/components/schemas/'
 *         OfferItemCondition:
 *           description: A list of possible conditions for the item.
 *           $ref: '#/components/schemas/'
 *         costOrigin:
 *           description: Additional details to capture the origin of the cost data. For example, 'Medicare Part B'.
 *           type: string
 *         MedicalSignOrSymptom:
 *           description: Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 *           $ref: '#/components/schemas/'
 *         healthPlanPharmacyCategory:
 *           description: The category or type of pharmacy associated with this cost sharing.
 *           type: string
 *         Nonprofit501n:
 *           description: Nonprofit501n: Non-profit type referring to Charitable Risk Pools.
 *           $ref: '#/components/schemas/'
 *         LegalForceStatus:
 *           description: A list of possible statuses for the legal force of a legislation.
 *           $ref: '#/components/schemas/'
 *         error:
 *           description: For failed actions, more information on the cause of the failure.
 *           $ref: '#/components/schemas/thing'
 *         Cemetery:
 *           description: A graveyard.
 *           $ref: '#/components/schemas/'
 *         PalliativeProcedure:
 *           description: A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.
 *           $ref: '#/components/schemas/'
 *         percentile10:
 *           description: The 10th percentile value.
 *           type: number
 *         AssignAction:
 *           description: The act of allocating an action/event/task to some destination (someone or something).
 *           $ref: '#/components/schemas/'
 *         AutoWash:
 *           description: A car wash business.
 *           $ref: '#/components/schemas/'
 *         partOfOrder:
 *           description: The overall order the items in this delivery were included in.
 *           $ref: '#/components/schemas/order'
 *         RsvpResponseType:
 *           description: RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 *           $ref: '#/components/schemas/'
 *         caption:
 *           description: The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the [[encodingFormat]].
 *           $ref: '#/components/schemas/mediaobject'
 *         honorificSuffix:
 *           description: An honorific suffix following a Person's name such as M.D. /PhD/MSCSW.
 *           type: string
 *         issn:
 *           description: The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
 *           type: string
 *         pickupLocation:
 *           description: Where a taxi will pick up a passenger or a rental car can be picked up.
 *           $ref: '#/components/schemas/place'
 *         CafeOrCoffeeShop:
 *           description: A cafe or coffee shop.
 *           $ref: '#/components/schemas/'
 *         Podiatric:
 *           description: Podiatry is the care of the human foot, especially the diagnosis and treatment of foot disorders.
 *           $ref: '#/components/schemas/'
 *         Locksmith:
 *           description: A locksmith.
 *           $ref: '#/components/schemas/'
 *         processorRequirements:
 *           description: Processor architecture required to run the application (e.g. IA64).
 *           type: string
 *         FourWheelDriveConfiguration:
 *           description: Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability.
 *           $ref: '#/components/schemas/'
 *         imagingTechnique:
 *           description: Imaging technique used.
 *           $ref: '#/components/schemas/medicalimagingtechnique'
 *         PaymentDeclined:
 *           description: The payee received the payment, but it was declined for some reason.
 *           $ref: '#/components/schemas/'
 *         ElementarySchool:
 *           description: An elementary school.
 *           $ref: '#/components/schemas/'
 *         parentOrganization:
 *           description: The larger organization that this organization is a [[subOrganization]] of, if any.
 *           $ref: '#/components/schemas/organization'
 *         WesternConventional:
 *           description: The conventional Western system of medicine, that aims to apply the best available evidence gained from the scientific method to clinical decision making. Also known as conventional or Western medicine.
 *           $ref: '#/components/schemas/'
 *         IgnoreAction:
 *           description: The act of intentionally disregarding the object. An agent ignores an object.
 *           $ref: '#/components/schemas/'
 *         bed:
 *           description: The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text. If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
 *           $ref: '#/components/schemas/beddetails'
 *         AdultEntertainment:
 *           description: An adult entertainment establishment.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c18:
 *           description: Nonprofit501c18: Non-profit type referring to Employee Funded Pension Trust (created before 25 June 1959).
 *           $ref: '#/components/schemas/'
 *         inProductGroupWithID:
 *           description: Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. 
 *           type: string
 *         Osteopathic:
 *           description: A system of medicine focused on promoting the body's innate ability to heal itself.
 *           $ref: '#/components/schemas/'
 *         MedicalStudy:
 *           description: A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 *           $ref: '#/components/schemas/'
 *         repeatFrequency:
 *           description: Defines the frequency at which [[Event]]s will occur according to a schedule [[Schedule]]. The intervals between events should be defined as a [[Duration]] of time.
 *           type: string
 *         includesObject:
 *           description: This links to a node or nodes indicating the exact quantity of the products included in an [[Offer]] or [[ProductCollection]].
 *           $ref: '#/components/schemas/typeandquantitynode'
 *         MedicalSymptom:
 *           description: Any complaint sensed and expressed by the patient (therefore defined as subjective) like stomachache, lower-back pain, or fatigue.
 *           $ref: '#/components/schemas/'
 *         DataFeedItem:
 *           description: A single item within a larger data feed.
 *           $ref: '#/components/schemas/'
 *         UserCheckins:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         hostingOrganization:
 *           description: The organization (airline, travelers' club, etc.) the membership is made with.
 *           $ref: '#/components/schemas/organization'
 *         geographicArea:
 *           description: The geographic area associated with the audience.
 *           $ref: '#/components/schemas/administrativearea'
 *         BoatTrip:
 *           description: A trip on a commercial ferry line.
 *           $ref: '#/components/schemas/'
 *         MerchantReturnUnlimitedWindow:
 *           description: MerchantReturnUnlimitedWindow: there is an unlimited window for product returns.
 *           $ref: '#/components/schemas/'
 *         BedType:
 *           description: A type of bed. This is used for indicating the bed or beds available in an accommodation.
 *           $ref: '#/components/schemas/'
 *         ItemList:
 *           description: A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 *           $ref: '#/components/schemas/'
 *         NailSalon:
 *           description: A nail salon.
 *           $ref: '#/components/schemas/'
 *         MeetingRoom:
 *           description: A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         procedure:
 *           description: A description of the procedure involved in setting up, using, and/or installing the device.
 *           type: string
 *         MovieClip:
 *           description: A short segment/part of a movie.
 *           $ref: '#/components/schemas/'
 *         OrderPickupAvailable:
 *           description: OrderStatus representing availability of an order for pickup.
 *           $ref: '#/components/schemas/'
 *         boardingPolicy:
 *           description: The type of boarding policy used by the airline (e.g. zone-based or group-based).
 *           $ref: '#/components/schemas/boardingpolicytype'
 *         datePosted:
 *           description: Publication date of an online listing.
 *           type: string
 *         maximumAttendeeCapacity:
 *           description: The total number of individuals that may attend an event or venue.
 *           $ref: '#/components/schemas/integer'
 *         rsvpResponse:
 *           description: The response (yes, no, maybe) to the RSVP.
 *           $ref: '#/components/schemas/rsvpresponsetype'
 *         earlyPrepaymentPenalty:
 *           description: The amount to be paid as a penalty in the event of early payment of the loan.
 *           $ref: '#/components/schemas/monetaryamount'
 *         WPHeader:
 *           description: The header section of the page.
 *           $ref: '#/components/schemas/'
 *         UserDownloads:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         archiveHeld:
 *           description: Collection, [fonds](https://en.wikipedia.org/wiki/Fonds), or item held, kept or maintained by an [[ArchiveOrganization]].
 *           $ref: '#/components/schemas/archivecomponent'
 *         FireStation:
 *           description: A fire station. With firemen.
 *           $ref: '#/components/schemas/'
 *         claimReviewed:
 *           description: A short summary of the specific claims reviewed in a ClaimReview.
 *           type: string
 *         eventStatus:
 *           description: An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
 *           $ref: '#/components/schemas/eventstatustype'
 *         Nursing:
 *           description: A health profession of a person formally educated and trained in the care of the sick or infirm person.
 *           $ref: '#/components/schemas/'
 *         occupationalCredentialAwarded:
 *           description: A description of the qualification, award, certificate, diploma or other occupational credential awarded as a consequence of successful completion of this course or program.
 *           type: string
 *         ethicsPolicy:
 *           description: Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 *           $ref: '#/components/schemas/creativework'
 *         accessModeSufficient:
 *           description: A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include: auditory, tactile, textual, visual. 
 *           $ref: '#/components/schemas/itemlist'
 *         numberOfBathroomsTotal:
 *           description: The total integer number of bathrooms in a some [[Accommodation]], following real estate conventions as [documented in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsTotalInteger+Field): "The simple sum of the number of bathrooms. For example for a property with two Full Bathrooms and one Half Bathroom, the Bathrooms Total Integer will be 3.". See also [[numberOfRooms]].
 *           $ref: '#/components/schemas/integer'
 *         InviteAction:
 *           description: The act of asking someone to attend an event. Reciprocal of RsvpAction.
 *           $ref: '#/components/schemas/'
 *         warning:
 *           description: Any FDA or other warnings about the drug (text or URL).
 *           type: string
 *         availableChannel:
 *           description: A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
 *           $ref: '#/components/schemas/servicechannel'
 *         SeaBodyOfWater:
 *           description: A sea (for example, the Caspian sea).
 *           $ref: '#/components/schemas/'
 *         category:
 *           description: A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 *           type: string
 *         primaryPrevention:
 *           description: A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
 *           $ref: '#/components/schemas/medicaltherapy'
 *         PotentialActionStatus:
 *           description: A description of an action that is supported.
 *           $ref: '#/components/schemas/'
 *         ReservationConfirmed:
 *           description: The status of a confirmed reservation.
 *           $ref: '#/components/schemas/'
 *         Installment:
 *           description: Represents the installment pricing component of the total price for an offered product.
 *           $ref: '#/components/schemas/'
 *         sugarContent:
 *           description: The number of grams of sugar.
 *           $ref: '#/components/schemas/mass'
 *         resultReview:
 *           description: A sub property of result. The review that resulted in the performing of the action.
 *           $ref: '#/components/schemas/review'
 *         PublicationIssue:
 *           description: A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *           $ref: '#/components/schemas/'
 *         BodyMeasurementInsideLeg:
 *           description: Inside leg (measured between crotch and soles of feet). Used, for example, to fit pants.
 *           $ref: '#/components/schemas/'
 *         dropoffTime:
 *           description: When a rental car can be dropped off.
 *           type: string
 *         GovernmentOffice:
 *           description: A government office&#x2014;for example, an IRS or DMV office.
 *           $ref: '#/components/schemas/'
 *         stageAsNumber:
 *           description: The stage represented as a number, e.g. 3.
 *           type: number
 *         PublicHealth:
 *           description: Branch of medicine that pertains to the health services to improve and protect community health, especially epidemiology, sanitation, immunization, and preventive medicine.
 *           $ref: '#/components/schemas/'
 *         Atlas:
 *           description: A collection or bound volume of maps, charts, plates or tables, physical or in media form illustrating any subject.
 *           $ref: '#/components/schemas/'
 *         coverageStartTime:
 *           description: The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.
 *           type: string
 *         reviewedBy:
 *           description: People or organizations that have reviewed the content on this web page for accuracy and/or completeness.
 *           $ref: '#/components/schemas/organization'
 *         ParcelDelivery:
 *           description: The delivery of a parcel either via the postal service or a commercial service.
 *           $ref: '#/components/schemas/'
 *         pageEnd:
 *           description: The page on which the work ends; for example "138" or "xvi".
 *           type: string
 *         SportsOrganization:
 *           description: Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 *           $ref: '#/components/schemas/'
 *         recipeCategory:
 *           description: The category of the recipe—for example, appetizer, entree, etc.
 *           type: string
 *         billingDuration:
 *           description: Specifies for how long this price (or price component) will be billed. Can be used, for example, to model the contractual duration of a subscription or payment plan. Type can be either a Duration or a Number (in which case the unit of measurement, for example month, is specified by the unitCode property).
 *           $ref: '#/components/schemas/duration'
 *         suggestedAge:
 *           description: The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         contactType:
 *           description: A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
 *           type: string
 *         OfferForLease:
 *           description: An [[OfferForLease]] in Schema.org represents an [[Offer]] to lease out something, i.e. an [[Offer]] whose [[businessFunction]] is [lease out](http://purl.org/goodrelations/v1#LeaseOut.). See [Good Relations](https://en.wikipedia.org/wiki/GoodRelations) for background on the underlying concepts. 
 *           $ref: '#/components/schemas/'
 *         countriesNotSupported:
 *           description: Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
 *           type: string
 *         FundingScheme:
 *           description: A FundingScheme combines organizational, project and policy aspects of grant-based funding that sets guidelines, principles and mechanisms to support other kinds of projects and activities. Funding is typically organized via [[Grant]] funding. Examples of funding schemes: Swiss Priority Programmes (SPPs); EU Framework 7 (FP7); Horizon 2020; the NIH-R01 Grant Program; Wellcome institutional strategic support fund. For large scale public sector funding, the management and administration of grant awards is often handled by other, dedicated, organizations - [[FundingAgency]]s such as ERC, REA, ...
 *           $ref: '#/components/schemas/'
 *         TextDigitalDocument:
 *           description: A file composed primarily of text.
 *           $ref: '#/components/schemas/'
 *         MerchantReturnEnumeration:
 *           description: MerchantReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *           $ref: '#/components/schemas/'
 *         merchant:
 *           description: 'merchant' is an out-dated term for 'seller'.
 *           $ref: '#/components/schemas/organization'
 *         QuantitativeValueDistribution:
 *           description: A statistical distribution of values.
 *           $ref: '#/components/schemas/'
 *         transFatContent:
 *           description: The number of grams of trans fat.
 *           $ref: '#/components/schemas/mass'
 *         actors:
 *           description: An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 *           $ref: '#/components/schemas/person'
 *         loser:
 *           description: A sub property of participant. The loser of the action.
 *           $ref: '#/components/schemas/person'
 *         inPlaylist:
 *           description: The playlist to which this recording belongs.
 *           $ref: '#/components/schemas/musicplaylist'
 *         reservationFor:
 *           description: The thing -- flight, event, restaurant,etc. being reserved.
 *           $ref: '#/components/schemas/thing'
 *         uploadDate:
 *           description: Date when this media object was uploaded to this site.
 *           type: string
 *         structuralClass:
 *           description: The name given to how bone physically connects to each other.
 *           type: string
 *         ticketToken:
 *           description: Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.
 *           type: string
 *         serviceType:
 *           description: The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
 *           $ref: '#/components/schemas/governmentbenefitstype'
 *         bookingAgent:
 *           description: 'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.
 *           $ref: '#/components/schemas/organization'
 *         ShoppingCenter:
 *           description: A shopping center or mall.
 *           $ref: '#/components/schemas/'
 *         benefitsSummaryUrl:
 *           description: The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.
 *           type: string
 *         enginePower:
 *           description: The power of the vehicle's engine. Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)\n\n* Note 1: There are many different ways of measuring an engine's power. For an overview, see [http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes](http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes).\n* Note 2: You can link to information about how the given value has been determined using the [[valueReference]] property.\n* Note 3: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         estimatedCost:
 *           description: The estimated cost of the supply or supplies consumed when performing instructions.
 *           type: string
 *         Nonprofit501k:
 *           description: Nonprofit501k: Non-profit type referring to Child Care Organizations.
 *           $ref: '#/components/schemas/'
 *         energyEfficiencyScaleMax:
 *           description: Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
 *           $ref: '#/components/schemas/euenergyefficiencyenumeration'
 *         PhysicalTherapy:
 *           description: A process of progressive physical care and rehabilitation aimed at improving a health condition.
 *           $ref: '#/components/schemas/'
 *         DeactivateAction:
 *           description: The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
 *           $ref: '#/components/schemas/'
 *         isVariantOf:
 *           description: Indicates the kind of product that this is a variant of. In the case of [[ProductModel]], this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a [[ProductGroup]], the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with [[ProductGroup]], this property can apply to any [[Product]] included in the group.
 *           $ref: '#/components/schemas/productgroup'
 *         maximumPhysicalAttendeeCapacity:
 *           description: The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). 
 *           $ref: '#/components/schemas/integer'
 *         OccupationalExperienceRequirements:
 *           description: Indicates employment-related experience requirements, e.g. [[monthsOfExperience]].
 *           $ref: '#/components/schemas/'
 *         DefinedTerm:
 *           description: A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.
 *           $ref: '#/components/schemas/'
 *         Subscription:
 *           description: Represents the subscription pricing component of the total price for an offered product.
 *           $ref: '#/components/schemas/'
 *         MortgageLoan:
 *           description: A loan in which property or real estate is used as collateral. (A loan securitized against some real estate).
 *           $ref: '#/components/schemas/'
 *         interactionType:
 *           description: The Action representing the type of interaction. For up votes, +1s, etc. use [[LikeAction]]. For down votes use [[DislikeAction]]. Otherwise, use the most specific Action.
 *           $ref: '#/components/schemas/action'
 *         Language:
 *           description: Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in [BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag) can be used via the [[alternateName]] property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using [[ComputerLanguage]].
 *           $ref: '#/components/schemas/'
 *         availability:
 *           description: The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
 *           $ref: '#/components/schemas/itemavailability'
 *         containsSeason:
 *           description: A season that is part of the media series.
 *           $ref: '#/components/schemas/creativeworkseason'
 *         CreativeWork:
 *           description: The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 *           $ref: '#/components/schemas/'
 *         DrugCost:
 *           description: The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
 *           $ref: '#/components/schemas/'
 *         aspect:
 *           description: An aspect of medical practice that is considered on the page, such as 'diagnosis', 'treatment', 'causes', 'prognosis', 'etiology', 'epidemiology', etc.
 *           type: string
 *         costCategory:
 *           description: The category of cost, such as wholesale, retail, reimbursement cap, etc.
 *           $ref: '#/components/schemas/drugcostcategory'
 *         contentUrl:
 *           description: Actual bytes of the media object, for example the image file or video file.
 *           type: string
 *         DrugStrength:
 *           description: A specific strength in which a medical drug is available in a specific country.
 *           $ref: '#/components/schemas/'
 *         TreatmentsHealthAspect:
 *           description: Treatments or related therapies for a Topic.
 *           $ref: '#/components/schemas/'
 *         departureTime:
 *           description: The expected departure time.
 *           type: string
 *         colleagues:
 *           description: A colleague of the person.
 *           $ref: '#/components/schemas/person'
 *         variesBy:
 *           description: Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs.
 *           $ref: '#/components/schemas/definedterm'
 *         actionAccessibilityRequirement:
 *           description: A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed.
 *           $ref: '#/components/schemas/actionaccessspecification'
 *         linkRelationship:
 *           description: Indicates the relationship type of a Web link. 
 *           type: string
 *         usageInfo:
 *           description: The schema.org [[usageInfo]] property indicates further information about a [[CreativeWork]]. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
 *           $ref: '#/components/schemas/creativework'
 *         trailerWeight:
 *           description: The permitted weight of a trailer attached to the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         HowOrWhereHealthAspect:
 *           description: Information about how or where to find a topic. Also may contain location data that can be used for where to look for help if the topic is observed.
 *           $ref: '#/components/schemas/'
 *         itemListElement:
 *           description: For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.\n\nText values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.\n\nNote: The order of elements in your mark-up is not sufficient for indicating the order or elements. Use ListItem with a 'position' property in such cases.
 *           $ref: '#/components/schemas/thing'
 *         CrossSectional:
 *           description: Studies carried out on pre-existing data (usually from 'snapshot' surveys), such as that collected by the Census Bureau. Sometimes called Prevalence Studies.
 *           $ref: '#/components/schemas/'
 *         streetAddress:
 *           description: The street address. For example, 1600 Amphitheatre Pkwy.
 *           type: string
 *         recordedAt:
 *           description: The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
 *           $ref: '#/components/schemas/event'
 *         commentTime:
 *           description: The time at which the UserComment was made.
 *           type: string
 *         slogan:
 *           description: A slogan or motto associated with the item.
 *           type: string
 *         ReturnAction:
 *           description: The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 *           $ref: '#/components/schemas/'
 *         WarrantyScope:
 *           description: A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Labor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-BringIn\n* http://purl.org/goodrelations/v1#PartsAndLabor-PickUp 
 *           $ref: '#/components/schemas/'
 *         healthPlanId:
 *           description: The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)
 *           type: string
 *         GovernmentService:
 *           description: A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 *           $ref: '#/components/schemas/'
 *         character:
 *           description: Fictional person connected with a creative work.
 *           $ref: '#/components/schemas/person'
 *         ProductReturnFiniteReturnWindow:
 *           description: ProductReturnFiniteReturnWindow: there is a finite window for product returns.
 *           $ref: '#/components/schemas/'
 *         PublicationVolume:
 *           description: A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.\n\nSee also [blog post](http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html).
 *           $ref: '#/components/schemas/'
 *         passengerSequenceNumber:
 *           description: The passenger's sequence number as assigned by the airline.
 *           type: string
 *         Order:
 *           description: An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 *           $ref: '#/components/schemas/'
 *         letterer:
 *           description: The individual who adds lettering, including speech balloons and sound effects, to artwork.
 *           $ref: '#/components/schemas/person'
 *         actionOption:
 *           description: A sub property of object. The options subject to this action.
 *           $ref: '#/components/schemas/thing'
 *         PaintAction:
 *           description: The act of producing a painting, typically with paint and canvas as instruments.
 *           $ref: '#/components/schemas/'
 *         ProductReturnEnumeration:
 *           description: ProductReturnEnumeration enumerates several kinds of product return policy. Note that this structure may not capture all aspects of the policy.
 *           $ref: '#/components/schemas/'
 *         citation:
 *           description: A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
 *           type: string
 *         WearableSizeSystemMX:
 *           description: Mexican size system for wearables.
 *           $ref: '#/components/schemas/'
 *         Menu:
 *           description: A structured representation of food or drink items available from a FoodEstablishment.
 *           $ref: '#/components/schemas/'
 *         seriousAdverseOutcome:
 *           description: A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
 *           $ref: '#/components/schemas/medicalentity'
 *         TouristDestination:
 *           description: A tourist destination. In principle any [[Place]] can be a [[TouristDestination]] from a [[City]], Region or [[Country]] to an [[AmusementPark]] or [[Hotel]]. This Type can be used on its own to describe a general [[TouristDestination]], or be used as an [[additionalType]] to add tourist relevant properties to any other [[Place]]. A [[TouristDestination]] is defined as a [[Place]] that contains, or is colocated with, one or more [[TouristAttraction]]s, often linked by a similar theme or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip. (See examples below).
 *           $ref: '#/components/schemas/'
 *         DanceGroup:
 *           description: A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.
 *           $ref: '#/components/schemas/'
 *         pattern:
 *           description: A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
 *           type: string
 *         Retail:
 *           description: The drug's cost represents the retail cost of the drug.
 *           $ref: '#/components/schemas/'
 *         drainsTo:
 *           description: The vasculature that the vein drains into.
 *           $ref: '#/components/schemas/vessel'
 *         RefurbishedCondition:
 *           description: Indicates that the item is refurbished.
 *           $ref: '#/components/schemas/'
 *         VideoGameSeries:
 *           description: A video game series.
 *           $ref: '#/components/schemas/'
 *         UnincorporatedAssociationCharity:
 *           description: UnincorporatedAssociationCharity: Non-profit type referring to a charitable company that is not incorporated (UK).
 *           $ref: '#/components/schemas/'
 *         contraindication:
 *           description: A contraindication for this therapy.
 *           type: string
 *         DepartmentStore:
 *           description: A department store.
 *           $ref: '#/components/schemas/'
 *         firstAppearance:
 *           description: Indicates the first known occurence of a [[Claim]] in some [[CreativeWork]].
 *           $ref: '#/components/schemas/creativework'
 *         BusStation:
 *           description: A bus station.
 *           $ref: '#/components/schemas/'
 *         broadcastTimezone:
 *           description: The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts
 *           type: string
 *         Preschool:
 *           description: A preschool.
 *           $ref: '#/components/schemas/'
 *         exceptDate:
 *           description: Defines a [[Date]] or [[DateTime]] during which a scheduled [[Event]] will not take place. The property allows exceptions to a [[Schedule]] to be specified. If an exception is specified as a [[DateTime]] then only the event that would have started at that specific date and time should be excluded from the schedule. If an exception is specified as a [[Date]] then any event that is scheduled for that 24 hour period should be excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.
 *           type: string
 *         Throat:
 *           description: Throat assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         sku:
 *           description: The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
 *           type: string
 *         MedicalRiskScore:
 *           description: A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 *           $ref: '#/components/schemas/'
 *         mapType:
 *           description: Indicates the kind of Map, from the MapCategoryType Enumeration.
 *           $ref: '#/components/schemas/mapcategorytype'
 *         ProductModel:
 *           description: A datasheet or vendor specification of a product (in the sense of a prototypical description).
 *           $ref: '#/components/schemas/'
 *         StupidType:
 *           description: A StupidType for testing.
 *           $ref: '#/components/schemas/'
 *         ReserveAction:
 *           description: Reserving a concrete object.\n\nRelated actions:\n\n* [[ScheduleAction]]: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 *           $ref: '#/components/schemas/'
 *         maps:
 *           description: A URL to a map of the place.
 *           type: string
 *         UserComments:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         MediaGallery:
 *           description: Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.
 *           $ref: '#/components/schemas/'
 *         alumniOf:
 *           description: An organization that the person is an alumni of.
 *           $ref: '#/components/schemas/educationalorganization'
 *         Quotation:
 *           description: A quotation. Often but not necessarily from some written work, attributable to a real world author and - if associated with a fictional character - to any fictional Person. Use [[isBasedOn]] to link to source/origin. The [[recordedIn]] property can be used to reference a Quotation from an [[Event]].
 *           $ref: '#/components/schemas/'
 *         bloodSupply:
 *           description: The blood vessel that carries blood from the heart to the muscle.
 *           $ref: '#/components/schemas/vessel'
 *         predecessorOf:
 *           description: A pointer from a previous, often discontinued variant of the product to its newer variant.
 *           $ref: '#/components/schemas/productmodel'
 *         appearance:
 *           description: Indicates an occurence of a [[Claim]] in some [[CreativeWork]].
 *           $ref: '#/components/schemas/creativework'
 *         WearableSizeSystemContinental:
 *           description: Continental size system for wearables.
 *           $ref: '#/components/schemas/'
 *         CancelAction:
 *           description: The act of asserting that a future event/action is no longer going to happen.\n\nRelated actions:\n\n* [[ConfirmAction]]: The antonym of CancelAction.
 *           $ref: '#/components/schemas/'
 *         MediaReview:
 *           description: A [[MediaReview]] is a more specialized form of Review dedicated to the evaluation of media content online, typically in the context of fact-checking and misinformation. For more general reviews of media in the broader sense, use [[UserReview]], [[CriticReview]] or other [[Review]] types. This definition is a work in progress. While the [[MediaManipulationRatingEnumeration]] list reflects significant community review amongst fact-checkers and others working to combat misinformation, the specific structures for representing media objects, their versions and publication context, is still evolving. Similarly, best practices for the relationship between [[MediaReview]] and [[ClaimReview]] markup has not yet been finalized.
 *           $ref: '#/components/schemas/'
 *         CohortStudy:
 *           description: Also known as a panel study. A cohort study is a form of longitudinal study used in medicine and social science. It is one type of study design and should be compared with a cross-sectional study. A cohort is a group of people who share a common characteristic or experience within a defined period (e.g., are born, leave school, lose their job, are exposed to a drug or a vaccine, etc.). The comparison group may be the general population from which the cohort is drawn, or it may be another cohort of persons thought to have had little or no exposure to the substance under investigation, but otherwise similar. Alternatively, subgroups within the cohort may be compared with each other.
 *           $ref: '#/components/schemas/'
 *         InvestmentFund:
 *           description: A company or fund that gathers capital from a number of investors to create a pool of money that is then re-invested into stocks, bonds and other assets.
 *           $ref: '#/components/schemas/'
 *         SeekToAction:
 *           description: This is the [[Action]] of navigating to a specific [[startOffset]] timestamp within a [[VideoObject]], typically represented with a URL template structure.
 *           $ref: '#/components/schemas/'
 *         HealthTopicContent:
 *           description: [[HealthTopicContent]] is [[WebContent]] that is about some aspect of a health topic, e.g. a condition, its symptoms or treatments. Such content may be comprised of several parts or sections and use different types of media. Multiple instances of [[WebContent]] (and hence [[HealthTopicContent]]) can be related using [[hasPart]] / [[isPartOf]] where there is some kind of content hierarchy, and their content described with [[about]] and [[mentions]] e.g. building upon the existing [[MedicalCondition]] vocabulary. 
 *           $ref: '#/components/schemas/'
 *         DrugCostCategory:
 *           description: Enumerated categories of medical drug costs.
 *           $ref: '#/components/schemas/'
 *         offerCount:
 *           description: The number of offers for the product.
 *           $ref: '#/components/schemas/integer'
 *         TypesHealthAspect:
 *           description: Categorization and other types related to a topic.
 *           $ref: '#/components/schemas/'
 *         DriveWheelConfigurationValue:
 *           description: A value indicating which roadwheels will receive torque.
 *           $ref: '#/components/schemas/'
 *         ShoeStore:
 *           description: A shoe store.
 *           $ref: '#/components/schemas/'
 *         yield:
 *           description: The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         LoanOrCredit:
 *           description: A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 *           $ref: '#/components/schemas/'
 *         MedicalResearcher:
 *           description: Medical researchers.
 *           $ref: '#/components/schemas/'
 *         LiteraryEvent:
 *           description: Event type: Literary event.
 *           $ref: '#/components/schemas/'
 *         HomeGoodsStore:
 *           description: A home goods store.
 *           $ref: '#/components/schemas/'
 *         hasMap:
 *           description: A URL to a map of the place.
 *           $ref: '#/components/schemas/map'
 *         Energy:
 *           description: Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.
 *           $ref: '#/components/schemas/'
 *         CityHall:
 *           description: A city hall.
 *           $ref: '#/components/schemas/'
 *         Vein:
 *           description: A type of blood vessel that specifically carries blood to the heart.
 *           $ref: '#/components/schemas/'
 *         CookAction:
 *           description: The act of producing/preparing food.
 *           $ref: '#/components/schemas/'
 *         Conversation:
 *           description: One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.
 *           $ref: '#/components/schemas/'
 *         servingSize:
 *           description: The serving size, in terms of the number of volume or mass.
 *           type: string
 *         totalTime:
 *           description: The total time required to perform instructions or a direction (including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 *           $ref: '#/components/schemas/duration'
 *         eligibleCustomerType:
 *           description: The type(s) of customers for which the given offer is valid.
 *           $ref: '#/components/schemas/businessentitytype'
 *         EvidenceLevelA:
 *           description: Data derived from multiple randomized clinical trials or meta-analyses.
 *           $ref: '#/components/schemas/'
 *         orderQuantity:
 *           description: The number of the item ordered. If the property is not set, assume the quantity is one.
 *           type: number
 *         Museum:
 *           description: A museum.
 *           $ref: '#/components/schemas/'
 *         scheduledTime:
 *           description: The time the object is scheduled to.
 *           type: string
 *         drug:
 *           description: Specifying a drug or medicine used in a medication procedure.
 *           $ref: '#/components/schemas/drug'
 *         measurementTechnique:
 *           description: A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]]. 
 *           type: string
 *         MedicalTrial:
 *           description: A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
 *           $ref: '#/components/schemas/'
 *         sensoryUnit:
 *           description: The neurological pathway extension that inputs and sends information to the brain or spinal cord.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         subEvent:
 *           description: An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
 *           $ref: '#/components/schemas/event'
 *         CategoryCode:
 *           description: A Category Code.
 *           $ref: '#/components/schemas/'
 *         nsn:
 *           description: Indicates the [NATO stock number](https://en.wikipedia.org/wiki/NATO_Stock_Number) (nsn) of a [[Product]]. 
 *           type: string
 *         WearableMeasurementTypeEnumeration:
 *           description: Enumerates common types of measurement for wearables products.
 *           $ref: '#/components/schemas/'
 *         owns:
 *           description: Products owned by the organization or person.
 *           $ref: '#/components/schemas/product'
 *         physicalRequirement:
 *           description: A description of the types of physical activity associated with the job. Defined terms such as those in O*net may be used, but note that there is no way to specify the level of ability as well as its nature when using a defined term.
 *           type: string
 *         Toxicologic:
 *           description: A specific branch of medical science that is concerned with poisons, their nature, effects and detection and involved in the treatment of poisoning.
 *           $ref: '#/components/schemas/'
 *         reservedTicket:
 *           description: A ticket associated with the reservation.
 *           $ref: '#/components/schemas/ticket'
 *         MedicalObservationalStudyDesign:
 *           description: Design models for observational medical studies. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         ComedyClub:
 *           description: A comedy club.
 *           $ref: '#/components/schemas/'
 *         numberOfPreviousOwners:
 *           description: The number of owners of the vehicle, including the current one.\n\nTypical unit code(s): C62
 *           type: number
 *         hasDefinedTerm:
 *           description: A Defined Term contained in this term set.
 *           $ref: '#/components/schemas/definedterm'
 *         targetCollection:
 *           description: A sub property of object. The collection target of the action.
 *           $ref: '#/components/schemas/thing'
 *         BodyMeasurementBust:
 *           description: Maximum girth of bust. Used, for example, to fit women's suits.
 *           $ref: '#/components/schemas/'
 *         OfflineEventAttendanceMode:
 *           description: OfflineEventAttendanceMode - an event that is primarily conducted offline. 
 *           $ref: '#/components/schemas/'
 *         Renal:
 *           description: A specific branch of medical science that pertains to the study of the kidneys and its respective disease states.
 *           $ref: '#/components/schemas/'
 *         copyrightNotice:
 *           description: Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
 *           type: string
 *         Gynecologic:
 *           description: A specific branch of medical science that pertains to the health care of women, particularly in the diagnosis and treatment of disorders affecting the female reproductive system.
 *           $ref: '#/components/schemas/'
 *         Infectious:
 *           description: Something in medical science that pertains to infectious diseases i.e caused by bacterial, viral, fungal or parasitic infections.
 *           $ref: '#/components/schemas/'
 *         AlbumRelease:
 *           description: AlbumRelease.
 *           $ref: '#/components/schemas/'
 *         exercisePlan:
 *           description: A sub property of instrument. The exercise plan used on this action.
 *           $ref: '#/components/schemas/exerciseplan'
 *         priceValidUntil:
 *           description: The date after which the price is no longer available.
 *           type: string
 *         DownloadAction:
 *           description: The act of downloading an object.
 *           $ref: '#/components/schemas/'
 *         Audience:
 *           description: Intended audience for an item, i.e. the group for whom the item was created.
 *           $ref: '#/components/schemas/'
 *         experienceRequirements:
 *           description: Description of skills and experience needed for the position or Occupation.
 *           type: string
 *         Nonprofit501c2:
 *           description: Nonprofit501c2: Non-profit type referring to Title-holding Corporations for Exempt Organizations.
 *           $ref: '#/components/schemas/'
 *         hoursAvailable:
 *           description: The hours during which this service or contact is available.
 *           $ref: '#/components/schemas/openinghoursspecification'
 *         SocialMediaPosting:
 *           description: A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 *           $ref: '#/components/schemas/'
 *         geoEquals:
 *           description: Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM). "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)
 *           $ref: '#/components/schemas/geospatialgeometry'
 *         diseasePreventionInfo:
 *           description: Information about disease prevention.
 *           type: string
 *         DrivingSchoolVehicleUsage:
 *           description: Indicates the usage of the vehicle for driving school.
 *           $ref: '#/components/schemas/'
 *         financialAidEligible:
 *           description: A financial aid type or program which students may use to pay for tuition or fees associated with the program.
 *           $ref: '#/components/schemas/definedterm'
 *         name:
 *           description: The name of the item.
 *           type: string
 *         headline:
 *           description: Headline of the article.
 *           type: string
 *         experienceInPlaceOfEducation:
 *           description: Indicates whether a [[JobPosting]] will accept experience (as indicated by [[OccupationalExperienceRequirements]]) in place of its formal educational qualifications (as indicated by [[educationRequirements]]). If true, indicates that satisfying one of these requirements is sufficient.
 *           $ref: '#/components/schemas/boolean'
 *         fundedItem:
 *           description: Indicates an item funded or sponsored through a [[Grant]].
 *           $ref: '#/components/schemas/thing'
 *         breadcrumb:
 *           description: A set of links that can help a user understand and navigate a website hierarchy.
 *           $ref: '#/components/schemas/breadcrumblist'
 *         NGO:
 *           description: Organization: Non-governmental Organization.
 *           $ref: '#/components/schemas/'
 *         legislationLegalValue:
 *           description: The legal value of this legislation file. The same legislation can be written in multiple files with different legal values. Typically a digitally signed PDF have a "stronger" legal value than the HTML file of the same act.
 *           $ref: '#/components/schemas/legalvaluelevel'
 *         mainContentOfPage:
 *           description: Indicates if this web page element is the main subject of the page.
 *           $ref: '#/components/schemas/webpageelement'
 *         byMonth:
 *           description: Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1.
 *           $ref: '#/components/schemas/integer'
 *         legislationDateVersion:
 *           description: The point-in-time at which the provided description of the legislation is valid (e.g. : when looking at the law on the 2016-04-07 (= dateVersion), I get the consolidation of 2015-04-12 of the "National Insurance Contributions Act 2015")
 *           type: string
 *         interactionStatistic:
 *           description: The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 *           $ref: '#/components/schemas/interactioncounter'
 *         MusicVideoObject:
 *           description: A music video file.
 *           $ref: '#/components/schemas/'
 *         containsPlace:
 *           description: The basic containment relation between a place and another that it contains.
 *           $ref: '#/components/schemas/place'
 *         SportsTeam:
 *           description: Organization: Sports team.
 *           $ref: '#/components/schemas/'
 *         TradeAction:
 *           description: The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.
 *           $ref: '#/components/schemas/'
 *         MusicRecording:
 *           description: A music recording (track), usually a single song.
 *           $ref: '#/components/schemas/'
 *         SolveMathAction:
 *           description: The action that takes in a math expression and directs users to a page potentially capable of solving/simplifying that expression.
 *           $ref: '#/components/schemas/'
 *         CommentPermission:
 *           description: Permission to add comments to the document.
 *           $ref: '#/components/schemas/'
 *         area:
 *           description: The area within which users can expect to reach the broadcast service.
 *           $ref: '#/components/schemas/place'
 *         observationDate:
 *           description: The observationDate of an [[Observation]].
 *           type: string
 *         Nonprofit501c21:
 *           description: Nonprofit501c21: Non-profit type referring to Black Lung Benefit Trusts.
 *           $ref: '#/components/schemas/'
 *         codeValue:
 *           description: A short textual code that uniquely identifies the value.
 *           type: string
 *         WearableSizeSystemUS:
 *           description: United States size system for wearables.
 *           $ref: '#/components/schemas/'
 *         Casino:
 *           description: A casino.
 *           $ref: '#/components/schemas/'
 *         Park:
 *           description: A park.
 *           $ref: '#/components/schemas/'
 *         MedicalSign:
 *           description: Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 *           $ref: '#/components/schemas/'
 *         DonateAction:
 *           description: The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 *           $ref: '#/components/schemas/'
 *         broadcaster:
 *           description: The organization owning or operating the broadcast service.
 *           $ref: '#/components/schemas/organization'
 *         MedicalTest:
 *           description: Any medical test, typically performed for diagnostic purposes.
 *           $ref: '#/components/schemas/'
 *         TrackAction:
 *           description: An agent tracks an object for updates.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.\n* [[SubscribeAction]]: Unlike SubscribeAction, TrackAction refers to the interest on the location of innanimate objects.
 *           $ref: '#/components/schemas/'
 *         purchaseDate:
 *           description: The date the item e.g. vehicle was purchased by the current owner.
 *           type: string
 *         bccRecipient:
 *           description: A sub property of recipient. The recipient blind copied on a message.
 *           $ref: '#/components/schemas/person'
 *         BuyAction:
 *           description: The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c1:
 *           description: Nonprofit501c1: Non-profit type referring to Corporations Organized Under Act of Congress, including Federal Credit Unions and National Farm Loan Associations.
 *           $ref: '#/components/schemas/'
 *         Withdrawn:
 *           description: Withdrawn.
 *           $ref: '#/components/schemas/'
 *         CheckAction:
 *           description: An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.
 *           $ref: '#/components/schemas/'
 *         TaxiStand:
 *           description: A taxi stand.
 *           $ref: '#/components/schemas/'
 *         ReturnFeesEnumeration:
 *           description: ReturnFeesEnumeration expresses policies for return fees.
 *           $ref: '#/components/schemas/'
 *         offeredBy:
 *           description: A pointer to the organization or person making the offer.
 *           $ref: '#/components/schemas/organization'
 *         SideEffectsHealthAspect:
 *           description: Side effects that can be observed from the usage of the topic.
 *           $ref: '#/components/schemas/'
 *         HousePainter:
 *           description: A house painting service.
 *           $ref: '#/components/schemas/'
 *         procedureType:
 *           description: The type of procedure, for example Surgical, Noninvasive, or Percutaneous.
 *           $ref: '#/components/schemas/medicalproceduretype'
 *         TrainReservation:
 *           description: A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         alcoholWarning:
 *           description: Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
 *           type: string
 *         WearableSizeGroupTall:
 *           description: Size group "Tall" for wearables.
 *           $ref: '#/components/schemas/'
 *         SportsEvent:
 *           description: Event type: Sports event.
 *           $ref: '#/components/schemas/'
 *         CompilationAlbum:
 *           description: CompilationAlbum.
 *           $ref: '#/components/schemas/'
 *         PaymentCard:
 *           description: A payment method using a credit, debit, store or other card to associate the payment with an account.
 *           $ref: '#/components/schemas/'
 *         BusinessFunction:
 *           description: The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#ConstructionInstallation\n* http://purl.org/goodrelations/v1#Dispose\n* http://purl.org/goodrelations/v1#LeaseOut\n* http://purl.org/goodrelations/v1#Maintain\n* http://purl.org/goodrelations/v1#ProvideService\n* http://purl.org/goodrelations/v1#Repair\n* http://purl.org/goodrelations/v1#Sell\n* http://purl.org/goodrelations/v1#Buy 
 *           $ref: '#/components/schemas/'
 *         dayOfWeek:
 *           description: The day of the week for which these opening hours are valid.
 *           $ref: '#/components/schemas/dayofweek'
 *         quest:
 *           description: The task that a player-controlled character, or group of characters may complete in order to gain a reward.
 *           $ref: '#/components/schemas/thing'
 *         carrier:
 *           description: 'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.
 *           $ref: '#/components/schemas/organization'
 *         signOrSymptom:
 *           description: A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.
 *           $ref: '#/components/schemas/medicalsignorsymptom'
 *         mathExpression:
 *           description: A mathematical expression (e.g. 'x^2-3x=0') that may be solved for a specific variable, simplified, or transformed. This can take many formats, e.g. LaTeX, Ascii-Math, or math as you would write with a keyboard.
 *           type: string
 *         ExercisePlan:
 *           description: Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
 *           $ref: '#/components/schemas/'
 *         numChildren:
 *           description: The number of children staying in the unit.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Claim:
 *           description: A [[Claim]] in Schema.org represents a specific, factually-oriented claim that could be the [[itemReviewed]] in a [[ClaimReview]]. The content of a claim can be summarized with the [[text]] property. Variations on well known claims can have their common identity indicated via [[sameAs]] links, and summarized with a [[name]]. Ideally, a [[Claim]] description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews. Beyond [[ClaimReview]], the Claim type can be associated with related creative works - for example a [[ScholarlyArticle]] or [[Question]] might be [[about]] some [[Claim]]. At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration. 
 *           $ref: '#/components/schemas/'
 *         DecontextualizedContent:
 *           description: Content coded 'missing context' in a [[MediaReview]], considered in the context of how it was published or shared.For a [[VideoObject]] to be 'missing context': Presenting unaltered video in an inaccurate manner that misrepresents the footage. For example, using incorrect dates or locations, altering the transcript or sharing brief clips from a longer video to mislead viewers. (A video rated 'original' can also be missing context.)For an [[ImageObject]] to be 'missing context': Presenting unaltered images in an inaccurate manner to misrepresent the image and mislead the viewer. For example, a common tactic is using an unaltered image but saying it came from a different time or place. (An image rated 'original' can also be missing context.)For an [[ImageObject]] with embedded text to be 'missing context': An unaltered image presented in an inaccurate manner to misrepresent the image and mislead the viewer. For example, a common tactic is using an unaltered image but saying it came from a different time or place. (An 'original' image with inaccurate text would generally fall in this category.)For an [[AudioObject]] to be 'missing context': Unaltered audio presented in an inaccurate manner that misrepresents it. For example, using incorrect dates or locations, or sharing brief clips from a longer recording to mislead viewers. (Audio rated “original” can also be missing context.)
 *           $ref: '#/components/schemas/'
 *         BodyMeasurementWeight:
 *           description: Body weight. Used, for example, to measure pantyhose.
 *           $ref: '#/components/schemas/'
 *         musicReleaseFormat:
 *           description: Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 *           $ref: '#/components/schemas/musicreleaseformattype'
 *         distribution:
 *           description: A downloadable form of this dataset, at a specific location, in a specific format.
 *           $ref: '#/components/schemas/datadownload'
 *         mentions:
 *           description: Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
 *           $ref: '#/components/schemas/thing'
 *         Answer:
 *           description: An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 *           $ref: '#/components/schemas/'
 *         SubscribeAction:
 *           description: The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.\n\nRelated actions:\n\n* [[FollowAction]]: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.\n* [[RegisterAction]]: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.\n* [[JoinAction]]: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 *           $ref: '#/components/schemas/'
 *         softwareVersion:
 *           description: Version of the software instance.
 *           type: string
 *         proficiencyLevel:
 *           description: Proficiency needed for this content; expected values: 'Beginner', 'Expert'.
 *           type: string
 *         WearableMeasurementCollar:
 *           description: Measurement of the collar, for example of a shirt
 *           $ref: '#/components/schemas/'
 *         TripleBlindedTrial:
 *           description: A trial design in which neither the researcher, the person administering the therapy nor the patient knows the details of the treatment the patient was randomly assigned to.
 *           $ref: '#/components/schemas/'
 *         cvdNumICUBeds:
 *           description: numicubeds - ICU BEDS: Total number of staffed inpatient intensive care unit (ICU) beds.
 *           type: number
 *         endDate:
 *           description: The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).
 *           type: string
 *         postOp:
 *           description: A description of the postoperative procedures, care, and/or followups for this device.
 *           type: string
 *         Store:
 *           description: A retail good store.
 *           $ref: '#/components/schemas/'
 *         steps:
 *           description: A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).
 *           $ref: '#/components/schemas/itemlist'
 *         availableThrough:
 *           description: After this date, the item will no longer be available for pickup.
 *           type: string
 *         specialCommitments:
 *           description: Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.
 *           type: string
 *         ItemPage:
 *           description: A page devoted to a single item, such as a particular product or hotel.
 *           $ref: '#/components/schemas/'
 *         energyEfficiencyScaleMin:
 *           description: Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
 *           $ref: '#/components/schemas/euenergyefficiencyenumeration'
 *         Integer:
 *           description: Data type: Integer.
 *           $ref: '#/components/schemas/'
 *         deathDate:
 *           description: Date of death.
 *           type: string
 *         line:
 *           description: A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.
 *           type: string
 *         Invoice:
 *           description: A statement of the money due for goods or services; a bill.
 *           $ref: '#/components/schemas/'
 *         minValue:
 *           description: The lower value of some characteristic or property.
 *           type: number
 *         MotorcycleRepair:
 *           description: A motorcycle repair shop.
 *           $ref: '#/components/schemas/'
 *         CollectionPage:
 *           description: Web page type: Collection page.
 *           $ref: '#/components/schemas/'
 *         MedicalConditionStage:
 *           description: A stage of a medical condition, such as 'Stage IIIa'.
 *           $ref: '#/components/schemas/'
 *         educationalProgramMode:
 *           description: Similar to courseMode, The medium or means of delivery of the program as a whole. The value may either be a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).
 *           type: string
 *         WearableSizeSystemBR:
 *           description: Brazilian size system for wearables.
 *           $ref: '#/components/schemas/'
 *         numberOfBeds:
 *           description: The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.
 *           type: number
 *         Painting:
 *           description: A painting.
 *           $ref: '#/components/schemas/'
 *         NonprofitSBBI:
 *           description: NonprofitSBBI: Non-profit type referring to a Social Interest Promoting Institution (NL).
 *           $ref: '#/components/schemas/'
 *         url:
 *           description: URL of the item.
 *           type: string
 *         LowFatDiet:
 *           description: A diet focused on reduced fat and cholesterol intake.
 *           $ref: '#/components/schemas/'
 *         suggestedMinAge:
 *           description: Minimum recommended age in years for the audience or user.
 *           type: number
 *         sdLicense:
 *           description: A license document that applies to this structured data, typically indicated by URL.
 *           $ref: '#/components/schemas/creativework'
 *         knownVehicleDamages:
 *           description: A textual description of known damages, both repaired and unrepaired.
 *           type: string
 *         ContactPoint:
 *           description: A contact point&#x2014;for example, a Customer Complaints department.
 *           $ref: '#/components/schemas/'
 *         EPRelease:
 *           description: EPRelease.
 *           $ref: '#/components/schemas/'
 *         Church:
 *           description: A church.
 *           $ref: '#/components/schemas/'
 *         targetProduct:
 *           description: Target Operating System / Product to which the code applies. If applies to several versions, just the product name can be used.
 *           $ref: '#/components/schemas/softwareapplication'
 *         normalRange:
 *           description: Range of acceptable values for a typical patient, when applicable.
 *           $ref: '#/components/schemas/medicalenumeration'
 *         bestRating:
 *           description: The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.
 *           type: number
 *         releaseNotes:
 *           description: Description of what changed in this version.
 *           type: string
 *         BusinessEvent:
 *           description: Event type: Business event.
 *           $ref: '#/components/schemas/'
 *         MedicalClinic:
 *           description: A facility, often associated with a hospital or medical school, that is devoted to the specific diagnosis and/or healthcare. Previously limited to outpatients but with evolution it may be open to inpatients as well.
 *           $ref: '#/components/schemas/'
 *         Nonprofit527:
 *           description: Nonprofit527: Non-profit type referring to Political organizations.
 *           $ref: '#/components/schemas/'
 *         Flight:
 *           description: An airline flight.
 *           $ref: '#/components/schemas/'
 *         AddAction:
 *           description: The act of editing by adding an object to a collection.
 *           $ref: '#/components/schemas/'
 *         CreateAction:
 *           description: The act of deliberately creating/producing/generating/building a result out of the agent.
 *           $ref: '#/components/schemas/'
 *         executableLibraryName:
 *           description: Library file name e.g., mscorlib.dll, system.web.dll.
 *           type: string
 *         PresentationDigitalDocument:
 *           description: A file containing slides or used for a presentation.
 *           $ref: '#/components/schemas/'
 *         AllergiesHealthAspect:
 *           description: Content about the allergy-related aspects of a health topic.
 *           $ref: '#/components/schemas/'
 *         lodgingUnitDescription:
 *           description: A full description of the lodging unit.
 *           type: string
 *         Blog:
 *           description: A blog.
 *           $ref: '#/components/schemas/'
 *         LibrarySystem:
 *           description: A [[LibrarySystem]] is a collaborative system amongst several libraries.
 *           $ref: '#/components/schemas/'
 *         CommunityHealth:
 *           description: A field of public health focusing on improving health characteristics of a defined population in relation with their geographical or environment areas.
 *           $ref: '#/components/schemas/'
 *         gtin14:
 *           description: The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *           type: string
 *         ExchangeRefund:
 *           description: A ExchangeRefund ...
 *           $ref: '#/components/schemas/'
 *         Endocrine:
 *           description: A specific branch of medical science that pertains to diagnosis and treatment of disorders of endocrine glands and their secretions.
 *           $ref: '#/components/schemas/'
 *         episode:
 *           description: An episode of a tv, radio or game media within a series or season.
 *           $ref: '#/components/schemas/episode'
 *         athlete:
 *           description: A person that acts as performing member of a sports team; a player as opposed to a coach.
 *           $ref: '#/components/schemas/person'
 *         ProductReturnUnspecified:
 *           description: ProductReturnUnspecified: a product return policy is not specified here.
 *           $ref: '#/components/schemas/'
 *         UKTrust:
 *           description: UKTrust: Non-profit type referring to a UK trust.
 *           $ref: '#/components/schemas/'
 *         contentSize:
 *           description: File size in (mega/kilo) bytes.
 *           type: string
 *         serviceArea:
 *           description: The geographic area where the service is provided.
 *           $ref: '#/components/schemas/geoshape'
 *         departureBusStop:
 *           description: The stop or station from which the bus departs.
 *           $ref: '#/components/schemas/busstop'
 *         EnergyStarEnergyEfficiencyEnumeration:
 *           description: Used to indicate whether a product is EnergyStar certified.
 *           $ref: '#/components/schemas/'
 *         valueMaxLength:
 *           description: Specifies the allowed range for number of characters in a literal value.
 *           type: number
 *         freeShippingThreshold:
 *           description: A monetary value above which (or equal to) the shipping rate becomes free. Intended to be used via an [[OfferShippingDetails]] with [[shippingSettingsLink]] matching this [[ShippingRateSettings]].
 *           $ref: '#/components/schemas/deliverychargespecification'
 *         Pediatric:
 *           description: A specific branch of medical science that specializes in the care of infants, children and adolescents.
 *           $ref: '#/components/schemas/'
 *         OfferCatalog:
 *           description: An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.
 *           $ref: '#/components/schemas/'
 *         RisksOrComplicationsHealthAspect:
 *           description: Information about the risk factors and possible complications that may follow a topic.
 *           $ref: '#/components/schemas/'
 *         SingleRelease:
 *           description: SingleRelease.
 *           $ref: '#/components/schemas/'
 *         Quantity:
 *           description: Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.
 *           $ref: '#/components/schemas/'
 *         ShippingDeliveryTime:
 *           description: ShippingDeliveryTime provides various pieces of information about delivery times for shipping.
 *           $ref: '#/components/schemas/'
 *         sampleType:
 *           description: What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.
 *           type: string
 *         itemShipped:
 *           description: Item(s) being shipped.
 *           $ref: '#/components/schemas/product'
 *         phoneticText:
 *           description: Representation of a text [[textValue]] using the specified [[speechToTextMarkup]]. For example the city name of Houston in IPA: /ˈhjuːstən/.
 *           type: string
 *         closes:
 *           description: The closing hour of the place or service on the given day(s) of the week.
 *           type: string
 *         actionableFeedbackPolicy:
 *           description: For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 *           $ref: '#/components/schemas/creativework'
 *         VeterinaryCare:
 *           description: A vet's office.
 *           $ref: '#/components/schemas/'
 *         urlTemplate:
 *           description: An url template (RFC6570) that will be used to construct the target of the execution of the action.
 *           type: string
 *         printColumn:
 *           description: The number of the column in which the NewsArticle appears in the print edition.
 *           type: string
 *         applicationSuite:
 *           description: The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
 *           type: string
 *         geoDisjoint:
 *           description: Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM))
 *           $ref: '#/components/schemas/place'
 *         attendee:
 *           description: A person or organization attending the event.
 *           $ref: '#/components/schemas/person'
 *         collectionSize:
 *           description: The number of items in the [[Collection]].
 *           $ref: '#/components/schemas/integer'
 *         populationType:
 *           description: Indicates the populationType common to all members of a [[StatisticalPopulation]].
 *           $ref: '#/components/schemas/class'
 *         isResizable:
 *           description: Whether the 3DModel allows resizing. For example, room layout applications often do not allow 3DModel elements to be resized to reflect reality.
 *           $ref: '#/components/schemas/boolean'
 *         MusicReleaseFormatType:
 *           description: Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 *           $ref: '#/components/schemas/'
 *         OfficialLegalValue:
 *           description: All the documents published by an official publisher should have at least the legal value level "OfficialLegalValue". This indicates that the document was published by an organisation with the public task of making it available (e.g. a consolidated version of a EU directive published by the EU Office of Publications).
 *           $ref: '#/components/schemas/'
 *         insertion:
 *           description: The place of attachment of a muscle, or what the muscle moves.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         expectedPrognosis:
 *           description: The likely outcome in either the short term or long term of the medical condition.
 *           type: string
 *         readBy:
 *           description: A person who reads (performs) the audiobook.
 *           $ref: '#/components/schemas/person'
 *         endorsee:
 *           description: A sub property of participant. The person/organization being supported.
 *           $ref: '#/components/schemas/organization'
 *         eligibleQuantity:
 *           description: The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         doseUnit:
 *           description: The unit of the dose, e.g. 'mg'.
 *           type: string
 *         PlaceboControlledTrial:
 *           description: A placebo-controlled trial design.
 *           $ref: '#/components/schemas/'
 *         TattooParlor:
 *           description: A tattoo parlor.
 *           $ref: '#/components/schemas/'
 *         BorrowAction:
 *           description: The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.\n\nRelated actions:\n\n* [[LendAction]]: Reciprocal of BorrowAction.
 *           $ref: '#/components/schemas/'
 *         recipe:
 *           description: A sub property of instrument. The recipe/instructions used to perform the action.
 *           $ref: '#/components/schemas/recipe'
 *         TrainTrip:
 *           description: A trip on a commercial train line.
 *           $ref: '#/components/schemas/'
 *         ReplyAction:
 *           description: The act of responding to a question/message asked/sent by the object. Related to [[AskAction]]\n\nRelated actions:\n\n* [[AskAction]]: Appears generally as an origin of a ReplyAction.
 *           $ref: '#/components/schemas/'
 *         City:
 *           description: A city or town.
 *           $ref: '#/components/schemas/'
 *         HowToDirection:
 *           description: A direction indicating a single action to do in the instructions for how to achieve a result.
 *           $ref: '#/components/schemas/'
 *         percentile90:
 *           description: The 90th percentile value.
 *           type: number
 *         BodyMeasurementFoot:
 *           description: Foot length (measured between end of the most prominent toe and the most prominent part of the heel). Used, for example, to measure socks.
 *           $ref: '#/components/schemas/'
 *         ElectronicsStore:
 *           description: An electronics store.
 *           $ref: '#/components/schemas/'
 *         annualPercentageRate:
 *           description: The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
 *           type: number
 *         Muscle:
 *           description: A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
 *           $ref: '#/components/schemas/'
 *         typeOfBed:
 *           description: The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.
 *           $ref: '#/components/schemas/bedtype'
 *         VideoGallery:
 *           description: Web page type: Video gallery page.
 *           $ref: '#/components/schemas/'
 *         hasMenuSection:
 *           description: A subgrouping of the menu (by dishes, course, serving time period, etc.).
 *           $ref: '#/components/schemas/menusection'
 *         PsychologicalTreatment:
 *           description: A process of care relying upon counseling, dialogue and communication aimed at improving a mental health condition without use of drugs.
 *           $ref: '#/components/schemas/'
 *         PayAction:
 *           description: An agent pays a price to a participant.
 *           $ref: '#/components/schemas/'
 *         returnFees:
 *           description: Indicates (via enumerated options) the return fees policy for a MerchantReturnPolicy
 *           $ref: '#/components/schemas/returnfeesenumeration'
 *         encodingFormat:
 *           description: Media type typically expressed using a MIME format (see [IANA site](http://www.iana.org/assignments/media-types/media-types.xhtml) and [MDN reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).In cases where a [[CreativeWork]] has several media type representations, [[encoding]] can be used to indicate each [[MediaObject]] alongside particular [[encodingFormat]] information.Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
 *           type: string
 *         offersPrescriptionByMail:
 *           description: Whether prescriptions can be delivered by mail.
 *           $ref: '#/components/schemas/boolean'
 *         wordCount:
 *           description: The number of words in the text of the Article.
 *           $ref: '#/components/schemas/integer'
 *         workHours:
 *           description: The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).
 *           type: string
 *         ComicIssue:
 *           description: Individual comic issues are serially published as part of a larger series. For the sake of consistency, even one-shot issues belong to a series comprised of a single issue. All comic issues can be uniquely identified by: the combination of the name and volume number of the series to which the issue belongs; the issue number; and the variant description of the issue (if any).
 *           $ref: '#/components/schemas/'
 *         additionalName:
 *           description: An additional name for a Person, can be used for a middle name.
 *           type: string
 *         broadcastSignalModulation:
 *           description: The modulation (e.g. FM, AM, etc) used by a particular broadcast service.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         isAccessoryOrSparePartFor:
 *           description: A pointer to another product (or multiple products) for which this product is an accessory or spare part.
 *           $ref: '#/components/schemas/product'
 *         homeTeam:
 *           description: The home team in a sports event.
 *           $ref: '#/components/schemas/sportsteam'
 *         dateDeleted:
 *           description: The datetime the item was removed from the DataFeed.
 *           type: string
 *         UKNonprofitType:
 *           description: UKNonprofitType: Non-profit organization type originating from the United Kingdom.
 *           $ref: '#/components/schemas/'
 *         DiscoverAction:
 *           description: The act of discovering/finding an object.
 *           $ref: '#/components/schemas/'
 *         legislationIdentifier:
 *           description: An identifier for the legislation. This can be either a string-based identifier, like the CELEX at EU level or the NOR in France, or a web-based, URL/URI identifier, like an ELI (European Legislation Identifier) or an URN-Lex.
 *           type: string
 *         ReportedDoseSchedule:
 *           description: A patient-reported or observed dosing schedule for a drug or supplement.
 *           $ref: '#/components/schemas/'
 *         TaxiVehicleUsage:
 *           description: Indicates the usage of the car as a taxi.
 *           $ref: '#/components/schemas/'
 *         distinguishingSign:
 *           description: One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.
 *           $ref: '#/components/schemas/medicalsignorsymptom'
 *         GovernmentBenefitsType:
 *           description: GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 *           $ref: '#/components/schemas/'
 *         variablesMeasured:
 *           description: Originally named [[variablesMeasured]], The [[variableMeasured]] property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.
 *           type: string
 *         announcementLocation:
 *           description: Indicates a specific [[CivicStructure]] or [[LocalBusiness]] associated with the SpecialAnnouncement. For example, a specific testing facility or business with special opening hours. For a larger geographic region like a quarantine of an entire region, use [[spatialCoverage]].
 *           $ref: '#/components/schemas/localbusiness'
 *         availableAtOrFrom:
 *           description: The place(s) from which the offer can be obtained (e.g. store locations).
 *           $ref: '#/components/schemas/place'
 *         assemblyVersion:
 *           description: Associated product/technology version. e.g., .NET Framework 4.5.
 *           type: string
 *         latitude:
 *           description: The latitude of a location. For example ```37.42242``` ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)).
 *           type: string
 *         orderedItem:
 *           description: The item ordered.
 *           $ref: '#/components/schemas/orderitem'
 *         TireShop:
 *           description: A tire shop.
 *           $ref: '#/components/schemas/'
 *         SoftwareApplication:
 *           description: A software application.
 *           $ref: '#/components/schemas/'
 *         VisualArtsEvent:
 *           description: Event type: Visual arts event.
 *           $ref: '#/components/schemas/'
 *         Appearance:
 *           description: Appearance assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         SteeringPositionValue:
 *           description: A value indicating a steering position.
 *           $ref: '#/components/schemas/'
 *         Genitourinary:
 *           description: Genitourinary system function assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         addressRegion:
 *           description: The region in which the locality is, and which is in the country. For example, California or another appropriate first-level [Administrative division](https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country) 
 *           type: string
 *         materialExtent:
 *           description: The quantity of the materials being described or an expression of the physical space they occupy.
 *           type: string
 *         3DModel:
 *           description: A 3D model represents some kind of 3D content, which may have [[encoding]]s in one or more [[MediaObject]]s. Many 3D formats are available (e.g. see [Wikipedia](https://en.wikipedia.org/wiki/Category:3D_graphics_file_formats)); specific encoding formats can be represented using the [[encodingFormat]] property applied to the relevant [[MediaObject]]. For thecase of a single file published after Zip compression, the convention of appending '+zip' to the [[encodingFormat]] can be used. Geospatial, AR/VR, artistic/animation, gaming, engineering and scientific content can all be represented using [[3DModel]].
 *           $ref: '#/components/schemas/'
 *         HowItWorksHealthAspect:
 *           description: Content that discusses and explains how a particular health-related topic works, e.g. in terms of mechanisms and underlying science.
 *           $ref: '#/components/schemas/'
 *         TouristInformationCenter:
 *           description: A tourist information center.
 *           $ref: '#/components/schemas/'
 *         providesBroadcastService:
 *           description: The BroadcastService offered on this channel.
 *           $ref: '#/components/schemas/broadcastservice'
 *         albumReleaseType:
 *           description: The kind of release which this album is: single, EP or album.
 *           $ref: '#/components/schemas/musicalbumreleasetype'
 *         Room:
 *           description: A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         courseWorkload:
 *           description: The amount of work expected of students taking the course, often provided as a figure per week or per month, and may be broken down by type. For example, "2 hours of lectures, 1 hour of lab work and 3 hours of independent study per week".
 *           type: string
 *         countryOfOrigin:
 *           description: The country of the principal offices of the production company or individual responsible for the movie or program.
 *           $ref: '#/components/schemas/country'
 *         PlaceOfWorship:
 *           description: Place of worship, such as a church, synagogue, or mosque.
 *           $ref: '#/components/schemas/'
 *         ProfilePage:
 *           description: Web page type: Profile page.
 *           $ref: '#/components/schemas/'
 *         Canal:
 *           description: A canal, like the Panama Canal.
 *           $ref: '#/components/schemas/'
 *         smokingAllowed:
 *           description: Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.
 *           $ref: '#/components/schemas/boolean'
 *         IngredientsHealthAspect:
 *           description: Content discussing ingredients-related aspects of a health topic.
 *           $ref: '#/components/schemas/'
 *         title:
 *           description: The title of the job.
 *           type: string
 *         EventScheduled:
 *           description: The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default.
 *           $ref: '#/components/schemas/'
 *         manufacturer:
 *           description: The manufacturer of the product.
 *           $ref: '#/components/schemas/organization'
 *         SpeakableSpecification:
 *           description: A SpeakableSpecification indicates (typically via [[xpath]] or [[cssSelector]]) sections of a document that are highlighted as particularly [[speakable]]. Instances of this type are expected to be used primarily as values of the [[speakable]] property.
 *           $ref: '#/components/schemas/'
 *         Class:
 *           description: A class, also often called a 'Type'; equivalent to rdfs:Class.
 *           $ref: '#/components/schemas/'
 *         model:
 *           description: The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
 *           type: string
 *         includedComposition:
 *           description: Smaller compositions included in this work (e.g. a movement in a symphony).
 *           $ref: '#/components/schemas/musiccomposition'
 *         mileageFromOdometer:
 *           description: The total distance travelled by the particular vehicle since its initial production, as read from its odometer.\n\nTypical unit code(s): KMT for kilometers, SMI for statute miles
 *           $ref: '#/components/schemas/quantitativevalue'
 *         EntertainmentBusiness:
 *           description: A business providing entertainment.
 *           $ref: '#/components/schemas/'
 *         appliesToPaymentMethod:
 *           description: The payment method(s) to which the payment charge specification applies.
 *           $ref: '#/components/schemas/paymentmethod'
 *         VideoGameClip:
 *           description: A short segment/part of a video game.
 *           $ref: '#/components/schemas/'
 *         AllocateAction:
 *           description: The act of organizing tasks/objects/events by associating resources to it.
 *           $ref: '#/components/schemas/'
 *         screenCount:
 *           description: The number of screens in the movie theater.
 *           type: number
 *         ViewAction:
 *           description: The act of consuming static visual content.
 *           $ref: '#/components/schemas/'
 *         blogPosts:
 *           description: The postings that are part of this blog.
 *           $ref: '#/components/schemas/blogposting'
 *         transitTime:
 *           description: The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY).
 *           $ref: '#/components/schemas/quantitativevalue'
 *         recommendationStrength:
 *           description: Strength of the guideline's recommendation (e.g. 'class I').
 *           type: string
 *         ReceiveAction:
 *           description: The act of physically/electronically taking delivery of an object that has been transferred from an origin to a destination. Reciprocal of SendAction.\n\nRelated actions:\n\n* [[SendAction]]: The reciprocal of ReceiveAction.\n* [[TakeAction]]: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
 *           $ref: '#/components/schemas/'
 *         WearAction:
 *           description: The act of dressing oneself in clothing.
 *           $ref: '#/components/schemas/'
 *         faxNumber:
 *           description: The fax number.
 *           type: string
 *         recordedIn:
 *           description: The CreativeWork that captured all or part of this Event.
 *           $ref: '#/components/schemas/creativework'
 *         creditText:
 *           description: Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
 *           type: string
 *         MarryAction:
 *           description: The act of marrying a person.
 *           $ref: '#/components/schemas/'
 *         Male:
 *           description: The male gender.
 *           $ref: '#/components/schemas/'
 *         learningResourceType:
 *           description: The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
 *           type: string
 *         CoverArt:
 *           description: The artwork on the outer surface of a CreativeWork.
 *           $ref: '#/components/schemas/'
 *         fuelConsumption:
 *           description: The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).\n\n* Note 1: There are unfortunately no standard unit codes for liters per 100 km. Use [[unitText]] to indicate the unit of measurement, e.g. L/100 km.\n* Note 2: There are two ways of indicating the fuel consumption, [[fuelConsumption]] (e.g. 8 liters per 100 km) and [[fuelEfficiency]] (e.g. 30 miles per gallon). They are reciprocal.\n* Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use [[valueReference]] to link the value for the fuel consumption to another value.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         byMonthDay:
 *           description: Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31.
 *           $ref: '#/components/schemas/integer'
 *         knows:
 *           description: The most generic bi-directional social/work relation.
 *           $ref: '#/components/schemas/person'
 *         NotInForce:
 *           description: Indicates that a legislation is currently not in force.
 *           $ref: '#/components/schemas/'
 *         GamePlayMode:
 *           description: Indicates whether this game is multi-player, co-op or single-player.
 *           $ref: '#/components/schemas/'
 *         validUntil:
 *           description: The date when the item is no longer valid.
 *           type: string
 *         articleSection:
 *           description: Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.
 *           type: string
 *         FloorPlan:
 *           description: A FloorPlan is an explicit representation of a collection of similar accommodations, allowing the provision of common information (room counts, sizes, layout diagrams) and offers for rental or sale. In typical use, some [[ApartmentComplex]] has an [[accommodationFloorPlan]] which is a [[FloorPlan]]. A FloorPlan is always in the context of a particular place, either a larger [[ApartmentComplex]] or a single [[Apartment]]. The visual/spatial aspects of a floor plan (i.e. room layout, [see wikipedia](https://en.wikipedia.org/wiki/Floor_plan)) can be indicated using [[image]]. 
 *           $ref: '#/components/schemas/'
 *         PropertyValueSpecification:
 *           description: A Property value specification.
 *           $ref: '#/components/schemas/'
 *         legislationApplies:
 *           description: Indicates that this legislation (or part of a legislation) somehow transfers another legislation in a different legislative context. This is an informative link, and it has no legal value. For legally-binding links of transposition, use the <a href="/legislationTransposes">legislationTransposes</a> property. For example an informative consolidated law of a European Union's member state "applies" the consolidated version of the European Directive implemented in it.
 *           $ref: '#/components/schemas/legislation'
 *         ItemListOrderType:
 *           description: Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 *           $ref: '#/components/schemas/'
 *         SocialEvent:
 *           description: Event type: Social event.
 *           $ref: '#/components/schemas/'
 *         SoftwareSourceCode:
 *           description: Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 *           $ref: '#/components/schemas/'
 *         transitTimeLabel:
 *           description: Label to match an [[OfferShippingDetails]] with a [[DeliveryTimeSettings]] (within the context of a [[shippingSettingsLink]] cross-reference).
 *           type: string
 *         memberOf:
 *           description: An Organization (or ProgramMembership) to which this Person or Organization belongs.
 *           $ref: '#/components/schemas/programmembership'
 *         MedicalSpecialty:
 *           description: Any specific branch of medical science or practice. Medical specialities include clinical specialties that pertain to particular organ systems and their respective disease states, as well as allied health specialties. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         roofLoad:
 *           description: The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]]\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         Nonprofit501a:
 *           description: Nonprofit501a: Non-profit type referring to Farmers’ Cooperative Associations.
 *           $ref: '#/components/schemas/'
 *         inverseOf:
 *           description: Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used.
 *           $ref: '#/components/schemas/property'
 *         PaymentAutomaticallyApplied:
 *           description: An automatic payment system is in place and will be used.
 *           $ref: '#/components/schemas/'
 *         productionCompany:
 *           description: The production company or studio responsible for the item e.g. series, video game, episode etc.
 *           $ref: '#/components/schemas/organization'
 *         recognizedBy:
 *           description: An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.
 *           $ref: '#/components/schemas/organization'
 *         numberOfAxles:
 *           description: The number of axles.\n\nTypical unit code(s): C62
 *           $ref: '#/components/schemas/quantitativevalue'
 *         ParkingFacility:
 *           description: A parking lot or other parking facility.
 *           $ref: '#/components/schemas/'
 *         measuredValue:
 *           description: The measuredValue of an [[Observation]].
 *           $ref: '#/components/schemas/datatype'
 *         MusicVenue:
 *           description: A music venue.
 *           $ref: '#/components/schemas/'
 *         EatAction:
 *           description: The act of swallowing solid objects.
 *           $ref: '#/components/schemas/'
 *         sibling:
 *           description: A sibling of the person.
 *           $ref: '#/components/schemas/person'
 *         legislationTransposes:
 *           description: Indicates that this legislation (or part of legislation) fulfills the objectives set by another legislation, by passing appropriate implementation measures. Typically, some legislations of European Union's member states or regions transpose European Directives. This indicates a legally binding link between the 2 legislations.
 *           $ref: '#/components/schemas/legislation'
 *         BlogPosting:
 *           description: A blog post.
 *           $ref: '#/components/schemas/'
 *         quarantineGuidelines:
 *           description: Guidelines about quarantine rules, e.g. in the context of a pandemic.
 *           $ref: '#/components/schemas/webcontent'
 *         suggestedMeasurement:
 *           description: A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         merchantReturnLink:
 *           description: Indicates a Web page or service by URL, for product return.
 *           type: string
 *         lender:
 *           description: A sub property of participant. The person that lends the object being borrowed.
 *           $ref: '#/components/schemas/organization'
 *         petsAllowed:
 *           description: Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.
 *           $ref: '#/components/schemas/boolean'
 *         UserTweets:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         deathPlace:
 *           description: The place where the person died.
 *           $ref: '#/components/schemas/place'
 *         healthPlanCoinsuranceRate:
 *           description: Whether The rate of coinsurance expressed as a number between 0.0 and 1.0.
 *           type: number
 *         RsvpResponseYes:
 *           description: The invitee will attend.
 *           $ref: '#/components/schemas/'
 *         teaches:
 *           description: The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
 *           type: string
 *         previousItem:
 *           description: A link to the ListItem that preceeds the current one.
 *           $ref: '#/components/schemas/listitem'
 *         torque:
 *           description: The torque (turning force) of the vehicle's engine.\n\nTypical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch\n\n* Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the [[valueReference]] property.\n* Note 2: You can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         tissueSample:
 *           description: The type of tissue sample required for the test.
 *           type: string
 *         MiddleSchool:
 *           description: A middle school (typically for children aged around 11-14, although this varies somewhat).
 *           $ref: '#/components/schemas/'
 *         StadiumOrArena:
 *           description: A stadium.
 *           $ref: '#/components/schemas/'
 *         about:
 *           description: The subject matter of the content.
 *           $ref: '#/components/schemas/thing'
 *         shippingDetails:
 *           description: Indicates information about the shipping policies and options associated with an [[Offer]].
 *           $ref: '#/components/schemas/offershippingdetails'
 *         PreSale:
 *           description: Indicates that the item is available for ordering and delivery before general availability.
 *           $ref: '#/components/schemas/'
 *         SatireOrParodyContent:
 *           description: Content coded 'satire or content' in a [[MediaReview]], considered in the context of how it was published or shared.For a [[VideoObject]] to be 'satire or parody content': A video that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)For an [[ImageObject]] to be 'satire or parody content': An image that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)For an [[ImageObject]] with embedded text to be 'satire or parody content': An image that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)For an [[AudioObject]] to be 'satire or parody content': Audio that was created as political or humorous commentary and is presented in that context. (Reshares of satire/parody content that do not include relevant context are more likely to fall under the “missing context” rating.)
 *           $ref: '#/components/schemas/'
 *         requiredMinAge:
 *           description: Audiences defined by a person's minimum age.
 *           $ref: '#/components/schemas/integer'
 *         availableIn:
 *           description: The location in which the strength is available.
 *           $ref: '#/components/schemas/administrativearea'
 *         recourseLoan:
 *           description: The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.
 *           $ref: '#/components/schemas/boolean'
 *         nonEqual:
 *           description: This ordering relation for qualitative values indicates that the subject is not equal to the object.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         abridged:
 *           description: Indicates whether the book is an abridged edition.
 *           $ref: '#/components/schemas/boolean'
 *         Float:
 *           description: Data type: Floating number.
 *           $ref: '#/components/schemas/'
 *         servicePostalAddress:
 *           description: The address for accessing the service by mail.
 *           $ref: '#/components/schemas/postaladdress'
 *         Action:
 *           description: An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.\n\nSee also [blog post](http://blog.schema.org/2014/04/announcing-schemaorg-actions.html) and [Actions overview document](schema:docs/actions.html).
 *           $ref: '#/components/schemas/'
 *         dosageForm:
 *           description: A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
 *           type: string
 *         associatedArticle:
 *           description: A NewsArticle associated with the Media Object.
 *           $ref: '#/components/schemas/newsarticle'
 *         PreventionHealthAspect:
 *           description: Information about actions or measures that can be taken to avoid getting the topic or reaching a critical situation related to the topic.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c11:
 *           description: Nonprofit501c11: Non-profit type referring to Teachers' Retirement Fund Associations.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501q:
 *           description: Nonprofit501q: Non-profit type referring to Credit Counseling Organizations.
 *           $ref: '#/components/schemas/'
 *         EventMovedOnline:
 *           description: Indicates that the event was changed to allow online participation. See [[eventAttendanceMode]] for specifics of whether it is now fully or partially online.
 *           $ref: '#/components/schemas/'
 *         Gastroenterologic:
 *           description: A specific branch of medical science that pertains to diagnosis and treatment of disorders of digestive system.
 *           $ref: '#/components/schemas/'
 *         BankOrCreditUnion:
 *           description: Bank or credit union.
 *           $ref: '#/components/schemas/'
 *         orderDate:
 *           description: Date order was placed.
 *           type: string
 *         inLanguage:
 *           description: The language of the content or performance or used in an action. Please use one of the language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47). See also [[availableLanguage]].
 *           $ref: '#/components/schemas/language'
 *         SportingGoodsStore:
 *           description: A sporting goods store.
 *           $ref: '#/components/schemas/'
 *         maximumEnrollment:
 *           description: The maximum number of students who may be enrolled in the program.
 *           $ref: '#/components/schemas/integer'
 *         RadioBroadcastService:
 *           description: A delivery service through which radio content is provided via broadcast over the air or online.
 *           $ref: '#/components/schemas/'
 *         InStoreOnly:
 *           description: Indicates that the item is available only at physical locations.
 *           $ref: '#/components/schemas/'
 *         LegalService:
 *           description: A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s).
 *           $ref: '#/components/schemas/'
 *         MedicalAudienceType:
 *           description: Target audiences types for medical web pages. Enumerated type.
 *           $ref: '#/components/schemas/'
 *         termDuration:
 *           description: The amount of time in a term as defined by the institution. A term is a length of time where students take one or more classes. Semesters and quarters are common units for term.
 *           $ref: '#/components/schemas/duration'
 *         WearableSizeGroupRegular:
 *           description: Size group "Regular" for wearables.
 *           $ref: '#/components/schemas/'
 *         totalJobOpenings:
 *           description: The number of positions open for this job posting. Use a positive integer. Do not use if the number of positions is unclear or not known.
 *           $ref: '#/components/schemas/integer'
 *         RefundTypeEnumeration:
 *           description: RefundTypeEnumeration enumerates several kinds of product return refund types.
 *           $ref: '#/components/schemas/'
 *         applicationDeadline:
 *           description: The date at which the program stops collecting applications for the next enrollment cycle.
 *           type: string
 *         Nonprofit501e:
 *           description: Nonprofit501e: Non-profit type referring to Cooperative Hospital Service Organizations.
 *           $ref: '#/components/schemas/'
 *         flightNumber:
 *           description: The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.
 *           type: string
 *         hasCredential:
 *           description: A credential awarded to the Person or Organization.
 *           $ref: '#/components/schemas/educationaloccupationalcredential'
 *         liveBlogUpdate:
 *           description: An update to the LiveBlog.
 *           $ref: '#/components/schemas/blogposting'
 *         HealthAndBeautyBusiness:
 *           description: Health and beauty.
 *           $ref: '#/components/schemas/'
 *         assesses:
 *           description: The item being described is intended to assess the competency or learning outcome defined by the referenced term.
 *           type: string
 *         hasEnergyEfficiencyCategory:
 *           description: Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard.
 *           $ref: '#/components/schemas/energyefficiencyenumeration'
 *         contactOption:
 *           description: An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
 *           $ref: '#/components/schemas/contactpointoption'
 *         Message:
 *           description: A single message from a sender to one or more organizations or people.
 *           $ref: '#/components/schemas/'
 *         articleBody:
 *           description: The actual body of the article.
 *           type: string
 *         acquireLicensePage:
 *           description: Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
 *           type: string
 *         audienceType:
 *           description: The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
 *           type: string
 *         Crematorium:
 *           description: A crematorium.
 *           $ref: '#/components/schemas/'
 *         typicalCreditsPerTerm:
 *           description: The number of credits or units a full-time student would be expected to take in 1 term however 'term' is defined by the institution.
 *           $ref: '#/components/schemas/structuredvalue'
 *         OutOfStock:
 *           description: Indicates that the item is out of stock.
 *           $ref: '#/components/schemas/'
 *         LodgingBusiness:
 *           description: A lodging business, such as a motel, hotel, or inn.
 *           $ref: '#/components/schemas/'
 *         valueAddedTaxIncluded:
 *           description: Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.
 *           $ref: '#/components/schemas/boolean'
 *         EUEnergyEfficiencyCategoryC:
 *           description: Represents EU Energy Efficiency Class C as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         tool:
 *           description: A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.
 *           $ref: '#/components/schemas/howtotool'
 *         ReadAction:
 *           description: The act of consuming written content.
 *           $ref: '#/components/schemas/'
 *         deliveryTime:
 *           description: The total delay between the receipt of the order and the goods reaching the final customer.
 *           $ref: '#/components/schemas/shippingdeliverytime'
 *         FDAcategoryX:
 *           description: A designation by the US FDA signifying that studies in animals or humans have demonstrated fetal abnormalities and/or there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience, and the risks involved in use of the drug in pregnant women clearly outweigh potential benefits.
 *           $ref: '#/components/schemas/'
 *         MedicalGuideline:
 *           description: Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 *           $ref: '#/components/schemas/'
 *         Reservation:
 *           description: Describes a reservation for travel, dining or an event. Some reservations require tickets. \n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use [[Offer]].
 *           $ref: '#/components/schemas/'
 *         illustrator:
 *           description: The illustrator of the book.
 *           $ref: '#/components/schemas/person'
 *         LodgingReservation:
 *           description: A reservation for lodging at a hotel, motel, inn, etc.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.
 *           $ref: '#/components/schemas/'
 *         EntryPoint:
 *           description: An entry point, within some Web-based protocol.
 *           $ref: '#/components/schemas/'
 *         EnrollingByInvitation:
 *           description: Enrolling participants by invitation only.
 *           $ref: '#/components/schemas/'
 *         timeToComplete:
 *           description: The expected length of time to complete the program if attending full-time.
 *           $ref: '#/components/schemas/duration'
 *         image:
 *           description: An image of the item. This can be a [[URL]] or a fully described [[ImageObject]].
 *           $ref: '#/components/schemas/imageobject'
 *         DietNutrition:
 *           description: Dietetic and nutrition as a medical specialty.
 *           $ref: '#/components/schemas/'
 *         Guide:
 *           description: [[Guide]] is a page or article that recommend specific products or services, or aspects of a thing for a user to consider. A [[Guide]] may represent a Buying Guide and detail aspects of products or services for a user to consider. A [[Guide]] may represent a Product Guide and recommend specific products or services. A [[Guide]] may represent a Ranked List and recommend specific products or services with ranking.
 *           $ref: '#/components/schemas/'
 *         releasedEvent:
 *           description: The place and time the release was issued, expressed as a PublicationEvent.
 *           $ref: '#/components/schemas/publicationevent'
 *         box:
 *           description: A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.
 *           type: string
 *         BuddhistTemple:
 *           description: A Buddhist temple.
 *           $ref: '#/components/schemas/'
 *         namedPosition:
 *           description: A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.
 *           type: string
 *         supportingData:
 *           description: Supporting data for a SoftwareApplication.
 *           $ref: '#/components/schemas/datafeed'
 *         PartiallyInForce:
 *           description: Indicates that parts of the legislation are in force, and parts are not.
 *           $ref: '#/components/schemas/'
 *         OnlineOnly:
 *           description: Indicates that the item is available only online.
 *           $ref: '#/components/schemas/'
 *         PerformanceRole:
 *           description: A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 *           $ref: '#/components/schemas/'
 *         SRP:
 *           description: Represents the suggested retail price ("SRP") of an offered product.
 *           $ref: '#/components/schemas/'
 *         successorOf:
 *           description: A pointer from a newer variant of a product to its previous, often discontinued predecessor.
 *           $ref: '#/components/schemas/productmodel'
 *         parents:
 *           description: A parents of the person.
 *           $ref: '#/components/schemas/person'
 *         costPerUnit:
 *           description: The cost per unit of the drug.
 *           type: string
 *         relatedAnatomy:
 *           description: Anatomical systems or structures that relate to the superficial anatomy.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         itemListOrder:
 *           description: Type of ordering (e.g. Ascending, Descending, Unordered).
 *           $ref: '#/components/schemas/itemlistordertype'
 *         AccountingService:
 *           description: Accountancy business.\n\nAs a [[LocalBusiness]] it can be described as a [[provider]] of one or more [[Service]]\(s). 
 *           $ref: '#/components/schemas/'
 *         ShareAction:
 *           description: The act of distributing content to people for their amusement or edification.
 *           $ref: '#/components/schemas/'
 *         ApprovedIndication:
 *           description: An indication for a medical therapy that has been formally specified or approved by a regulatory body that regulates use of the therapy; for example, the US FDA approves indications for most drugs in the US.
 *           $ref: '#/components/schemas/'
 *         salaryCurrency:
 *           description: The currency (coded using [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) ) used for the main salary information in this job posting or for this employee.
 *           type: string
 *         trackingUrl:
 *           description: Tracking url for the parcel delivery.
 *           type: string
 *         DisagreeAction:
 *           description: The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.
 *           $ref: '#/components/schemas/'
 *         lowPrice:
 *           description: The lowest price of all offers available.\n\nUsage guidelines:\n\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *           type: number
 *         AutoRepair:
 *           description: Car repair business.
 *           $ref: '#/components/schemas/'
 *         postalCode:
 *           description: The postal code. For example, 94043.
 *           type: string
 *         riskFactor:
 *           description: A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age, coexisting condition.
 *           $ref: '#/components/schemas/medicalriskfactor'
 *         acceptedAnswer:
 *           description: The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.
 *           $ref: '#/components/schemas/answer'
 *         relevantSpecialty:
 *           description: If applicable, a medical specialty in which this entity is relevant.
 *           $ref: '#/components/schemas/medicalspecialty'
 *         audio:
 *           description: An embedded audio object.
 *           $ref: '#/components/schemas/clip'
 *         Fungus:
 *           description: Pathogenic fungus.
 *           $ref: '#/components/schemas/'
 *         PercutaneousProcedure:
 *           description: A type of medical procedure that involves percutaneous techniques, where access to organs or tissue is achieved via needle-puncture of the skin. For example, catheter-based procedures like stent delivery.
 *           $ref: '#/components/schemas/'
 *         MobileApplication:
 *           description: A software application designed specifically to work well on a mobile device such as a telephone.
 *           $ref: '#/components/schemas/'
 *         WearableMeasurementHips:
 *           description: Measurement of the hip section, for example of a skirt
 *           $ref: '#/components/schemas/'
 *         accessibilityFeature:
 *           description: Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility ([WebSchemas wiki lists possible values](http://www.w3.org/wiki/WebSchemas/Accessibility)).
 *           type: string
 *         WearableSizeGroupBig:
 *           description: Size group "Big" for wearables.
 *           $ref: '#/components/schemas/'
 *         relatedTo:
 *           description: The most generic familial relation.
 *           $ref: '#/components/schemas/person'
 *         superEvent:
 *           description: An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
 *           $ref: '#/components/schemas/event'
 *         medicalSpecialty:
 *           description: A medical specialty of the provider.
 *           $ref: '#/components/schemas/medicalspecialty'
 *         paymentMethod:
 *           description: The name of the credit card or other method of payment for the order.
 *           $ref: '#/components/schemas/paymentmethod'
 *         MotorcycleDealer:
 *           description: A motorcycle dealer.
 *           $ref: '#/components/schemas/'
 *         targetPopulation:
 *           description: Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
 *           type: string
 *         Place:
 *           description: Entities that have a somewhat fixed, physical extension.
 *           $ref: '#/components/schemas/'
 *         speechToTextMarkup:
 *           description: Form of markup used. eg. [SSML](https://www.w3.org/TR/speech-synthesis11) or [IPA](https://www.wikidata.org/wiki/Property:P898).
 *           type: string
 *         MultiPlayer:
 *           description: Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously.
 *           $ref: '#/components/schemas/'
 *         AskPublicNewsArticle:
 *           description: A [[NewsArticle]] expressing an open call by a [[NewsMediaOrganization]] asking the public for input, insights, clarifications, anecdotes, documentation, etc., on an issue, for reporting purposes.
 *           $ref: '#/components/schemas/'
 *         accountMinimumInflow:
 *           description: A minimum amount that has to be paid in every month.
 *           $ref: '#/components/schemas/monetaryamount'
 *         byDay:
 *           description: Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules.
 *           type: string
 *         OfflineTemporarily:
 *           description: Game server status: OfflineTemporarily. Server is offline now but it can be online soon.
 *           $ref: '#/components/schemas/'
 *         OccupationalActivity:
 *           description: Any physical activity engaged in for job-related purposes. Examples may include waiting tables, maid service, carrying a mailbag, picking fruits or vegetables, construction work, etc.
 *           $ref: '#/components/schemas/'
 *         DigitalDocumentPermissionType:
 *           description: A type of permission which can be granted for accessing a digital document.
 *           $ref: '#/components/schemas/'
 *         publicationType:
 *           description: The type of the medical article, taken from the US NLM MeSH publication type catalog. See also [MeSH documentation](http://www.nlm.nih.gov/mesh/pubtypes.html).
 *           type: string
 *         runsTo:
 *           description: The vasculature the lymphatic structure runs, or efferents, to.
 *           $ref: '#/components/schemas/vessel'
 *         lyricist:
 *           description: The person who wrote the words.
 *           $ref: '#/components/schemas/person'
 *         disambiguatingDescription:
 *           description: A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
 *           type: string
 *         repetitions:
 *           description: Number of times one should repeat the activity.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         softwareRequirements:
 *           description: Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
 *           type: string
 *         study:
 *           description: A medical study or trial related to this entity.
 *           $ref: '#/components/schemas/medicalstudy'
 *         EventRescheduled:
 *           description: The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated).
 *           $ref: '#/components/schemas/'
 *         PrimaryCare:
 *           description: The medical care by a physician, or other health-care professional, who is the patient's first contact with the health-care system and who may recommend a specialist if necessary.
 *           $ref: '#/components/schemas/'
 *         roleName:
 *           description: A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'.
 *           type: string
 *         FailedActionStatus:
 *           description: An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure.
 *           $ref: '#/components/schemas/'
 *         steeringPosition:
 *           description: The position of the steering wheel or similar device (mostly for cars).
 *           $ref: '#/components/schemas/steeringpositionvalue'
 *         isbn:
 *           description: The ISBN of the book.
 *           type: string
 *         healthPlanDrugOption:
 *           description: TODO.
 *           type: string
 *         brand:
 *           description: The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 *           $ref: '#/components/schemas/organization'
 *         eventAttendanceMode:
 *           description: The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
 *           $ref: '#/components/schemas/eventattendancemodeenumeration'
 *         CampingPitch:
 *           description: A [[CampingPitch]] is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or [[Campground]].\n\nIn British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.(Source: Wikipedia see [https://en.wikipedia.org/wiki/Campsite](https://en.wikipedia.org/wiki/Campsite)).\n\nSee also the dedicated [document on the use of schema.org for marking up hotels and other forms of accommodations](/docs/hotels.html).
 *           $ref: '#/components/schemas/'
 *         pregnancyWarning:
 *           description: Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
 *           type: string
 *         AggregateOffer:
 *           description: When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.\n\nNote: AggregateOffers are normally expected to associate multiple offers that all share the same defined [[businessFunction]] value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 *           $ref: '#/components/schemas/'
 *         accelerationTime:
 *           description: The time needed to accelerate the vehicle from a given start velocity to a given target velocity.\n\nTypical unit code(s): SEC for seconds\n\n* Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the [[name]] of the [[QuantitativeValue]], or use [[valueReference]] with a [[QuantitativeValue]] of 0..60 mph or 0..100 km/h to specify the reference speeds.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         foodEstablishment:
 *           description: A sub property of location. The specific food establishment where the action occurred.
 *           $ref: '#/components/schemas/place'
 *         seatNumber:
 *           description: The location of the reserved seat (e.g., 27).
 *           type: string
 *         Wholesale:
 *           description: The drug's cost represents the wholesale acquisition cost of the drug.
 *           $ref: '#/components/schemas/'
 *         Notary:
 *           description: A notary.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c23:
 *           description: Nonprofit501c23: Non-profit type referring to Veterans Organizations.
 *           $ref: '#/components/schemas/'
 *         elevation:
 *           description: The elevation of a location ([WGS 84](https://en.wikipedia.org/wiki/World_Geodetic_System)). Values may be of the form 'NUMBER UNIT_OF_MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
 *           type: number
 *         DrugPregnancyCategory:
 *           description: Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.
 *           $ref: '#/components/schemas/'
 *         CassetteFormat:
 *           description: CassetteFormat.
 *           $ref: '#/components/schemas/'
 *         diagnosis:
 *           description: One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
 *           $ref: '#/components/schemas/medicalcondition'
 *         priceType:
 *           description: Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.
 *           type: string
 *         GettingAccessHealthAspect:
 *           description: Content that discusses practical and policy aspects for getting access to specific kinds of healthcare (e.g. distribution mechanisms for vaccines).
 *           $ref: '#/components/schemas/'
 *         ApplyAction:
 *           description: The act of registering to an organization/service without the guarantee to receive it.\n\nRelated actions:\n\n* [[RegisterAction]]: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 *           $ref: '#/components/schemas/'
 *         InstallAction:
 *           description: The act of installing an application.
 *           $ref: '#/components/schemas/'
 *         mediaAuthenticityCategory:
 *           description: Indicates a MediaManipulationRatingEnumeration classification of a media object (in the context of how it was published or shared).
 *           $ref: '#/components/schemas/mediamanipulationratingenumeration'
 *         UseAction:
 *           description: The act of applying an object to its intended purpose.
 *           $ref: '#/components/schemas/'
 *         vehicleConfiguration:
 *           description: A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
 *           type: string
 *         AMRadioChannel:
 *           description: A radio channel that uses AM.
 *           $ref: '#/components/schemas/'
 *         DeleteAction:
 *           description: The act of editing a recipient by removing one of its objects.
 *           $ref: '#/components/schemas/'
 *         softwareAddOn:
 *           description: Additional content for a software application.
 *           $ref: '#/components/schemas/softwareapplication'
 *         lesser:
 *           description: This ordering relation for qualitative values indicates that the subject is lesser than the object.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         diversityPolicy:
 *           description: Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 *           type: string
 *         BoatTerminal:
 *           description: A terminal for boats, ships, and other water vessels.
 *           $ref: '#/components/schemas/'
 *         PregnancyHealthAspect:
 *           description: Content discussing pregnancy-related aspects of a health topic.
 *           $ref: '#/components/schemas/'
 *         FundingAgency:
 *           description: A FundingAgency is an organization that implements one or more [[FundingScheme]]s and manages the granting process (via [[Grant]]s, typically [[MonetaryGrant]]s). A funding agency is not always required for grant funding, e.g. philanthropic giving, corporate sponsorship etc. Examples of funding agencies include ERC, REA, NIH, Bill and Melinda Gates Foundation... 
 *           $ref: '#/components/schemas/'
 *         numberOfAirbags:
 *           description: The number or type of airbags in the vehicle.
 *           type: string
 *         WearableSizeSystemJP:
 *           description: Japanese size system for wearables.
 *           $ref: '#/components/schemas/'
 *         numberOfAccommodationUnits:
 *           description: Indicates the total (available plus unavailable) number of accommodation units in an [[ApartmentComplex]], or the number of accommodation units for a specific [[FloorPlan]] (within its specific [[ApartmentComplex]]). See also [[numberOfAvailableAccommodationUnits]].
 *           $ref: '#/components/schemas/quantitativevalue'
 *         comment:
 *           description: Comments, typically from users.
 *           $ref: '#/components/schemas/comment'
 *         composer:
 *           description: The person or organization who wrote a composition, or who is the composer of a work performed at some event.
 *           $ref: '#/components/schemas/person'
 *         TipAction:
 *           description: The act of giving money voluntarily to a beneficiary in recognition of services rendered.
 *           $ref: '#/components/schemas/'
 *         priceComponent:
 *           description: This property links to all [[UnitPriceSpecification]] nodes that apply in parallel for the [[CompoundPriceSpecification]] node.
 *           $ref: '#/components/schemas/unitpricespecification'
 *         CovidTestingFacility:
 *           description: A CovidTestingFacility is a [[MedicalClinic]] where testing for the COVID-19 Coronavirus disease is available. If the facility is being made available from an established [[Pharmacy]], [[Hotel]], or other non-medical organization, multiple types can be listed. This makes it easier to re-use existing schema.org information about that place e.g. contact info, address, opening hours. Note that in an emergency, such information may not always be reliable. 
 *           $ref: '#/components/schemas/'
 *         trailer:
 *           description: The trailer of a movie or tv/radio series, season, episode, etc.
 *           $ref: '#/components/schemas/videoobject'
 *         value:
 *           description: The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *           type: string
 *         DefinedRegion:
 *           description: A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.Examples: a delivery destination when shopping. Region where regional pricing is configured.Requirement 1:Country: USStates: "NY", "CA"Requirement 2:Country: USPostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]}{ [12345, 12345], [78945, 78945], }Region = state, canton, prefecture, autonomous community...
 *           $ref: '#/components/schemas/'
 *         PeopleAudience:
 *           description: A set of characteristics belonging to people, e.g. who compose an item's target audience.
 *           $ref: '#/components/schemas/'
 *         BusinessEntityType:
 *           description: A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#Business\n* http://purl.org/goodrelations/v1#Enduser\n* http://purl.org/goodrelations/v1#PublicInstitution\n* http://purl.org/goodrelations/v1#Reseller 
 *           $ref: '#/components/schemas/'
 *         GameServer:
 *           description: Server that provides game interaction in a multiplayer game.
 *           $ref: '#/components/schemas/'
 *         includedDataCatalog:
 *           description: A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').
 *           $ref: '#/components/schemas/datacatalog'
 *         DigitalDocumentPermission:
 *           description: A permission for a particular person or group to access a particular file.
 *           $ref: '#/components/schemas/'
 *         accountOverdraftLimit:
 *           description: An overdraft is an extension of credit from a lending institution when an account reaches zero. An overdraft allows the individual to continue withdrawing money even if the account has no funds in it. Basically the bank allows people to borrow a set amount of money.
 *           $ref: '#/components/schemas/monetaryamount'
 *         flightDistance:
 *           description: The distance of the flight.
 *           $ref: '#/components/schemas/distance'
 *         preOp:
 *           description: A description of the workup, testing, and other preparations required before implanting this device.
 *           type: string
 *         noBylinesPolicy:
 *           description: For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement explaining when authors of articles are not named in bylines.
 *           $ref: '#/components/schemas/creativework'
 *         MSRP:
 *           description: Represents the manufacturer suggested retail price ("MSRP") of an offered product.
 *           $ref: '#/components/schemas/'
 *         Psychiatric:
 *           description: A specific branch of medical science that is concerned with the study, treatment, and prevention of mental illness, using both medical and psychological therapies.
 *           $ref: '#/components/schemas/'
 *         requiredCollateral:
 *           description: Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
 *           $ref: '#/components/schemas/thing'
 *         SellAction:
 *           description: The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 *           $ref: '#/components/schemas/'
 *         Poster:
 *           description: A large, usually printed placard, bill, or announcement, often illustrated, that is posted to advertise or publicize something.
 *           $ref: '#/components/schemas/'
 *         BikeStore:
 *           description: A bike store.
 *           $ref: '#/components/schemas/'
 *         hasPart:
 *           description: Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
 *           $ref: '#/components/schemas/creativework'
 *         TreatmentIndication:
 *           description: An indication for treating an underlying condition, symptom, etc.
 *           $ref: '#/components/schemas/'
 *         TouristTrip:
 *           description: A tourist trip. A created itinerary of visits to one or more places of interest ([[TouristAttraction]]/[[TouristDestination]]) often linked by a similar theme, geographic area, or interest to a particular [[touristType]]. The [UNWTO](http://www2.unwto.org/) defines tourism trip as the Trip taken by visitors. (See examples below).
 *           $ref: '#/components/schemas/'
 *         LaserDiscFormat:
 *           description: LaserDiscFormat.
 *           $ref: '#/components/schemas/'
 *         Otolaryngologic:
 *           description: A specific branch of medical science that is concerned with the ear, nose and throat and their respective disease states.
 *           $ref: '#/components/schemas/'
 *         MusicRelease:
 *           description: A MusicRelease is a specific release of a music album.
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemEnumeration:
 *           description: Enumerates common size systems specific for wearable products
 *           $ref: '#/components/schemas/'
 *         comprisedOf:
 *           description: Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system.
 *           $ref: '#/components/schemas/anatomicalstructure'
 *         ResumeAction:
 *           description: The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
 *           $ref: '#/components/schemas/'
 *         UserLikes:
 *           description: UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use [[Action]]-based vocabulary, alongside types such as [[Comment]].
 *           $ref: '#/components/schemas/'
 *         causeOf:
 *           description: The condition, complication, symptom, sign, etc. caused.
 *           $ref: '#/components/schemas/medicalentity'
 *         BodyMeasurementHeight:
 *           description: Body height (measured between crown of head and soles of feet). Used, for example, to fit jackets.
 *           $ref: '#/components/schemas/'
 *         partOfSeries:
 *           description: The series to which this episode or season belongs.
 *           $ref: '#/components/schemas/creativeworkseries'
 *         colorist:
 *           description: The individual who adds color to inked drawings.
 *           $ref: '#/components/schemas/person'
 *         LowLactoseDiet:
 *           description: A diet appropriate for people with lactose intolerance.
 *           $ref: '#/components/schemas/'
 *         evidenceOrigin:
 *           description: Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.
 *           type: string
 *         tracks:
 *           description: A music recording (track)&#x2014;usually a single song.
 *           $ref: '#/components/schemas/musicrecording'
 *         scheduleTimezone:
 *           description: Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database.
 *           type: string
 *         DiabeticDiet:
 *           description: A diet appropriate for people with diabetes.
 *           $ref: '#/components/schemas/'
 *         baseSalary:
 *           description: The base salary of the job or of an employee in an EmployeeRole.
 *           $ref: '#/components/schemas/pricespecification'
 *         PaymentChargeSpecification:
 *           description: The costs of settling the payment using a particular payment method.
 *           $ref: '#/components/schemas/'
 *         drugUnit:
 *           description: The unit in which the drug is measured, e.g. '5 mg tablet'.
 *           type: string
 *         TheaterEvent:
 *           description: Event type: Theater performance.
 *           $ref: '#/components/schemas/'
 *         TVSeries:
 *           description: CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 *           $ref: '#/components/schemas/'
 *         blogPost:
 *           description: A posting that is part of this blog.
 *           $ref: '#/components/schemas/blogposting'
 *         BrokerageAccount:
 *           description: An account that allows an investor to deposit funds and place investment orders with a licensed broker or brokerage firm.
 *           $ref: '#/components/schemas/'
 *         PublicToilet:
 *           description: A public toilet is a room or small building containing one or more toilets (and possibly also urinals) which is available for use by the general public, or by customers or employees of certain businesses.
 *           $ref: '#/components/schemas/'
 *         permissions:
 *           description: Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
 *           type: string
 *         ownedThrough:
 *           description: The date and time of giving up ownership on the product.
 *           type: string
 *         PaymentService:
 *           description: A Service to transfer funds from a person or organization to a beneficiary person or organization.
 *           $ref: '#/components/schemas/'
 *         toLocation:
 *           description: A sub property of location. The final location of the object or the agent after the action.
 *           $ref: '#/components/schemas/place'
 *         result:
 *           description: The result produced in the action. e.g. John wrote *a book*.
 *           $ref: '#/components/schemas/thing'
 *         PlasticSurgery:
 *           description: A specific branch of medical science that pertains to therapeutic or cosmetic repair or re-formation of missing, injured or malformed tissues or body parts by manual and instrumental means.
 *           $ref: '#/components/schemas/'
 *         busNumber:
 *           description: The unique identifier for the bus.
 *           type: string
 *         countriesSupported:
 *           description: Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
 *           type: string
 *         CharitableIncorporatedOrganization:
 *           description: CharitableIncorporatedOrganization: Non-profit type referring to a Charitable Incorporated Organization (UK).
 *           $ref: '#/components/schemas/'
 *         associatedMedia:
 *           description: A media object that encodes this CreativeWork. This property is a synonym for encoding.
 *           $ref: '#/components/schemas/mediaobject'
 *         sodiumContent:
 *           description: The number of milligrams of sodium.
 *           $ref: '#/components/schemas/mass'
 *         partOfTVSeries:
 *           description: The TV series to which this episode or season belongs.
 *           $ref: '#/components/schemas/tvseries'
 *         numberOfCredits:
 *           description: The number of credits or units awarded by a Course or required to complete an EducationalOccupationalProgram.
 *           $ref: '#/components/schemas/structuredvalue'
 *         Bakery:
 *           description: A bakery.
 *           $ref: '#/components/schemas/'
 *         trainName:
 *           description: The name of the train (e.g. The Orient Express).
 *           type: string
 *         position:
 *           description: The position of an item in a series or sequence of items.
 *           $ref: '#/components/schemas/integer'
 *         duplicateTherapy:
 *           description: A therapy that duplicates or overlaps this one.
 *           $ref: '#/components/schemas/medicaltherapy'
 *         stage:
 *           description: The stage of the condition, if applicable.
 *           $ref: '#/components/schemas/medicalconditionstage'
 *         MedicalWebPage:
 *           description: A web page that provides medical information.
 *           $ref: '#/components/schemas/'
 *         InteractAction:
 *           description: The act of interacting with another person or organization.
 *           $ref: '#/components/schemas/'
 *         CDCPMDRecord:
 *           description: A CDCPMDRecord is a data structure representing a record in a CDC tabular data format used for hospital data reporting. See [documentation](/docs/cdc-covid.html) for details, and the linked CDC materials for authoritative definitions used as the source here. 
 *           $ref: '#/components/schemas/'
 *         EmployerReview:
 *           description: An [[EmployerReview]] is a review of an [[Organization]] regarding its role as an employer, written by a current or former employee of that organization.
 *           $ref: '#/components/schemas/'
 *         originAddress:
 *           description: Shipper's address.
 *           $ref: '#/components/schemas/postaladdress'
 *         ResultsNotAvailable:
 *           description: Results are not available.
 *           $ref: '#/components/schemas/'
 *         Surgical:
 *           description: A specific branch of medical science that pertains to treating diseases, injuries and deformities by manual and instrumental means.
 *           $ref: '#/components/schemas/'
 *         hasBroadcastChannel:
 *           description: A broadcast channel of a broadcast service.
 *           $ref: '#/components/schemas/broadcastchannel'
 *         ReviewNewsArticle:
 *           description: A [[NewsArticle]] and [[CriticReview]] providing a professional critic's assessment of a service, product, performance, or artistic or literary work.
 *           $ref: '#/components/schemas/'
 *         EmployerAggregateRating:
 *           description: An aggregate rating of an Organization related to its role as an employer.
 *           $ref: '#/components/schemas/'
 *         instructor:
 *           description: A person assigned to instruct or provide instructional assistance for the [[CourseInstance]].
 *           $ref: '#/components/schemas/person'
 *         merchantReturnDays:
 *           description: The merchantReturnDays property indicates the number of days (from purchase) within which relevant merchant return policy is applicable.
 *           $ref: '#/components/schemas/integer'
 *         ImagingTest:
 *           description: Any medical imaging modality typically used for diagnostic purposes.
 *           $ref: '#/components/schemas/'
 *         AuthorizeAction:
 *           description: The act of granting permission to an object.
 *           $ref: '#/components/schemas/'
 *         branchCode:
 *           description: A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.\n\nFor example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch. 
 *           type: string
 *         BroadcastEvent:
 *           description: An over the air or online broadcast event.
 *           $ref: '#/components/schemas/'
 *         startOffset:
 *           description: The start time of the clip expressed as the number of seconds from the beginning of the work.
 *           type: number
 *         GardenStore:
 *           description: A garden store.
 *           $ref: '#/components/schemas/'
 *         discountCode:
 *           description: Code used to redeem a discount.
 *           type: string
 *         object:
 *           description: The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read *a book*.
 *           $ref: '#/components/schemas/thing'
 *         EUEnergyEfficiencyCategoryF:
 *           description: Represents EU Energy Efficiency Class F as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         availableStrength:
 *           description: An available dosage strength for the drug.
 *           $ref: '#/components/schemas/drugstrength'
 *         RealEstateAgent:
 *           description: A real-estate agent.
 *           $ref: '#/components/schemas/'
 *         bankAccountType:
 *           description: The type of a bank account.
 *           type: string
 *         typicalTest:
 *           description: A medical test typically performed given this condition.
 *           $ref: '#/components/schemas/medicaltest'
 *         valueMinLength:
 *           description: Specifies the minimum allowed range for number of characters in a literal value.
 *           type: number
 *         LikeAction:
 *           description: The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.
 *           $ref: '#/components/schemas/'
 *         loanRepaymentForm:
 *           description: A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.
 *           $ref: '#/components/schemas/repaymentspecification'
 *         weightTotal:
 *           description: The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.\n\nTypical unit code(s): KGM for kilogram, LBR for pound\n\n* Note 1: You can indicate additional information in the [[name]] of the [[QuantitativeValue]] node.\n* Note 2: You may also link to a [[QualitativeValue]] node that provides additional information using [[valueReference]].\n* Note 3: Note that you can use [[minValue]] and [[maxValue]] to indicate ranges.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         creativeWorkStatus:
 *           description: The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
 *           $ref: '#/components/schemas/definedterm'
 *         cvdFacilityId:
 *           description: Identifier of the NHSN facility that this data record applies to. Use [[cvdFacilityCounty]] to indicate the county. To provide other details, [[healthcareReportingData]] can be used on a [[Hospital]] entry.
 *           type: string
 *         benefits:
 *           description: Description of benefits associated with the job.
 *           type: string
 *         isBasedOnUrl:
 *           description: A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.
 *           type: string
 *         BoardingPolicyType:
 *           description: A type of boarding policy used by an airline.
 *           $ref: '#/components/schemas/'
 *         repeatCount:
 *           description: Defines the number of times a recurring [[Event]] will take place
 *           $ref: '#/components/schemas/integer'
 *         performers:
 *           description: The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.
 *           $ref: '#/components/schemas/person'
 *         RightHandDriving:
 *           description: The steering position is on the right side of the vehicle (viewed from the main direction of driving).
 *           $ref: '#/components/schemas/'
 *         infectiousAgent:
 *           description: The actual infectious agent, such as a specific bacterium.
 *           type: string
 *         biomechnicalClass:
 *           description: The biomechanical properties of the bone.
 *           type: string
 *         MedicalGuidelineContraindication:
 *           description: A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound.
 *           $ref: '#/components/schemas/'
 *         LimitedByGuaranteeCharity:
 *           description: LimitedByGuaranteeCharity: Non-profit type referring to a charitable company that is limited by guarantee (UK).
 *           $ref: '#/components/schemas/'
 *         Restaurant:
 *           description: A restaurant.
 *           $ref: '#/components/schemas/'
 *         MisconceptionsHealthAspect:
 *           description: Content about common misconceptions and myths that are related to a topic.
 *           $ref: '#/components/schemas/'
 *         healthPlanCoinsuranceOption:
 *           description: Whether the coinsurance applies before or after deductible, etc. TODO: Is this a closed set?
 *           type: string
 *         Motel:
 *           description: A motel.<br /><br />See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 *           $ref: '#/components/schemas/'
 *         relatedLink:
 *           description: A link related to this web page, for example to other related web pages.
 *           type: string
 *         MonetaryGrant:
 *           description: A monetary grant.
 *           $ref: '#/components/schemas/'
 *         sport:
 *           description: A type of sport (e.g. Baseball).
 *           type: string
 *         PaidLeave:
 *           description: PaidLeave: this is a benefit for paid leave.
 *           $ref: '#/components/schemas/'
 *         Observational:
 *           description: An observational study design.
 *           $ref: '#/components/schemas/'
 *         Suspended:
 *           description: Suspended.
 *           $ref: '#/components/schemas/'
 *         ReturnShippingFees:
 *           description: ReturnShippingFees ...
 *           $ref: '#/components/schemas/'
 *         StatusEnumeration:
 *           description: Lists or enumerations dealing with status types.
 *           $ref: '#/components/schemas/'
 *         guidelineSubject:
 *           description: The medical conditions, treatments, etc. that are the subject of the guideline.
 *           $ref: '#/components/schemas/medicalentity'
 *         OrderProcessing:
 *           description: OrderStatus representing that an order is being processed.
 *           $ref: '#/components/schemas/'
 *         affectedBy:
 *           description: Drugs that affect the test's results.
 *           $ref: '#/components/schemas/drug'
 *         timeOfDay:
 *           description: The time of day the program normally runs. For example, "evenings".
 *           type: string
 *         Courthouse:
 *           description: A courthouse.
 *           $ref: '#/components/schemas/'
 *         gtin8:
 *           description: The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *           type: string
 *         releaseDate:
 *           description: The release date of a product or product model. This can be used to distinguish the exact variant of a product.
 *           type: string
 *         DrugLegalStatus:
 *           description: The legal availability status of a medical drug.
 *           $ref: '#/components/schemas/'
 *         identifyingTest:
 *           description: A diagnostic test that can identify this sign.
 *           $ref: '#/components/schemas/medicaltest'
 *         TechArticle:
 *           description: A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 *           $ref: '#/components/schemas/'
 *         menuAddOn:
 *           description: Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.
 *           $ref: '#/components/schemas/menusection'
 *         recipeInstructions:
 *           description: A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.
 *           $ref: '#/components/schemas/creativework'
 *         PharmacySpecialty:
 *           description: The practice or art and science of preparing and dispensing drugs and medicines.
 *           $ref: '#/components/schemas/'
 *         ZoneBoardingPolicy:
 *           description: The airline boards by zones of the plane.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c25:
 *           description: Nonprofit501c25: Non-profit type referring to Real Property Title-Holding Corporations or Trusts with Multiple Parents.
 *           $ref: '#/components/schemas/'
 *         Abdomen:
 *           description: Abdomen clinical examination.
 *           $ref: '#/components/schemas/'
 *         HowToTip:
 *           description: An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).
 *           $ref: '#/components/schemas/'
 *         query:
 *           description: A sub property of instrument. The query used on this action.
 *           type: string
 *         TelevisionStation:
 *           description: A television station.
 *           $ref: '#/components/schemas/'
 *         cheatCode:
 *           description: Cheat codes to the game.
 *           $ref: '#/components/schemas/creativework'
 *         WearableSizeSystemGS1:
 *           description: GS1 (formerly NRF) size system for wearables.
 *           $ref: '#/components/schemas/'
 *         Landform:
 *           description: A landform or physical feature. Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.
 *           $ref: '#/components/schemas/'
 *         ProductGroup:
 *           description: A ProductGroup represents a group of [[Product]]s that vary only in certain well-described ways, such as by [[size]], [[color]], [[material]] etc.While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an [[isVariantOf]] relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties [[variesBy]], [[hasVariant]], [[url]]. 
 *           $ref: '#/components/schemas/'
 *         partOfSystem:
 *           description: The anatomical or organ system that this structure is part of.
 *           $ref: '#/components/schemas/anatomicalsystem'
 *         businessFunction:
 *           description: The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
 *           $ref: '#/components/schemas/businessfunction'
 *         Residence:
 *           description: The place where a person lives.
 *           $ref: '#/components/schemas/'
 *         taxID:
 *           description: The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 *           type: string
 *         EventStatusType:
 *           description: EventStatusType is an enumeration type whose instances represent several states that an Event may be in.
 *           $ref: '#/components/schemas/'
 *         LeaveAction:
 *           description: An agent leaves an event / group with participants/friends at a location.\n\nRelated actions:\n\n* [[JoinAction]]: The antonym of LeaveAction.\n* [[UnRegisterAction]]: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 *           $ref: '#/components/schemas/'
 *         EUEnergyEfficiencyCategoryA3Plus:
 *           description: Represents EU Energy Efficiency Class A+++ as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         tickerSymbol:
 *           description: The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022.
 *           type: string
 *         SkiResort:
 *           description: A ski resort.
 *           $ref: '#/components/schemas/'
 *         MensClothingStore:
 *           description: A men's clothing store.
 *           $ref: '#/components/schemas/'
 *         UpdateAction:
 *           description: The act of managing by changing/editing the state of the object.
 *           $ref: '#/components/schemas/'
 *         duration:
 *           description: The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
 *           $ref: '#/components/schemas/duration'
 *         numAdults:
 *           description: The number of adults staying in the unit.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         nationality:
 *           description: Nationality of the person.
 *           $ref: '#/components/schemas/country'
 *         PostOffice:
 *           description: A post office.
 *           $ref: '#/components/schemas/'
 *         material:
 *           description: A material that something is made from, e.g. leather, wool, cotton, paper.
 *           $ref: '#/components/schemas/product'
 *         WorkBasedProgram:
 *           description: A program with both an educational and employment component. Typically based at a workplace and structured around work-based learning, with the aim of instilling competencies related to an occupation. WorkBasedProgram is used to distinguish programs such as apprenticeships from school, college or other classroom based educational programs.
 *           $ref: '#/components/schemas/'
 *         pathophysiology:
 *           description: Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
 *           type: string
 *         HinduDiet:
 *           description: A diet conforming to Hindu dietary practices, in particular, beef-free.
 *           $ref: '#/components/schemas/'
 *         termCode:
 *           description: A code that identifies this [[DefinedTerm]] within a [[DefinedTermSet]]
 *           type: string
 *         RadioChannel:
 *           description: A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.
 *           $ref: '#/components/schemas/'
 *         House:
 *           description: A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).
 *           $ref: '#/components/schemas/'
 *         broadcastFrequencyValue:
 *           description: The frequency in MHz for a particular broadcast.
 *           type: number
 *         SingleCenterTrial:
 *           description: A trial that takes place at a single center.
 *           $ref: '#/components/schemas/'
 *         LifestyleModification:
 *           description: A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition.
 *           $ref: '#/components/schemas/'
 *         bodyLocation:
 *           description: Location in the body of the anatomical structure.
 *           type: string
 *         isLiveBroadcast:
 *           description: True if the broadcast is of a live event.
 *           $ref: '#/components/schemas/boolean'
 *         BedDetails:
 *           description: An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also [[BedType]] (under development).
 *           $ref: '#/components/schemas/'
 *         HardwareStore:
 *           description: A hardware store.
 *           $ref: '#/components/schemas/'
 *         SpeechPathology:
 *           description: The scientific study and treatment of defects, disorders, and malfunctions of speech and voice, as stuttering, lisping, or lalling, and of language disturbances, as aphasia or delayed language acquisition.
 *           $ref: '#/components/schemas/'
 *         doorTime:
 *           description: The time admission will commence.
 *           type: string
 *         PropertyValue:
 *           description: A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\n\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property. 
 *           $ref: '#/components/schemas/'
 *         carbohydrateContent:
 *           description: The number of grams of carbohydrates.
 *           $ref: '#/components/schemas/mass'
 *         currency:
 *           description: The currency in which the monetary amount is expressed.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *           type: string
 *         meetsEmissionStandard:
 *           description: Indicates that the vehicle meets the respective emission standard.
 *           $ref: '#/components/schemas/qualitativevalue'
 *         EnergyEfficiencyEnumeration:
 *           description: Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
 *           $ref: '#/components/schemas/'
 *         Car:
 *           description: A car is a wheeled, self-powered motor vehicle used for transportation.
 *           $ref: '#/components/schemas/'
 *         Ultrasound:
 *           description: Ultrasound imaging.
 *           $ref: '#/components/schemas/'
 *         naics:
 *           description: The North American Industry Classification System (NAICS) code for a particular organization or business person.
 *           type: string
 *         LakeBodyOfWater:
 *           description: A lake (for example, Lake Pontrachain).
 *           $ref: '#/components/schemas/'
 *         LowSaltDiet:
 *           description: A diet focused on reduced sodium intake.
 *           $ref: '#/components/schemas/'
 *         AgreeAction:
 *           description: The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.
 *           $ref: '#/components/schemas/'
 *         MapCategoryType:
 *           description: An enumeration of several kinds of Map.
 *           $ref: '#/components/schemas/'
 *         Waterfall:
 *           description: A waterfall, like Niagara.
 *           $ref: '#/components/schemas/'
 *         isrcCode:
 *           description: The International Standard Recording Code for the recording.
 *           type: string
 *         typeOfGood:
 *           description: The product that this structured value is referring to.
 *           $ref: '#/components/schemas/product'
 *         propertyID:
 *           description: A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
 *           type: string
 *         diagram:
 *           description: An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
 *           $ref: '#/components/schemas/imageobject'
 *         Terminated:
 *           description: Terminated.
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c14:
 *           description: Nonprofit501c14: Non-profit type referring to State-Chartered Credit Unions, Mutual Reserve Funds.
 *           $ref: '#/components/schemas/'
 *         adverseOutcome:
 *           description: A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
 *           $ref: '#/components/schemas/medicalentity'
 *         ExchangeRateSpecification:
 *           description: A structured value representing exchange rate.
 *           $ref: '#/components/schemas/'
 *         Anesthesia:
 *           description: A specific branch of medical science that pertains to study of anesthetics and their application.
 *           $ref: '#/components/schemas/'
 *         landlord:
 *           description: A sub property of participant. The owner of the real estate property.
 *           $ref: '#/components/schemas/person'
 *         productionDate:
 *           description: The date of production of the item, e.g. vehicle.
 *           type: string
 *         SizeGroupEnumeration:
 *           description: Enumerates common size groups for various product categories.
 *           $ref: '#/components/schemas/'
 *         RadioClip:
 *           description: A short radio program or a segment/part of a radio program.
 *           $ref: '#/components/schemas/'
 *         MixedEventAttendanceMode:
 *           description: MixedEventAttendanceMode - an event that is conducted as a combination of both offline and online modes.
 *           $ref: '#/components/schemas/'
 *         funder:
 *           description: A person or organization that supports (sponsors) something through some kind of financial contribution.
 *           $ref: '#/components/schemas/organization'
 *         DanceEvent:
 *           description: Event type: A social dance.
 *           $ref: '#/components/schemas/'
 *         replacer:
 *           description: A sub property of object. The object that replaces.
 *           $ref: '#/components/schemas/thing'
 *         DatedMoneySpecification:
 *           description: A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. __Note:__ This type has been superseded by [[MonetaryAmount]] use of that type is recommended
 *           $ref: '#/components/schemas/'
 *         WebSite:
 *           description: A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 *           $ref: '#/components/schemas/'
 *         SportsActivityLocation:
 *           description: A sports location, such as a playing field.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupHusky:
 *           description: Size group "Husky" (or "Stocky") for wearables.
 *           $ref: '#/components/schemas/'
 *         remainingAttendeeCapacity:
 *           description: The number of attendee places for an event that remain unallocated.
 *           $ref: '#/components/schemas/integer'
 *         HealthCare:
 *           description: HealthCare: this is a benefit for health care.
 *           $ref: '#/components/schemas/'
 *         warrantyPromise:
 *           description: The warranty promise(s) included in the offer.
 *           $ref: '#/components/schemas/warrantypromise'
 *         activityDuration:
 *           description: Length of time to engage in the activity.
 *           $ref: '#/components/schemas/duration'
 *         Bacteria:
 *           description: Pathogenic bacteria that cause bacterial infection.
 *           $ref: '#/components/schemas/'
 *         hasDigitalDocumentPermission:
 *           description: A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public".
 *           $ref: '#/components/schemas/digitaldocumentpermission'
 *         Homeopathic:
 *           description: A system of medicine based on the principle that a disease can be cured by a substance that produces similar symptoms in healthy people.
 *           $ref: '#/components/schemas/'
 *         JobPosting:
 *           description: A listing that describes a job opening in a certain organization.
 *           $ref: '#/components/schemas/'
 *         VirtualLocation:
 *           description: An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupPlus:
 *           description: Size group "Plus" for wearables.
 *           $ref: '#/components/schemas/'
 *         geoTouches:
 *           description: Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM) )
 *           $ref: '#/components/schemas/place'
 *         OverviewHealthAspect:
 *           description: Overview of the content. Contains a summarized view of the topic with the most relevant information for an introduction.
 *           $ref: '#/components/schemas/'
 *         Eye:
 *           description: Eye or ophtalmological function assessment with clinical examination.
 *           $ref: '#/components/schemas/'
 *         ReservationHold:
 *           description: The status of a reservation on hold pending an update like credit card number or flight changes.
 *           $ref: '#/components/schemas/'
 *         prescribingInfo:
 *           description: Link to prescribing information for the drug.
 *           type: string
 *         Episode:
 *           description: A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 *           $ref: '#/components/schemas/'
 *         Nerve:
 *           description: A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
 *           $ref: '#/components/schemas/'
 *         numberOfFullBathrooms:
 *           description: Number of full bathrooms - The total number of full and ¾ bathrooms in an [[Accommodation]]. This corresponds to the [BathroomsFull field in RESO](https://ddwiki.reso.org/display/DDW17/BathroomsFull+Field).
 *           type: number
 *         publishingPrinciples:
 *           description: The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
 *           $ref: '#/components/schemas/creativework'
 *         QuoteAction:
 *           description: An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
 *           $ref: '#/components/schemas/'
 *         FDAcategoryC:
 *           description: A designation by the US FDA signifying that animal reproduction studies have shown an adverse effect on the fetus and there are no adequate and well-controlled studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks.
 *           $ref: '#/components/schemas/'
 *         GroceryStore:
 *           description: A grocery store.
 *           $ref: '#/components/schemas/'
 *         Physician:
 *           description: A doctor's office.
 *           $ref: '#/components/schemas/'
 *         GovernmentBuilding:
 *           description: A government building.
 *           $ref: '#/components/schemas/'
 *         awards:
 *           description: Awards won by or for this item.
 *           type: string
 *         nutrition:
 *           description: Nutrition information about the recipe or menu item.
 *           $ref: '#/components/schemas/nutritioninformation'
 *         cvdNumC19MechVentPats:
 *           description: numc19mechventpats - HOSPITALIZED and VENTILATED: Patients hospitalized in an NHSN inpatient care location who have suspected or confirmed COVID-19 and are on a mechanical ventilator.
 *           type: number
 *         prepTime:
 *           description: The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).
 *           $ref: '#/components/schemas/duration'
 *         RVPark:
 *           description: A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like.
 *           $ref: '#/components/schemas/'
 *         TransferAction:
 *           description: The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 *           $ref: '#/components/schemas/'
 *         EducationEvent:
 *           description: Event type: Education event.
 *           $ref: '#/components/schemas/'
 *         occupancy:
 *           description: The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).Typical unit code(s): C62 for person
 *           $ref: '#/components/schemas/quantitativevalue'
 *         RadiationTherapy:
 *           description: A process of care using radiation aimed at improving a health condition.
 *           $ref: '#/components/schemas/'
 *         signDetected:
 *           description: A sign detected by the test.
 *           $ref: '#/components/schemas/medicalsign'
 *         Dermatology:
 *           description: A specific branch of medical science that pertains to diagnosis and treatment of disorders of skin.
 *           $ref: '#/components/schemas/'
 *         sizeGroup:
 *           description: The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
 *           type: string
 *         location:
 *           description: The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 *           $ref: '#/components/schemas/postaladdress'
 *         DiscussionForumPosting:
 *           description: A posting to a discussion forum.
 *           $ref: '#/components/schemas/'
 *         UsageOrScheduleHealthAspect:
 *           description: Content about how, when, frequency and dosage of a topic.
 *           $ref: '#/components/schemas/'
 *         medicalAudience:
 *           description: Medical audience for page.
 *           $ref: '#/components/schemas/medicalaudiencetype'
 *         orderStatus:
 *           description: The current status of the order.
 *           $ref: '#/components/schemas/orderstatus'
 *         estimatedFlightDuration:
 *           description: The estimated time the flight will take.
 *           type: string
 *         HyperToc:
 *           description: A HyperToc represents a hypertext table of contents for complex media objects, such as [[VideoObject]], [[AudioObject]]. Items in the table of contents are indicated using the [[tocEntry]] property, and typed [[HyperTocEntry]]. For cases where the same larger work is split into multiple files, [[associatedMedia]] can be used on individual [[HyperTocEntry]] items.
 *           $ref: '#/components/schemas/'
 *         MedicalDevice:
 *           description: Any object used in a medical capacity, such as to diagnose or treat a patient.
 *           $ref: '#/components/schemas/'
 *         SchoolDistrict:
 *           description: A School District is an administrative area for the administration of schools.
 *           $ref: '#/components/schemas/'
 *         AutoBodyShop:
 *           description: Auto body shop.
 *           $ref: '#/components/schemas/'
 *         eduQuestionType:
 *           description: For questions that are part of learning resources (e.g. Quiz), eduQuestionType indicates the format of question being given. Example: "Multiple choice", "Open ended", "Flashcard".
 *           type: string
 *         documentation:
 *           description: Further documentation describing the Web API in more detail.
 *           type: string
 *         callSign:
 *           description: A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 *           type: string
 *         dependencies:
 *           description: Prerequisites needed to fulfill steps in article.
 *           type: string
 *         Discontinued:
 *           description: Indicates that the item has been discontinued.
 *           $ref: '#/components/schemas/'
 *         ActionStatusType:
 *           description: The status of an Action.
 *           $ref: '#/components/schemas/'
 *         suggestedMaxAge:
 *           description: Maximum recommended age in years for the audience or user.
 *           type: number
 *         codingSystem:
 *           description: The coding system, e.g. 'ICD-10'.
 *           type: string
 *         Hematologic:
 *           description: A specific branch of medical science that pertains to diagnosis and treatment of disorders of blood and blood producing organs.
 *           $ref: '#/components/schemas/'
 *         DigitalFormat:
 *           description: DigitalFormat.
 *           $ref: '#/components/schemas/'
 *         acquiredFrom:
 *           description: The organization or person from which the product was acquired.
 *           $ref: '#/components/schemas/person'
 *         loanTerm:
 *           description: The duration of the loan or credit agreement.
 *           $ref: '#/components/schemas/quantitativevalue'
 *         eligibilityToWorkRequirement:
 *           description: The legal requirements such as citizenship, visa and other documentation required for an applicant to this job.
 *           type: string
 *         BodyMeasurementWaist:
 *           description: Girth of natural waistline (between hip bones and lower ribs). Used, for example, to fit pants.
 *           $ref: '#/components/schemas/'
 *         geoCrosses:
 *           description: Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/place'
 *         numTracks:
 *           description: The number of tracks in this album or playlist.
 *           $ref: '#/components/schemas/integer'
 *         ticketedSeat:
 *           description: The seat associated with the ticket.
 *           $ref: '#/components/schemas/seat'
 *         OrganizationRole:
 *           description: A subclass of Role used to describe roles within organizations.
 *           $ref: '#/components/schemas/'
 *         Manuscript:
 *           description: A book, document, or piece of music written by hand rather than typed or printed.
 *           $ref: '#/components/schemas/'
 *         LockerDelivery:
 *           description: A DeliveryMethod in which an item is made available via locker.
 *           $ref: '#/components/schemas/'
 *         geoContains:
 *           description: Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in [DE-9IM](https://en.wikipedia.org/wiki/DE-9IM).
 *           $ref: '#/components/schemas/place'
 *         StatisticalPopulation:
 *           description: A StatisticalPopulation is a set of instances of a certain given type that satisfy some set of constraints. The property [[populationType]] is used to specify the type. Any property that can be used on instances of that type can appear on the statistical population. For example, a [[StatisticalPopulation]] representing all [[Person]]s with a [[homeLocation]] of East Podunk California, would be described by applying the appropriate [[homeLocation]] and [[populationType]] properties to a [[StatisticalPopulation]] item that stands for that set of people.The properties [[numConstraints]] and [[constrainingProperty]] are used to specify which of the populations properties are used to specify the population. Note that the sense of "population" used here is the general sense of a statisticalpopulation, and does not imply that the population consists of people. For example, a [[populationType]] of [[Event]] or [[NewsArticle]] could be used. See also [[Observation]], and the [data and datasets](/docs/data-and-datasets.html) overview for more details. 
 *           $ref: '#/components/schemas/'
 *         loanMortgageMandateAmount:
 *           description: Amount of mortgage mandate that can be converted into a proper mortgage at a later stage.
 *           $ref: '#/components/schemas/monetaryamount'
 *         editor:
 *           description: Specifies the Person who edited the CreativeWork.
 *           $ref: '#/components/schemas/person'
 *         discount:
 *           description: Any discount applied (to an Order).
 *           type: string
 *         LeisureTimeActivity:
 *           description: Any physical activity engaged in for recreational purposes. Examples may include ballroom dancing, roller skating, canoeing, fishing, etc.
 *           $ref: '#/components/schemas/'
 *         workExample:
 *           description: Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
 *           $ref: '#/components/schemas/creativework'
 *         PublicSwimmingPool:
 *           description: A public swimming pool.
 *           $ref: '#/components/schemas/'
 *         LaboratoryScience:
 *           description: A medical science pertaining to chemical, hematological, immunologic, microscopic, or bacteriological diagnostic analyses or research.
 *           $ref: '#/components/schemas/'
 *         governmentBenefitsInfo:
 *           description: governmentBenefitsInfo provides information about government benefits associated with a SpecialAnnouncement.
 *           $ref: '#/components/schemas/governmentservice'
 *         ShortStory:
 *           description: Short story or tale. A brief work of literature, usually written in narrative prose.
 *           $ref: '#/components/schemas/'
 *         TVSeason:
 *           description: Season dedicated to TV broadcast and associated online delivery.
 *           $ref: '#/components/schemas/'
 *         checkoutTime:
 *           description: The latest someone may check out of a lodging establishment.
 *           type: string
 *         DigitalDocument:
 *           description: An electronic file or document.
 *           $ref: '#/components/schemas/'
 *         byMonthWeek:
 *           description: Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month.
 *           $ref: '#/components/schemas/integer'
 *         prescriptionStatus:
 *           description: Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
 *           type: string
 *         yearBuilt:
 *           description: The year an [[Accommodation]] was constructed. This corresponds to the [YearBuilt field in RESO](https://ddwiki.reso.org/display/DDW17/YearBuilt+Field). 
 *           type: number
 *         PostalAddress:
 *           description: The mailing address.
 *           $ref: '#/components/schemas/'
 *         WebAPI:
 *           description: An application programming interface accessible over Web/Internet technologies.
 *           $ref: '#/components/schemas/'
 *         vehicleInteriorColor:
 *           description: The color or color combination of the interior of the vehicle.
 *           type: string
 *         LimitedAvailability:
 *           description: Indicates that the item has limited availability.
 *           $ref: '#/components/schemas/'
 *         seatRow:
 *           description: The row location of the reserved seat (e.g., B).
 *           type: string
 *         validThrough:
 *           description: The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 *           type: string
 *         publicAccess:
 *           description: A flag to signal that the [[Place]] is open to public visitors. If this property is omitted there is no assumed default boolean value
 *           $ref: '#/components/schemas/boolean'
 *         commentText:
 *           description: The text of the UserComment.
 *           type: string
 *         Brand:
 *           description: A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 *           $ref: '#/components/schemas/'
 *         DislikeAction:
 *           description: The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
 *           $ref: '#/components/schemas/'
 *         ingredients:
 *           description: A single ingredient used in the recipe, e.g. sugar, flour or garlic.
 *           type: string
 *         processingTime:
 *           description: Estimated processing time for the service using this channel.
 *           $ref: '#/components/schemas/duration'
 *         AllWheelDriveConfiguration:
 *           description: All-wheel Drive is a transmission layout where the engine drives all four wheels.
 *           $ref: '#/components/schemas/'
 *         Obstetric:
 *           description: A specific branch of medical science that specializes in the care of women during the prenatal and postnatal care and with the delivery of the child.
 *           $ref: '#/components/schemas/'
 *         TaxiService:
 *           description: A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
 *           $ref: '#/components/schemas/'
 *         ScheduleAction:
 *           description: Scheduling future actions, events, or tasks.\n\nRelated actions:\n\n* [[ReserveAction]]: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 *           $ref: '#/components/schemas/'
 *         BusinessSupport:
 *           description: BusinessSupport: this is a benefit for supporting businesses.
 *           $ref: '#/components/schemas/'
 *         CreativeWorkSeason:
 *           description: A media season e.g. tv, radio, video game etc.
 *           $ref: '#/components/schemas/'
 *         duringMedia:
 *           description: A media object representing the circumstances while performing this direction.
 *           $ref: '#/components/schemas/mediaobject'
 *         FurnitureStore:
 *           description: A furniture store.
 *           $ref: '#/components/schemas/'
 *         OnlineFull:
 *           description: Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached.
 *           $ref: '#/components/schemas/'
 *         numberOfForwardGears:
 *           description: The total number of forward gears available for the transmission system of the vehicle.\n\nTypical unit code(s): C62
 *           $ref: '#/components/schemas/quantitativevalue'
 *         inAlbum:
 *           description: The album to which this recording belongs.
 *           $ref: '#/components/schemas/musicalbum'
 *         OriginalShippingFees:
 *           description: OriginalShippingFees ...
 *           $ref: '#/components/schemas/'
 *         restPeriods:
 *           description: How often one should break from the activity.
 *           type: string
 *         audience:
 *           description: An intended audience, i.e. a group for whom something was created.
 *           $ref: '#/components/schemas/audience'
 *         validFor:
 *           description: The duration of validity of a permit or similar thing.
 *           $ref: '#/components/schemas/duration'
 *         incentives:
 *           description: Description of bonus and commission compensation aspects of the job.
 *           type: string
 *         ArchiveOrganization:
 *           description: An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
 *           $ref: '#/components/schemas/'
 *         ShippingRateSettings:
 *           description: A ShippingRateSettings represents re-usable pieces of shipping information. It is designed for publication on an URL that may be referenced via the [[shippingSettingsLink]] property of an [[OfferShippingDetails]]. Several occurrences can be published, distinguished and matched (i.e. identified/referenced) by their different values for [[shippingLabel]].
 *           $ref: '#/components/schemas/'
 *         InStock:
 *           description: Indicates that the item is in stock.
 *           $ref: '#/components/schemas/'
 *         MultiCenterTrial:
 *           description: A trial that takes place at multiple centers.
 *           $ref: '#/components/schemas/'
 *         inStoreReturnsOffered:
 *           description: Are in-store returns offered?
 *           $ref: '#/components/schemas/boolean'
 *         significantLinks:
 *           description: The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
 *           type: string
 *         LivingWithHealthAspect:
 *           description: Information about coping or life related to the topic.
 *           $ref: '#/components/schemas/'
 *         Distance:
 *           description: Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.
 *           $ref: '#/components/schemas/'
 *         WearableSizeGroupMens:
 *           description: Size group "Mens" for wearables.
 *           $ref: '#/components/schemas/'
 *         False:
 *           description: The boolean value false.
 *           $ref: '#/components/schemas/'
 *         surface:
 *           description: A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.
 *           type: string
 *         correction:
 *           description: Indicates a correction to a [[CreativeWork]], either via a [[CorrectionComment]], textually or in another document.
 *           $ref: '#/components/schemas/correctioncomment'
 *         isRelatedTo:
 *           description: A pointer to another, somehow related product (or multiple products).
 *           $ref: '#/components/schemas/service'
 *         keywords:
 *           description: Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.
 *           $ref: '#/components/schemas/definedterm'
 *         doseSchedule:
 *           description: A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
 *           $ref: '#/components/schemas/doseschedule'
 *         parent:
 *           description: A parent of this person.
 *           $ref: '#/components/schemas/person'
 *         publisherImprint:
 *           description: The publishing division which published the comic.
 *           $ref: '#/components/schemas/organization'
 *         studyLocation:
 *           description: The location in which the study is taking/took place.
 *           $ref: '#/components/schemas/administrativearea'
 *         hasPOS:
 *           description: Points-of-Sales operated by the organization or person.
 *           $ref: '#/components/schemas/place'
 *         PodcastSeason:
 *           description: A single season of a podcast. Many podcasts do not break down into separate seasons. In that case, PodcastSeries should be used.
 *           $ref: '#/components/schemas/'
 *         PerformingArtsTheater:
 *           description: A theater or other performing art center.
 *           $ref: '#/components/schemas/'
 *         catalog:
 *           description: A data catalog which contains this dataset.
 *           $ref: '#/components/schemas/datacatalog'
 *         foundingLocation:
 *           description: The place where the Organization was founded.
 *           $ref: '#/components/schemas/place'
 *         ParcelService:
 *           description: A private parcel service as the delivery mode available for a certain offer.\n\nCommonly used values:\n\n* http://purl.org/goodrelations/v1#DHL\n* http://purl.org/goodrelations/v1#FederalExpress\n* http://purl.org/goodrelations/v1#UPS 
 *           $ref: '#/components/schemas/'
 *         maximumVirtualAttendeeCapacity:
 *           description: The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). 
 *           $ref: '#/components/schemas/integer'
 *         acrissCode:
 *           description: The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards.
 *           type: string
 *         WearableMeasurementBack:
 *           description: Measurement of the back section, for example of a jacket
 *           $ref: '#/components/schemas/'
 *         medicineSystem:
 *           description: The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
 *           $ref: '#/components/schemas/medicinesystem'
 *         SingleBlindedTrial:
 *           description: A trial design in which the researcher knows which treatment the patient was randomly assigned to but the patient does not.
 *           $ref: '#/components/schemas/'
 *         XPathType:
 *           description: Text representing an XPath (typically but not necessarily version 1.0).
 *           $ref: '#/components/schemas/'
 *         Nonprofit501c28:
 *           description: Nonprofit501c28: Non-profit type referring to National Railroad Retirement Investment Trusts.
 *           $ref: '#/components/schemas/'
 *         isBasedOn:
 *           description: A resource from which this work is derived or from which it is a modification or adaption.
 *           $ref: '#/components/schemas/creativework'
 *         OrderStatus:
 *           description: Enumerated status values for Order.
 *           $ref: '#/components/schemas/'
 *         artEdition:
 *           description: The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20").
 *           $ref: '#/components/schemas/integer'
 *         typicalAgeRange:
 *           description: The typical expected age range, e.g. '7-9', '11-'.
 *           type: string
 *         educationalCredentialAwarded:
 *           description: A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.
 *           type: string
 *         MusculoskeletalExam:
 *           description: Musculoskeletal system clinical examination.
 *           $ref: '#/components/schemas/'
 *         MediaObject:
 *           description: A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 *           $ref: '#/components/schemas/'
 *         WearableSizeSystemIT:
 *           description: Italian size system for wearables.
 *           $ref: '#/components/schemas/'
 *         NightClub:
 *           description: A nightclub or discotheque.
 *           $ref: '#/components/schemas/'
 *         requiresSubscription:
 *           description: Indicates if use of the media require a subscription (either paid or free). Allowed values are ```true``` or ```false``` (note that an earlier version had 'yes', 'no').
 *           $ref: '#/components/schemas/boolean'
 *         albums:
 *           description: A collection of music albums.
 *           $ref: '#/components/schemas/musicalbum'
 *         geoRadius:
 *           description: Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).
 *           type: string
 *         branchOf:
 *           description: The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)[[branch]].
 *           $ref: '#/components/schemas/organization'
 *         FoodEvent:
 *           description: Event type: Food event.
 *           $ref: '#/components/schemas/'
 *         Demand:
 *           description: A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
 *           $ref: '#/components/schemas/'
 *         providerMobility:
 *           description: Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
 *           type: string
 *         memoryRequirements:
 *           description: Minimum memory requirements.
 *           type: string
 *         reviewCount:
 *           description: The count of total number of reviews.
 *           $ref: '#/components/schemas/integer'
 *         RestockingFees:
 *           description: RestockingFees ...
 *           $ref: '#/components/schemas/'
 *         contactlessPayment:
 *           description: A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.
 *           $ref: '#/components/schemas/boolean'
 *         TypeAndQuantityNode:
 *           description: A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 *           $ref: '#/components/schemas/'
 *         programPrerequisites:
 *           description: Prerequisites for enrolling in the program.
 *           $ref: '#/components/schemas/alignmentobject'
 *         dateIssued:
 *           description: The date the ticket was issued.
 *           type: string
 *         HalalDiet:
 *           description: A diet conforming to Islamic dietary practices.
 *           $ref: '#/components/schemas/'
 *         productID:
 *           description: The product identifier, such as ISBN. For example: ``` meta itemprop="productID" content="isbn:123-456-789" ```.
 *           type: string
 *         EUEnergyEfficiencyCategoryA2Plus:
 *           description: Represents EU Energy Efficiency Class A++ as defined in EU energy labeling regulations.
 *           $ref: '#/components/schemas/'
 *         EmailMessage:
 *           description: An email message.
 *           $ref: '#/components/schemas/'
*/