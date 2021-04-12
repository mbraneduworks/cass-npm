/**
 * Schema.org/PayAction
 * An agent pays a price to a participant.
 *
 * @author schema.org
 * @class PayAction
 * @module org.schema
 */
public class PayAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PayAction";
	}

}