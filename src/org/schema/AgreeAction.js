/**
 * Schema.org/AgreeAction
 * The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.
 *
 * @author schema.org
 * @class AgreeAction
 * @module org.schema
 */
public class AgreeAction extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AgreeAction";
	}

}