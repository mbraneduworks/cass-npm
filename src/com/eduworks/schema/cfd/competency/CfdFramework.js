var CfdFramework = function() {
    EcFramework.call(this);
};
CfdFramework = stjs.extend(CfdFramework, EcFramework, [], function(constructor, prototype) {
    constructor.toRemove = null;
    constructor.removed = null;
    /**
     *  Retrieves a framework from the server, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the framework to retrieve
     *  @param {Callback1<EcFramework>} success
     *                                  Callback triggered after successfully retrieving the framework,
     *                                  returns the retrieved framework
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the framework
     *  @memberOf CfdFramework
     *  @method get
     *  @static
     */
    constructor.cfdGet = function(id, success, failure) {
        EcRepository.get(id, function(p1) {
            var framework = new CfdFramework();
            if (p1.isA(EcEncryptedValue.myType)) {
                var encrypted = new EcEncryptedValue();
                encrypted.copyFrom(p1);
                p1 = encrypted.decryptIntoObject();
                EcEncryptedValue.encryptOnSave(p1.id, true);
            }
            if (p1.isAny(framework.getTypes())) {
                framework.copyFrom(p1);
                if (success != null) 
                    success(framework);
            } else {
                var msg = "Resultant object is not a framework.";
                if (failure != null) 
                    failure(msg);
                 else 
                    console.error(msg);
            }
        }, function(p1) {
            if (failure != null) 
                failure(p1);
        });
    };
    /**
     *  Retrieves a framework from the server in a blocking fashion, specified by the ID
     * 
     *  @param {String}                 id
     *                                  ID of the framework to retrieve
     *  @param {Callback1<EcFramework>} success
     *                                  Callback triggered after successfully retrieving the framework,
     *                                  returns the retrieved framework
     *  @param {Callback1<String>}      failure
     *                                  Callback triggered if an error occurs while retrieving the framework
     *  @memberOf CfdFramework
     *  @method getBlocking
     *  @static
     */
    constructor.cfdGetBlocking = function(id) {
        var p1 = EcRepository.getBlocking(id);
        if (p1 == null) 
            return null;
        var framework = new CfdFramework();
        if (p1.isA(EcEncryptedValue.myType)) {
            var encrypted = new EcEncryptedValue();
            encrypted.copyFrom(p1);
            p1 = encrypted.decryptIntoObject();
            EcEncryptedValue.encryptOnSave(p1.id, true);
        }
        if (p1.isAny(framework.getTypes())) {
            framework.copyFrom(p1);
            return framework;
        } else {
            return null;
        }
    };
    /**
     *  Searches the repository given for frameworks using the query passed in
     * 
     *  @param {EcRepository}                 repo
     *                                        Repository to search for frameworks
     *  @param {String}                       query
     *                                        Query string used to search for a framework
     *  @param {Callback1<Array<EcFramework>} success
     *                                        Callback triggered when the search successfully returns,
     *                                        returns search results
     *  @param {Callback1<String>}            failure
     *                                        Callback triggered if an error occurs while searching
     *  @param {Object}                       paramObj
     *                                        Parameter object for search
     *  @param size
     *  @param start
     *  @memberOf CfdFramework
     *  @method search
     *  @static
     */
    constructor.cfdSearch = function(repo, query, success, failure, paramObj) {
        var queryAdd = "";
        queryAdd = new EcFramework().getSearchStringByType();
        if (query == null || query == "") 
            query = queryAdd;
         else 
            query = "(" + query + ") AND " + queryAdd;
        repo.searchWithParams(query, paramObj, null, function(p1) {
            if (success != null) {
                var ret = [];
                for (var i = 0; i < p1.length; i++) {
                    var framework = new CfdFramework();
                    if (p1[i].isAny(framework.getTypes())) {
                        framework.copyFrom(p1[i]);
                    } else if (p1[i].isA(EcEncryptedValue.myType)) {
                        var val = new EcEncryptedValue();
                        val.copyFrom(p1[i]);
                        if (val.isAnEncrypted(EcFramework.myType)) {
                            var obj = val.decryptIntoObject();
                            framework.copyFrom(obj);
                            EcEncryptedValue.encryptOnSave(framework.id, true);
                        }
                    }
                    ret[i] = framework;
                }
                success(ret);
            }
        }, failure);
    };
    /**
     *  Deletes this framework from the server specified by it's ID
     * 
     *  @param {Callback1<String>} success
     *                             Callback triggered if successfully deleted framework
     *  @param {Callback1<String>} failure
     *                             Callback triggered if error occurs when deleting the framework
     *  @memberOf CfdFramework
     *  @method _delete
     */
    prototype._delete = function(success, failure) {
        if (CfdFramework.toRemove == null) 
            CfdFramework.toRemove = {};
        var remove = 0;
        remove += (this.competency == null ? 0 : this.competency.length);
        remove += (this.relation == null ? 0 : this.relation.length);
        CfdFramework.toRemove[this.shortId()] = remove;
        if (CfdFramework.removed == null) 
            CfdFramework.removed = {};
        CfdFramework.removed[this.shortId()] = 0;
        var that = this;
        var onAllRemove = function() {
            EcRepository.DELETE(that, success, failure);
        };
        if (remove == 0) 
            onAllRemove();
        if (this.competency != null && this.competency.length > 0) {
            for (var x = 0; x < this.competency.length; x++) {
                CfdCompetency.get(this.competency[x], function(comp) {
                    comp._delete(function(p1) {
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    }, function(err) {
                        var error = "Error deleting competency (" + comp.id + "): " + err;
                        failure(error);
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    }, null);
                }, function(err) {
                    var error = "Error retrieving competency to delete: " + err;
                    failure(error);
                    CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                    if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                        onAllRemove();
                });
            }
        }
        if (this.relation != null && this.relation.length > 0) {
            for (var x = 0; x < this.relation.length; x++) {
                EcAlignment.get(this.relation[x], function(rel) {
                    rel._delete(function(p1) {
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    }, function(err) {
                        var error = "Error deleting relation (" + rel.id + "): " + err;
                        failure(error);
                        CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                            onAllRemove();
                    });
                }, function(err) {
                    var error = "Error retrieving relationship to delete: " + err;
                    failure(error);
                    CfdFramework.removed[that.shortId()] = CfdFramework.removed[that.shortId()] + 1;
                    if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
                        onAllRemove();
                });
            }
        }
        if (CfdFramework.removed[that.shortId()] == CfdFramework.toRemove[that.shortId()]) 
            onAllRemove();
    };
}, {toRemove: {name: "Map", arguments: [null, null]}, removed: {name: "Map", arguments: [null, null]}, relDone: {name: "Map", arguments: [null, null]}, levelDone: {name: "Map", arguments: [null, null]}, template: "Object", competency: {name: "Array", arguments: [null]}, relation: {name: "Array", arguments: [null]}, level: {name: "Array", arguments: [null]}, rollupRule: {name: "Array", arguments: [null]}, about: "Thing", educationalAlignment: "AlignmentObject", associatedMedia: "MediaObject", funder: "Person", audio: "AudioObject", workExample: "CreativeWork", provider: "Person", encoding: "MediaObject", character: "Person", audience: "Audience", sourceOrganization: "Organization", isPartOf: "CreativeWork", video: "VideoObject", publication: "PublicationEvent", contributor: "Organization", reviews: "Review", hasPart: "CreativeWork", releasedEvent: "PublicationEvent", contentLocation: "Place", aggregateRating: "AggregateRating", locationCreated: "Place", accountablePerson: "Person", spatialCoverage: "Place", offers: "Offer", editor: "Person", copyrightHolder: "Person", recordedAt: "SchemaEvent", publisher: "Person", interactionStatistic: "InteractionCounter", exampleOfWork: "CreativeWork", mainEntity: "Thing", author: "Person", timeRequired: "Duration", translator: "Person", comment: "Comment", inLanguage: "Language", review: "Review", license: "CreativeWork", encodings: "MediaObject", isBasedOn: "Product", creator: "Person", sponsor: "Organization", producer: "Person", mentions: "Thing", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
