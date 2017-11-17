(function () {
  'use strict';

  angular
    .module('games.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('games', {
        abstract: true,
        url: '/games',
        template: '<ui-view/>'
      })
      .state('games.list', {
        url: '',
        templateUrl: '/modules/games/client/views/list-games.client.view.html',
        controller: 'GamesListController',
        controllerAs: 'vm'
      })
      .state('games.view', {
        url: '/:gameId',
        templateUrl: '/modules/games/client/views/view-game.client.view.html',
        controller: 'GamesController',
        controllerAs: 'vm',
        resolve: {
          gameResolve: getGame
        },
        data: {
          pageTitle: '{{ gameResolve.title }}'
        }
      });
  }

  getGame.$inject = ['$stateParams', 'GamesService'];

  function getGame($stateParams, GamesService) {
    return GamesService.get({
      gameId: $stateParams.gameId
    }).$promise;
  }
}());
