/**
 * Schema.org/StructuredValue
 * Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 *
 * @author schema.org
 * @class StructuredValue
 * @module org.schema
 */
public class StructuredValue extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "StructuredValue";
	}

}