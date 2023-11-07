const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/Clip
 * A short TV or radio program or a segment/part of a program.
 *
 * @author schema.org
 * @class Clip
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class Clip extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","Clip");
	}

	/**
	 * Schema.org/partOfSeason
	 * The season to which this episode belongs.
	 *
	 * @property partOfSeason
	 * @type CreativeWorkSeason
	 */
	partOfSeason;

	/**
	 * Schema.org/directors
	 * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property directors
	 * @type Person
	 */
	directors;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/partOfEpisode
	 * The episode to which this clip belongs.
	 *
	 * @property partOfEpisode
	 * @type Episode
	 */
	partOfEpisode;

	/**
	 * Schema.org/clipNumber
	 * Position of the clip within an ordered group of clips.
	 *
	 * @property clipNumber
	 * @type Text
	 */
	clipNumber;

	/**
	 * Schema.org/director
	 * A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property director
	 * @type Person
	 */
	director;

	/**
	 * Schema.org/musicBy
	 * The composer of the soundtrack.
	 *
	 * @property musicBy
	 * @type MusicGroup
	 */
	musicBy;

	/**
	 * Schema.org/endOffset
	 * The end time of the clip expressed as the number of seconds from the beginning of the work.
	 *
	 * @property endOffset
	 * @type HyperTocEntry
	 */
	endOffset;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

	/**
	 * Schema.org/partOfSeries
	 * The series to which this episode or season belongs.
	 *
	 * @property partOfSeries
	 * @type CreativeWorkSeries
	 */
	partOfSeries;

	/**
	 * Schema.org/startOffset
	 * The start time of the clip expressed as the number of seconds from the beginning of the work.
	 *
	 * @property startOffset
	 * @type Number
	 */
	startOffset;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     Clip:
 *       type: object
 *       description: "A clip derived from schema.org/Clip"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             partOfSeason:
 *               description: The season to which this episode belongs.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             directors:
 *               description: A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             actor:
 *               description: An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             partOfEpisode:
 *               description: The episode to which this clip belongs.
 *               $ref: '#/components/schemas/episode'
 *             clipNumber:
 *               description: Position of the clip within an ordered group of clips.
 *               type: string
 *             director:
 *               description: A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             musicBy:
 *               description: The composer of the soundtrack.
 *               $ref: '#/components/schemas/musicgroup'
 *             endOffset:
 *               description: The end time of the clip expressed as the number of seconds from the beginning of the work.
 *               $ref: '#/components/schemas/hypertocentry'
 *             actors:
 *               description: An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             partOfSeries:
 *               description: The series to which this episode or season belongs.
 *               $ref: '#/components/schemas/creativeworkseries'
 *             startOffset:
 *               description: The start time of the clip expressed as the number of seconds from the beginning of the work.
 *               type: number
*/