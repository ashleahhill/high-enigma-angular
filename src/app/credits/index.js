const credits = angular.module('app.credits', []);

credits.directive('credits', require('./credits_directive').default);

export default credits;
