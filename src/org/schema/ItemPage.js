/**
 * Schema.org/ItemPage
 * A page devoted to a single item, such as a particular product or hotel.
 *
 * @author schema.org
 * @class ItemPage
 * @module org.schema
 */
public class ItemPage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ItemPage";
	}

}