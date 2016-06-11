// @ngdoc directive
// @name night
// @description 
// add class if it is night

const night = angular.module('night', []);

night
  .service('NightService', require('./night_service'))
  .controller('NightController', require('./night_controller'))
  .directive('night', require('./night_directive'))
  .directive('nightToggle', require('./night-toggle_directive'));

module.exports = night;