/**
 * Schema.org/EnergyEfficiencyEnumeration
 * Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
 *
 * @author schema.org
 * @class EnergyEfficiencyEnumeration
 * @module org.schema
 */
public class EnergyEfficiencyEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "EnergyEfficiencyEnumeration";
	}

}