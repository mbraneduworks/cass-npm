/**
 * Schema.org/PodcastSeries
 * A podcast is an episodic series of digital audio or video files which a user can download and listen to.
 *
 * @author schema.org
 * @class PodcastSeries
 * @module org.schema
 */
public class PodcastSeries extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "PodcastSeries";
	}

}