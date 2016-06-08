const $inject = ['$scope', '$state'];
const SiteHeaderController = function ($scope, $state) {
  this.name = "site header";
  this.setActive = (event, newState) => {console.log(arguments)};
  
  $scope.$on('$stateChangeSuccess', this.setActive );

};

SiteHeaderController.$inject = $inject;

export default SiteHeaderController;
