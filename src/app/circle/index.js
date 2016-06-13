const circle = angular.module('app.circle', []);

circle.directive('circle', require('./circle_directive'));

export default circle;
