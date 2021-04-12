/**
 * Schema.org/BoardingPolicyType
 * A type of boarding policy used by an airline.
 *
 * @author schema.org
 * @class BoardingPolicyType
 * @module org.schema
 */
public class BoardingPolicyType extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "BoardingPolicyType";
	}

}