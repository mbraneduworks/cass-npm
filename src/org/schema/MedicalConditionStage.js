/**
 * Schema.org/MedicalConditionStage
 * A stage of a medical condition, such as 'Stage IIIa'.
 *
 * @author schema.org
 * @class MedicalConditionStage
 * @module org.schema
 */
public class MedicalConditionStage extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MedicalConditionStage";
	}

}