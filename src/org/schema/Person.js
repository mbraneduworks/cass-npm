const schema = {};
schema.Thing = require("./Thing.js");
/**
 * Schema.org/Person
 * A person (alive, dead, undead, or fictional).
 *
 * @author schema.org
 * @class Person
 * @module org.schema
 * @extends Thing
 */
module.exports = class Person extends schema.Thing {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Person");
	}

	/**
	 * Schema.org/follows
	 * The most generic uni-directional social relation.
	 *
	 * @property follows
	 * @type Person
	 */
	follows;

	/**
	 * Schema.org/workLocation
	 * A contact location for a person's place of work.
	 *
	 * @property workLocation
	 * @type Place
	 */
	workLocation;

	/**
	 * Schema.org/affiliation
	 * An organization that this person is affiliated with. For example, a school/university, a club, or a team.
	 *
	 * @property affiliation
	 * @type Organization
	 */
	affiliation;

	/**
	 * Schema.org/height
	 * The height of the item.
	 *
	 * @property height
	 * @type Distance
	 */
	height;

	/**
	 * Schema.org/worksFor
	 * Organizations that the person works for.
	 *
	 * @property worksFor
	 * @type Organization
	 */
	worksFor;

	/**
	 * Schema.org/address
	 * Physical address of the item.
	 *
	 * @property address
	 * @type Text
	 */
	address;

	/**
	 * Schema.org/honorificPrefix
	 * An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
	 *
	 * @property honorificPrefix
	 * @type Text
	 */
	honorificPrefix;

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
	 * Schema.org/jobTitle
	 * The job title of the person (for example, Financial Manager).
	 *
	 * @property jobTitle
	 * @type Text
	 */
	jobTitle;

	/**
	 * Schema.org/knowsLanguage
	 * Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
	 *
	 * @property knowsLanguage
	 * @type Text
	 */
	knowsLanguage;

	/**
	 * Schema.org/hasOccupation
	 * The Person's occupation. For past professions, use Role for expressing dates.
	 *
	 * @property hasOccupation
	 * @type Occupation
	 */
	hasOccupation;

	/**
	 * Schema.org/performerIn
	 * Event that this person is a performer or participant in.
	 *
	 * @property performerIn
	 * @type Event
	 */
	performerIn;

	/**
	 * Schema.org/weight
	 * The weight of the product or person.
	 *
	 * @property weight
	 * @type QuantitativeValue
	 */
	weight;

	/**
	 * Schema.org/homeLocation
	 * A contact location for a person's residence.
	 *
	 * @property homeLocation
	 * @type ContactPoint
	 */
	homeLocation;

	/**
	 * Schema.org/gender
	 * Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While schema:Male and schema:Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
	 *
	 * @property gender
	 * @type Text
	 */
	gender;

	/**
	 * Schema.org/spouse
	 * The person's spouse.
	 *
	 * @property spouse
	 * @type Person
	 */
	spouse;

	/**
	 * Schema.org/siblings
	 * A sibling of the person.
	 *
	 * @property siblings
	 * @type Person
	 */
	siblings;

	/**
	 * Schema.org/givenName
	 * Given name. In the U.S., the first name of a Person.
	 *
	 * @property givenName
	 * @type Text
	 */
	givenName;

	/**
	 * Schema.org/vatID
	 * The Value-added Tax ID of the organization or person.
	 *
	 * @property vatID
	 * @type Text
	 */
	vatID;

	/**
	 * Schema.org/duns
	 * The Dun & Bradstreet DUNS number for identifying an organization or business person.
	 *
	 * @property duns
	 * @type Text
	 */
	duns;

	/**
	 * Schema.org/colleague
	 * A colleague of the person.
	 *
	 * @property colleague
	 * @type URL
	 */
	colleague;

	/**
	 * Schema.org/contactPoints
	 * A contact point for a person or organization.
	 *
	 * @property contactPoints
	 * @type ContactPoint
	 */
	contactPoints;

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
	 * Schema.org/familyName
	 * Family name. In the U.S., the last name of a Person.
	 *
	 * @property familyName
	 * @type Text
	 */
	familyName;

	/**
	 * Schema.org/award
	 * An award won by or for this item.
	 *
	 * @property award
	 * @type Text
	 */
	award;

	/**
	 * Schema.org/netWorth
	 * The total financial value of the person as calculated by subtracting assets from liabilities.
	 *
	 * @property netWorth
	 * @type PriceSpecification
	 */
	netWorth;

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
	 * Schema.org/birthDate
	 * Date of birth.
	 *
	 * @property birthDate
	 * @type Date
	 */
	birthDate;

	/**
	 * Schema.org/children
	 * A child of the person.
	 *
	 * @property children
	 * @type Person
	 */
	children;

	/**
	 * Schema.org/email
	 * Email address.
	 *
	 * @property email
	 * @type Text
	 */
	email;

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
	 * Schema.org/birthPlace
	 * The place where the person was born.
	 *
	 * @property birthPlace
	 * @type Place
	 */
	birthPlace;

	/**
	 * Schema.org/honorificSuffix
	 * An honorific suffix following a Person's name such as M.D. /PhD/MSCSW.
	 *
	 * @property honorificSuffix
	 * @type Text
	 */
	honorificSuffix;

	/**
	 * Schema.org/colleagues
	 * A colleague of the person.
	 *
	 * @property colleagues
	 * @type Person
	 */
	colleagues;

	/**
	 * Schema.org/alumniOf
	 * An organization that the person is an alumni of.
	 *
	 * @property alumniOf
	 * @type EducationalOrganization
	 */
	alumniOf;

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
	 * Schema.org/deathDate
	 * Date of death.
	 *
	 * @property deathDate
	 * @type Date
	 */
	deathDate;

	/**
	 * Schema.org/additionalName
	 * An additional name for a Person, can be used for a middle name.
	 *
	 * @property additionalName
	 * @type Text
	 */
	additionalName;

	/**
	 * Schema.org/faxNumber
	 * The fax number.
	 *
	 * @property faxNumber
	 * @type Text
	 */
	faxNumber;

	/**
	 * Schema.org/knows
	 * The most generic bi-directional social/work relation.
	 *
	 * @property knows
	 * @type Person
	 */
	knows;

	/**
	 * Schema.org/memberOf
	 * An Organization (or ProgramMembership) to which this Person or Organization belongs.
	 *
	 * @property memberOf
	 * @type ProgramMembership
	 */
	memberOf;

	/**
	 * Schema.org/sibling
	 * A sibling of the person.
	 *
	 * @property sibling
	 * @type Person
	 */
	sibling;

	/**
	 * Schema.org/deathPlace
	 * The place where the person died.
	 *
	 * @property deathPlace
	 * @type Place
	 */
	deathPlace;

	/**
	 * Schema.org/hasCredential
	 * A credential awarded to the Person or Organization.
	 *
	 * @property hasCredential
	 * @type EducationalOccupationalCredential
	 */
	hasCredential;

	/**
	 * Schema.org/parents
	 * A parents of the person.
	 *
	 * @property parents
	 * @type Person
	 */
	parents;

	/**
	 * Schema.org/relatedTo
	 * The most generic familial relation.
	 *
	 * @property relatedTo
	 * @type Person
	 */
	relatedTo;

	/**
	 * Schema.org/brand
	 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
	 *
	 * @property brand
	 * @type Organization
	 */
	brand;

	/**
	 * Schema.org/taxID
	 * The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
	 *
	 * @property taxID
	 * @type Text
	 */
	taxID;

	/**
	 * Schema.org/nationality
	 * Nationality of the person.
	 *
	 * @property nationality
	 * @type Country
	 */
	nationality;

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
	 * Schema.org/callSign
	 * A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
	 *
	 * @property callSign
	 * @type Text
	 */
	callSign;

	/**
	 * Schema.org/parent
	 * A parent of this person.
	 *
	 * @property parent
	 * @type Person
	 */
	parent;

	/**
	 * Schema.org/hasPOS
	 * Points-of-Sales operated by the organization or person.
	 *
	 * @property hasPOS
	 * @type Place
	 */
	hasPOS;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       description: "A person derived from schema.org/Person"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Thing'
 *         - properties:
 *             follows:
 *               description: The most generic uni-directional social relation.
 *               $ref: '#/components/schemas/person'
 *             workLocation:
 *               description: A contact location for a person's place of work.
 *               $ref: '#/components/schemas/place'
 *             affiliation:
 *               description: An organization that this person is affiliated with. For example, a school/university, a club, or a team.
 *               $ref: '#/components/schemas/organization'
 *             height:
 *               description: The height of the item.
 *               $ref: '#/components/schemas/distance'
 *             worksFor:
 *               description: Organizations that the person works for.
 *               $ref: '#/components/schemas/organization'
 *             address:
 *               description: Physical address of the item.
 *               type: string
 *             honorificPrefix:
 *               description: An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
 *               type: string
 *             globalLocationNumber:
 *               description: The [Global Location Number](http://www.gs1.org/gln) (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
 *               type: string
 *             knowsAbout:
 *               description: Of a [[Person]], and less typically of an [[Organization]], to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or [[JobPosting]] descriptions.
 *               type: string
 *             contactPoint:
 *               description: A contact point for a person or organization.
 *               $ref: '#/components/schemas/contactpoint'
 *             jobTitle:
 *               description: The job title of the person (for example, Financial Manager).
 *               type: string
 *             knowsLanguage:
 *               description: Of a [[Person]], and less typically of an [[Organization]], to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the [IETF BCP 47 standard](http://tools.ietf.org/html/bcp47).
 *               type: string
 *             hasOccupation:
 *               description: The Person's occupation. For past professions, use Role for expressing dates.
 *               $ref: '#/components/schemas/occupation'
 *             performerIn:
 *               description: Event that this person is a performer or participant in.
 *               $ref: '#/components/schemas/event'
 *             weight:
 *               description: The weight of the product or person.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             homeLocation:
 *               description: A contact location for a person's residence.
 *               $ref: '#/components/schemas/contactpoint'
 *             gender:
 *               description: Gender of something, typically a [[Person]], but possibly also fictional characters, animals, etc. While schema:Male and schema:Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The [[gender]] property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender [[SportsTeam]] can be indicated with a text value of "Mixed".
 *               type: string
 *             spouse:
 *               description: The person's spouse.
 *               $ref: '#/components/schemas/person'
 *             siblings:
 *               description: A sibling of the person.
 *               $ref: '#/components/schemas/person'
 *             givenName:
 *               description: Given name. In the U.S., the first name of a Person.
 *               type: string
 *             vatID:
 *               description: The Value-added Tax ID of the organization or person.
 *               type: string
 *             duns:
 *               description: The Dun & Bradstreet DUNS number for identifying an organization or business person.
 *               type: string
 *             colleague:
 *               description: A colleague of the person.
 *               type: string
 *             contactPoints:
 *               description: A contact point for a person or organization.
 *               $ref: '#/components/schemas/contactpoint'
 *             makesOffer:
 *               description: A pointer to products or services offered by the organization or person.
 *               $ref: '#/components/schemas/offer'
 *             isicV4:
 *               description: The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
 *               type: string
 *             familyName:
 *               description: Family name. In the U.S., the last name of a Person.
 *               type: string
 *             award:
 *               description: An award won by or for this item.
 *               type: string
 *             netWorth:
 *               description: The total financial value of the person as calculated by subtracting assets from liabilities.
 *               $ref: '#/components/schemas/pricespecification'
 *             seeks:
 *               description: A pointer to products or services sought by the organization or person (demand).
 *               $ref: '#/components/schemas/demand'
 *             hasOfferCatalog:
 *               description: Indicates an OfferCatalog listing for this Organization, Person, or Service.
 *               $ref: '#/components/schemas/offercatalog'
 *             birthDate:
 *               description: Date of birth.
 *               type: string
 *             children:
 *               description: A child of the person.
 *               $ref: '#/components/schemas/person'
 *             email:
 *               description: Email address.
 *               type: string
 *             sponsor:
 *               description: A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
 *               $ref: '#/components/schemas/person'
 *             telephone:
 *               description: The telephone number.
 *               type: string
 *             birthPlace:
 *               description: The place where the person was born.
 *               $ref: '#/components/schemas/place'
 *             honorificSuffix:
 *               description: An honorific suffix following a Person's name such as M.D. /PhD/MSCSW.
 *               type: string
 *             colleagues:
 *               description: A colleague of the person.
 *               $ref: '#/components/schemas/person'
 *             alumniOf:
 *               description: An organization that the person is an alumni of.
 *               $ref: '#/components/schemas/educationalorganization'
 *             owns:
 *               description: Products owned by the organization or person.
 *               $ref: '#/components/schemas/product'
 *             interactionStatistic:
 *               description: The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
 *               $ref: '#/components/schemas/interactioncounter'
 *             deathDate:
 *               description: Date of death.
 *               type: string
 *             additionalName:
 *               description: An additional name for a Person, can be used for a middle name.
 *               type: string
 *             faxNumber:
 *               description: The fax number.
 *               type: string
 *             knows:
 *               description: The most generic bi-directional social/work relation.
 *               $ref: '#/components/schemas/person'
 *             memberOf:
 *               description: An Organization (or ProgramMembership) to which this Person or Organization belongs.
 *               $ref: '#/components/schemas/programmembership'
 *             sibling:
 *               description: A sibling of the person.
 *               $ref: '#/components/schemas/person'
 *             deathPlace:
 *               description: The place where the person died.
 *               $ref: '#/components/schemas/place'
 *             hasCredential:
 *               description: A credential awarded to the Person or Organization.
 *               $ref: '#/components/schemas/educationaloccupationalcredential'
 *             parents:
 *               description: A parents of the person.
 *               $ref: '#/components/schemas/person'
 *             relatedTo:
 *               description: The most generic familial relation.
 *               $ref: '#/components/schemas/person'
 *             brand:
 *               description: The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 *               $ref: '#/components/schemas/organization'
 *             taxID:
 *               description: The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
 *               type: string
 *             nationality:
 *               description: Nationality of the person.
 *               $ref: '#/components/schemas/country'
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
 *             callSign:
 *               description: A [callsign](https://en.wikipedia.org/wiki/Call_sign), as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
 *               type: string
 *             parent:
 *               description: A parent of this person.
 *               $ref: '#/components/schemas/person'
 *             hasPOS:
 *               description: Points-of-Sales operated by the organization or person.
 *               $ref: '#/components/schemas/place'
*/