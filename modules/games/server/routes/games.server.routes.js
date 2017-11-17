'use strict';

/**
 * Module dependencies
 */
var games = require('../controllers/games.server.controller.js');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/games')
    .get(games.list)
    .post(games.create);

  // Single game routes
  app.route('/api/games/:gameId')
    .get(games.read);
    // .put(games.update)
    // .delete(games.delete);

  // Finish by binding the game middleware
  app.param('gameId', games.gameByID);
};
