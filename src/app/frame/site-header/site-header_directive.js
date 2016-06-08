const $inject = [];
const siteHeader = function () {
  return {
  	replace: true,
    controller: 'siteHeaderController',
    controllerAs: 'controller',
    template: require('./site-header.html')
  };
};

siteHeader.$inject = $inject;

export default siteHeader;