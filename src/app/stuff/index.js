const stuff = angular.module('app.stuff', []);

stuff.directive('stuff', require('./stuff_directive').default);

export default stuff;
