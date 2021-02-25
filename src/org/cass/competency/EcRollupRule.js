/**
 *  Implementation of a Rollup Rule object with methods for interacting with CASS
 *  services on a server.
 * 
 *  @author fritz.ray@eduworks.com
 *  @author devlin.junker@eduworks.com
 *  @module org.cassproject
 *  @class EcRollupRule
 *  @constructor
 *  @extends RollupRule
 */
var EcRollupRule = function() {
    RollupRule.call(this);
};
EcRollupRule = stjs.extend(EcRollupRule, RollupRule, [], function(constructor, prototype) {
    /**
     *  Retrieves a rollup rule from the server
     * 
     *  @param {String}                  id
     *                                   ID of the rollup rule to retrieve
     *  @param {Callback1<EcRollupRule>} success
     *                                   Callback triggered on successful retrieving rollup rule,
     *                                   returns the rollup rule
     *  @param {Callback1<String>}       failure
     *                                   Callback triggered if error retrieving rollup rule
     *  @memberOf EcRollupRule
     *  @method get
     *  @static
     */
    constructor.get = function(id, success, failure) {
        EcRepository.getAs(id, new EcRollupRule(), success, failure);
    };
    constructor.getBlocking = function(id) {
        return EcRepository.getBlockingAs(id, new EcRollupRule());
    };
    /**
     *  Searches for levels with a string query
     * 
     *  @param {EcRepository}                   repo
     *                                          Repository to search for levels
     *  @param {String}                         query
     *                                          query string to use in search
     *  @param {Callback1<Array<EcRollupRule>>} success
     *                                          Callback triggered when searches successfully
     *  @param {Callback1<String>}              failure
     *                                          Callback triggered if an error occurs while searching
     *  @param {Object}                         paramObj
     *                                          Search parameters object to pass in
     *  @memberOf EcRollupRule
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcRollupRule();
        }, success, failure, paramObj);
    };
    /**
     *  Method for setting a rollup rule name
     * 
     *  @param name
     *  @memberOf EcRollupRule
     *  @method setName
     */
    prototype.setName = function(name) {
        this.name = name;
    };
    /**
     *  Method for setting a rollup rule description
     * 
     *  @param {String} description
     *  @memberOf EcRollupRule
     *  @method setDescription
     */
    prototype.setDescription = function(description) {
        this.description = description;
    };
    /**
     *  Saves this rollup rules details on the server specified by its ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successful save of rollup rule
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error saving rollup rule
     *  @memberOf EcRollupRule
     *  @method save
     */
    prototype.save = function(success, failure, repo) {
        if (this.rule == null || this.rule == "") {
            var msg = "RollupRule Rule cannot be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (this.competency == null || this.competency == "") {
            var msg = "RollupRule's Competency cannot be empty";
            if (failure != null) 
                failure(msg);
             else 
                console.error(msg);
            return;
        }
        if (repo == null) 
            EcRepository.save(this, success, failure);
         else 
            repo.saveTo(this, success, failure);
    };
    /**
     *  Deletes this rollup rule from the server specified by it's ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered on successful deleting the rollup rle
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error deleting the rollup rule
     *  @memberOf EcRollupRule
     *  @method _delete
     */
    prototype._delete = function(success, failure) {
        EcRepository.DELETE(this, success, failure);
    };
}, {about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});