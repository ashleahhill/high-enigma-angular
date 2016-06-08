require('./app/style/scss/screen.scss');
const frame = require('./app/frame/site-header').name;

const app = angular.module('app', [
  'ui.router',
  frame
]);
app.config(require('./app/app_router_config')(app));

app.run(['$injector', $injector => app.register = $injector.loadModule.bind($injector)]);

export default app;
