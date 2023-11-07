const schema = {};
schema.Room = require("./Room.js");
/**
 * Schema.org/MeetingRoom
 * A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class MeetingRoom
 * @module org.schema
 * @extends Room
 */
module.exports = class MeetingRoom extends schema.Room {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MeetingRoom");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MeetingRoom:
 *       type: object
 *       description: "A meetingroom derived from schema.org/MeetingRoom"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Room'
*/