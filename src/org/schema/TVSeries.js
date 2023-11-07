const schema = {};
schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/TVSeries
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 *
 * @author schema.org
 * @class TVSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class TVSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","TVSeries");
	}

	/**
	 * Schema.org/directors
	 * A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property directors
	 * @type Person
	 */
	directors;

	/**
	 * Schema.org/seasons
	 * A season in a media series.
	 *
	 * @property seasons
	 * @type CreativeWorkSeason
	 */
	seasons;

	/**
	 * Schema.org/season
	 * A season in a media series.
	 *
	 * @property season
	 * @type CreativeWorkSeason
	 */
	season;

	/**
	 * Schema.org/actor
	 * An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actor
	 * @type Person
	 */
	actor;

	/**
	 * Schema.org/numberOfSeasons
	 * The number of seasons in this series.
	 *
	 * @property numberOfSeasons
	 * @type Integer
	 */
	numberOfSeasons;

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
	 * Schema.org/numberOfEpisodes
	 * The number of episodes in this season or series.
	 *
	 * @property numberOfEpisodes
	 * @type Integer
	 */
	numberOfEpisodes;

	/**
	 * Schema.org/episodes
	 * An episode of a TV/radio series or season.
	 *
	 * @property episodes
	 * @type Episode
	 */
	episodes;

	/**
	 * Schema.org/actors
	 * An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
	 *
	 * @property actors
	 * @type Person
	 */
	actors;

	/**
	 * Schema.org/containsSeason
	 * A season that is part of the media series.
	 *
	 * @property containsSeason
	 * @type CreativeWorkSeason
	 */
	containsSeason;

	/**
	 * Schema.org/episode
	 * An episode of a tv, radio or game media within a series or season.
	 *
	 * @property episode
	 * @type Episode
	 */
	episode;

	/**
	 * Schema.org/countryOfOrigin
	 * The country of the principal offices of the production company or individual responsible for the movie or program.
	 *
	 * @property countryOfOrigin
	 * @type Country
	 */
	countryOfOrigin;

	/**
	 * Schema.org/productionCompany
	 * The production company or studio responsible for the item e.g. series, video game, episode etc.
	 *
	 * @property productionCompany
	 * @type Organization
	 */
	productionCompany;

	/**
	 * Schema.org/trailer
	 * The trailer of a movie or tv/radio series, season, episode, etc.
	 *
	 * @property trailer
	 * @type VideoObject
	 */
	trailer;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     TVSeries:
 *       type: object
 *       description: "A tvseries derived from schema.org/TVSeries"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWorkSeries'
 *         - properties:
 *             directors:
 *               description: A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             seasons:
 *               description: A season in a media series.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             season:
 *               description: A season in a media series.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             actor:
 *               description: An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             numberOfSeasons:
 *               description: The number of seasons in this series.
 *               type: number
 *             director:
 *               description: A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             musicBy:
 *               description: The composer of the soundtrack.
 *               $ref: '#/components/schemas/musicgroup'
 *             numberOfEpisodes:
 *               description: The number of episodes in this season or series.
 *               type: number
 *             episodes:
 *               description: An episode of a TV/radio series or season.
 *               $ref: '#/components/schemas/episode'
 *             actors:
 *               description: An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             containsSeason:
 *               description: A season that is part of the media series.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             episode:
 *               description: An episode of a tv, radio or game media within a series or season.
 *               $ref: '#/components/schemas/episode'
 *             countryOfOrigin:
 *               description: The country of the principal offices of the production company or individual responsible for the movie or program.
 *               $ref: '#/components/schemas/country'
 *             productionCompany:
 *               description: The production company or studio responsible for the item e.g. series, video game, episode etc.
 *               $ref: '#/components/schemas/organization'
 *             trailer:
 *               description: The trailer of a movie or tv/radio series, season, episode, etc.
 *               $ref: '#/components/schemas/videoobject'
*/