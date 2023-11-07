const schema = {};
schema.Store = require("./Store.js");
/**
 * Schema.org/DepartmentStore
 * A department store.
 *
 * @author schema.org
 * @class DepartmentStore
 * @module org.schema
 * @extends Store
 */
module.exports = class DepartmentStore extends schema.Store {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","DepartmentStore");
	}

}
/**
 * @openapi
 * components:
 *   schemas:
 *     DepartmentStore:
 *       type: object
 *       description: "A departmentstore derived from schema.org/DepartmentStore"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Store'
*/