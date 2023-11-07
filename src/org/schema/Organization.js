const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/Organization
 * An organization such as a school, NGO, corporation, club, etc.
 *
 * @author schema.org
 * @class Organization
 * @module org.schema
 * @extends Thing
 */
module.exports = class Organization extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Organization");
	}

	/**
	 * Schema.org/aggregateRating
	 * The overall rating, based on a collection of reviews or ratings, of the item.
	 *
	 * @property aggregateRating
	 * @type AggregateRating
	 */
	aggregateRating;

	/**
	 * Schema.org/hasProductReturnPolicy
	 * Indicates a ProductReturnPolicy that may be applicable.
	 *
	 * @property hasProductReturnPolicy
	 * @type ProductReturnPolicy
	 */
	hasProductReturnPolicy;

	/**
	 * Schema.org/diversityStaffingReport
	 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
	 *
	 * @property diversityStaffingReport
	 * @type URL
	 */
	diversityStaffingReport;

	/**
	 * Schema.org/numberOfEmployees
	 * The number of employees in an organization e.g. business.
	 *
	 * @property numberOfEmployees
	 * @type QuantitativeValue
	 */
	numberOfEmployees;

	/**
	 * Schema.org/employees
	 * People working for this organization.
	 *
	 * @property employees
	 * @type Person
	 */
	employees;

	/**
	 * Schema.org/address
	 * Physical address of the item.
	 *
	 * @property address
	 * @type Text
	 */
	address;

	/**
	 * Schema.org/correctionsPolicy
	 * For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
	 *
	 * @property correctionsPolicy
	 * @type URL
	 */
	correctionsPolicy;

	/**
	 * Schema.org/ownershipFundingInfo
	 * For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence.   Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
	 *
	 * @property ownershipFundingInfo
	 * @type CreativeWork
	 */
	ownershipFundingInfo;

	/**
	 * Schema.org/globalLocationNumber
	 * The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
	 *
	 * @property globalLocationNumber
	 * @type Text
	 */
	globalLocationNumber;

	/**
	 * Schema.org/knowsAbout
	 * Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
	 *
	 * @property knowsAbout
	 * @type Text
	 */
	knowsAbout;

	/**
	 * Schema.org/contactPoint
	 * A contact point for a person or organization.
	 *
	 * @property contactPoint
	 * @type ContactPoint
	 */
	contactPoint;

	/**
	 * Schema.org/knowsLanguage
	 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
	 *
	 * @property knowsLanguage
	 * @type Text
	 */
	knowsLanguage;

	/**
	 * Schema.org/leiCode
	 * An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
	 *
	 * @property leiCode
	 * @type Text
	 */
	leiCode;

	/**
	 * Schema.org/founder
	 * A person who founded this organization.
	 *
	 * @property founder
	 * @type Person
	 */
	founder;

	/**
	 * Schema.org/department
	 * A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
	 *
	 * @property department
	 * @type Organization
	 */
	department;

	/**
	 * Schema.org/alumni
	 * Alumni of an organization.
	 *
	 * @property alumni
	 * @type Person
	 */
	alumni;

	/**
	 * Schema.org/members
	 * A member of this organization.
	 *
	 * @property members
	 * @type Organization
	 */
	members;

	/**
	 * Schema.org/employee
	 * Someone working for this organization.
	 *
	 * @property employee
	 * @type Person
	 */
	employee;

	/**
	 * Schema.org/subOrganization
	 * A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
	 *
	 * @property subOrganization
	 * @type Organization
	 */
	subOrganization;

	/**
	 * Schema.org/vatID
	 * The Value-added Tax ID of the organization or person.
	 *
	 * @property vatID
	 * @type Text
	 */
	vatID;

	/**
	 * Schema.org/nonprofitStatus
	 * nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
	 *
	 * @property nonprofitStatus
	 * @type NonprofitType
	 */
	nonprofitStatus;

	/**
	 * Schema.org/duns
	 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
	 *
	 * @property duns
	 * @type Text
	 */
	duns;

	/**
	 * Schema.org/hasMerchantReturnPolicy
	 * Indicates a MerchantReturnPolicy that may be applicable.
	 *
	 * @property hasMerchantReturnPolicy
	 * @type MerchantReturnPolicy
	 */
	hasMerchantReturnPolicy;

	/**
	 * Schema.org/contactPoints
	 * A contact point for a person or organization.
	 *
	 * @property contactPoints
	 * @type ContactPoint
	 */
	contactPoints;

	/**
	 * Schema.org/unnamedSourcesPolicy
	 * For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
	 *
	 * @property unnamedSourcesPolicy
	 * @type URL
	 */
	unnamedSourcesPolicy;

	/**
	 * Schema.org/founders
	 * A person who founded this organization.
	 *
	 * @property founders
	 * @type Person
	 */
	founders;

	/**
	 * Schema.org/makesOffer
	 * A pointer to products or services offered by the organization or person.
	 *
	 * @property makesOffer
	 * @type Offer
	 */
	makesOffer;

	/**
	 * Schema.org/isicV4
	 * The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
	 *
	 * @property isicV4
	 * @type Text
	 */
	isicV4;

	/**
	 * Schema.org/reviews
	 * Review of the item.
	 *
	 * @property reviews
	 * @type Review
	 */
	reviews;

	/**
	 * Schema.org/award
	 * An award won by or for this item.
	 *
	 * @property award
	 * @type Text
	 */
	award;

	/**
	 * Schema.org/review
	 * A review of the item.
	 *
	 * @property review
	 * @type Review
	 */
	review;

	/**
	 * Schema.org/events
	 * Upcoming or past events associated with this place or organization.
	 *
	 * @property events
	 * @type Event
	 */
	events;

	/**
	 * Schema.org/areaServed
	 * The geographic area where a service or offered item is provided.
	 *
	 * @property areaServed
	 * @type Place
	 */
	areaServed;

	/**
	 * Schema.org/dissolutionDate
	 * The date that this organization was dissolved.
	 *
	 * @property dissolutionDate
	 * @type Date
	 */
	dissolutionDate;

	/**
	 * Schema.org/member
	 * A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
	 *
	 * @property member
	 * @type Person
	 */
	member;

	/**
	 * Schema.org/seeks
	 * A pointer to products or services sought by the organization or person (demand).
	 *
	 * @property seeks
	 * @type Demand
	 */
	seeks;

	/**
	 * Schema.org/hasOfferCatalog
	 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
	 *
	 * @property hasOfferCatalog
	 * @type OfferCatalog
	 */
	hasOfferCatalog;

	/**
	 * Schema.org/event
	 * Upcoming or past event associated with this place, organization, or action.
	 *
	 * @property event
	 * @type Event
	 */
	event;

	/**
	 * Schema.org/email
	 * Email address.
	 *
	 * @property email
	 * @type Text
	 */
	email;

	/**
	 * Schema.org/legalName
	 * The official name of the organization, e.g. the registered company name.
	 *
	 * @property legalName
	 * @type Text
	 */
	legalName;

	/**
	 * Schema.org/sponsor
	 * A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
	 *
	 * @property sponsor
	 * @type Person
	 */
	sponsor;

	/**
	 * Schema.org/telephone
	 * The telephone number.
	 *
	 * @property telephone
	 * @type Text
	 */
	telephone;

	/**
	 * Schema.org/foundingDate
	 * The date that this organization was founded.
	 *
	 * @property foundingDate
	 * @type Date
	 */
	foundingDate;

	/**
	 * Schema.org/logo
	 * An associated logo.
	 *
	 * @property logo
	 * @type ImageObject
	 */
	logo;

	/**
	 * Schema.org/parentOrganization
	 * The larger organization that this organization is a [[subOrganization]] of, if any.
	 *
	 * @property parentOrganization
	 * @type Organization
	 */
	parentOrganization;

	/**
	 * Schema.org/ethicsPolicy
	 * Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
	 *
	 * @property ethicsPolicy
	 * @type CreativeWork
	 */
	ethicsPolicy;

	/**
	 * Schema.org/slogan
	 * A slogan or motto associated with the item.
	 *
	 * @property slogan
	 * @type Text
	 */
	slogan;

	/**
	 * Schema.org/owns
	 * Products owned by the organization or person.
	 *
	 * @property owns
	 * @type Product
	 */
	owns;

	/**
	 * Schema.org/interactionStatistic
	 * The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
	 *
	 * @property interactionStatistic
	 * @type InteractionCounter
	 */
	interactionStatistic;

	/**
	 * Schema.org/serviceArea
	 * The geographic area where the service is provided.
	 *
	 * @property serviceArea
	 * @type GeoShape
	 */
	serviceArea;

	/**
	 * Schema.org/actionableFeedbackPolicy
	 * For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
	 *
	 * @property actionableFeedbackPolicy
	 * @type CreativeWork
	 */
	actionableFeedbackPolicy;

	/**
	 * Schema.org/faxNumber
	 * The fax number.
	 *
	 * @property faxNumber
	 * @type Text
	 */
	faxNumber;

	/**
	 * Schema.org/memberOf
	 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
	 *
	 * @property memberOf
	 * @type ProgramMembership
	 */
	memberOf;

	/**
	 * Schema.org/hasCredential
	 * A credential awarded to the Person or Organization.
	 *
	 * @property hasCredential
	 * @type EducationalOccupationalCredential
	 */
	hasCredential;

	/**
	 * Schema.org/brand
	 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
	 *
	 * @property brand
	 * @type Organization
	 */
	brand;

	/**
	 * Schema.org/diversityPolicy
	 * Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
	 *
	 * @property diversityPolicy
	 * @type URL
	 */
	diversityPolicy;

	/**
	 * Schema.org/taxID
	 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
	 *
	 * @property taxID
	 * @type Text
	 */
	taxID;

	/**
	 * Schema.org/naics
	 * The North American Industry Classification System (NAICS) code for a particular organization or business person.
	 *
	 * @property naics
	 * @type Text
	 */
	naics;

	/**
	 * Schema.org/funder
	 * A person or organization that supports (sponsors) something through some kind of financial contribution.
	 *
	 * @property funder
	 * @type Organization
	 */
	funder;

	/**
	 * Schema.org/publishingPrinciples
	 * The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].

While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.

	 *
	 * @property publishingPrinciples
	 * @type CreativeWork
	 */
	publishingPrinciples;

	/**
	 * Schema.org/awards
	 * Awards won by or for this item.
	 *
	 * @property awards
	 * @type Text
	 */
	awards;

	/**
	 * Schema.org/location
	 * The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
	 *
	 * @property location
	 * @type PostalAddress
	 */
	location;

	/**
	 * Schema.org/hasPOS
	 * Points-of-Sales operated by the organization or person.
	 *
	 * @property hasPOS
	 * @type Place
	 */
	hasPOS;

	/**
	 * Schema.org/foundingLocation
	 * The place where the Organization was founded.
	 *
	 * @property foundingLocation
	 * @type Place
	 */
	foundingLocation;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Organization:
 *       type: object
 *       description: "A organization derived from schema.org/Organization"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Thing'
 *         - properties:
 *             aggregateRating:
 *               description: The overall rating, based on a collection of reviews or ratings, of the item.
 *               $ref: '#/components/schemas/aggregaterating'
 *             hasProductReturnPolicy:
 *               description: Indicates a ProductReturnPolicy that may be applicable.
 *               $ref: '#/components/schemas/productreturnpolicy'
 *             diversityStaffingReport:
 *               description: For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
 *               type: string
 *             numberOfEmployees:
 *               description: The number of employees in an organization e.g. business.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             employees:
 *               description: People working for this organization.
 *               $ref: '#/components/schemas/person'
 *             address:
 *               description: Physical address of the item.
 *               type: string
 *             correctionsPolicy:
 *               description: For an [[Organization]] (e.g. [[NewsMediaOrganization]]), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
 *               type: string
 *             ownershipFundingInfo:
 *               description: For an [[Organization]] (often but not necessarily a [[NewsMediaOrganization]]), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the [[funder]] is also available and can be used to make basic funder information machine-readable.
 *               $ref: '#/components/schemas/creativework'
 *             globalLocationNumber:
 *               description: The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 *               type: string
 *             knowsAbout:
 *               description: Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 *               type: string
 *             contactPoint:
 *               description: A contact point for a person or organization.
 *               $ref: '#/components/schemas/contactpoint'
 *             knowsLanguage:
 *               description: Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 *               type: string
 *             leiCode:
 *               description: An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
 *               type: string
 *             founder:
 *               description: A person who founded this organization.
 *               $ref: '#/components/schemas/person'
 *             department:
 *               description: A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
 *               $ref: '#/components/schemas/organization'
 *             alumni:
 *               description: Alumni of an organization.
 *               $ref: '#/components/schemas/person'
 *             members:
 *               description: A member of this organization.
 *               $ref: '#/components/schemas/organization'
 *             employee:
 *               description: Someone working for this organization.
 *               $ref: '#/components/schemas/person'
 *             subOrganization:
 *               description: A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
 *               $ref: '#/components/schemas/organization'
 *             vatID:
 *               description: The Value-added Tax ID of the organization or person.
 *               type: string
 *             nonprofitStatus:
 *               description: nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
 *               $ref: '#/components/schemas/nonprofittype'
 *             duns:
 *               description: The Dun & Bradstreet DUNS number for identifying an organization or business person.
 *               type: string
 *             hasMerchantReturnPolicy:
 *               description: Indicates a MerchantReturnPolicy that may be applicable.
 *               $ref: '#/components/schemas/merchantreturnpolicy'
 *             contactPoints:
 *               description: A contact point for a person or organization.
 *               $ref: '#/components/schemas/contactpoint'
 *             unnamedSourcesPolicy:
 *               description: For an [[Organization]] (typically a [[NewsMediaOrganization]]), a statement about policy on use of unnamed sources and the decision process required.
 *               type: string
 *             founders:
 *               description: A person who founded this organization.
 *               $ref: '#/components/schemas/person'
 *             makesOffer:
 *               description: A pointer to products or services offered by the organization or person.
 *               $ref: '#/components/schemas/offer'
 *             isicV4:
 *               description: The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 *               type: string
 *             reviews:
 *               description: Review of the item.
 *               $ref: '#/components/schemas/review'
 *             award:
 *               description: An award won by or for this item.
 *               type: string
 *             review:
 *               description: A review of the item.
 *               $ref: '#/components/schemas/review'
 *             events:
 *               description: Upcoming or past events associated with this place or organization.
 *               $ref: '#/components/schemas/event'
 *             areaServed:
 *               description: The geographic area where a service or offered item is provided.
 *               $ref: '#/components/schemas/place'
 *             dissolutionDate:
 *               description: The date that this organization was dissolved.
 *               type: string
 *             member:
 *               description: A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
 *               $ref: '#/components/schemas/person'
 *             seeks:
 *               description: A pointer to products or services sought by the organization or person (demand).
 *               $ref: '#/components/schemas/demand'
 *             hasOfferCatalog:
 *               description: Indicates an OfferCatalog listing for this Organization, Person, or Service.
 *               $ref: '#/components/schemas/offercatalog'
 *             event:
 *               description: Upcoming or past event associated with this place, organization, or action.
 *               $ref: '#/components/schemas/event'
 *             email:
 *               description: Email address.
 *               type: string
 *             legalName:
 *               description: The official name of the organization, e.g. the registered company name.
 *               type: string
 *             sponsor:
 *               description: A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 *               $ref: '#/components/schemas/person'
 *             telephone:
 *               description: The telephone number.
 *               type: string
 *             foundingDate:
 *               description: The date that this organization was founded.
 *               type: string
 *             logo:
 *               description: An associated logo.
 *               $ref: '#/components/schemas/imageobject'
 *             parentOrganization:
 *               description: The larger organization that this organization is a [[subOrganization]] of, if any.
 *               $ref: '#/components/schemas/organization'
 *             ethicsPolicy:
 *               description: Statement about ethics policy, e.g. of a [[NewsMediaOrganization]] regarding journalistic and publishing practices, or of a [[Restaurant]], a page describing food source policies. In the case of a [[NewsMediaOrganization]], an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
 *               $ref: '#/components/schemas/creativework'
 *             slogan:
 *               description: A slogan or motto associated with the item.
 *               type: string
 *             owns:
 *               description: Products owned by the organization or person.
 *               $ref: '#/components/schemas/product'
 *             interactionStatistic:
 *               description: The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 *               $ref: '#/components/schemas/interactioncounter'
 *             serviceArea:
 *               description: The geographic area where the service is provided.
 *               $ref: '#/components/schemas/geoshape'
 *             actionableFeedbackPolicy:
 *               description: For a [[NewsMediaOrganization]] or other news-related [[Organization]], a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
 *               $ref: '#/components/schemas/creativework'
 *             faxNumber:
 *               description: The fax number.
 *               type: string
 *             memberOf:
 *               description: An Organization (or ProgramMembership) to which this Person or Organization belongs.
 *               $ref: '#/components/schemas/programmembership'
 *             hasCredential:
 *               description: A credential awarded to the Person or Organization.
 *               $ref: '#/components/schemas/educationaloccupationalcredential'
 *             brand:
 *               description: The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 *               $ref: '#/components/schemas/organization'
 *             diversityPolicy:
 *               description: Statement on diversity policy by an [[Organization]] e.g. a [[NewsMediaOrganization]]. For a [[NewsMediaOrganization]], a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
 *               type: string
 *             taxID:
 *               description: The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 *               type: string
 *             naics:
 *               description: The North American Industry Classification System (NAICS) code for a particular organization or business person.
 *               type: string
 *             funder:
 *               description: A person or organization that supports (sponsors) something through some kind of financial contribution.
 *               $ref: '#/components/schemas/organization'
 *             publishingPrinciples:
 *               description: The publishingPrinciples property indicates (typically via [[URL]]) a document describing the editorial principles of an [[Organization]] (or individual e.g. a [[Person]] writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a [[CreativeWork]] (e.g. [[NewsArticle]]) the principles are those of the party primarily responsible for the creation of the [[CreativeWork]].While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a [[funder]]) can be expressed using schema.org terminology.
 *               $ref: '#/components/schemas/creativework'
 *             awards:
 *               description: Awards won by or for this item.
 *               type: string
 *             location:
 *               description: The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 *               $ref: '#/components/schemas/postaladdress'
 *             hasPOS:
 *               description: Points-of-Sales operated by the organization or person.
 *               $ref: '#/components/schemas/place'
 *             foundingLocation:
 *               description: The place where the Organization was founded.
 *               $ref: '#/components/schemas/place'
*/