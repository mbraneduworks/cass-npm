/**
 *  Schema.org/RsvpResponseType
 *  RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.
 * 
 *  @author schema.org
 *  @class RsvpResponseType
 *  @module org.schema
 *  @extends Enumeration
 */
var RsvpResponseType = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Enumeration.call(this);
    this.context = "http://schema.org/";
    this.type = "RsvpResponseType";
};
RsvpResponseType = stjs.extend(RsvpResponseType, Enumeration, [], null, {identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
