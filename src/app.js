require('./app/style/scss/screen.scss');

import routerConfig from './app/app_router_config';
import appFrame from './app/frame';

const app = angular.module('app', [
  'ui.router',
  appFrame.name
]);

app.config(routerConfig(app));

app.run(['$injector', ($injector) => {
  app.register = $injector.loadModule.bind($injector);
  return app.register;
}]);

export default app;
