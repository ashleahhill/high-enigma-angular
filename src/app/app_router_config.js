const route = (entry, resolve) => ({
  name: entry,
  // name: 'app.' + entry,
  url: '/' + entry,
  // parent: 'app',
  views: {
    content: {
      template: '<' + entry + '></' + entry + '>'
    }
  },
  resolve: {
    async: ['$q', function ($q) {
      const defer = $q.defer();

      resolve(defer.resolve);
      return defer.promise;
    }]
  }
});


export default app => {
  const $inject = ['$stateProvider', '$urlRouterProvider'];

  // We have to use hardcoded value for 'require' so it can be statically built
  const RouterConfig = function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      // .state('app', {
      //   template: require('./frame/index.html')
      // })

      .state(route('home', callback =>
        require.ensure([], () =>
          callback(app.register(require('./home').name)))))

      .state(route('about', callback =>
        require.ensure([], () =>
          callback(app.register(require('./about').name)))))

      .state(route('haml', callback =>
        require.ensure([], () =>
          callback(app.register(require('./haml').name)))));

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/home');
  };

  RouterConfig.$inject = $inject;


  return RouterConfig;
};
