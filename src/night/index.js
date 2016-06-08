// @ngdoc directive
// @name night
// @description 
// add class if it is night

const night = angular.module('night', []);

night
  .service('NightService', require('./night_service'))
  .directive('night', require('./night_directive'))

module.exports = night;