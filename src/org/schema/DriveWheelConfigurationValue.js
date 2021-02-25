/**
 *  Schema.org/DriveWheelConfigurationValue
 *  A value indicating which roadwheels will receive torque.
 * 
 *  @author schema.org
 *  @class DriveWheelConfigurationValue
 *  @module org.schema
 *  @extends QualitativeValue
 */
var DriveWheelConfigurationValue = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    QualitativeValue.call(this);
    this.context = "http://schema.org/";
    this.type = "DriveWheelConfigurationValue";
};
DriveWheelConfigurationValue = stjs.extend(DriveWheelConfigurationValue, QualitativeValue, [], null, {greater: "QualitativeValue", equal: "QualitativeValue", nonEqual: "QualitativeValue", additionalProperty: "PropertyValue", lesser: "QualitativeValue", valueReference: "StructuredValue", lesserOrEqual: "QualitativeValue", greaterOrEqual: "QualitativeValue", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});
