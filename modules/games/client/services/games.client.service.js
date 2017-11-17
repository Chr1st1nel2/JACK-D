(function () {
  'use strict';

  angular
    .module('games.services')
    .factory('GamesService', GamesService);

  GamesService.$inject = ['$resource', '$log'];

  function GamesService($resource, $log) {
    var Game = $resource('/api/games/:gameId', {
      gameId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Game.prototype, {
      createOrUpdate: function () {
        var game = this;
        return createOrUpdate(game);
      }
    });

    return Game;

    function createOrUpdate(game) {
      if (game._id) {
        return game.$update(onSuccess, onError);
      } else {
        return game.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(game) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
