/**
 * Schema.org/BedAndBreakfast
 * Bed and breakfast.
<br /><br />
See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.

 *
 * @author schema.org
 * @class BedAndBreakfast
 * @module org.schema
 */
module.exports = class BedAndBreakfast extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/", "BedAndBreakfast");
	}
};
