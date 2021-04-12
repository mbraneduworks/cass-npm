/**
 * Schema.org/WorkersUnion
 * A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying.
 *
 * @author schema.org
 * @class WorkersUnion
 * @module org.schema
 */
public class WorkersUnion extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "WorkersUnion";
	}

}