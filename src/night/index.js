import service from './night_service';
import controller from './night_controller';
import nightDirective from './night_directive';
import nightToggle from './night-toggle_directive';

// @ngdoc module
// @name night
// @description
// add class if it is night

const night = angular.module('night', []);

night
  .service('NightService', service)
  .controller('NightController', controller)
  .directive('night', nightDirective)
  .directive('nightToggle', nightToggle);

export default night;
