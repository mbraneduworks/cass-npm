const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Service
 * A service provided by an organization, e.g. delivery service, print services, etc.
 *
 * @author schema.org
 * @class Service
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Service extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Service");
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
	 * Schema.org/serviceOutput
	 * The tangible thing generated by the service, e.g. a passport, permit, etc.
	 *
	 * @property serviceOutput
	 * @type Thing
	 */
	serviceOutput;

	/**
	 * Schema.org/isSimilarTo
	 * A pointer to another, functionally similar product (or multiple products).
	 *
	 * @property isSimilarTo
	 * @type Service
	 */
	isSimilarTo;

	/**
	 * Schema.org/offers
	 * An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
      
	 *
	 * @property offers
	 * @type Demand
	 */
	offers;

	/**
	 * Schema.org/broker
	 * An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
	 *
	 * @property broker
	 * @type Organization
	 */
	broker;

	/**
	 * Schema.org/termsOfService
	 * Human-readable terms of service documentation.
	 *
	 * @property termsOfService
	 * @type Text
	 */
	termsOfService;

	/**
	 * Schema.org/award
	 * An award won by or for this item.
	 *
	 * @property award
	 * @type Text
	 */
	award;

	/**
	 * Schema.org/provider
	 * The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
	 *
	 * @property provider
	 * @type Organization
	 */
	provider;

	/**
	 * Schema.org/review
	 * A review of the item.
	 *
	 * @property review
	 * @type Review
	 */
	review;

	/**
	 * Schema.org/areaServed
	 * The geographic area where a service or offered item is provided.
	 *
	 * @property areaServed
	 * @type Place
	 */
	areaServed;

	/**
	 * Schema.org/serviceAudience
	 * The audience eligible for this service.
	 *
	 * @property serviceAudience
	 * @type Audience
	 */
	serviceAudience;

	/**
	 * Schema.org/hasOfferCatalog
	 * Indicates an OfferCatalog listing for this Organization, Person, or Service.
	 *
	 * @property hasOfferCatalog
	 * @type OfferCatalog
	 */
	hasOfferCatalog;

	/**
	 * Schema.org/produces
	 * The tangible thing generated by the service, e.g. a passport, permit, etc.
	 *
	 * @property produces
	 * @type Thing
	 */
	produces;

	/**
	 * Schema.org/logo
	 * An associated logo.
	 *
	 * @property logo
	 * @type ImageObject
	 */
	logo;

	/**
	 * Schema.org/availableChannel
	 * A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
	 *
	 * @property availableChannel
	 * @type ServiceChannel
	 */
	availableChannel;

	/**
	 * Schema.org/category
	 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
	 *
	 * @property category
	 * @type Text
	 */
	category;

	/**
	 * Schema.org/serviceType
	 * The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
	 *
	 * @property serviceType
	 * @type GovernmentBenefitsType
	 */
	serviceType;

	/**
	 * Schema.org/slogan
	 * A slogan or motto associated with the item.
	 *
	 * @property slogan
	 * @type Text
	 */
	slogan;

	/**
	 * Schema.org/hoursAvailable
	 * The hours during which this service or contact is available.
	 *
	 * @property hoursAvailable
	 * @type OpeningHoursSpecification
	 */
	hoursAvailable;

	/**
	 * Schema.org/serviceArea
	 * The geographic area where the service is provided.
	 *
	 * @property serviceArea
	 * @type GeoShape
	 */
	serviceArea;

	/**
	 * Schema.org/brand
	 * The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
	 *
	 * @property brand
	 * @type Organization
	 */
	brand;

	/**
	 * Schema.org/audience
	 * An intended audience, i.e. a group for whom something was created.
	 *
	 * @property audience
	 * @type Audience
	 */
	audience;

	/**
	 * Schema.org/isRelatedTo
	 * A pointer to another, somehow related product (or multiple products).
	 *
	 * @property isRelatedTo
	 * @type Service
	 */
	isRelatedTo;

	/**
	 * Schema.org/providerMobility
	 * Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
	 *
	 * @property providerMobility
	 * @type Text
	 */
	providerMobility;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       description: "A service derived from schema.org/Service"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             aggregateRating:
 *               description: The overall rating, based on a collection of reviews or ratings, of the item.
 *               $ref: '#/components/schemas/aggregaterating'
 *             serviceOutput:
 *               description: The tangible thing generated by the service, e.g. a passport, permit, etc.
 *               $ref: '#/components/schemas/thing'
 *             isSimilarTo:
 *               description: A pointer to another, functionally similar product (or multiple products).
 *               $ref: '#/components/schemas/service'
 *             offers:
 *               description: An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use [[businessFunction]] to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a [[Demand]]. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer. 
 *               $ref: '#/components/schemas/demand'
 *             broker:
 *               description: An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
 *               $ref: '#/components/schemas/organization'
 *             termsOfService:
 *               description: Human-readable terms of service documentation.
 *               type: string
 *             award:
 *               description: An award won by or for this item.
 *               type: string
 *             provider:
 *               description: The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
 *               $ref: '#/components/schemas/organization'
 *             review:
 *               description: A review of the item.
 *               $ref: '#/components/schemas/review'
 *             areaServed:
 *               description: The geographic area where a service or offered item is provided.
 *               $ref: '#/components/schemas/place'
 *             serviceAudience:
 *               description: The audience eligible for this service.
 *               $ref: '#/components/schemas/audience'
 *             hasOfferCatalog:
 *               description: Indicates an OfferCatalog listing for this Organization, Person, or Service.
 *               $ref: '#/components/schemas/offercatalog'
 *             produces:
 *               description: The tangible thing generated by the service, e.g. a passport, permit, etc.
 *               $ref: '#/components/schemas/thing'
 *             logo:
 *               description: An associated logo.
 *               $ref: '#/components/schemas/imageobject'
 *             availableChannel:
 *               description: A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
 *               $ref: '#/components/schemas/servicechannel'
 *             category:
 *               description: A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 *               type: string
 *             serviceType:
 *               description: The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
 *               $ref: '#/components/schemas/governmentbenefitstype'
 *             slogan:
 *               description: A slogan or motto associated with the item.
 *               type: string
 *             hoursAvailable:
 *               description: The hours during which this service or contact is available.
 *               $ref: '#/components/schemas/openinghoursspecification'
 *             serviceArea:
 *               description: The geographic area where the service is provided.
 *               $ref: '#/components/schemas/geoshape'
 *             brand:
 *               description: The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
 *               $ref: '#/components/schemas/organization'
 *             audience:
 *               description: An intended audience, i.e. a group for whom something was created.
 *               $ref: '#/components/schemas/audience'
 *             isRelatedTo:
 *               description: A pointer to another, somehow related product (or multiple products).
 *               $ref: '#/components/schemas/service'
 *             providerMobility:
 *               description: Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
 *               type: string
*/