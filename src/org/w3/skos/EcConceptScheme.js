/**
 *  Created by fray on 11/29/17.
 */
var EcConceptScheme = function() {
    ConceptScheme.call(this);
    var me = (this);
    if (EcConceptScheme.template != null) {
        var you = (EcConceptScheme.template);
        for (var key in you) {
            if ((typeof you[key]) != "function") 
                me[key.replace("@", "")] = you[key];
        }
    }
};
EcConceptScheme = stjs.extend(EcConceptScheme, ConceptScheme, [], function(constructor, prototype) {
    constructor.template = null;
    /**
     *  Retrieves a concept scheme from the server, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the concept scheme to retrieve
     *  @param {Callback1<EcConceptScheme>} success
     *                                  Callback triggered after successfully retrieving the concept scheme,
     *                                  returns the retrieved concept scheme
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the concept scheme
     *  @memberOf EcConceptScheme
     *  @method get
     *  @static
     */
    constructor.get = function(id, success, failure) {
        EcRepository.getAs(id, new EcConceptScheme(), success, failure);
    };
    /**
     *  Retrieves a concept scheme from the server in a blocking fashion, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the concept scheme to retrieve
     *  @param {Callback1<EcConceptScheme>} success
     *                                  Callback triggered after successfully retrieving the concept scheme,
     *                                  returns the retrieved concept scheme
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the concept scheme
     *  @memberOf EcConceptScheme
     *  @method getBlocking
     *  @static
     */
    constructor.getBlocking = function(id) {
        return EcRepository.getBlockingAs(id, new EcConceptScheme());
    };
    /**
     *  Searches the repository given for concept schemes using the query passed in
     * 
     *  @param {EcRepository}                 repo
     *                                        Repository to search for concept schemes
     *  @param {String}                       query
     *                                        Query string used to search for a concept scheme
     *  @param {Callback1<Array<EcConceptScheme>} success
     *                                        Callback triggered when the search successfully returns,
     *                                        returns search results
     *  @param {Callback1<String>}            failure
     *                                        Callback triggered if an error occurs while searching
     *  @param {Object}                       paramObj
     *                                        Parameter object for search
     *  @memberOf EcConceptScheme
     *  @method search
     *  @static
     */
    constructor.search = function(repo, query, success, failure, paramObj) {
        EcRepository.searchAs(repo, query, function() {
            return new EcConceptScheme();
        }, success, failure, paramObj);
    };
}, {template: "Object", hasTopConcept: "Concept", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});