/**
 * Schema.org/WantAction
 * The act of expressing a desire about the object. An agent wants an object.
 *
 * @author schema.org
 * @class WantAction
 * @module org.schema
 */
public class WantAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WantAction";
	}

}