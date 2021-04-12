/**
 * Schema.org/GovernmentService
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 *
 * @author schema.org
 * @class GovernmentService
 * @module org.schema
 */
public class GovernmentService extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "GovernmentService";
	}

}