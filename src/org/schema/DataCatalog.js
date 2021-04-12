/**
 * Schema.org/DataCatalog
 * A collection of datasets.
 *
 * @author schema.org
 * @class DataCatalog
 * @module org.schema
 */
public class DataCatalog extends EcRemoteLinkedData {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		context = "http://schema.org/";
		type = "DataCatalog";
	}

}