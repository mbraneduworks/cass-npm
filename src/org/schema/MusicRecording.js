const schema = {};
schema.CreativeWork = require("./CreativeWork.js");
/**
 * Schema.org/MusicRecording
 * A music recording (track), usually a single song.
 *
 * @author schema.org
 * @class MusicRecording
 * @module org.schema
 * @extends CreativeWork
 */
module.exports = class MusicRecording extends schema.CreativeWork {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","MusicRecording");
	}

	/**
	 * Schema.org/recordingOf
	 * The composition this track is a recording of.
	 *
	 * @property recordingOf
	 * @type MusicComposition
	 */
	recordingOf;

	/**
	 * Schema.org/byArtist
	 * The artist that performed this album or recording.
	 *
	 * @property byArtist
	 * @type Person
	 */
	byArtist;

	/**
	 * Schema.org/inPlaylist
	 * The playlist to which this recording belongs.
	 *
	 * @property inPlaylist
	 * @type MusicPlaylist
	 */
	inPlaylist;

	/**
	 * Schema.org/duration
	 * The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
	 *
	 * @property duration
	 * @type Duration
	 */
	duration;

	/**
	 * Schema.org/isrcCode
	 * The International Standard Recording Code for the recording.
	 *
	 * @property isrcCode
	 * @type Text
	 */
	isrcCode;

	/**
	 * Schema.org/inAlbum
	 * The album to which this recording belongs.
	 *
	 * @property inAlbum
	 * @type MusicAlbum
	 */
	inAlbum;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     MusicRecording:
 *       type: object
 *       description: "A musicrecording derived from schema.org/MusicRecording"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:CreativeWork'
 *         - properties:
 *             recordingOf:
 *               description: The composition this track is a recording of.
 *               $ref: '#/components/schemas/musiccomposition'
 *             byArtist:
 *               description: The artist that performed this album or recording.
 *               $ref: '#/components/schemas/person'
 *             inPlaylist:
 *               description: The playlist to which this recording belongs.
 *               $ref: '#/components/schemas/musicplaylist'
 *             duration:
 *               description: The duration of the item (movie, audio recording, event, etc.) in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601).
 *               $ref: '#/components/schemas/duration'
 *             isrcCode:
 *               description: The International Standard Recording Code for the recording.
 *               type: string
 *             inAlbum:
 *               description: The album to which this recording belongs.
 *               $ref: '#/components/schemas/musicalbum'
*/