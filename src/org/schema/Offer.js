const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/Offer
 * An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.\n\nNote: As the [[businessFunction]] property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.\n\nFor [GTIN](http://www.gs1.org/barcodes/technical/idkeys/gtin)-related fields, see [Check Digit calculator](http://www.gs1.org/barcodes/support/check_digit_calculator) and [validation guide](http://www.gs1us.org/resources/standards/gtin-validation-guide) from [GS1](http://www.gs1.org/).
 *
 * @author schema.org
 * @class Offer
 * @module org.schema
 * @extends Intangible
 */
module.exports = class Offer extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Offer");
	}

	/**
	 * Schema.org/availableDeliveryMethod
	 * The delivery method(s) available for this offer.
	 *
	 * @property availableDeliveryMethod
	 * @type DeliveryMethod
	 */
	availableDeliveryMethod;

	/**
	 * Schema.org/hasMeasurement
	 * A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
	 *
	 * @property hasMeasurement
	 * @type QuantitativeValue
	 */
	hasMeasurement;

	/**
	 * Schema.org/itemCondition
	 * A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
	 *
	 * @property itemCondition
	 * @type OfferItemCondition
	 */
	itemCondition;

	/**
	 * Schema.org/validFrom
	 * The date when the item becomes valid.
	 *
	 * @property validFrom
	 * @type Date
	 */
	validFrom;

	/**
	 * Schema.org/aggregateRating
	 * The overall rating, based on a collection of reviews or ratings, of the item.
	 *
	 * @property aggregateRating
	 * @type AggregateRating
	 */
	aggregateRating;

	/**
	 * Schema.org/addOn
	 * An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
	 *
	 * @property addOn
	 * @type Offer
	 */
	addOn;

	/**
	 * Schema.org/price
	 * The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
      
	 *
	 * @property price
	 * @type Text
	 */
	price;

	/**
	 * Schema.org/seller
	 * An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.
	 *
	 * @property seller
	 * @type Organization
	 */
	seller;

	/**
	 * Schema.org/gtin12
	 * The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin12
	 * @type Text
	 */
	gtin12;

	/**
	 * Schema.org/leaseLength
	 * Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
	 *
	 * @property leaseLength
	 * @type QuantitativeValue
	 */
	leaseLength;

	/**
	 * Schema.org/eligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]].
    
	 *
	 * @property eligibleRegion
	 * @type Place
	 */
	eligibleRegion;

	/**
	 * Schema.org/warranty
	 * The warranty promise(s) included in the offer.
	 *
	 * @property warranty
	 * @type WarrantyPromise
	 */
	warranty;

	/**
	 * Schema.org/availabilityEnds
	 * The end of the availability of the product or service included in the offer.
	 *
	 * @property availabilityEnds
	 * @type Time
	 */
	availabilityEnds;

	/**
	 * Schema.org/deliveryLeadTime
	 * The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
	 *
	 * @property deliveryLeadTime
	 * @type QuantitativeValue
	 */
	deliveryLeadTime;

	/**
	 * Schema.org/eligibleDuration
	 * The duration for which the given offer is valid.
	 *
	 * @property eligibleDuration
	 * @type QuantitativeValue
	 */
	eligibleDuration;

	/**
	 * Schema.org/availabilityStarts
	 * The beginning of the availability of the product or service included in the offer.
	 *
	 * @property availabilityStarts
	 * @type Date
	 */
	availabilityStarts;

	/**
	 * Schema.org/serialNumber
	 * The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
	 *
	 * @property serialNumber
	 * @type Text
	 */
	serialNumber;

	/**
	 * Schema.org/priceCurrency
	 * The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
	 *
	 * @property priceCurrency
	 * @type Text
	 */
	priceCurrency;

	/**
	 * Schema.org/acceptedPaymentMethod
	 * The payment method(s) accepted by seller for this offer.
	 *
	 * @property acceptedPaymentMethod
	 * @type PaymentMethod
	 */
	acceptedPaymentMethod;

	/**
	 * Schema.org/reviews
	 * Review of the item.
	 *
	 * @property reviews
	 * @type Review
	 */
	reviews;

	/**
	 * Schema.org/priceSpecification
	 * One or more detailed price specifications, indicating the unit price and delivery or payment charges.
	 *
	 * @property priceSpecification
	 * @type PriceSpecification
	 */
	priceSpecification;

	/**
	 * Schema.org/eligibleTransactionVolume
	 * The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
	 *
	 * @property eligibleTransactionVolume
	 * @type PriceSpecification
	 */
	eligibleTransactionVolume;

	/**
	 * Schema.org/gtin13
	 * The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin13
	 * @type Text
	 */
	gtin13;

	/**
	 * Schema.org/gtin
	 * A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged.
   
	 *
	 * @property gtin
	 * @type Text
	 */
	gtin;

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
	 * Schema.org/advanceBookingRequirement
	 * The amount of time that is required between accepting the offer and the actual usage of the resource or service.
	 *
	 * @property advanceBookingRequirement
	 * @type QuantitativeValue
	 */
	advanceBookingRequirement;

	/**
	 * Schema.org/itemOffered
	 * An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
	 *
	 * @property itemOffered
	 * @type CreativeWork
	 */
	itemOffered;

	/**
	 * Schema.org/inventoryLevel
	 * The current approximate inventory level for the item or items.
	 *
	 * @property inventoryLevel
	 * @type QuantitativeValue
	 */
	inventoryLevel;

	/**
	 * Schema.org/ineligibleRegion
	 * The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]].
      
	 *
	 * @property ineligibleRegion
	 * @type GeoShape
	 */
	ineligibleRegion;

	/**
	 * Schema.org/mpn
	 * The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
	 *
	 * @property mpn
	 * @type Text
	 */
	mpn;

	/**
	 * Schema.org/includesObject
	 * This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].
	 *
	 * @property includesObject
	 * @type TypeAndQuantityNode
	 */
	includesObject;

	/**
	 * Schema.org/category
	 * A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
	 *
	 * @property category
	 * @type Text
	 */
	category;

	/**
	 * Schema.org/availability
	 * The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
	 *
	 * @property availability
	 * @type ItemAvailability
	 */
	availability;

	/**
	 * Schema.org/sku
	 * The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
	 *
	 * @property sku
	 * @type Text
	 */
	sku;

	/**
	 * Schema.org/eligibleCustomerType
	 * The type(s) of customers for which the given offer is valid.
	 *
	 * @property eligibleCustomerType
	 * @type BusinessEntityType
	 */
	eligibleCustomerType;

	/**
	 * Schema.org/priceValidUntil
	 * The date after which the price is no longer available.
	 *
	 * @property priceValidUntil
	 * @type Date
	 */
	priceValidUntil;

	/**
	 * Schema.org/offeredBy
	 * A pointer to the organization or person making the offer.
	 *
	 * @property offeredBy
	 * @type Organization
	 */
	offeredBy;

	/**
	 * Schema.org/gtin14
	 * The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin14
	 * @type Text
	 */
	gtin14;

	/**
	 * Schema.org/eligibleQuantity
	 * The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
	 *
	 * @property eligibleQuantity
	 * @type QuantitativeValue
	 */
	eligibleQuantity;

	/**
	 * Schema.org/availableAtOrFrom
	 * The place(s) from which the offer can be obtained (e.g. store locations).
	 *
	 * @property availableAtOrFrom
	 * @type Place
	 */
	availableAtOrFrom;

	/**
	 * Schema.org/shippingDetails
	 * Indicates information about the shipping policies and options associated with an [[Offer]].
	 *
	 * @property shippingDetails
	 * @type OfferShippingDetails
	 */
	shippingDetails;

	/**
	 * Schema.org/gtin8
	 * The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
	 *
	 * @property gtin8
	 * @type Text
	 */
	gtin8;

	/**
	 * Schema.org/businessFunction
	 * The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
	 *
	 * @property businessFunction
	 * @type BusinessFunction
	 */
	businessFunction;

	/**
	 * Schema.org/validThrough
	 * The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
	 *
	 * @property validThrough
	 * @type Date
	 */
	validThrough;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Offer:
 *       type: object
 *       description: "A offer derived from schema.org/Offer"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             availableDeliveryMethod:
 *               description: The delivery method(s) available for this offer.
 *               $ref: '#/components/schemas/deliverymethod'
 *             hasMeasurement:
 *               description: A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             itemCondition:
 *               description: A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.
 *               $ref: '#/components/schemas/offeritemcondition'
 *             validFrom:
 *               description: The date when the item becomes valid.
 *               type: string
 *             aggregateRating:
 *               description: The overall rating, based on a collection of reviews or ratings, of the item.
 *               $ref: '#/components/schemas/aggregaterating'
 *             addOn:
 *               description: An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).
 *               $ref: '#/components/schemas/offer'
 *             price:
 *               description: The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.\n\nUsage guidelines:\n\n* Use the [[priceCurrency]] property (with standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR") instead of including [ambiguous symbols](http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign) such as '$' in the value.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.\n* Note that both [RDFa](http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute) and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols. 
 *               type: string
 *             seller:
 *               description: An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider.
 *               $ref: '#/components/schemas/organization'
 *             gtin12:
 *               description: The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *               type: string
 *             leaseLength:
 *               description: Length of the lease for some [[Accommodation]], either particular to some [[Offer]] or in some cases intrinsic to the property.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             eligibleRegion:
 *               description: The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.\n\nSee also [[ineligibleRegion]]. 
 *               $ref: '#/components/schemas/place'
 *             warranty:
 *               description: The warranty promise(s) included in the offer.
 *               $ref: '#/components/schemas/warrantypromise'
 *             availabilityEnds:
 *               description: The end of the availability of the product or service included in the offer.
 *               type: string
 *             deliveryLeadTime:
 *               description: The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             eligibleDuration:
 *               description: The duration for which the given offer is valid.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             availabilityStarts:
 *               description: The beginning of the availability of the product or service included in the offer.
 *               type: string
 *             serialNumber:
 *               description: The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
 *               type: string
 *             priceCurrency:
 *               description: The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\n\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217) e.g. "USD"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies e.g. "BTC"; well known names for [Local Exchange Tradings Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types e.g. "Ithaca HOUR".
 *               type: string
 *             acceptedPaymentMethod:
 *               description: The payment method(s) accepted by seller for this offer.
 *               $ref: '#/components/schemas/paymentmethod'
 *             reviews:
 *               description: Review of the item.
 *               $ref: '#/components/schemas/review'
 *             priceSpecification:
 *               description: One or more detailed price specifications, indicating the unit price and delivery or payment charges.
 *               $ref: '#/components/schemas/pricespecification'
 *             eligibleTransactionVolume:
 *               description: The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
 *               $ref: '#/components/schemas/pricespecification'
 *             gtin13:
 *               description: The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *               type: string
 *             gtin:
 *               description: A Global Trade Item Number ([GTIN](https://www.gs1.org/standards/id-keys/gtin)). GTINs identify trade items, including products and services, using numeric identification codes. The [[gtin]] property generalizes the earlier [[gtin8]], [[gtin12]], [[gtin13]], and [[gtin14]] properties. The GS1 [digital link specifications](https://www.gs1.org/standards/Digital-Link/) express GTINs as URLs. A correct [[gtin]] value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a [valid GS1 check digit](https://www.gs1.org/services/check-digit-calculator) and meet the other rules for valid GTINs. See also [GS1's GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) and [Wikipedia](https://en.wikipedia.org/wiki/Global_Trade_Item_Number) for more details. Left-padding of the gtin values is not required or encouraged. 
 *               type: string
 *             review:
 *               description: A review of the item.
 *               $ref: '#/components/schemas/review'
 *             areaServed:
 *               description: The geographic area where a service or offered item is provided.
 *               $ref: '#/components/schemas/place'
 *             advanceBookingRequirement:
 *               description: The amount of time that is required between accepting the offer and the actual usage of the resource or service.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             itemOffered:
 *               description: An item being offered (or demanded). The transactional nature of the offer or demand is documented using [[businessFunction]], e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
 *               $ref: '#/components/schemas/creativework'
 *             inventoryLevel:
 *               description: The current approximate inventory level for the item or items.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             ineligibleRegion:
 *               description: The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.\n\nSee also [[eligibleRegion]]. 
 *               $ref: '#/components/schemas/geoshape'
 *             mpn:
 *               description: The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
 *               type: string
 *             includesObject:
 *               description: This links to a node or nodes indicating the exact quantity of the products included in an [[Offer]] or [[ProductCollection]].
 *               $ref: '#/components/schemas/typeandquantitynode'
 *             category:
 *               description: A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
 *               type: string
 *             availability:
 *               description: The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.
 *               $ref: '#/components/schemas/itemavailability'
 *             sku:
 *               description: The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
 *               type: string
 *             eligibleCustomerType:
 *               description: The type(s) of customers for which the given offer is valid.
 *               $ref: '#/components/schemas/businessentitytype'
 *             priceValidUntil:
 *               description: The date after which the price is no longer available.
 *               type: string
 *             offeredBy:
 *               description: A pointer to the organization or person making the offer.
 *               $ref: '#/components/schemas/organization'
 *             gtin14:
 *               description: The GTIN-14 code of the product, or the product to which the offer refers. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *               type: string
 *             eligibleQuantity:
 *               description: The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
 *               $ref: '#/components/schemas/quantitativevalue'
 *             availableAtOrFrom:
 *               description: The place(s) from which the offer can be obtained (e.g. store locations).
 *               $ref: '#/components/schemas/place'
 *             shippingDetails:
 *               description: Indicates information about the shipping policies and options associated with an [[Offer]].
 *               $ref: '#/components/schemas/offershippingdetails'
 *             gtin8:
 *               description: The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See [GS1 GTIN Summary](http://www.gs1.org/barcodes/technical/idkeys/gtin) for more details.
 *               type: string
 *             businessFunction:
 *               description: The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
 *               $ref: '#/components/schemas/businessfunction'
 *             validThrough:
 *               description: The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
 *               type: string
*/