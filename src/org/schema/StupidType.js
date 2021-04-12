/**
 * Schema.org/StupidType
 * A StupidType for testing.
 *
 * @author schema.org
 * @class StupidType
 * @module org.schema
 */
public class StupidType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "StupidType";
	}

}