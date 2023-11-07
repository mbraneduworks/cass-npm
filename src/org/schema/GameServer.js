const schema = {};
schema.Intangible = require("./Intangible.js");
/**
 * Schema.org/GameServer
 * Server that provides game interaction in a multiplayer game.
 *
 * @author schema.org
 * @class GameServer
 * @module org.schema
 * @extends Intangible
 */
module.exports = class GameServer extends schema.Intangible {
	/**
	 * Constructor, automatically sets @context and @type.
	 *
	 * @constructor
	 */
	constructor() {
		super();
		this.setContextAndType("http://schema.org/","GameServer");
	}

	/**
	 * Schema.org/serverStatus
	 * Status of a game server.
	 *
	 * @property serverStatus
	 * @type GameServerStatus
	 */
	serverStatus;

	/**
	 * Schema.org/game
	 * Video game which is played on this server.
	 *
	 * @property game
	 * @type VideoGame
	 */
	game;

	/**
	 * Schema.org/playersOnline
	 * Number of players on the server.
	 *
	 * @property playersOnline
	 * @type Integer
	 */
	playersOnline;

}
/**
 * @openapi
 * components:
 *   schemas:
 *     GameServer:
 *       type: object
 *       description: "A gameserver derived from schema.org/GameServer"
 *       allOf:
 *         - $ref: '#/components/schemas/schema:Intangible'
 *         - properties:
 *             serverStatus:
 *               description: Status of a game server.
 *               $ref: '#/components/schemas/gameserverstatus'
 *             game:
 *               description: Video game which is played on this server.
 *               $ref: '#/components/schemas/videogame'
 *             playersOnline:
 *               description: Number of players on the server.
 *               type: number
*/