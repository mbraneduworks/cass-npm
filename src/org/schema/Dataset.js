/**
 * Schema.org/Dataset
 * A body of structured information describing some topic(s) of interest.
 *
 * @author schema.org
 * @class Dataset
 * @module org.schema
 */
public class Dataset extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Dataset";
	}

}