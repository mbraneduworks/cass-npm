/**
 * Schema.org/Barcode
 * An image of a visual machine-readable code such as a barcode or QR code.
 *
 * @author schema.org
 * @class Barcode
 * @module org.schema
 */
public class Barcode extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Barcode";
	}

}