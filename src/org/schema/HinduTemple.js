/**
 *  Schema.org/HinduTemple
 *  A Hindu temple.
 * 
 *  @author schema.org
 *  @class HinduTemple
 *  @module org.schema
 *  @extends PlaceOfWorship
 */
var HinduTemple = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    PlaceOfWorship.call(this);
    this.context = "http://schema.org/";
    this.type = "HinduTemple";
};
HinduTemple = stjs.extend(HinduTemple, PlaceOfWorship, [], null, {photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
