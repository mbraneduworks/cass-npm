/**
 * Schema.org/TrainReservation
 * A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 *
 * @author schema.org
 * @class TrainReservation
 * @module org.schema
 */
public class TrainReservation extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "TrainReservation";
	}

}