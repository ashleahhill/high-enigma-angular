

const $inject = ['NightService'];

/**
 * @name NightToggle
 * 
 */
const NightToggle = function (NightService) {
  const link = ($scope, el) => {

    el.bind('click', NightService.toggleNight);

  };

  return {
    restrict: 'E',
    replace: true,
    template: '<div class="night-toggle" data-night></div>',
    link: link
  };
};

NightToggle.$inject = $inject;

export default NightToggle;
