const $inject = ['$rootScope', 'NightService'];
const Night = function ($rootScope, NightService) {
  const link = ($scope, el) => {

    function toggleClass (val) {
      if (val) {
        el.removeClass('is-night').addClass('is-night');
      } else {
        el.removeClass('is-night');
      }

    }
 
    $rootScope.$watch('night.isNight', toggleClass);

  };

  return {
    restrict: 'A',
    link: link,
    controller: 'NightController'
  };
};

Night.$inject = $inject;

export default Night;
