/**
 * Schema.org/TrainTrip
 * A trip on a commercial train line.
 *
 * @author schema.org
 * @class TrainTrip
 * @module org.schema
 */
public class TrainTrip extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TrainTrip";
	}

}