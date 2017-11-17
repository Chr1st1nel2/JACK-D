(function () {
  'use strict';

  angular
    .module('games')
    .controller('GamesController', GamesController);

  GamesController.$inject = ['$scope', 'gameResolve', 'Authentication'];

  function GamesController($scope, game, Authentication) {
    var vm = this;

    vm.game = game;
    // vm.authentication = Authentication;

  }
}());
