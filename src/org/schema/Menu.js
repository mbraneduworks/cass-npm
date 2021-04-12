/**
 * Schema.org/Menu
 * A structured representation of food or drink items available from a FoodEstablishment.
 *
 * @author schema.org
 * @class Menu
 * @module org.schema
 */
public class Menu extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Menu";
	}

}