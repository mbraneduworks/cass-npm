/**
 * Schema.org/Optician
 * A store that sells reading glasses and similar devices for improving vision.
 *
 * @author schema.org
 * @class Optician
 * @module org.schema
 */
public class Optician extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Optician";
	}

}