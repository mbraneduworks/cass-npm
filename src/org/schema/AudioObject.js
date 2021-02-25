/**
 *  Schema.org/AudioObject
 *  An audio file.
 * 
 *  @author schema.org
 *  @class AudioObject
 *  @module org.schema
 *  @extends MediaObject
 */
var AudioObject = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    MediaObject.call(this);
    this.context = "http://schema.org/";
    this.type = "AudioObject";
};
AudioObject = stjs.extend(AudioObject, MediaObject, [], function(constructor, prototype) {
    /**
     *  Schema.org/transcript
     *  If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
     * 
     *  @property transcript
     *  @type Text
     */
    prototype.transcript = null;
}, {height: "Distance", regionsAllowed: "Place", width: "Distance", associatedArticle: "NewsArticle", productionCompany: "Organization", duration: "Duration", encodesCreativeWork: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});