require('./app/style/scss/screen.scss');

const app = angular.module('app', [
  'ui.router'
]);

app.config(require('./app/app_router_config')(app));

app.run(['$injector', $injector => app.register = $injector.loadModule.bind($injector)]);

export default app;
