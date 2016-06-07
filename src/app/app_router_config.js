const route = (entry, resolve) => ({
    // name: entry,
    name: 'app.' + entry,
    url: '/' + entry,
    parent: 'app',
    views: {
        content: {
            template: '<' + entry + '></' + entry + '>'
        }
    },
    resolve: {
        async: ['$q', function($q) {
            const defer = $q.defer();

            resolve(defer.resolve);
            return defer.promise;
        }]
    }
});


export default app => {
    const $inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    // We have to use hardcoded value for 'require' so it can be statically built
    const RouterConfig = function($locationProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                template: require('./frame/index.html'),
                resolve: {
                   async: ['$q', function($q) {
                      const defer = $q.defer();

                      require.ensure([], () => defer.resolve(app.register(require('./frame/site-header').name)));
                      return defer.promise;
                  }] 
                }
            })

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
