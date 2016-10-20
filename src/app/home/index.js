import directive from './home_directive';

const home = angular.module('app.home', []);

home.directive('home', directive);

export default home;
