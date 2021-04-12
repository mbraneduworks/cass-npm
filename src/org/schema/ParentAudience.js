/**
 * Schema.org/ParentAudience
 * A set of characteristics describing parents, who can be interested in viewing some content.
 *
 * @author schema.org
 * @class ParentAudience
 * @module org.schema
 */
public class ParentAudience extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "ParentAudience";
	}

}