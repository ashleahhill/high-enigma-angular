
const $inject = [];


const navItem = function () {
  return {
  	replace: true,
  	restrict: 'E',
  	require: ['navItem', '^siteHeader'],
    controller: () => {},
    controllerAs: 'navItem',
    template: require('./nav-item.html'),
    scope: true,
    bindToController: {
    	url: '=',
    	label: '='
    }

  };
};

navItem.$inject = $inject;

export default navItem;