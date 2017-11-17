'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Game = mongoose.model('Game'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a game
 */
exports.create = function (req, res) {
  var game = new Game(req.body);

  game.save(function (err) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(game);
    }
  });
};

/**
 * Show the current game
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var game = req.game ? req.game.toJSON() : {};

  res.json(game);
};

/**
 * List of Games
 */
exports.list = function (req, res) {
  Game.find().exec(function (err, games) {
    if (err) {
      return res.status(422).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(games);
    }
  });
};

/**
 * Game middleware
 */
exports.gameByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Game is invalid'
    });
  }
};
