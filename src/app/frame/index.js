// import night from './../../night';
// import header from './site-header';


const mod = angular.module('app.frame', [
  require('./../../night').default.name,
  require('./site-header').default.name
]);

export default mod;
