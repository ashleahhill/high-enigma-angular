const $inject = [];
const circle = function () {

  return {
  	replace: true,
    controller: () => {},
    controllerAs: 'controller',
    template: require('./circle.html')
  };
};

circle.$inject = $inject;

export default circle;
