/**
 *  Schema.org/DiscussionForumPosting
 *  A posting to a discussion forum.
 * 
 *  @author schema.org
 *  @class DiscussionForumPosting
 *  @module org.schema
 *  @extends SocialMediaPosting
 */
var DiscussionForumPosting = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    SocialMediaPosting.call(this);
    this.context = "http://schema.org/";
    this.type = "DiscussionForumPosting";
};
DiscussionForumPosting = stjs.extend(DiscussionForumPosting, SocialMediaPosting, [], null, {sharedContent: "CreativeWork", about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});