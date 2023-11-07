const schema = {};
schema.StructuredValue = require("./StructuredValue.js");
/**
 * Schema.org/PropertyValue
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.\n\n Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
    
 *
 * @author schema.org
 * @class PropertyValue
 * @module org.schema
 * @extends StructuredValue
 */
module.exports = class PropertyValue extends schema.StructuredValue {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","PropertyValue");
	}

	/**
	 * Schema.org/maxValue
	 * The upper value of some characteristic or property.
	 *
	 * @property maxValue
	 * @type Number
	 */
	maxValue;

	/**
	 * Schema.org/unitText
	 * A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
<a href='unitCode'>unitCode</a>.
	 *
	 * @property unitText
	 * @type Text
	 */
	unitText;

	/**
	 * Schema.org/unitCode
	 * The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
	 *
	 * @property unitCode
	 * @type Text
	 */
	unitCode;

	/**
	 * Schema.org/valueReference
	 * A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
	 *
	 * @property valueReference
	 * @type StructuredValue
	 */
	valueReference;

	/**
	 * Schema.org/measurementTechnique
	 * A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),
corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.

For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".

If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".

If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]].
      
	 *
	 * @property measurementTechnique
	 * @type URL
	 */
	measurementTechnique;

	/**
	 * Schema.org/minValue
	 * The lower value of some characteristic or property.
	 *
	 * @property minValue
	 * @type Number
	 */
	minValue;

	/**
	 * Schema.org/value
	 * The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
	 *
	 * @property value
	 * @type Text
	 */
	value;

	/**
	 * Schema.org/propertyID
	 * A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
	 *
	 * @property propertyID
	 * @type URL
	 */
	propertyID;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     PropertyValue:
 *       type: object
 *       description: "A propertyvalue derived from schema.org/PropertyValue"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:StructuredValue'
 *         - properties:
 *             maxValue:
 *               description: The upper value of some characteristic or property.
 *               type: number
 *             unitText:
 *               description: A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for<a href='unitCode'>unitCode</a>.
 *               type: string
 *             unitCode:
 *               description: The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
 *               type: string
 *             valueReference:
 *               description: A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
 *               $ref: '#/components/schemas/structuredvalue'
 *             measurementTechnique:
 *               description: A technique or technology used in a [[Dataset]] (or [[DataDownload]], [[DataCatalog]]),corresponding to the method used for measuring the corresponding variable(s) (described using [[variableMeasured]]). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.For example, if [[variableMeasured]] is: molecule concentration, [[measurementTechnique]] could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".If the [[variableMeasured]] is "depression rating", the [[measurementTechnique]] could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".If there are several [[variableMeasured]] properties recorded for some given data object, use a [[PropertyValue]] for each [[variableMeasured]] and attach the corresponding [[measurementTechnique]]. 
 *               type: string
 *             minValue:
 *               description: The lower value of some characteristic or property.
 *               type: number
 *             value:
 *               description: The value of the quantitative value or property value node.\n\n* For [[QuantitativeValue]] and [[MonetaryAmount]], the recommended type for values is 'Number'.\n* For [[PropertyValue]], it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.\n* Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.\n* Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 *               type: string
 *             propertyID:
 *               description: A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).Standards bodies should promote a standard prefix for the identifiers of properties from their standards.
 *               type: string
*/