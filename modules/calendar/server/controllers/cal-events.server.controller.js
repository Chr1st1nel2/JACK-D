'use strict';

/**
 * Module dependencies
 */
var path = require('path'),
  mongoose = require('mongoose'),
  CalEvent = mongoose.model('CalEvent'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create an event
 */
exports.create = function (req, res) {
  var calEvent = new CalEvent(req.body);
  calEvent.user = req.user;

/*
need to look for where the event is initially saved
and
ensure that the .save() method is only called if the calendar event is either
private or has a defined user object.
*/
  if (calEvent.public === true || calEvent.user !== null) {
    console.log('public');
    calEvent.save(function (err) {
      if (err) {
        return res.status(400).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(calEvent);
      }
    });
  } else {
    return res.status(400).send({
      message: 'Must be logged in to save a private event'
    });
  }
};

/**
 * Show the current event
 */
exports.read = function (req, res) {
  // convert mongoose document to JSON
  var calEvent = req.calEvent ? req.calEvent.toJSON() : {};

  // Add a custom field to the event, for determining if the current User is the "owner".
  calEvent.isCurrentUserOwner = !!(req.user && calEvent.user && calEvent.user._id.toString() === req.user._id.toString());

  res.json(calEvent);
};

/**
 * Update an event
 */
exports.update = function (req, res) {
  var calEvent = req.calEvent;

  calEvent.title = req.body.title;
  calEvent.content = req.body.content;

  calEvent.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(calEvent);
    }
  });
};

/**
 * Delete an event
 */
exports.delete = function (req, res) {
  var calEvent = req.calEvent;
  calEvent.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(calEvent);
    }
  });
};

/**
 * List of events
 */
exports.list = function (req, res) {
  CalEvent.find({ $or: [{ public: true }, { user: req.user ? req.user._id : null }] }).sort('-created').populate('user', 'displayName').exec(function (err, calEvents) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(calEvents);
    }
  });
};

/**
 * Event middleware
 */
exports.calEventByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Calendar Event is invalid'
    });
  }

  CalEvent.findById(id).populate('user', 'displayName').exec(function (err, calEvent) {
    if (err) {
      return next(err);
    } else if (!calEvent) {
      return res.status(404).send({
        message: 'No calendar event with that identifier has been found'
      });
    }
    req.calEvent = calEvent;
    next();
  });
};
