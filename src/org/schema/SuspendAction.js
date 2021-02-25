/**
 *  Schema.org/SuspendAction
 *  The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
 * 
 *  @author schema.org
 *  @class SuspendAction
 *  @module org.schema
 *  @extends ControlAction
 */
var SuspendAction = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    ControlAction.call(this);
    this.context = "http://schema.org/";
    this.type = "SuspendAction";
};
SuspendAction = stjs.extend(SuspendAction, ControlAction, [], null, {result: "Thing", actionStatus: "ActionStatusType", target: "EntryPoint", agent: "Person", participant: "Person", instrument: "Thing", object: "Thing", error: "Thing", location: "PostalAddress", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});