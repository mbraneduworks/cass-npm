const schema = {};
schema.CreativeWorkSeries = require("./CreativeWorkSeries.js");
/**
 * Schema.org/VideoGameSeries
 * A video game series.
 *
 * @author schema.org
 * @class VideoGameSeries
 * @module org.schema
 * @extends CreativeWorkSeries
 */
module.exports = class VideoGameSeries extends schema.CreativeWorkSeries {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","VideoGameSeries");
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
	 * Schema.org/numberOfPlayers
	 * Indicate how many people can play this game (minimum, maximum, or range).
	 *
	 * @property numberOfPlayers
	 * @type QuantitativeValue
	 */
	numberOfPlayers;

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
	 * Schema.org/playMode
	 * Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.
	 *
	 * @property playMode
	 * @type GamePlayMode
	 */
	playMode;

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
	 * Schema.org/gameLocation
	 * Real or fictional location of the game (or part of game).
	 *
	 * @property gameLocation
	 * @type Place
	 */
	gameLocation;

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
	 * Schema.org/gameItem
	 * An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
	 *
	 * @property gameItem
	 * @type Thing
	 */
	gameItem;

	/**
	 * Schema.org/gamePlatform
	 * The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
	 *
	 * @property gamePlatform
	 * @type Thing
	 */
	gamePlatform;

	/**
	 * Schema.org/characterAttribute
	 * A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
	 *
	 * @property characterAttribute
	 * @type Thing
	 */
	characterAttribute;

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
	 * Schema.org/quest
	 * The task that a player-controlled character, or group of characters may complete in order to gain a reward.
	 *
	 * @property quest
	 * @type Thing
	 */
	quest;

	/**
	 * Schema.org/episode
	 * An episode of a tv, radio or game media within a series or season.
	 *
	 * @property episode
	 * @type Episode
	 */
	episode;

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

	/**
	 * Schema.org/cheatCode
	 * Cheat codes to the game.
	 *
	 * @property cheatCode
	 * @type CreativeWork
	 */
	cheatCode;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     VideoGameSeries:
 *       type: object
 *       description: "A videogameseries derived from schema.org/VideoGameSeries"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWorkSeries'
 *         - properties:
 *             directors:
 *               description: A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             numberOfPlayers:
 *               description: Indicate how many people can play this game (minimum, maximum, or range).
 *               $ref: '#/components/schemas/quantitativevalue'
 *             seasons:
 *               description: A season in a media series.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             season:
 *               description: A season in a media series.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             playMode:
 *               description: Indicates whether this game is multi-player, co-op or single-player. The game can be marked as multi-player, co-op and single-player at the same time.
 *               $ref: '#/components/schemas/gameplaymode'
 *             actor:
 *               description: An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             numberOfSeasons:
 *               description: The number of seasons in this series.
 *               type: number
 *             gameLocation:
 *               description: Real or fictional location of the game (or part of game).
 *               $ref: '#/components/schemas/place'
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
 *             gameItem:
 *               description: An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.
 *               $ref: '#/components/schemas/thing'
 *             gamePlatform:
 *               description: The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.
 *               $ref: '#/components/schemas/thing'
 *             characterAttribute:
 *               description: A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).
 *               $ref: '#/components/schemas/thing'
 *             actors:
 *               description: An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.
 *               $ref: '#/components/schemas/person'
 *             containsSeason:
 *               description: A season that is part of the media series.
 *               $ref: '#/components/schemas/creativeworkseason'
 *             quest:
 *               description: The task that a player-controlled character, or group of characters may complete in order to gain a reward.
 *               $ref: '#/components/schemas/thing'
 *             episode:
 *               description: An episode of a tv, radio or game media within a series or season.
 *               $ref: '#/components/schemas/episode'
 *             productionCompany:
 *               description: The production company or studio responsible for the item e.g. series, video game, episode etc.
 *               $ref: '#/components/schemas/organization'
 *             trailer:
 *               description: The trailer of a movie or tv/radio series, season, episode, etc.
 *               $ref: '#/components/schemas/videoobject'
 *             cheatCode:
 *               description: Cheat codes to the game.
 *               $ref: '#/components/schemas/creativework'
*/