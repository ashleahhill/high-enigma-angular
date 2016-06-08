const $inject = ['NightService'];
const Night = function (NightService) {
  const link = ($scope, el) => {

    if (NightService.isNight()) {
    	el.removeClass('is-night').addClass('is-night');
    } else {
    	el.removeClass('is-night');
    }

  };

  return {
    restrict: 'A',
    link
  };
};

Night.$inject = $inject;

export default Night;
