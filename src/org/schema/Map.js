/**
 * Schema.org/Map
 * A map.
 *
 * @author schema.org
 * @class Map
 * @module org.schema
 */
public class Map extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "Map";
	}

}