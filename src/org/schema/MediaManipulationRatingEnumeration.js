/**
 * Schema.org/MediaManipulationRatingEnumeration
 *  Codes for use with the [[mediaAuthenticityCategory]] property, indicating the authenticity of a media object (in the context of how it was published or shared). In general these codes are not mutually exclusive, although some combinations (such as 'original' versus 'transformed', 'edited' and 'staged') would be contradictory if applied in the same [[MediaReview]]. Note that the application of these codes is with regard to a piece of media shared or published in a particular context.
 *
 * @author schema.org
 * @class MediaManipulationRatingEnumeration
 * @module org.schema
 */
public class MediaManipulationRatingEnumeration extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "MediaManipulationRatingEnumeration";
	}

}