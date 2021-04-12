/**
 * Schema.org/AdvertiserContentArticle
 * An [[Article]] that an external entity has paid to place or to produce to its specifications. Includes [advertorials](https://en.wikipedia.org/wiki/Advertorial), sponsored content, native advertising and other paid content.
 *
 * @author schema.org
 * @class AdvertiserContentArticle
 * @module org.schema
 */
public class AdvertiserContentArticle extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "AdvertiserContentArticle";
	}

}