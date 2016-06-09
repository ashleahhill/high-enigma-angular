const siteHeader = angular.module('app.frame.siteHeader', [
'ui.router'
	]);

siteHeader.directive('navItem', require('./nav-item_directive'));
siteHeader.service('NavItems', require('./nav-items_service'));
siteHeader.controller('siteHeaderController', require('./site-header_controller'));
siteHeader.directive('siteHeader', require('./site-header_directive'));

export default siteHeader;
