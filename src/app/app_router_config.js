const route = (entry, resolve) => ({
    // name: entry,
    name: 'me.' + entry,
    url: '/' + entry,
    parent: 'me',
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

      $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider
            .state({
                name: 'me',
                abstract: true,
                template: require('./frame/index.html')
            })

        .state(route('home', callback =>
            require.ensure([], () =>
                callback(app.register(require('./home').name)))))

        .state(route('resume', callback =>
            require.ensure([], () =>
                callback(app.register(require('./resume').name)))))

        .state(route('stuff', callback =>
            require.ensure([], () =>
                callback(app.register(require('./stuff').name)))))

        .state(route('credits', callback =>
            require.ensure([], () =>
                callback(app.register(require('./credits').name)))))

        // For any unmatched url, redirect to /home
        $urlRouterProvider.otherwise('/home');
    };

    RouterConfig.$inject = $inject;


    return RouterConfig;
};
