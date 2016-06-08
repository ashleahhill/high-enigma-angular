const siteHeader = angular.module('app.frame.siteHeader', [
'ui.router'
	]);

siteHeader.controller('siteHeaderController', require('./site-header_controller'));
siteHeader.directive('siteHeader', require('./site-header_directive'));

export default siteHeader;
