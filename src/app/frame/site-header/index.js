const siteHeader = angular.module('app.frame.siteHeader', [
  'ui.router'
]);

siteHeader.directive('navItem', require('./nav-item_directive').default);
siteHeader.service('NavItems', require('./nav-items_service').default);
siteHeader.controller('siteHeaderController', require('./site-header_controller').default);
siteHeader.directive('siteHeader', require('./site-header_directive').default);

export default siteHeader;
