/**
 * Schema.org/DigitalDocument
 * An electronic file or document.
 *
 * @author schema.org
 * @class DigitalDocument
 * @module org.schema
 */
public class DigitalDocument extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DigitalDocument";
	}

}