

const $inject = ['$scope', '$state', 'NavItems'];

/*
 * @ngdoc controller
 * @name SiteHeaderController
 * @description
 * Bind nav items and current state
 */
const SiteHeaderController = function ($scope, $state, NavItems) {


  this.items = NavItems.items;

  this.setActive = (event, newState) => {
  	this.state = newState.url;

  };
  
  $scope.$on('$stateChangeSuccess', this.setActive );

};

SiteHeaderController.$inject = $inject;

export default SiteHeaderController;
