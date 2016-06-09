const $inject = [];
const stuff = function () {

  return {
  	replace: true,
    controller: () => {},
    controllerAs: 'controller',
    template: require('./stuff.html')
  };
};

stuff.$inject = $inject;

export default stuff;
