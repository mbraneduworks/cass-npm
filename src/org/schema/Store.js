/**
 * Schema.org/Store
 * A retail good store.
 *
 * @author schema.org
 * @class Store
 * @module org.schema
 */
public class Store extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Store";
	}

}