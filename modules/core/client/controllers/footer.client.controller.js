(function () {
  'use strict';

  angular
    .module('core')
    .controller('FooterController', FooterController);

  FooterController.$inject = ['$scope', '$state', 'menuService'];

  function FooterController($scope, $state, menuService) {
    var vm = this;

    vm.accountMenu = menuService.getMenu('account').items[0];
    vm.isCollapsed = false;
    vm.menu = menuService.getMenu('botbar');

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
    }
  }
}());
