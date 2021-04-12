/**
 * Schema.org/Legislation
 * A legal document such as an act, decree, bill, etc. (enforceable or not) or a component of a legal act (like an article).
 *
 * @author schema.org
 * @class Legislation
 * @module org.schema
 */
public class Legislation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Legislation";
	}

}