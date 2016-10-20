/* global ENVIRONMENT */
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
    async: ['$q', function ($q) {
      const defer = $q.defer();

      resolve(defer.resolve);
      return defer.promise;
    }]
  }
});


/**
 * Using this site for github.io site as well as the front end for a hosted app.
 * Therefore, I need to rewrite the links when it's served statically like on github.io
 * @param  {[type]} $provide        [description]
 * @param  {[type]} $windowProvider [description]
 * @return {[type]}                 [description]
 */

const decorateStaticAnchors = function ($provide, $windowProvider) {
  $provide.decorator('aDirective', ['$delegate', function ($delegate) {
    const directive = $delegate[0];
    const compile = directive.compile;

    directive.compile = function (tElement, tAttrs) {
      if (tAttrs.ngHref) {
        tAttrs.ngHref = '#!' + tAttrs.ngHref;
        Array.prototype.splice.call(arguments, 1, 1, tAttrs);
      } else if (tAttrs.href) {
        tElement[0].href = tElement[0].href.replace($windowProvider.$get().location.origin, '/#!');
      }


      const link = compile.apply(this, arguments);

      return function () {
        if (typeof link === 'function') {
          link.apply(this, arguments);
        }
      };
    };

    return $delegate;
  }]);
};

export default app => {
  const $inject = [
    '$locationProvider',
    '$stateProvider',
    '$urlRouterProvider',
    '$provide',
    '$windowProvider'
  ];

    // We have to use hardcoded
    //  value for 'require' so it can be statically built
  const RouterConfig = function (
    $locationProvider,
    $stateProvider,
    $urlRouterProvider,
    $provide,
    $windowProvider
  ) {
    if (ENVIRONMENT !== 'static') {
      $locationProvider.html5Mode(true).hashPrefix('!');
    } else {
            // for github.io page

      $locationProvider.html5Mode(false)
                .hashPrefix('!');
      decorateStaticAnchors($provide, $windowProvider);
    }

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
                callback(app.register(require('./credits').name)))));

        // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise('/home');
  };

  RouterConfig.$inject = $inject;


  return RouterConfig;
};
