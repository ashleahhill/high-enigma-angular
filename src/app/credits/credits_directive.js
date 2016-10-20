const $inject = [];
const credits = function () {
  return {
    replace: true,
    controller: () => { },
    controllerAs: 'controller',
    template: '<div class="credits">' + require('./credits.md') + '</div>'
  };
};

credits.$inject = $inject;

export default credits;
