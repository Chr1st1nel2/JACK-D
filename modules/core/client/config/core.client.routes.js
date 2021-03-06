(function () {
  'use strict';

  angular
    .module('core.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routeConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path.length > 1 && path[path.length - 1] === '/';

      if (hasTrailingSlash) {
        // if last character is a slash, return the same url without the slash
        var newPath = path.substr(0, path.length - 1);
        $location.replace().path(newPath);
      }
    });

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/modules/core/client/views/home.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: '/modules/core/client/views/about.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('setting', {
        url: '/setting',
        templateUrl: '/modules/core/client/views/setting.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('leaderboards', {
        url: '/leaderboards',
        templateUrl: '/modules/games/client/views/leaderboard.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('gameSelect', {
        url: '/games',
        templateUrl: '/modules/games/client/views/gameSelect.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('pong', {
        url: '/games/pong',
        templateUrl: '/modules/games/client/views/pong.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('snake', {
        url: '/games/snake',
        templateUrl: '/modules/games/client/views/snake.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('flappyBox', {
        url: '/games/flappyBox',
        templateUrl: '/modules/games/client/views/flappyBox.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('whiteface', {
        url: '/games/whiteface',
        templateUrl: '/modules/games/client/views/whiteface.client.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: '/modules/core/client/views/404.client.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
        params: {
          message: function ($stateParams) {
            return $stateParams.message;
          }
        },
        data: {
          ignoreState: true
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: '/modules/core/client/views/400.client.view.html',
        controller: 'ErrorController',
        controllerAs: 'vm',
        params: {
          message: function ($stateParams) {
            return $stateParams.message;
          }
        },
        data: {
          ignoreState: true
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: '/modules/core/client/views/403.client.view.html',
        data: {
          ignoreState: true
        }
      });
  }
}());
