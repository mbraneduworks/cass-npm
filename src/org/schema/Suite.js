/**
 *  Schema.org/Suite
 *  A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
 *  <br /><br />
 *  See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.
 * 
 *  @author schema.org
 *  @class Suite
 *  @module org.schema
 *  @extends Accommodation
 */
var Suite = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Accommodation.call(this);
    this.context = "http://schema.org/";
    this.type = "Suite";
};
Suite = stjs.extend(Suite, Accommodation, [], function(constructor, prototype) {
    /**
     *  Schema.org/occupancy
     *  The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
     *  Typical unit code(s): C62 for person
     * 
     *  @property occupancy
     *  @type QuantitativeValue
     */
    prototype.occupancy = null;
    /**
     *  Schema.org/bed
     *  The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
     *  If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.
     * 
     *  @property bed
     *  @type BedDetails
     */
    prototype.bed = null;
    /**
     *  Schema.org/numberOfRooms
     *  The number of rooms (excluding bathrooms and closets) of the acccommodation or lodging business.
     *  Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.
     * 
     *  @property numberOfRooms
     *  @type Number
     */
    prototype.numberOfRooms = null;
}, {occupancy: "QuantitativeValue", bed: "BedDetails", floorSize: "QuantitativeValue", amenityFeature: "LocationFeatureSpecification", photo: "ImageObject", address: "PostalAddress", openingHoursSpecification: "OpeningHoursSpecification", containedInPlace: "Place", reviews: "Review", aggregateRating: "AggregateRating", photos: "Photograph", hasMap: "SchemaMap", additionalProperty: "PropertyValue", events: "SchemaEvent", specialOpeningHoursSpecification: "OpeningHoursSpecification", amenityFeature: "LocationFeatureSpecification", logo: "ImageObject", geo: "GeoCoordinates", review: "Review", event: "SchemaEvent", containsPlace: "Place", containedIn: "Place", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});