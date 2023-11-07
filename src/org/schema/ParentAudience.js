const schema = {};
schema.PeopleAudience = require("./PeopleAudience.js");
/**
 * Schema.org/ParentAudience
 * A set of characteristics describing parents, who can be interested in viewing some content.
 *
 * @author schema.org
 * @class ParentAudience
 * @module org.schema
 * @extends PeopleAudience
 */
module.exports = class ParentAudience extends schema.PeopleAudience {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","ParentAudience");
	}

	/**
	 * Schema.org/childMinAge
	 * Minimal age of the child.
	 *
	 * @property childMinAge
	 * @type Number
	 */
	childMinAge;

	/**
	 * Schema.org/childMaxAge
	 * Maximal age of the child.
	 *
	 * @property childMaxAge
	 * @type Number
	 */
	childMaxAge;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     ParentAudience:
 *       type: object
 *       description: "A parentaudience derived from schema.org/ParentAudience"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:PeopleAudience'
 *         - properties:
 *             childMinAge:
 *               description: Minimal age of the child.
 *               type: number
 *             childMaxAge:
 *               description: Maximal age of the child.
 *               type: number
*/