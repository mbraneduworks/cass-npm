/**
 *  Schema.org/TrainReservation
 *  A reservation for train travel.\n\nNote: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use [[Offer]].
 * 
 *  @author schema.org
 *  @class TrainReservation
 *  @module org.schema
 *  @extends Reservation
 */
var TrainReservation = /**
 *  Constructor, automatically sets @context and @type.
 * 
 *  @constructor
 */
function() {
    Reservation.call(this);
    this.context = "http://schema.org/";
    this.type = "TrainReservation";
};
TrainReservation = stjs.extend(TrainReservation, Reservation, [], null, {provider: "Person", programMembershipUsed: "ProgramMembership", reservationStatus: "ReservationStatusType", underName: "Organization", bookingAgent: "Organization", reservationFor: "Thing", broker: "Person", reservedTicket: "Ticket", identifier: "Object", image: "Object", potentialAction: "Action", mainEntityOfPage: "Object", owner: {name: "Array", arguments: [null]}, signature: {name: "Array", arguments: [null]}, reader: {name: "Array", arguments: [null]}, forwardingTable: "Object", atProperties: {name: "Array", arguments: [null]}}, {});