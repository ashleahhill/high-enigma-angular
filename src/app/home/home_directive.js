const $inject = [];
const home = function () {
  return {
    replace: true,
    controller: () => { },
    controllerAs: 'controller',
    template: require('./home.html')
  };
};

home.$inject = $inject;

export default home;
